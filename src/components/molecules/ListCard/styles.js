import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 58vw;
  height: 58px;
  min-height: 58px;
  padding: 0px 12px;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 12px;
  margin-bottom: 14px;
`

export const CheckImage = styled.img`
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  justify-content: center;
  object-fit: contain;
  cursor: pointer;
  margin-right: 12px;
`

export const TextContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  margin-top: 50px;
`

export const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  width: 10%;
  cursor: pointer;
`

export const ArrowIcon = styled.img.attrs({
  src: '/images/arrow.svg',
  alt: '"arrow-icon"'
})`
  width: 6px;
  height: 12px;
  object-fit: contain;
  cursor: pointer;
`
