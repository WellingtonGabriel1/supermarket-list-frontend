import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Button, Input, Title, Subtitle } from 'components'
import { SAVE_USERNAME_PATH } from 'services/constants'
import {
  ScreenContainer,
  ContentContainer,
  BagImage,
  ButtonContainer
} from './styles'

export const HomeScreen = () => {
  const navigate = useNavigate()
  const [Username, setUsername] = useState('')

  const onClickContinue = () => {
    if (Username.length < 3) {
      alert('Username deve conter mais do que 3 caracteres!')
      return
    }

    localStorage.setItem(SAVE_USERNAME_PATH, Username)
    navigate('/List')
  }

  return (
    <ScreenContainer>
      <ContentContainer>
        <BagImage />
        <Title>Sua lista de supermercado mais fácil do que nunca</Title>
        <Subtitle>
          Ajudamos você a organizar sua lista de compras de forma descomplicada.
        </Subtitle>
        <Subtitle mw={452} align="left" mb={16}>
          Digite abaixo seu usuário para ter acesso a sua lista de compras:
        </Subtitle>

        <Input
          onChange={(text) => setUsername(text)}
          value={Username}
          label="Username"
          placeholder="Ex: usuario1"
        />
        <ButtonContainer>
          <Button onClick={onClickContinue}>Continuar</Button>
        </ButtonContainer>
      </ContentContainer>
    </ScreenContainer>
  )
}
