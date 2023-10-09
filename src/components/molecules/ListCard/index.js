import {
  CardContainer,
  CheckImage,
  TextContainer,
  ArrowContainer,
  ArrowIcon
} from './styles'
import { SmallText } from 'components/atoms'

export const ListCard = ({ item, onClick, onCheckItem }) => {
  return (
    <CardContainer>
      <CheckImage
        className="checkbox"
        alt="checked-item"
        src={`/images/${item?.checked ? 'checked.svg' : 'unchecked.svg'}`}
        onClick={() => onCheckItem(item)}
      />
      <TextContainer>
        <SmallText fontSize={16} mb={4} align={'left'}>
          {item?.name}
        </SmallText>
        <SmallText fontSize={14} align={'left'}>
          {item?.quantity} unidades
        </SmallText>
      </TextContainer>
      <ArrowContainer onClick={() => onClick(item)}>
        <ArrowIcon />
      </ArrowContainer>
    </CardContainer>
  )
}
