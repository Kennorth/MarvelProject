import React from "react";
import CardButton from "../card-button";
import { CardWrapper, HeroDesc, HeroName, ImgWrapper, InfoWrapper } from "./styles";

interface ICardProps{
  heroName: string;
  heroDescription: string;
  heroImg: string;
}
export default function Card({heroName, heroDescription, heroImg}:ICardProps){
  return( 
  <CardWrapper>
    <InfoWrapper>
      <ImgWrapper style={{ backgroundImage: `url(${heroImg})`, backgroundSize: 'cover' }} >
      </ImgWrapper>
      <HeroName>{heroName}</HeroName>
      <HeroDesc>{heroDescription}</HeroDesc>
    </InfoWrapper>
    <CardButton hero={{nome: heroName, descricao: heroDescription, imagem: heroImg}}/>
  </CardWrapper>
  );
}