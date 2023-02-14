import React from "react";
import { Button, TitleButton } from "./styles";

interface IButtonProps{
  onClick?: () => void;
}
export default function LoadHeroButton({onClick}:IButtonProps){
  return (
    <Button onClick={onClick}>
      <TitleButton>Adicionar Heroes Selecionados e Selecionar Mais Heroes</TitleButton>
    </Button>
  );
}