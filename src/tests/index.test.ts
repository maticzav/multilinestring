import mls from '../'

describe('multilinestring', () => {
  test('corectly compiles text with first and last line', async () => {
    const text = mls`First line
      | Random String
      | More random strings
      | Completely random but no weird spaces.
Last line`

    const equivalent = `First line
Random String
More random strings
Completely random but no weird spaces.
Last line`

    expect(text).toBe(equivalent)
  })

  test('corectly removes first and last line when empty', async () => {
    const text = mls`
      | Random String
      | More random strings
      | Completely random but no weird spaces.
      `

    const equivalent = `Random String
More random strings
Completely random but no weird spaces.`

    expect(text).toBe(equivalent)
  })

  test('correctly renders functions and expressions', async () => {
    const text = mls`
    | Random String ${5 + 5}
    | More random strings ${(() => 'hey')()}
    | Completely random but no weird spaces.
`

    const equivalent = `Random String ${5 + 5}
More random strings ${(() => 'hey')()}
Completely random but no weird spaces.`

    expect(text).toBe(equivalent)
  })

  test('acknowledges the space after separator', async () => {
    const text = mls`
    |Random String
    | More random strings
    `

    const equivalent = `Random String
More random strings`

    expect(text).toBe(equivalent)
  })
})
