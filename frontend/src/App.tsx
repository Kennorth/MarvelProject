import Container from './components/container';

export type ContextType = {
  heroes: {selected:boolean, data:apiService.MarvelCharacter}[];
  offset: number;
}

function App() {
  return (
      <Container/>
  );
}
export default App;
