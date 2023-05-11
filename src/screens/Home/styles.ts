import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PlusCircle } from 'phosphor-react-native'

export const HomeContainer = styled(SafeAreaView)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  flex: 1;
`

export const HomeHeader = styled.View`
  width: 100%;
  padding-top: 24px;
  padding-bottom: 71px;
  align-items: center;
`

export const HomeContent = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  flex: 1;
  padding: 24px;
`

export const InputContainer = styled.View`
  width: 100%;
  margin-top: -51px;

  flex-direction: row;
  gap: 4px;
`

export const TaskButton = styled.TouchableOpacity`
  width: 52px;
  height: 52px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.BLUE_DARK};

  justify-content: center;
  align-items: center;
`

export const TaskContainer = styled.View`
  width: 100%;
  margin-top: 32px;
  padding-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
`

export const TaskIcon = styled(PlusCircle).attrs(({ theme }) => ({
  size: 20,
  color: theme.COLORS.WHITE,
}))``

// export const TaskListCard = styled.
