import { Image } from 'react-native'

import * as S from './styles'

import Logo from '@assets/logo.png'
import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { Counter } from '@components/Counter'
import { TastList } from '@components/TaskList'

export function Home() {
  return (
    <S.HomeContainer>
      <S.HomeHeader>
        <Image source={Logo} alt="" />
      </S.HomeHeader>

      <S.HomeContent>
        <S.InputContainer>
          <Input placeholder="Adicione uma nova tarefa" />

          <Button>
            <S.TaskIcon />
          </Button>
        </S.InputContainer>

        <S.TaskContainer>
          <Counter title="Criadas" counter={0} />
          <Counter color="purple" title="Concluídas" counter={0} />
        </S.TaskContainer>

        <TastList tasks={[]} />
      </S.HomeContent>
    </S.HomeContainer>
  )
}
