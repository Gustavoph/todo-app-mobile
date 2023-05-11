import { Image } from 'react-native'

import * as S from './styles'

import Logo from '@assets/logo.png'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Counter } from '@components/Counter'
import { TastList } from '@components/TaskList'
import { useTask } from '@hooks/useTask'
import { useState } from 'react'

export function Home() {
  const { addTask, tasks } = useTask()

  const [description, setDescription] = useState('')

  function handleAddTask() {
    if (description.length > 0) {
      addTask(description)
      setDescription('')
    }
  }

  const totalTasks = tasks.length
  const totalConcludedTasks = tasks.filter((task) => task.isConcluded).length

  return (
    <S.HomeContainer>
      <S.HomeHeader>
        <Image source={Logo} alt="" />
      </S.HomeHeader>

      <S.HomeContent>
        <S.InputContainer>
          <Input
            value={description}
            placeholder="Adicione uma nova tarefa"
            onChangeText={(text) => setDescription(text)}
            onSubmitEditing={handleAddTask}
            returnKeyType="send"
          />

          <Button onPress={handleAddTask}>
            <S.TaskIcon />
          </Button>
        </S.InputContainer>

        <S.TaskContainer>
          <Counter title="Criadas" counter={totalTasks} />
          <Counter
            color="purple"
            title="Concluídas"
            counter={totalConcludedTasks}
          />
        </S.TaskContainer>

        <TastList />
      </S.HomeContent>
    </S.HomeContainer>
  )
}
