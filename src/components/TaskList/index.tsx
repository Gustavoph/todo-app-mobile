import * as S from './styles'

import { TaskCard } from '@components/TaskCard'
import { EmptyTaskCard } from '@components/EmptyTaskCard'
import { useTask } from '@hooks/useTask'

export function TastList() {
  const { tasks } = useTask()

  return (
    <S.TaskListContainer>
      {tasks.length > 0 ? (
        tasks.map((task) => <TaskCard key={task.id} task={task} />)
      ) : (
        <EmptyTaskCard />
      )}
    </S.TaskListContainer>
  )
}
