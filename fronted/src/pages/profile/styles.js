import styled from 'styled-components'

import { Form } from '@unform/web'

export const Container = styled.div`
  width: 500px;
  height: 450px;
  margin: 0 auto;
`

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -10px;
  span {
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.primary};
    margin-top: 5px;
  }
`

export const Image = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  box-shadow: ${({ theme }) => theme.box_shadow};
  margin-top: 8px;
`

export const ImageContainer = styled.div`
  position: relative;
`

export const ButtonImage = styled.label`
  position: absolute;

  right: 5px;
  bottom: 20px;

  transition: all 0.3s;

  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.background};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.contrast};
  }

  input {
    display: none;
  }
`
export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 350px;
    height: 45px;

    text-align: center;

    > span {
      width: 100%;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 8px;
    }

    hr {
      margin: 8px 0;
      height: 2px;

      width: 90%;
      opacity: 0.6;
    }
  }
`
