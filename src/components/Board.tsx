import { useState } from 'react'
import { COLUMNS, SEED_TASKS } from '../lib/seed'
import { focusTasks, moveTask, tasksInColumn } from '../lib/board'
import type { ColumnId } from '../lib/types'
import { Column } from './Column'
import { FocusStrip } from './FocusStrip'
import { Header } from './Header'

export function Board() {
  const [tasks, setTasks] = useState(SEED_TASKS)

  function handleMove(taskId: string, column: ColumnId) {
    setTasks((current) => moveTask(current, taskId, column))
  }

  return (
    <div className="app-shell">
      <Header />
      <FocusStrip tasks={focusTasks(tasks)} />
      <div className="board" role="region" aria-label="Project board">
        {COLUMNS.map((column) => (
          <Column
            key={column.id}
            column={column}
            tasks={tasksInColumn(tasks, column.id)}
            onMove={handleMove}
          />
        ))}
      </div>
    </div>
  )
}
