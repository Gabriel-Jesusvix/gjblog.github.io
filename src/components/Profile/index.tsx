
import githubIcon from '../../assets/githubIcon.svg';
import companyIcon from '../../assets/iconCompany.svg';
import usersIcon from '../../assets/iconUsers.svg';
import { useGitHub } from '../../contexts/GithubContenxt';
import { Container, Content, ContentInfo, ContentLinks } from "./styles";


export function Profile() {
  const { user } = useGitHub()
  
  
  return (
    <Container>
      <Content>
        <img src={user?.avatar_url} alt="" />
        <ContentInfo>
          <h1>{user?.name}</h1>
          <span >
            {user?.bio}
          </span>
          <ContentLinks>
            <div className='links'>
              <img src={githubIcon} alt="" />
              <span>{user?.login}</span>
            </div>
            <div className='links'>
              <img src={companyIcon} alt="" />
                <a 
                  href="https://www.gjconsultoriati.com.br"
                  target='_blank'
                >
               GJ Consultoria TI
              </a>
            </div>
            <div className='links'>
            <img src={usersIcon} alt="" />
              <span> {user?.followers} seguidores</span>
            </div>

          </ContentLinks>
        </ContentInfo>

      </Content>
    </Container>
  )
}