import type { Column as ColumnType, ColumnId, Task } from '../lib/types'
import { TaskCard } from './TaskCard'

type Props = {
  column: ColumnType
  tasks: Task[]
  onMove: (taskId: string, column: ColumnId) => void
}

export function Column({ column, tasks, onMove }: Props) {
  return (
    <section className="column" aria-labelledby={`col-${column.id}`}>
      <header className="column-header">
        <div>
          <h2 id={`col-${column.id}`}>{column.label}</h2>
          <p>{column.hint}</p>
        </div>
        <span className="count">{tasks.length}</span>
      </header>
      <div className="column-body">
        {tasks.length === 0 ? (
          <p className="empty-column">Nothing here yet.</p>
        ) : (
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} onMove={onMove} />
          ))
        )}
      </div>
    </section>
  )
}
