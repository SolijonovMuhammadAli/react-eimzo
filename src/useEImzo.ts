import { useEffect, useState } from 'react'
import EIMZO from './Eimzo.js'
// @ts-ignore
import eImzoScript from './e-imzo.js?raw'

export function useEImzo() {
  const EIMZOClient = new EIMZO()

  const [eimzoLoaded, setEimzoLoaded] = useState(false)
  const [certificates, setCertificates] = useState<any>([])
  const [pkcs7, setPkcs7] = useState('')

  useEffect(() => {
    // e-imzo.js faylini ishga tushiramiz
    const scriptContent = eImzoScript
    const script = document.createElement('script')
    script.id = 'eimzo-script'
    script.type = 'text/javascript'
    script.text = scriptContent
    document.head.appendChild(script)

    setEimzoLoaded(true)

    script.onerror = () => {
      console.error('E-imzo skriptini yuklashda xatolik yuz berdi')
    }

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const listAllKey = () => {
    console.log('RUNING!!')
    EIMZOClient.install()
      .then(() => {
        console.log('install RUNING!!')
        EIMZOClient.listAllUserKeys()
          .then((res) => setCertificates(res))
          .catch(() => console.error('E-imzo ishga tushuring (listAllUserKeys)!'))
      })
      .catch(() => console.error('E-imzo ishga tushuring (install)!'))
  }

  const createPkcs7 = (item: any) => {
    EIMZOClient.loadKey(item).then((data) => {
      EIMZOClient.createPkcs7(data.id, 'description', null)
        .then((res: any) => setPkcs7(res))
        .catch(() => console.error('PKCS7 qilishda xotolik yuzberdi'))
    })
  }

  useEffect(() => {
    if (eimzoLoaded) {
      listAllKey()
    }
  }, [eimzoLoaded])

  return { EIMZOClient, certificates, createPkcs7, pkcs7 }
}
