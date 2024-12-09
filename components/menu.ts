export interface Menu {
  name: string
  url: string
  children: Menu[]
}

export interface LetterResponse {
  code: number
  msg: string
}
