import { FaHome } from 'react-icons/fa'

import { FaHandshakeSimple } from 'react-icons/fa6'
import { ImExit } from 'react-icons/im'

import { useNavigate } from 'react-router-dom'

import { useAuth } from '../../../hooks/auth'

import { Container, Content, List, ListItem, ExitButton } from './styles'

export const Aside = () => {
  const navigate = useNavigate()

  const { signOut } = useAuth()

  return (
    <Container>
      <Content>
        <List>
          <ListItem onClick={() => navigate('/home')}>
            <FaHome />
            <span>principal</span>
          </ListItem>

          <ListItem onClick={() => navigate('/addsale')}>
            <FaHandshakeSimple />
            <span>adicionar venda</span>
          </ListItem>
        </List>

        <ExitButton onClick={signOut}>
          <span>
            <ImExit />
            Sair
          </span>
        </ExitButton>
      </Content>
    </Container>
  )
}
