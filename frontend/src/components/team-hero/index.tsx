import React from "react";
import { HeroName, ImgWrapper, Wrapper } from "./styles";

interface ITeamHeroProps {
  hero: apiService.Character;
  onClick?: () => void;
}

export default function TeamHero({hero, onClick}:ITeamHeroProps){
  return(
    <Wrapper onClick={onClick}>
      <ImgWrapper style={{backgroundImage:`url(${hero.imagem})`, backgroundSize: 'cover'}}/>
      <HeroName>{hero.nome}</HeroName>
    </Wrapper>
  );
}