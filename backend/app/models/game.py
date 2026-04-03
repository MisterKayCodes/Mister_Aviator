from sqlalchemy import Column, Integer, String, Boolean, Numeric, DateTime, ForeignKey
from sqlalchemy.sql import func
from sqlalchemy.orm import relationship
from app.data.base import Base

class Game(Base):
    __tablename__ = "games"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)  # e.g., "SkyPunt Classic"
    is_active = Column(Boolean, default=True)
    
    rounds = relationship("GameRound", back_populates="game")

class GameRound(Base):
    __tablename__ = "game_rounds"

    id = Column(Integer, primary_key=True, index=True)
    game_id = Column(Integer, ForeignKey("games.id"))
    
    start_time = Column(DateTime(timezone=True), server_default=func.now())
    end_time = Column(DateTime(timezone=True), nullable=True)
    
    # Manipulation Fields
    crash_multiplier = Column(Numeric(20, 8), nullable=False)
    scheduled_multiplier = Column(Numeric(20, 8), nullable=True) # Admin override
    is_manual = Column(Boolean, default=False)
    
    status = Column(String, default="open") # open, flying, crashed
    
    game = relationship("Game", back_populates="rounds")
    bets = relationship("Bet", back_populates="round")

class Bet(Base):
    __tablename__ = "bets"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"))
    game_round_id = Column(Integer, ForeignKey("game_rounds.id"))
    
    amount = Column(Numeric(20, 8), nullable=False)
    multiplier_cashed_out = Column(Numeric(20, 8), nullable=True)
    profit = Column(Numeric(20, 8), default=0.0)
    
    status = Column(String, default="active") # active, cashed_out, lost
    created_at = Column(DateTime(timezone=True), server_default=func.now())
    
    round = relationship("GameRound", back_populates="bets")
