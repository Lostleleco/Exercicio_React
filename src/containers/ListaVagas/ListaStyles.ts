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
  margin-top: 10px;
`

export const VagaItem = styled.li`
  margin-bottom: 16px;
  padding: 10px;

  border-radius: 4px;
  background-color: #f9f9f9;

  display: grid;

  &:last-child {
    margin-bottom: 0;
  }
`
