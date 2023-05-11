import styled from 'styled-components/native'

export const CounterContainer = styled.View`
  flex-direction: row;

  align-items: center;
  gap: 8px;
`

export interface TitleProps {
  color: 'blue' | 'purple'
}

export const Title = styled.Text<TitleProps>`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-weight: bold;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme, color = 'blue' }) =>
    color === 'purple' ? theme.COLORS.PURPLE : theme.COLORS.BLUE};
`

export const Counter = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 999px;

  padding: 2px 8px;
`

export const CounterText = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XS}px;
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.WHITE};
`
