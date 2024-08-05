import styled from 'styled-components'

export const HeroWrapper = styled.div`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--cor-principal);
  content: '';
  opacity: 0.7;
`

export const FormWrapper = styled.form`
  position: relative;
  color: #dee8ed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const HeroTitle = styled.h2`
  font-family: Gloock, serif;
  font-size: 48px;
  color: #d34017;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
