export interface Art {
    id: number
    title: string
    artist: string
    imageURL: string
    publicationHistory: string[]
}

export interface SingleAdvice {
  slip: {
    id: string
    advice: string
  }
}