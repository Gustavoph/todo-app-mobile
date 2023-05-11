import styled from 'styled-components/native'

interface ButtonProps {
  isPress: boolean
}

export const Button = styled.TouchableOpacity<ButtonProps>`
  width: 52px;
  height: 52px;
  border-radius: 6px;
  background-color: ${({ theme, isPress = false }) =>
    isPress ? theme.COLORS.BLUE : theme.COLORS.BLUE_DARK};

  justify-content: center;
  align-items: center;
`
