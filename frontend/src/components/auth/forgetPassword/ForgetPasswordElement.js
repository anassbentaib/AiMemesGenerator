import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 70vh;

`;

export const FormContent = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  max-width: 700px;
  height: 40vh;
  width: 100%;
`;

export const H2 = styled.h2`
  text-align: center;
  font-size: 15px;
  margin-bottom: 3rem;
`;

export const Form = styled.form`

align-items: center;
justify-content: center;
`; 

export const FormWrapper = styled.div``;

export const InputWrapper = styled.div`
  margin-bottom: 15px;
  label{
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  input{
    width: 90%;
    margin-bottom: 0.7rem;
    padding: 15px 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

export const Button = styled.button`
color: #fff;
padding: 10px 30px;
font-size: 14px;
border-radius: 4px;
cursor: pointer;
outline: none;
border : 0;
  background-color: #157ae1;

@media (max-width: 768px) {
  flex-basis: 100%;
}
`;

export const FormBtn = styled.div`
display: flex;
flex-wrap: wrap;
gap: 0.7rem;
`
export const Button1=  styled(Link)`
color: #000;
text-decoration: none;
padding: 10px 30px;
font-size: 14px;
  border-radius: 4px;
  outline: none;
  border : 0;
  cursor: pointer;
    background-color: #ccc;

  @media (max-width: 768px) {
    flex-basis: 100%;
  }
`