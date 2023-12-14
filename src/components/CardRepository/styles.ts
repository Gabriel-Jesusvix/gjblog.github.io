import styled from "styled-components";

export const Container = styled.div`
  width: 416px;
  height: 260px;
  background-color: ${(props) => props.theme.basePost};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.20);
  padding: 32px 32px 0;
  align-items: center;
  justify-content: center;

  p{
    width: 352px;
    margin-top: 20px;
    color:  ${(props) => props.theme.baseText};
    font-size: 16px;
    /* margin: 0; */
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    height: 112px;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  strong {
    width: 283px;
    font-size: 20px;
    color:  ${(props) => props.theme.baseTitle};
  }
  span {
    color:  ${(props) => props.theme.baseSpan};
    font-size: 14px;
  }
  
`;