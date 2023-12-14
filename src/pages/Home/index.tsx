import coverImg from '../../assets/Cover.png';
import { CardRepository } from '../../components/CardRepository';
import { Profile } from '../../components/Profile';
import { SearchForm } from '../../components/SearchForm';
import { Container, ContainerPost, ContentHeader, ContentPost } from "./styles";

export function Home() {
  
  return (
    <Container>
      <ContentHeader>
        <header>
          <img src={coverImg} alt="" />
        </header>
        <Profile />
        <SearchForm />
      </ContentHeader>
      <ContainerPost>
      <ContentPost>
          <CardRepository />
          <CardRepository />
      </ContentPost>
      </ContainerPost>
    </Container>
  )
}