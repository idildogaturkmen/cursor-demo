export type ColumnId = 'backlog' | 'doing' | 'review' | 'done'

export type Impact = 1 | 2 | 3 | 4 | 5

export type Task = {
  id: string
  title: string
  notes: string
  column: ColumnId
  /** Business impact, 1 (nice-to-have) … 5 (mission-critical). */
  impact: Impact
  /** ISO date string (YYYY-MM-DD). */
  dueDate: string
  tags: string[]
}

export type Column = {
  id: ColumnId
  label: string
  hint: string
}
