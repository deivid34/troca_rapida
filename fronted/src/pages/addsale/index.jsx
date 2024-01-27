import { useCallback, useState } from 'react'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Box, Icon, IconButton, Menu, MenuItem } from '@mui/material'

import './styles.css'

import { BaseLayout } from '../../shared/layouts/BaseLayout/BaseLayout'

import { FormToolbar } from '../../shared/components'

import { Image } from './styles'
import { useNavigate } from 'react-router-dom'

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein }
}

export const Addsale = () => {
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()

  const [addsale, setPlaylist] = useState({})

  const [openModal, setOpenModal] = useState(false)

  const handleCloseModal = () => setOpenModal(false)

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const rows = [
    // Adicione mais linhas conforme necessário
  ]
  const handleGoBack = useCallback(() => {
    navigate('/home')
  }, [navigate])

  const handleOpenModal = useCallback((data) => {
    setOpenModal(true)
    setPlaylist(data)
  }, [])

  return (
    <BaseLayout
      toolbar={
        <FormToolbar
          showNew
          showSalve={false}
          handleNew={() => navigate('/addsale/details/new')}
          handleBack={handleGoBack}
        />
      }
    >
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left" width="30px">
                Ações
              </TableCell>
              <TableCell align="center">Foto</TableCell>
              <TableCell align="center">preço</TableCell>
              <TableCell align="left">Título</TableCell>
              <TableCell align="left">descrição</TableCell>
              <TableCell align="center">endereço</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left" width="30px">
                  <Box></Box>
                </TableCell>

                <TableCell align="center">
                  <Image
                    src="https://img.freepik.com/vetores-gratis/guitarra-com-desenho-de-simbolo-de-melodia-de-musica_1308-99174.jpg?w=900&t=st=1700565964~exp=1700566564~hmac=5d1d6a023e95d51a475841baf8e5e0fe5b7165aaad4f58930f01223cd7d5bc8a"
                    alt="Nome"
                  />
                </TableCell>
                <TableCell align="center">0,1</TableCell>
                <TableCell align="left">IAUHSiUAHSiuAHSIuhiuAH</TableCell>
                <TableCell align="left">tatu</TableCell>
                <TableCell align="center">acre, moçambique</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </BaseLayout>
  )
}
