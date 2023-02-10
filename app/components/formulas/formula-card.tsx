import type { Formula } from './formulas-section'

export function FormulaCard({ title, description, button }: Formula) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
      <button>{button.label}</button>
    </div>
  )
}
