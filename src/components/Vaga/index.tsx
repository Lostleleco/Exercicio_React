import React from 'react'
import {
  Vaga as VagaStyled,
  VagaTitulo as VagaTituloStyled,
  VagaLink as VagaLinkStyled
} from './Nvaga'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <VagaStyled>
    <VagaTituloStyled>{props.titulo}</VagaTituloStyled>
    <ul>
      <li>Localização: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratação: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VagaLinkStyled href="#">Ver detalhes e candidatar-se</VagaLinkStyled>
  </VagaStyled>
)

export default Vaga
