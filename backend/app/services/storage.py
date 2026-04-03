import os
import shutil
from pathlib import Path
from typing import BinaryIO
from app.core.config import settings

class StorageService:
    """
    A service that simulates AWS S3 behavior using the local filesystem.
    This allows us to write 'Cloud-Ready' code from day one.
    """
    def __init__(self, base_dir: str = settings.UPLOAD_DIRECTORY):
        self.base_dir = Path(base_dir)
        self.base_dir.mkdir(parents=True, exist_ok=True)

    def upload_file(self, file_object: BinaryIO, filename: str, folder: str = "kyc") -> str:
        """
        Mimics s3.upload_fileobj. Saves a file to the specified folder.
        Returns the 'simulated' S3 path.
        """
        target_dir = self.base_dir / folder
        target_dir.mkdir(parents=True, exist_ok=True)
        
        file_path = target_dir / filename
        
        with file_path.open("wb") as buffer:
            shutil.copyfileobj(file_object, buffer)
        
        # Return a simulated S3 URI format
        return f"s3://skypunt-bucket/{folder}/{filename}"

    def get_presigned_url(self, simulated_s3_path: str) -> str:
        """
        Mimics s3.generate_presigned_url. In local dev, returns a direct link.
        """
        if not simulated_s3_path.startswith("s3://"):
            return simulated_s3_path
            
        relative_path = simulated_s3_path.replace("s3://skypunt-bucket/", "")
        return f"/api/v1/storage/{relative_path}"

    def delete_file(self, simulated_s3_path: str) -> bool:
        """
        Mimics s3.delete_object.
        """
        relative_path = simulated_s3_path.replace("s3://skypunt-bucket/", "")
        file_path = self.base_dir / relative_path
        
        if file_path.exists():
            file_path.unlink()
            return True
        return False

# Dependency for FastAPI
storage = StorageService()
