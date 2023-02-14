import requests,json 
herois_data = { "herois": [
            {
                "nome": "3-D Man",
                "descricao": "Desc",
                "imagem": "http://imagem.jpg"
            },
            {
                "nome": "Hulk",
                "descricao": "Desc",
                "imagem": "http://imagem.jpg"
            },
        ]
}

heroi = {
    "equipe": 2,
    "herois": [
    		{
                "nome": "3-D Man",
                "descricao": "Desc",
                "imagem": "http://imagem.jpg"
            },
            {
                "nome": "Hulk",
                "descricao": "Desc",
                "imagem": "http://imagem.jpg"
            },
            ]
}

vinculo = {"equipe":1,"heroi": 2}

deleta_heroi = {"nome": "3-D Man"}

deleta_equipe = {"equipe": 1}

equipe_data = {"nome": "equipe 2"}

headers = {"Content-Type": "application/json"}
#r=requests.post("http://heitorppaiva.pythonanywhere.com/equipe", data = json.dumps(equipe_data), headers = headers)
#r=requests.post("http://heitorppaiva.pythonanywhere.com/heroi", data = json.dumps(heroi), headers = headers)
#r=requests.post("http://heitorppaiva.pythonanywhere.com/add", data = json.dumps(vinculo), headers = headers)

r = requests.get("http://heitorppaiva.pythonanywhere.com/equipe")
#r = requests.get("http://heitorppaiva.pythonanywhere.com/heroi")


#r = requests.delete("http://heitorppaiva.pythonanywhere.com/equipe", data = json.dumps(deleta_equipe), headers = headers)
#r = requests.delete("http://heitorppaiva.pythonanywhere.com/heroi", data = json.dumps(deleta_heroi), headers = headers)
print(r)
print(r.text)