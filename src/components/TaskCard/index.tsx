import { TouchableOpacity } from 'react-native'

import * as S from './styles'

import { Checkbox } from '@components/Checkbox'
import { useState } from 'react'
import { TaskDTO } from '@dtos/TaskDTO'

interface TaskCardProps {
  task: TaskDTO
}

export function TaskCard({ task }: TaskCardProps) {
  const [isConcluded, setIsConcluded] = useState(false)

  return (
    <S.TaskCardContainer>
      <S.Addons>
        <Checkbox
          onPress={() => setIsConcluded(!isConcluded)}
          isChecked={isConcluded}
        />
      </S.Addons>

      <S.TaskTitle isChecked={isConcluded}>{task.description}</S.TaskTitle>

      <S.Addons>
        <TouchableOpacity>
          <S.TrashIcon />
        </TouchableOpacity>
      </S.Addons>
    </S.TaskCardContainer>
  )
}
