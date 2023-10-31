// Replace HTML entities with corresponding characters
export function replaceHTMLCharacters(match: string): string {
  const entities: { [key: string]: string } = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'",
    "&#039;": "'",
    "&#x2F;": "/",
    "&#x27;": "'",
    "&#x22;": '"',
    "&#183;": "·",
  };

  return entities[match] || match;
}
