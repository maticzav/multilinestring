import * as os from 'os'

export default (template: TemplateStringsArray, ...args: any[]): string => {
  /* Compiles template string literal */

  const string = String.raw(template, ...args)
  const lines = string.split(os.EOL)

  /* Strips lines */

  const compiledLines = lines.reduce<string[]>((acc, line, i) => {
    if (i === 0 && line.trim() === '') {
      /* Empty first line */
      return []
    } else if (i === lines.length - 1 && line.trim() === '') {
      /* Empty last line */
      return acc
    } else {
      /* Parse lines in between */
      return [...acc, line.replace(/^(\s*\|(\s|))/, '')]
    }
  }, [])
  const compiledString = compiledLines.join(os.EOL)

  return compiledString
}
