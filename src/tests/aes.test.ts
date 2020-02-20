import { generateRandomBytes, AES } from '../index'

const text = 'password'
let aes: AES
let encrypted: string

beforeAll(() => {
  const pepper = generateRandomBytes({
    type: 'salt',
    encoding: 'base64'
  }) as string
  aes = new AES(pepper)
})

describe('SHA', () => {
  test('encrpyt()', () => {
    encrypted = aes.encrypt(text)
    expect(encrypted.length).toBe(56)
  })

  test('decrypt()', () => {
    const decrypted = aes.decrypt(encrypted)
    expect(decrypted).toBe(text)
  })
})
