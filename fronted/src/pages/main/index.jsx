import React from 'react'
import { Container } from '@mui/material'
import { List } from '../../shared/components/list' // Importe corretamente o componente List

export const Main = () => {
  return (
    <Container>
      <List /> {/* Renderize o componente List dentro do Container */}
    </Container>
  )
}
