// src/components/ListaVagas/index.tsx
import React, { useState } from 'react'
import FormVagas from '../../components/FormVagas' // Corrigido
import Vaga from '../../components/Vaga' // Corrigido
import {
  ListaVagasContainer,
  VagasList,
  VagaItem
} from '..//..//containers/ListaVagas/ListaStyles'

type VagaProps = {
  id: number
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const vagas: VagaProps[] = [
  {
    id: 1,
    titulo: 'Desenvolvedor front-end',
    localizacao: 'remoto',
    nivel: 'junior',
    modalidade: 'clt',
    salarioMin: 3000,
    salarioMax: 4500,
    requisitos: ['HTML', 'CSS', 'JavaScript', 'jQuery']
  }
  // Outras vagas omitidas para brevidade
]

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('')

  const vagasFiltradas = vagas.filter((vaga) =>
    vaga.titulo.toLocaleLowerCase().includes(filtro.toLocaleLowerCase())
  )

  return (
    <ListaVagasContainer>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <VagasList>
        {vagasFiltradas.map((vaga) => (
          <VagaItem key={vaga.id}>
            <Vaga
              titulo={vaga.titulo}
              localizacao={vaga.localizacao}
              nivel={vaga.nivel}
              modalidade={vaga.modalidade}
              salarioMin={vaga.salarioMin}
              salarioMax={vaga.salarioMax}
              requisitos={vaga.requisitos}
            />
          </VagaItem>
        ))}
      </VagasList>
    </ListaVagasContainer>
  )
}

export default ListaVagas
