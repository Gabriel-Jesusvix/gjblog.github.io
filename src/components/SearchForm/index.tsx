
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from "zod";
import { useGitHub } from "../../contexts/GithubContenxt";
import { Container, Header } from "./styles";

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof searchFormSchema>;

export function SearchForm() {
  const { fetchIssues } = useGitHub()
  const {
    register,
    handleSubmit,
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  });
  

  async function loadIssuesGithub(data: SearchFormInputs) {
    if(data.query === '') {
      alert('Por favor digite algum termo')
    }
    await fetchIssues(data.query)
    
  }
  

  return (
    <Container onSubmit={handleSubmit(loadIssuesGithub)}>
      <Header>
        <strong>Publicações</strong>
        <span>6 publicações</span>
      </Header>
      <input type="text" placeholder='Buscar conteúdo' {...register('query')}/>
    </Container>
  )
}