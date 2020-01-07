type scream = string

export default function stream(sentence: string): scream {
  return addExclamationPoints(sentence).toUpperCase()
}

export function addExclamationPoints(str: string): string {
  return str.replace(/\?/g, "?!").replace(/\.$/, "!!!")
}