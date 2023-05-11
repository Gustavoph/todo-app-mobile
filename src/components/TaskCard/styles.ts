import { Trash } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export const TaskCardContainer = styled.View`
  width: 100%;
  height: 64px;
  border-radius: 8px;

  padding: 12px;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  gap: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};

  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_400};

  margin-bottom: 8px;
`

export const Addons = styled.View`
  width: 15%;

  align-items: center;
  justify-content: center;
`

interface TaskTitleProps {
  isChecked: boolean
}

export const TaskTitle = styled.Text<TaskTitleProps>`
  ${({ theme, isChecked }) => css`
    text-decoration: ${isChecked ? 'line-through' : 'none'};
    color: ${isChecked ? theme.COLORS.GRAY_300 : theme.COLORS.GRAY_100};
  `};

  width: 70%;
  text-align: justify;
`

export const TrashIcon = styled(Trash).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.GRAY_300,
}))``
