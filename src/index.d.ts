declare module 'react-eimzo-solijonovmuhammadali' {
  export function useEImzo(): {
    EIMZOClient: any
    certificates: any[]
    createPkcs7: (item: any) => void
    pkcs7: string
  }
}
