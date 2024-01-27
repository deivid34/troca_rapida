import styled from 'styled-components'

export const Image = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`

export const SearchText = styled.span`
  padding: 16px;
`

export const Container = styled.div`
  margin-top: 50px; /* Exemplo de estilo para margem superior */
`

export const FormContainer = styled.div`
  max-width: 600px;
  max-height: 150px;
  margin: 0 auto;
`

export const FormTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  padding: 0px;
  margin-top: -250px;
`

export const Form = styled.form`
  background-color: #f8f9fa;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: -15px;
`

export const FormLabel = styled.label`
  font-weight: bold;
  margin-bottom: 8px;
s
`

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ced4da;
  border-radius: 8px;
`

export const FormTextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #ced4da;
  border-radius: 4px;
`

export const FormButton = styled.button`
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 10px;
  transition:
    transform 0.3s,
    box-shadow 0.3s;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px ${({ theme }) => theme.primaryHover};
  }
`
export const CustomGallery = styled.div`
  .image-gallery {
    max-width: 600px;
    margin: 0 auto;
  }

  .image-gallery-thumbnail {
    height: 130px;
    border-radius: 4px;
    margin-top: -10px;
    margin-left: 150px;
    object-fit: contain;
  }
`
