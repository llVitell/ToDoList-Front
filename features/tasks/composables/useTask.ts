import type { Task } from '../types'
import { getApi } from '../service'

type Method = 'POST' | 'PUT' | 'DELETE'

const useTask = async (method: Method, task: Partial<Task>) => {
  const apiUrl = getApi()

  const newTask = {
    ...task
  }

  const reqOptions = {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newTask)
  }

  switch (method) {
    case 'POST':
      await fetch(apiUrl, reqOptions)
      break
    case 'PUT':
      await fetch(`${apiUrl}/${task.id}`, reqOptions)
      break
    case 'DELETE':
      await fetch(`${apiUrl}/${task.id}`, { method })
      break
  }
}

export default useTask
