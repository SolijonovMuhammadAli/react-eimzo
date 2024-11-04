# react-eimzo-solijonovmuhammadali

Ushbu hook `e-imzo` kutubxonasidan foydalanish uchun mo'ljallangan. Hook yordamida foydalanuvchi sertifikatlari ro'yxatini olish va PKCS7 formatidagi raqamli imzoni yaratish imkoniyati mavjud.

## O'rnatish

Avvaliga `EIMZO` kutubxonasini o'rnatishingiz kerak bo'ladi. Bu faylni loyihangizga yuklab oling va kerakli joyga qo'ying.

Keyin `useEImzo` hookini import qilib, foydalanishingiz mumkin:

```typescript
import { useEImzo } from 'react-eimzo-solijonovmuhammadali'
```

# Foydalanish

## Qaytarilgan qiymatlar

`useEImzo` hooki quyidagi xususiyatlarni o'z ichiga olgan ob'ektni qaytaradi:

- **Dinamik Skript Yuklash:** E-IMZO skriptini avtomatik ravishda dokument head qismiga yuklaydi.
- **Sertifikatlarni Boshqarish:** Foydalanuvchi sertifikatlarini olish va boshqarish.
- **PKCS#7 Imzo Yaratish:** PKCS#7 imzolarini yaratishni osonlashtiradi.
- **Xatoliklarni Boshqarish:** Skript yuklanishi va E-IMZO operatsiyalari uchun asosiy xatoliklarni boshqarish.
- **Tozalash:** Dinamik qo'shilgan skript komponent o'chirilganda olib tashlanadi.

## Sertifikatlarni olish

`useEImzo` hookini ishlatganingizdan so'ng, sertifikatlar avtomatik ravishda yuklanadi va `certificates` o'zgaruvchisida saqlanadi.

```
const { certificates } = useEImzo()
```

## PKCS7 yaratish

Ma'lum bir sertifikat uchun PKCS7 raqamli imzosini yaratish uchun `createPkcs7` funksiyasidan foydalanishingiz mumkin

```
const { createPkcs7 } = useEImzo()

const sertifikat = certificates[0] // birinchi sertifikatni olish misoli
createPkcs7(sertifikat)

```

PKCS7 formatidagi imzo `pkcs7` o'zgaruvchisida saqlanadi:

```
const { pkcs7 } = useEImzo()
console.log(pkcs7)
```

## Qanday muammolar yuzaga kelishi mumkin?

Agar E-imzo dasturi ishga tushmagan bo'lsa yoki noto'g'ri konfiguratsiya qilingan bo'lsa, konsolda "E-imzo ishga tushuring!" degan xatolik paydo bo'ladi.

Agar PKCS7 yaratishda xatolik yuzaga kelsa, "PKCS7 qilishda xotolik yuzberdi" xabari konsolda paydo bo'ladi.
