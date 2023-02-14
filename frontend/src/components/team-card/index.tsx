import React, { useState } from "react";
import TeamHero from "../team-hero";
import { AvaliablesWrapper, SelectedWrapper, TeamName, TeamWrapper, Title, Wrapper } from "./styles";

interface ITeamProps {
  team: {id:number, name: string, heroes:apiService.Character[]};
}
export default function TeamCard({team}:ITeamProps){
  const [teamHeroes, setTeamHeroes] = useState([] as apiService.Character[])
  const getSelectedHeroes = () =>{
    console.log('requisicao');
    return [{id:1, nome:'exemplo hero', descricao: 'ex', imagem: 'https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg'}];
  }
  const settTeamHeroes = (id:number) => {
    console.log('requisicao');

    teamHeroes.push({id:1, nome:'exemplo hero', descricao: 'ex', imagem: 'https://www.zooplus.pt/magazine/wp-content/uploads/2021/03/kitten-sitzt-boden-768x512-1.jpeg'});
  }
  const deleteHero = (id:number) => {
    console.log('requisicao');
  }
  return (
    <Wrapper>
      <TeamName>{team.name}</TeamName>
      <TeamWrapper>
        <Title>Disponiveis</Title>
        <AvaliablesWrapper>
          {getSelectedHeroes().map((item) => <TeamHero key={`no-time-hero-${item.id}`} hero={item} onClick={() => settTeamHeroes(item.id)} />)}
        </AvaliablesWrapper>
      </TeamWrapper>
      <TeamWrapper>
        <Title>Selecionados</Title>
        <SelectedWrapper>
        {teamHeroes.map((item) => <TeamHero key={`time-hero-${item.id}`} hero={item} onClick={() => deleteHero(item.id)} />)}
        </SelectedWrapper>
      </TeamWrapper>
    </Wrapper>
  );
}