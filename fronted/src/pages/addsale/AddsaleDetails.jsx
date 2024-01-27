import React, { useState, useRef, useCallback } from 'react'
import { Appbar } from '../../shared/components/appbar'
import ImageGallery from 'react-image-gallery'
import { useAuth } from '../../shared/hooks/auth'

import {
  createAddsale,
  uploadImageUrl,
  updateUserData,
} from '../../api/troca-rapida-api'
import { environment } from '../../shared/environments'
import {
  Container,
  FormContainer,
  FormTitle,
  Form,
  FormLabel,
  FormInput,
  FormTextArea,
  FormButton,
  CustomGallery,
} from './styles'

export const AddsaleDetails = () => {
  const [formData, setFormData] = useState({
    price: '',
    title: '',
    description: '',
    address: '',
    image: null,
  })

  const { user, updateUser } = useAuth()

  const [picture, setPicture] = useState(() => {
    const appData = JSON.parse(localStorage.getItem(environment.APP_NAME))

    if (appData) {
      return appData.user.image
    }

    return ''
  })

  const fileInputRef = React.createRef()

  const handleButtonClick = () => {
    fileInputRef.current.click()
  }
  const handleUploadImageUrl = useCallback(
    async (event) => {
      try {
        const formData = new FormData()
        formData.append('image', event.target.files[0])

        const { data } = await uploadImageUrl(formData, async () => {
          // Lógica para obter o token atual
          // Por exemplo, você pode usar uma função que retorna o token atual do contexto de autenticação ou armazenamento local.
          // Certifique-se de implementar essa função conforme a lógica de autenticação do seu aplicativo.
          const token =
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImRlaXZpZCBtZWxlZ2EiLCJpYXQiOjE3MDYwNTc1MTMsImV4cCI6MTcwNjE0MzkxM30.58tl5AwO1FMulA14fAesuLLlkEkpFfsy1ZCBrGGxmUM'
          return token
        })

        console.log('Imagem enviada com sucesso:', data)

        updateUser(data)
        setPicture(data.image)
        setFormData((prevData) => ({
          ...prevData,
          image: data.image, // Atualiza o estado com a URL da imagem
        }))
      } catch (error) {
        console.error('Erro ao fazer upload da imagem:', error.message)
        // Adicione tratamento de erro ou exibição de mensagem ao usuário, se necessário
      }
    },
    [updateUser],
  )

  const handleCreateSale = async () => {
    try {
      const result = await createAddsale({
        price: formData.price,
        title: formData.title,
        description: formData.description,
        address: formData.address,
        image: formData.image,
        // Adicione outras propriedades conforme necessário
      })
      console.log('Addsale criado:', result)
      // Adicione lógica para lidar com o sucesso, como exibir uma mensagem de sucesso
    } catch (error) {
      console.error('Erro ao criar addsale:', error.message)
      // Adicione lógica para lidar com o erro, como exibir uma mensagem de erro mais detalhada
      if (error.response) {
        console.log('Response data:', error.response.data)
      }
    }
  }

  // Envie o formData para o servidor usando a função createAddsale

  const handleSubmit = async (e) => {
    e.preventDefault()
    handleCreateSale()
  }

  return (
    <Container>
      <Appbar />
      <FormContainer>
        <FormTitle>Preencha os detalhes do anúncio</FormTitle>
        <Form
          onSubmit={handleSubmit}
          action="/products"
          method="post"
          encType="multipart/form-data"
        >
          {' '}
          <div>
            <FormLabel htmlFor="picture">Escolha imagem do produto</FormLabel>
            <FormButton type="button" onClick={handleButtonClick}>
              Selecionar Imagem
            </FormButton>
            <FormInput
              type="file"
              id="picture"
              name="image"
              onChange={handleUploadImageUrl}
              accept="image/*" // Aceitar apenas arquivos de imagem
              style={{ display: 'none' }}
              ref={fileInputRef}
            />
          </div>
          {formData.image && (
            <div>
              {/* Adicione a tag img para exibir a imagem individualmente */}
              <img
                src={picture`${environment.URL_API_TROCA_RAPIDA}'/files/'+picture}`}
                alt={user.name}
              />
              <CustomGallery>
                <ImageGallery items={[{ original: formData.image }]} />
              </CustomGallery>
            </div>
          )}
          <div>
            <FormLabel htmlFor="price">Preço R$*</FormLabel>
            <FormInput
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  price: e.target.value,
                }))
              }
              required
            />
          </div>
          <div>
            <FormLabel htmlFor="title">Nome do produto*</FormLabel>
            <FormInput
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  title: e.target.value,
                }))
              }
              required
            />
          </div>
          <div>
            <FormLabel htmlFor="description">Descrição*</FormLabel>
            <FormTextArea
              id="description"
              name="description"
              value={formData.description}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  description: e.target.value,
                }))
              }
              required
            />
          </div>
          <div>
            <FormLabel htmlFor="address">Endereço*</FormLabel>
            <FormInput
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={(e) =>
                setFormData((prevData) => ({
                  ...prevData,
                  address: e.target.value,
                }))
              }
              required
            />
          </div>
          <FormButton type="submit">Enviar anúncio</FormButton>
        </Form>
      </FormContainer>
    </Container>
  )
}
