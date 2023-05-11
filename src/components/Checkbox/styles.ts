import { Check } from 'phosphor-react-native'
import { TouchableOpacity } from 'react-native'
import styled, { css } from 'styled-components/native'

interface CheckboxContainerProps {
  isChecked: boolean
}

export const CheckboxContainer = styled(
  TouchableOpacity,
)<CheckboxContainerProps>`
  ${({ theme, isChecked }) => css`
    border-color: ${isChecked ? theme.COLORS.PURPLE : theme.COLORS.BLUE_DARK};
    background-color: ${isChecked ? theme.COLORS.PURPLE : 'transparent'};
  `};

  width: 24px;
  height: 24px;

  border-radius: 999px;
  border-width: 2px;

  justify-content: center;
  align-items: center;
`

export const CheckItem = styled(Check).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))``
