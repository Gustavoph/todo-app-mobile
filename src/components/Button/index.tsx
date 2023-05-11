import { PropsWithChildren, useState } from 'react'
import { TouchableOpacityProps } from 'react-native'

import * as S from './styles'

interface ButtonProps extends TouchableOpacityProps, PropsWithChildren {}

export function Button({ children, ...rest }: ButtonProps) {
  const [isPress, setIsPress] = useState(false)

  return (
    <S.Button
      {...rest}
      isPress={isPress}
      onPressIn={() => setIsPress(true)}
      onPressOut={() => setIsPress(false)}
    >
      {children}
    </S.Button>
  )
}
