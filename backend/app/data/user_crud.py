from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.user import User
from app.schemas.user import UserCreate
from app.core.security import get_password_hash

async def get_user_by_email(db: AsyncSession, email: str) -> User:
    result = await db.execute(select(User).filter(User.email == email))
    return result.scalars().first()

async def get_user_for_update(db: AsyncSession, user_id: int) -> User:
    """
    Locks the user row for the duration of the transaction.
    Essential for the 'Double-Click Shield'.
    """
    result = await db.execute(
        select(User).filter(User.id == user_id).with_for_update()
    )
    return result.scalars().first()

async def create_user(db: AsyncSession, obj_in: UserCreate) -> User:
    db_user = User(
        email=obj_in.email,
        hashed_password=get_password_hash(obj_in.password),
        full_name=obj_in.full_name,
        is_admin=obj_in.is_admin
    )
    db.add(db_user)
    await db.commit()
    await db.refresh(db_user)
    return db_user
