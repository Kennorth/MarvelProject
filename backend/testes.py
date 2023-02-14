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
            "nome": "3-D Man",
            "descricao": "Desc",
            "imagem": "http://imagem.jpg"
}

vinculo = {"equipe":0,"heroi": "3-D Man"}

deleta_heroi = {"nome": "Hulk"}

deleta_equipe = {"equipe": 1}

equipe_data = {"nome": "Vingadores"}
search = {"nome": "3-D Man"}
team = {"equipe": 1}
headers = {"Content-Type": "application/json"}
#r=requests.post("http://heitorppaiva.pythonanywhere.com/equipe", data = json.dumps(equipe_data), headers = headers)
#r=requests.post("http://heitorppaiva.pythonanywhere.com/heroi", data = json.dumps(heroi), headers = headers)
#r=requests.post("http://heitorppaiva.pythonanywhere.com/add", data = json.dumps(vinculo), headers = headers)

#r = requests.get("http://heitorppaiva.pythonanywhere.com/equipe")
#r = requests.get("http://heitorppaiva.pythonanywhere.com/heroi")
#r = requests.get("http://heitorppaiva.pythonanywhere.com/search", data= json.dumps(search),headers = headers)
r = requests.get("http://heitorppaiva.pythonanywhere.com/team", data= json.dumps(team),headers = headers)



#r = requests.delete("http://heitorppaiva.pythonanywhere.com/equipe", data = json.dumps(deleta_equipe), headers = headers)
#r = requests.delete("http://heitorppaiva.pythonanywhere.com/heroi", data = json.dumps(deleta_heroi), headers = headers)


#r = requests.post("http://localhost:5000/add", data = json.dumps(vinculo), headers = headers)
#r = requests.get("http://localhost:5000/team", data = json.dumps(team), headers = headers)
#r = requests.get("http://localhost:5000/equipe")
print(r)
print(r.text)


