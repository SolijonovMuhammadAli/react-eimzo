// src/hooks/useEImzo.ts
import { useEffect, useState } from 'react'
import EIMZO from '../Eimzo.js'

export function useEImzo() {
  const EIMZOClient = new EIMZO()

  const [certificates, setCertificates] = useState<any>([])
  const [pkcs7, setPkcs7] = useState('')

  const listAllKey = () => {
    EIMZOClient.install()
      .then(() => {
        EIMZOClient.listAllUserKeys()
          .then((res) => setCertificates(res))
          .catch(() => console.error('E-imzo ishga tushuring!'))
      })
      .catch(() => console.error('E-imzo ishga tushuring!'))
  }

  const createPkcs7 = (item: any) => {
    EIMZOClient.loadKey(item).then((data) => {
      EIMZOClient.createPkcs7(data.id, 'description', null)
        .then((res: any) => setPkcs7(res))
        .catch(() => console.error('PKCS7 qilishda xotolik yuzberdi'))
    })
  }

  useEffect(() => {
    listAllKey()
  }, [])

  return { EIMZOClient, certificates, createPkcs7, pkcs7 }
}
