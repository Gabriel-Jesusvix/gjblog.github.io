import styled from "styled-components";

export const Container = styled.div`
  width: 864px;
  height: 212px;
  background-color: ${(props) => props.theme.baseProfile};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
  margin-top: -80px;
  display: flex;
  padding: 40px 32px 0;
`
export const Content = styled.div`
  flex-direction: row;
  gap: 32px;
  display: flex;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`
export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    color: ${(props) => props.theme.baseTitle};
    margin-bottom: 8px;
  }
  span {
    max-width: 600px;
    color: ${(props) => props.theme.baseTitle};
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
 }
`;

export const ContentLinks = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  
 .links { 
  display: flex;
  gap: 6px;
  
  a {
    text-decoration: none;
    color: ${(props) => props.theme.baseSubTitle};
  }
  span {
    margin-right: 10px;
    color: ${(props) => props.theme.baseSubTitle};
  }

  img {
    width: 18px;
    height: 18px;
  }
  
 }
 
  
`;