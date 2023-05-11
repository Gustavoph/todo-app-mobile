import { RefObject, useState } from 'react'
import { TextInput, TextInputProps } from 'react-native'

import * as S from './styles'
import { useTheme } from 'styled-components/native'

interface InputProps extends TextInputProps {
  inputRef?: RefObject<TextInput>
}

export function Input({ inputRef, ...rest }: InputProps) {
  const [isFocus, setIsFocus] = useState(false)

  const { COLORS } = useTheme()

  return (
    <S.Input
      ref={inputRef}
      isFocus={isFocus}
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
    />
  )
}
