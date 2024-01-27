import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 700px;

  img {
    width: 250px;
    margin-left: 20px;
  }
  h1 {
    color: ${({ theme }) => theme.primary};
  }

  form {
    display: flex;
    flex-direction: column;
    width: 400px;
    text-align: center;
    margin-top: 100px h1 {
      margin-bottom: 20px;
      color: ${({ theme }) => theme.secondary};
    }

    > button {
      margin-top: 24px;
    }

    > a {
      color: ${({ theme }) => theme.primary};
      display: block;
      margin-top: 24px;
      text-align: right;

      transition: all 0.3s;

      &:hover {
        transform: scale(1.02);
      }
    }
  }

  > a {
    color: ${({ theme }) => theme.primary};
    display: block;
    margin-top: 24px;

    transition: all 0.3s;

    display: flex;
    align-items: center;

    svg {
      margin-left: 16px;
    }

    &:hover {
      transform: scale(1.02);
    }
  }
`

export const Background = styled.div`
  flex: 1;
  background-size: cover;
`
