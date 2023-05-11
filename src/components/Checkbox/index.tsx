import { TouchableOpacityProps } from 'react-native/types'
import * as S from './styles'

interface CheckboxProps extends TouchableOpacityProps {
  isChecked: boolean
}

export function Checkbox({ isChecked, ...rest }: CheckboxProps) {
  return (
    <S.CheckboxContainer isChecked={isChecked} {...rest}>
      {isChecked && <S.CheckItem />}
    </S.CheckboxContainer>
  )
}
