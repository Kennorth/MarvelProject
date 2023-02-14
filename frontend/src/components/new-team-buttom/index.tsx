import React, { useState } from "react";
import { Button, ButtonSubmit, Input, TitleButton } from "./styles";

export default function NewTeamButton(){
  const [inputVisible, setInputVisible] = useState(false);
  const [value, setValue] = useState('');
  
  const handleSubmit = () => {
    setInputVisible(false);
    console.log(value)
  }
  return(
    <Button>
      {!inputVisible && <TitleButton onClick={() => setInputVisible(true)}>
        Criar Novo Time
      </TitleButton>}
      {inputVisible && <form onSubmit={() => handleSubmit()} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Input type={'text'} value={value} onChange={(e) => setValue(e.target.value)}/>
          <ButtonSubmit type={'submit'} value={'criar'}/>
        </form>}
    </Button>
  );
}