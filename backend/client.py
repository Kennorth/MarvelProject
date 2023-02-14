import requests
import pendulum
import hashlib
import json
import os
from dotenv import load_dotenv


load_dotenv()

class MarvelClient:
    public_key = os.getenv("marvel_public_key")
    private_key = os.getenv("marvel_private_key")
    base_url = "https://gateway.marvel.com"

    def hash_str(self, ts):
        hash_str = f"{ts}{self.private_key}{self.public_key}".encode()
        hashed = hashlib.md5(hash_str).hexdigest()
        return hashed

    def get_characters(self,qtd,chamada):
        ts = pendulum.now().timestamp()
        hash_str = self.hash_str(ts)
        path = "/v1/public/characters"
        quantidade = qtd
        call = (chamada*quantidade)


        url = f"{self.base_url}{path}?ts={ts}&limit={quantidade}&offset={call}&apikey={self.public_key}&hash={hash_str}"
        r = requests.get(url)
        if r.status_code == 200:
            response = json.loads(r.text)
            data = response["data"]
            data = data["results"]
            return data
       
