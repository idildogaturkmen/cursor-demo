import type { Task } from './types'

const MS_PER_DAY = 86_400_000

/**
 * Days until due. Negative means overdue.
 */
export function daysUntilDue(dueDate: string, now: Date = new Date()): number {
  const due = new Date(`${dueDate}T12:00:00`)
  const today = new Date(now)
  today.setHours(12, 0, 0, 0)
  return (due.getTime() - today.getTime()) / MS_PER_DAY
}

/**
 * Urgency boost from due date (0–40).
 * Overdue and soon-due tasks should rank higher.
 */
export function urgencyBoost(daysUntil: number): number {
  if (daysUntil < 0) return 40
  if (daysUntil === 0) return 30
  if (daysUntil <= 2) return 22
  if (daysUntil <= 7) return 12
  if (daysUntil <= 14) return 6
  return 0
}

/**
 * Rank for the Focus strip. Higher score = work on it sooner.
 *
 * Intended formula:
 *   impact * 10 + urgencyBoost(daysUntilDue)
 *
 * DEMO BUG (planted): urgency is subtracted instead of added, so high-urgency
 * and overdue tasks sink below low-urgency ones. Leave this broken for the
 * live Debug Mode + failing-test segment — see DEMO_SCRIPT.md.
 */
export function priorityScore(task: Task, now: Date = new Date()): number {
  const days = daysUntilDue(task.dueDate, now)
  const boost = urgencyBoost(days)
  // PLANTED BUG: should be `task.impact * 10 + boost`
  return task.impact * 10 - boost
}

export function compareByPriority(
  a: Task,
  b: Task,
  now: Date = new Date(),
): number {
  return priorityScore(b, now) - priorityScore(a, now)
}
