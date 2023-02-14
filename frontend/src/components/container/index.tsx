import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../card-hero";
import { Title, UtilityButtonsWrapper, Wrapper } from "./styles";
import { Md5 } from "ts-md5";
import LoadHeroButton from "../load-heroes-button";
import TeamButton from "../teams-button";
import TeamCard from "../team-card";
import NewTeamButton from "../new-team-buttom";



export default function Container(props:React.PropsWithChildren){
  const [heroes, setHeroes] = useState([] as apiService.MarvelCharacter[]);
  const [call, setCall] = useState(0);
  const [steps, setSteps] = useState('selection');
  const [equipes, setEquipes] = useState([{id:1, name:'vingadores', heroes:[]}]);

  const publicKey = "dd42e0b583b5dd05c53a12954ba7ae1f";
  const privatKey = "988851186e1e988261280fa3836905ddf6d4b0b8";
  const time = Number(Date.now());
  const str = `${time}${privatKey}${publicKey}`;
  const hash = Md5.hashStr(str);
  const quantidade = 20;
  
  const loadHeroes = () =>{ 
    axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${time}&limit=${quantidade}&offset=${call}&apikey=${publicKey}&hash=${hash}`)
     .then((response) => {
       console.log(response.data.data.results);
      
       setHeroes(response.data.data.results)
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro : " + err);
  });}

  const loadEquipes = ()=>{
    console.log('get das equipes')
  }

  useEffect(() => {
    loadHeroes();
  }, [call]);
  
  return (
    <Wrapper>
      {steps === 'selection' && 
      <>
        <Title>Selecione seus Heroes</Title>
        {heroes.map((item) => 
        <Card
          key={`hero-${item.id}`} 
          heroName={item.name} 
          heroDescription={item.description} 
          heroImg={`${item.thumbnail.path}.${item.thumbnail.extension}`}/>
        )}
        <UtilityButtonsWrapper>
          <LoadHeroButton onClick={() => setCall(call + 21)}/>
          <TeamButton  onClick={() => setSteps('equipes')}/>
        </UtilityButtonsWrapper>
      </>}
      {steps === 'equipes' && <>
      <Title>Monte suas Equipes</Title>
      {equipes.map((item) => <TeamCard team={item}/>)}
      <NewTeamButton/>
      </>}
    </Wrapper>
    );
}