// lib/format-custom-tag.ts

/**
 * Formats a tag-like string by:
 * 1. Trimming whitespace
 * 2. Removing leading '#' if present
 * 3. Converting to uppercase
 * 4. Prefixing with '%29'
 * 
 * @param input - Raw input string (e.g., '#hello')
 * @returns Formatted string (e.g., '%29HELLO')
 */
export function getCorrectCocPlayerTag(input: string): string {
  let trimmed = input.trim();

  if (trimmed.startsWith('#')) {
    trimmed = trimmed.slice(1);
  }

  const upper = trimmed.toUpperCase();

  const normalized = upper.replace(/0/g, 'O');

  return normalized;
}
export function getCorrectCocClanTag(input: string): string {
  let trimmed = input.trim();

  if (trimmed.startsWith('#')) {
    trimmed = trimmed.slice(1);
  }

  const upper = trimmed.toUpperCase();

  return upper;
}
