import { describe, expect, it } from 'vitest'
import { compareByPriority, priorityScore, urgencyBoost } from './priorityScore'
import type { Task } from './types'

const now = new Date('2026-08-08T12:00:00')

function task(partial: Partial<Task> & Pick<Task, 'id' | 'title' | 'impact' | 'dueDate'>): Task {
  return {
    notes: '',
    column: 'backlog',
    tags: [],
    ...partial,
  }
}

describe('urgencyBoost', () => {
  it('gives overdue work the highest boost', () => {
    expect(urgencyBoost(-3)).toBe(40)
    expect(urgencyBoost(0)).toBe(30)
    expect(urgencyBoost(14)).toBe(6)
    expect(urgencyBoost(30)).toBe(0)
  })
})

describe('priorityScore', () => {
  it('ranks an overdue high-impact task above a distant low-impact task', () => {
    const overdueCritical = task({
      id: '1',
      title: 'Fix login redirect',
      impact: 5,
      dueDate: '2026-08-05', // 3 days overdue
    })
    const somedayPolish = task({
      id: '2',
      title: 'Tweak empty-state illustration',
      impact: 2,
      dueDate: '2026-09-20',
    })

    expect(priorityScore(overdueCritical, now)).toBeGreaterThan(
      priorityScore(somedayPolish, now),
    )
  })

  it('sorts Focus candidates so overdue work comes first', () => {
    const tasks = [
      task({
        id: 'polish',
        title: 'Polish empty state',
        impact: 2,
        dueDate: '2026-09-20',
      }),
      task({
        id: 'login',
        title: 'Fix login redirect',
        impact: 5,
        dueDate: '2026-08-05',
      }),
      task({
        id: 'docs',
        title: 'Update README',
        impact: 3,
        dueDate: '2026-08-10',
      }),
    ]

    const ordered = [...tasks].sort((a, b) => compareByPriority(a, b, now))
    expect(ordered.map((t) => t.id)).toEqual(['login', 'docs', 'polish'])
  })
})
