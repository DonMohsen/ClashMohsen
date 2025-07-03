export function getCorrectRole(role: string): string {
  if (!role) return '';

  const lower = role.toLowerCase();

  if (lower === 'admin') return 'Elder';

  return role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
}
