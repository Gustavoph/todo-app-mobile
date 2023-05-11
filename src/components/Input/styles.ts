import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

interface InputProps {
  isFocus: boolean
}

export const Input = styled(TextInput)<InputProps>`
  flex: 1;
  height: 54px;
  padding: 16px;
  border-radius: 6px;

  ${({ theme, isFocus = false }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    background-color: ${theme.COLORS.GRAY_500};
    border: 1px solid ${isFocus ? theme.COLORS.PURPLE_DARK : 'transparent'};
  `}
`
