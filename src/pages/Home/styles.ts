import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto 0;

`
export const ContentHeader = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    
  }


`
export const ContainerPost = styled.div`
 display: flex;
 justify-content: center;
 margin-top: 48px;
 width: 100%;

`
export const ContentPost = styled.div`
  display: grid;
  max-width: 864px;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  gap: 32px; 
`
