import httpx
import random
import string
import sys
import json
from jose import jwt

BASE_URL = "http://localhost:8001/api/v1"

def generate_random_email():
    letters = string.ascii_lowercase
    return ''.join(random.choice(letters) for i in range(8)) + "@skypunt.io"

def test_flight_check():
    print("🚀 SkyPunt API: Automated Flight Check Initiating...")
    
    test_email = generate_random_email()
    test_password = "securepilot123"
    
    # 1. Register a new Pilot
    print(f"📡 Testing Pilot Registration for {test_email}...")
    register_data = {
        "email": test_email,
        "password": test_password,
        "full_name": "Test Pilot"
    }
    
    with httpx.Client(base_url=BASE_URL) as client:
        # Register
        r_resp = client.post("/auth/register", json=register_data)
        if r_resp.status_code == 200:
            print("✅ Registration: SUCCESS")
        else:
            print(f"❌ Registration: FAILED ({r_resp.status_code})")
            print(r_resp.text)
            sys.exit(1)
            
        # 2. Test Double-Registration Shield
        print("🛡️ Testing Double-Registration Shield...")
        dr_resp = client.post("/auth/register", json=register_data)
        if dr_resp.status_code == 400:
            print("✅ Shield: ACTIVE (Blocked duplicate email)")
        else:
            print(f"❌ Shield: FAILED (Expected 400, got {dr_resp.status_code})")
            sys.exit(1)
            
        # 3. Login and Get Token
        print("🔑 Testing Pilot Login...")
        login_data = {
            "username": test_email,
            "password": test_password
        }
        l_resp = client.post("/auth/login/access-token", data=login_data)
        if l_resp.status_code == 200:
            token = l_resp.json().get("access_token")
            print("✅ Login: SUCCESS")
        else:
            print(f"❌ Login: FAILED ({l_resp.status_code})")
            sys.exit(1)
            
        # 4. JWT Hardening Audit
        print("🕵️ Auditing JWT Hardening Patches...")
        # We don't verify full signature here, just audit the claims
        payload = jwt.get_unverified_claims(token)
        sub = payload.get("sub")
        
        if ":" in sub:
            user_id, version = sub.split(":")
            print(f"✅ JWT Payload: BULLETPROOF (Sub: {sub})")
            print(f"   ∟ Pilot ID: {user_id}")
            print(f"   ∟ Token Version: {version}")
        else:
            print(f"❌ JWT Payload: VULNERABLE (Sub missing version: {sub})")
            sys.exit(1)
            
    print("\n🏁 FLIGHT CHECK: ALL SYSTEMS GO. HANGAR READY FOR PHASE 2.")

if __name__ == "__main__":
    test_flight_check()
