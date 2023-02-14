
declare namespace apiService {
  type Character = {
    id: number;
    nome: string;
    descricao: string;
    imagem: string;
  }
  type Response = Character[]

  type ArrayItemType={
    avaliable:number;
    collectionURI: string;
    items:{name:string,resourceURI:string}[];
    returned:number;
  }
  
  type UrlType={
    type:string;
    url:string;
  }
  type MarvelCharacter = {
    comics: ArrayItemType;
    description:string;
    events:ArrayItemType;
    id:number;
    modified:string;
    name:string;
    resouceURI:string;
    series:ArrayItemType;
    stories:ArrayItemType;
    thumbnail:{extension:string, path:string};
    urls:{url:UrlType,length:number};
    }
}