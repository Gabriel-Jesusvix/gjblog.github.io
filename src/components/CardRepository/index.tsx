
import { useGitHub } from "../../contexts/GithubContenxt";
import { Container, Header } from "./styles";

export function CardRepository() {
  const { issues } = useGitHub()
  return (
    <>
      {
        issues.map((issue) => (
          <Container>
            <Header>
              <strong>{issue.title}</strong>
              <span>Há 1 dia</span>
            </Header>

            <p>{issue.body}</p>
          </Container>
        ))
      }
    </>

  )
}