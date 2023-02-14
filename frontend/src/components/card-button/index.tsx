import { AxiosRequestConfig } from "axios";
import React, { useState } from "react";
import api from "../../services/api";
import { Button } from "./styles";

type HeroTYpe = {
  nome: string;
  descricao: string;
  imagem: string;
}
interface IButtonProps{
  hero: HeroTYpe;
}
export default function CardButton({hero, ...props}:IButtonProps){
  const [selected, setSelected] = useState(false);
  const [heroId, setHeroId] = useState(0);
  
  const insertHero = (hero: string) => {
    api.post("localhost:5000/heroi", hero);
  }

  const deleteHero = (heroid:any ) => {
    //api.delete("/heroi", heroid);
  }

  const handleClick = () => {
    //!selected ? insertHero(JSON.stringify(hero)): deleteHero(JSON.stringify({nome: hero.nome}));
    setSelected(!selected);
  }
  return(
      <Button onClick={() => handleClick()} style={{backgroundColor: selected ? '#4caf50' : '#abb8c3'}}>{selected? 'Heroe Selecionado!' : 'Selecione o Heroe'}</Button>
  );
}