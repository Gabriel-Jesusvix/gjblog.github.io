import styled from "styled-components";

export const Container = styled.form`
 margin-top: 72px;
 width: 100%;
 align-items: center;
 max-width: 864px;

 input {
  width: 100%;
  background: ${(props) => props.theme.baseInput};
  border: 0;
  padding: 16px 12px;
  border-radius: 6px;
  color: ${(props) => props.theme.baseTitle};
  border: 1px solid ${(props) => props.theme.baseBorder};
 }
 ::-webkit-input-placeholder  {
   color: ${(props) => props.theme.baseLabel};
  }
`

export const Header = styled.div`
 width: 100%;
 justify-content: space-between;
 display: flex;
 margin-bottom: 12px;

 strong {
   font-size: 18px;
   color: ${(props) => props.theme.baseSubTitle}
 }
 span {
   font-size: 14px;
   color: ${(props) => props.theme.baseSubTitle}
 }
`
