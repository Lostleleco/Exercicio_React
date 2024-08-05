import styled from 'styled-components'

export const FormWrapper = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: var(--cor-secundaria);
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const Campo = styled.input`
  background-color: #fff;
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 16px;
  font-size: 18px;
  color: var(--cor-principal);
  margin-left: 8px;
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 5px;
    margin: auto;
    justify-content: space-between;
    display: flex;
  }
`

export const BtnPesquisar = styled.button`
  padding: 0 16px;
  color: var(--cor-secundaria);
  margin-left: 5px;
  background-color: var(--cor-principal);
  outline-color: var(--cor-principal);
  @media (max-width: 768px) {
    font-size: 10px;
  }
`
