import styled from 'styled-components/native'

export const ClipboardImage = styled.Image`
  width: 56px;
  height: 56px;
  margin-bottom: 16px;
`

interface EmptyTextProps {
  bold?: boolean
}

export const EmptyText = styled.Text<EmptyTextProps>`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-family: ${({ theme, bold }) =>
    bold ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
`

export const TaskItemContainer = styled.View`
  padding: 48px 0px;
  align-items: center;
  width: 100%;

  border-top-color: ${({ theme }) => theme.COLORS.GRAY_400};
  border-top-width: 1px;
  border-top-style: solid;
`
