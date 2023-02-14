import React from "react";
import { Button, TitleButton } from "./styles";

interface IButtonTeamsProps {
  onClick?: () => void;
}
export default function TeamButton({onClick}:IButtonTeamsProps){
  return (
    <Button>
      <TitleButton onClick={onClick}>Monte Sua Equipe</TitleButton>
    </Button>
  );
}