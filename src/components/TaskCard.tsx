import type { ColumnId, Task } from '../lib/types'
import { COLUMNS } from '../lib/seed'
import { priorityScore } from '../lib/priorityScore'

type Props = {
  task: Task
  onMove: (taskId: string, column: ColumnId) => void
}

export function TaskCard({ task, onMove }: Props) {
  return (
    <article className="task-card">
      <div className="task-top">
        <h3>{task.title}</h3>
        <span className="score-pill" title="priorityScore">
          {priorityScore(task)}
        </span>
      </div>
      <p className="task-notes">{task.notes}</p>
      <div className="task-meta">
        <span>Impact {task.impact}/5</span>
        <span>Due {task.dueDate}</span>
      </div>
      <ul className="tag-row">
        {task.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <label className="move-label">
        Move to
        <select
          value={task.column}
          onChange={(event) =>
            onMove(task.id, event.target.value as ColumnId)
          }
          aria-label={`Move ${task.title}`}
        >
          {COLUMNS.map((column) => (
            <option key={column.id} value={column.id}>
              {column.label}
            </option>
          ))}
        </select>
      </label>
    </article>
  )
}
