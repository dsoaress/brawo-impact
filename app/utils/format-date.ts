export function formatDate(date: Date | string): string {
  return `Le ${new Date(date).toLocaleDateString('fr-FR', { dateStyle: 'medium' })}`
}
