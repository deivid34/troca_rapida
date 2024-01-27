import { useCallback, useRef } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { AiOutlineArrowRight, AiFillLock } from 'react-icons/ai'
import { MdOutlineMail } from 'react-icons/md'

import { Form } from '@unform/web'

import * as Yup from 'yup'

import getValidationErrors from '../../shared/utils/getValidationErrors'
import { useAuth } from '../../shared/hooks/auth'
import { useToast } from '../../shared/hooks/Toast'
import { Input, Button } from '../../shared/components'

import logo from '../../assets/logo.png'

import { Container, Content, Background } from './styles'

export const SignIn = () => {
  const formRef = useRef(null)
  const navigate = useNavigate()

  const { signIn } = useAuth()
  const { addToast } = useToast()

  const handleSubmit = useCallback(
    async (formData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string()
            .required('Senha obrigatória')
            .min(6, 'Senha com mínimo de 6 caracteres'),
        })

        await schema.validate(formData, { abortEarly: false })

        const { email, password } = formData

        await signIn(email, password)

        addToast({
          type: 'success',
          title: 'Usuário logado com sucesso!',
        })

        navigate('/home')
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationErrors(err)

          formRef.current.setErrors(error)
        }

        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        })
      }
    },
    [signIn, addToast, navigate],
  )
  return (
    <Container>
      <Content>
        <img src={logo} alt="trocarapida" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>troca-rápida</h1>

          <h2> login</h2>

          <Input
            name="email"
            type="email"
            placeholder="email"
            icon={MdOutlineMail}
          />

          <Input
            name="password"
            placeholder="senha"
            icon={AiFillLock}
            type="password"
          />

          <Button type="submit">Entrar</Button>

          <Link to="/forgot-password">esqueci minha senha</Link>
        </Form>
        <Link to="/sign-up">
          Criar conta <AiOutlineArrowRight size={24} />
        </Link>
      </Content>

      <Background />
    </Container>
  )
}
