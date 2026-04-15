import pytest
import requests
import os

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://monalisa-aluminium.preview.emergentagent.com').rstrip('/')

class TestContactAPI:
    """Contact form API tests"""

    def test_api_root(self):
        r = requests.get(f"{BASE_URL}/api/")
        assert r.status_code == 200
        assert "message" in r.json()

    def test_post_contact_full(self):
        payload = {
            "name": "TEST_User Full",
            "email": "test_full@test.com",
            "phone": "9876543210",
            "service": "Sliding Windows",
            "message": "I need a quote for sliding windows",
            "location": "Mumbai"
        }
        r = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["phone"] == payload["phone"]
        assert data["service"] == payload["service"]
        assert data["message"] == payload["message"]
        assert data["location"] == payload["location"]
        assert "id" in data
        assert "created_at" in data

    def test_post_contact_minimal(self):
        payload = {"name": "TEST_Min User", "email": "min@test.com", "message": "Minimal test"}
        r = requests.post(f"{BASE_URL}/api/contact", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]

    def test_post_contact_missing_required(self):
        r = requests.post(f"{BASE_URL}/api/contact", json={"name": "No Email"})
        assert r.status_code == 422

    def test_get_contacts(self):
        r = requests.get(f"{BASE_URL}/api/contact")
        assert r.status_code == 200
        data = r.json()
        assert isinstance(data, list)
        # Verify our test submission is in there
        names = [c["name"] for c in data]
        assert any("TEST_" in n for n in names)

    def test_get_contacts_no_mongo_id(self):
        r = requests.get(f"{BASE_URL}/api/contact")
        assert r.status_code == 200
        for contact in r.json():
            assert "_id" not in contact
