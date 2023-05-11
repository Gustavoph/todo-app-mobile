import { TaskDTO } from '@dtos/TaskDTO'
import { PropsWithChildren, createContext, useState } from 'react'

interface TaskContextData {
  tasks: TaskDTO[]
  addTask: (description: string) => void
  toggleTask: (taskId: string) => void
  deleteTask: (taskId: string) => void
}

export const TaskContext = createContext({} as TaskContextData)

export function TaskProvider({ children }: PropsWithChildren) {
  const [tasks, setTasks] = useState<TaskDTO[]>([])

  function addTask(description: string) {
    const newTask: TaskDTO = {
      id: new Date().getTime().toString(),
      description,
      isConcluded: false,
    }

    setTasks((prevState) => [newTask, ...prevState])
  }

  function toggleTask(taskId: string) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId)

    if (taskIndex >= 0) {
      const tasksCopy = [...tasks]

      if (tasksCopy[taskIndex].isConcluded) {
        tasksCopy[taskIndex].isConcluded = false
      } else {
        tasksCopy[taskIndex].isConcluded = true
      }

      setTasks(tasksCopy)
    }
  }

  function deleteTask(taskId: string) {
    const taskIndex = tasks.findIndex((task) => task.id === taskId)

    if (taskIndex >= 0) {
      const tasksCopy = [...tasks]

      tasksCopy.splice(taskIndex, 1)

      setTasks(tasksCopy)
    }
  }

  return (
    <TaskContext.Provider value={{ tasks, addTask, toggleTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  )
}
