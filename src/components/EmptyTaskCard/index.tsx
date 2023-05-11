import * as S from './styles'
import Clipboard from '@assets/clipboard.png'

export function EmptyTaskCard() {
  return (
    <S.TaskItemContainer>
      <S.ClipboardImage source={Clipboard} alt="" />
      <S.EmptyText bold>Você ainda não tem tarefas cadastradas</S.EmptyText>
      <S.EmptyText>Crie tarefas e organize seus itens a fazer</S.EmptyText>
    </S.TaskItemContainer>
  )
}
