import type { Task } from '../lib/types'
import { priorityScore } from '../lib/priorityScore'

type Props = {
  tasks: Task[]
}

export function FocusStrip({ tasks }: Props) {
  return (
    <section className="focus-strip" aria-labelledby="focus-heading">
      <div className="focus-copy">
        <h2 id="focus-heading">Focus</h2>
        <p>Ranked by <code>priorityScore</code> — higher should mean sooner.</p>
      </div>
      <ol className="focus-list">
        {tasks.map((task, index) => (
          <li key={task.id} className="focus-item">
            <span className="focus-rank">{index + 1}</span>
            <div>
              <p className="focus-title">{task.title}</p>
              <p className="focus-meta">
                due {task.dueDate} · score {priorityScore(task)}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
