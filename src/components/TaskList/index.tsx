import * as S from './styles'

import { TaskDTO } from '@dtos/TaskDTO'
import { TaskCard } from '@components/TaskCard'
import { EmptyTaskCard } from '@components/EmptyTaskCard'

interface TastListProps {
  tasks: TaskDTO[]
}

export function TastList({ tasks }: TastListProps) {
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
