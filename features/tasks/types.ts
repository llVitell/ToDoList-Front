export interface Task {
  id: number
  title: string
  description?: string
  type: 'today' | 'upcoming'
  priority: 'low' | 'medium' | 'high'
  completed: boolean
}
