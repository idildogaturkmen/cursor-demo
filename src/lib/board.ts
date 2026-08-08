import type { ColumnId, Task } from './types'
import { compareByPriority } from './priorityScore'

export function tasksInColumn(tasks: Task[], column: ColumnId): Task[] {
  return tasks
    .filter((task) => task.column === column)
    .sort((a, b) => compareByPriority(a, b))
}

/** Top open tasks for the Focus strip (excludes done). */
export function focusTasks(tasks: Task[], limit = 3): Task[] {
  return tasks
    .filter((task) => task.column !== 'done')
    .sort((a, b) => compareByPriority(a, b))
    .slice(0, limit)
}

export function moveTask(
  tasks: Task[],
  taskId: string,
  column: ColumnId,
): Task[] {
  return tasks.map((task) =>
    task.id === taskId ? { ...task, column } : task,
  )
}
