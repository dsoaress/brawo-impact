export function formatDate(
  date: Date | string,
  dateStyle: 'full' | 'long' | 'medium' | 'short' = 'medium'
): string {
  const prefix = dateStyle === 'medium' ? 'Le ' : ''
  return `${prefix}${new Date(date).toLocaleDateString('fr-FR', { dateStyle })}`
}
