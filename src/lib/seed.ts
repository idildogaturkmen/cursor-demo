import type { Column, Task } from './types'

export const COLUMNS: Column[] = [
  { id: 'backlog', label: 'Backlog', hint: 'Ideas parked in orbit' },
  { id: 'doing', label: 'Doing', hint: 'In flight this week' },
  { id: 'review', label: 'Review', hint: 'Waiting on eyes' },
  { id: 'done', label: 'Done', hint: 'Landed' },
]

/** Seed board for the Cursor campus demo — a side-project project board. */
export const SEED_TASKS: Task[] = [
  {
    id: 't-login',
    title: 'Fix login redirect loop',
    notes: 'Users bounce /auth → /app → /auth after OAuth. Overdue.',
    column: 'doing',
    impact: 5,
    dueDate: '2026-08-05',
    tags: ['bug', 'auth'],
  },
  {
    id: 't-focus',
    title: 'Ship Focus strip by priorityScore',
    notes: 'Surface the top 3 tasks by score above the board.',
    column: 'doing',
    impact: 4,
    dueDate: '2026-08-08',
    tags: ['feature'],
  },
  {
    id: 't-tests',
    title: 'Cover priorityScore with vitest',
    notes: 'Failing red tests are intentional for the Debug Mode segment.',
    column: 'review',
    impact: 4,
    dueDate: '2026-08-09',
    tags: ['tests'],
  },
  {
    id: 't-docs',
    title: 'Write DEMO_SCRIPT.md beats',
    notes: 'Structure, browser side tab, skills, Plan/Debug, Cloud Agents.',
    column: 'review',
    impact: 3,
    dueDate: '2026-08-10',
    tags: ['docs'],
  },
  {
    id: 't-empty',
    title: 'Polish empty-state illustration',
    notes: 'Nice-to-have atmosphere pass — low urgency.',
    column: 'backlog',
    impact: 2,
    dueDate: '2026-09-20',
    tags: ['design'],
  },
  {
    id: 't-drag',
    title: 'Drag cards between columns',
    notes: 'Keyboard move works today; pointer DnD can wait.',
    column: 'backlog',
    impact: 3,
    dueDate: '2026-08-22',
    tags: ['feature'],
  },
  {
    id: 't-seed',
    title: 'Seed weekend hackathon board',
    notes: 'Landed for the live walkthrough.',
    column: 'done',
    impact: 3,
    dueDate: '2026-08-01',
    tags: ['meta'],
  },
]
