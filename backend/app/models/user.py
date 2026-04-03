from sqlalchemy import Column, Integer, String, Boolean, Numeric, DateTime
from sqlalchemy.sql import func
from app.data.base import Base

class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String, unique=True, index=True, nullable=False)
    hashed_password = Column(String, nullable=False)
    full_name = Column(String, index=True)
    
    # Aviation Theme: Pilot Stats
    balance = Column(Numeric(20, 8), default=0.0)
    kyc_status = Column(String, default="pending")  # pending, approved, rejected
    kyc_document_url = Column(String, nullable=True)
    
    is_active = Column(Boolean, default=True)
    is_admin = Column(Boolean, default=False)
    
    # Instant Ban Shield
    token_version = Column(Integer, default=1)
    
    total_deposited = Column(Numeric(20, 8), default=0.0)
    total_withdrawn = Column(Numeric(20, 8), default=0.0)
    
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    updated_at = Column(DateTime(timezone=True), onupdate=func.now())
