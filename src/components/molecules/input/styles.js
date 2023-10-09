import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 452px;
  height: 48px;
  border-radius: 8px;
  border-color: ${({ theme }) => theme.colors.primary};
  border-width: 2px;
  border-style: solid;
  padding-top: 6px;
  padding-left: 6px;
  margin-bottom: 18px;

  @media (max-width: 420px) {
    max-width: 300px;
  }
`

export const InputLabel = styled.label`
  font-size: 12px;
  margin: 0px;
  padding-left: 6px;
  padding-top: 3px;
  padding-bottom: 4px;
`

export const InputText = styled.input`
  border: 0px transparent;
  margin-left: 6px;
  font-size: 16px;
  font-family: 'Avenir Next';
  &:focus {
  outline: none;
  }
`
