import { TouchableOpacity } from 'react-native'

import * as S from './styles'

import { Checkbox } from '@components/Checkbox'
import { TaskDTO } from '@dtos/TaskDTO'
import { useTask } from '@hooks/useTask'

interface TaskCardProps {
  task: TaskDTO
}

export function TaskCard({ task }: TaskCardProps) {
  const { toggleTask, deleteTask } = useTask()

  function handleToggleTask() {
    toggleTask(task.id)
  }

  function handleDeleteTask() {
    deleteTask(task.id)
  }

  return (
    <S.TaskCardContainer>
      <S.Addons>
        <Checkbox onPress={handleToggleTask} isChecked={task.isConcluded} />
      </S.Addons>

      <S.TaskTitle isChecked={task.isConcluded}>{task.description}</S.TaskTitle>

      <S.Addons>
        <TouchableOpacity onPress={handleDeleteTask}>
          <S.TrashIcon />
        </TouchableOpacity>
      </S.Addons>
    </S.TaskCardContainer>
  )
}
