export function parseTags(input: string): string[] {
  return input
    .split(/[,\s]+/)
    .map(t => t.trim().toLowerCase())
    .filter(Boolean);
}
