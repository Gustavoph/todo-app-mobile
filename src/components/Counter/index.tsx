import * as S from './styles'

interface CouterProps {
  title: string
  counter: number
  color?: 'blue' | 'purple'
}

export function Counter({ color = 'blue', title, counter }: CouterProps) {
  return (
    <S.CounterContainer>
      <S.Title color={color}>{title}</S.Title>
      <S.Counter>
        <S.CounterText>{counter}</S.CounterText>
      </S.Counter>
    </S.CounterContainer>
  )
}
