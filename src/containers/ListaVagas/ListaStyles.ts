import styled from 'styled-components'

export const ListaVagasContainer = styled.div`
  padding: 20px;
  box-sizing: border-box;
`

export const VagasList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const VagaItem = styled.li`
  margin-bottom: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: grid;

  &:last-child {
    margin-bottom: 0;
  }
`
