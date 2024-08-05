import React from 'react'
import { HeroWrapper, Overlay, FormWrapper, HeroTitle } from './HeroStyles'

const HeroComponent = () => (
  <HeroWrapper>
    <Overlay />
    <FormWrapper>
      <div className="container">
        <HeroTitle>
          As melhores vagas para tecnologia, design e artes visuais.
        </HeroTitle>
      </div>
    </FormWrapper>
  </HeroWrapper>
)

export default HeroComponent
