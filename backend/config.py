from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import Optional
import os

class Settings(BaseSettings):
    PROJECT_NAME: str = "SkyPunt"
    API_V1_STR: str = "/api/v1"
    SECRET_KEY: str = "yoursecretkeyhere"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 8  # 8 days
    MIN_TOKEN_VERSION: int = 1
    
    DB_USER: str = "postgres"
    DB_PASSWORD: str = "password"
    DB_NAME: str = "skypunt"
    DB_HOST: str = "localhost"
    DB_PORT: str = "5432"
    
    UPLOAD_DIRECTORY: str = "./uploads"
    MOCK_S3: bool = True

    @property
    def ASYNC_DATABASE_URL(self) -> str:
        return f"postgresql+asyncpg://{self.DB_USER}:{self.DB_PASSWORD}@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}"

    @property
    def SYNC_DATABASE_URL(self) -> str:
        return f"postgresql://{self.DB_USER}:{self.DB_PASSWORD}@{self.DB_HOST}:{self.DB_PORT}/{self.DB_NAME}"

    model_config = SettingsConfigDict(env_file=".env", case_sensitive=True)

settings = Settings()
