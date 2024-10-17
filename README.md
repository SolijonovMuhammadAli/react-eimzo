# react-eimzo-solijonovmuhammadali

Bu paket React TypeScript yordamida CRUD (Create, Read, Update, Delete) amallarini bajaruvchi hook'ni taqdim etadi. Ushbu hook umumiy ma'lumotlarni olish, qo'shish, yangilash va o'chirishni osonlashtiradi.

## O'rnatish

Loyihangizda ushbu paketdan foydalanish uchun quyidagi buyruq orqali o'rnating:

```bash
npm install react-eimzo-solijonovmuhammadali
```

# CRUD Misoli TypeScriptda

Quyida TypeScript yordamida `useCrud` hook'ini qanday ishlatishni ko'rsatib beruvchi misol keltirilgan.

```tsx
import React, { useEffect } from 'react';
import { useCrud, CRUDOptions } from 'react-eimzo-solijonovmuhammadali';

interface Item {
  id: string;
  name: string;
}

const App: React.FC = () => {
  const { items, loading, error, create, update, remove } = useCrud<Item>({
    fetchItems: async () => {
      return [
        { id: '1', name: 'Item 1' },
        { id: '2', name: 'Item 2' }
      ];
    },
    createItem: async (item: Item) => {
      console.log('Yangi element qo\'shildi:', item);
    },
    updateItem: async (id: string, item: Item) => {
      console.log(`Element yangilandi ${id}:`, item);
    },
    deleteItem: async (id: string) => {
      console.log(`Element o'chirildi ${id}`);
    }
  });

  useEffect(() => {
    if (error) {
      console.error('Xato:', error);
    }
  }, [error]);

  return (
    <div>
      <h1>CRUD Misol TypeScriptda</h1>
      {loading ? <p>Yuklanmoqda...</p> : items.map(item => <p key={item.id}>{item.name}</p>)}
    </div>
  );
};

export default App;


### Nima yozilganini tushuntirish:

1. **O'rnatish bo'limi**: Qanday qilib paketni `npm` yoki `yarn` orqali o'rnatish kerakligi tushuntiriladi.
2. **Foydalanish bo'limi**: JavaScript va TypeScript yordamida CRUD hook'ni qanday ishlatish bo'yicha misollar beriladi.
3. **CRUD Hook API**: Hook'da mavjud funksiyalar va ularning vazifalari qisqacha tushuntiriladi.

Bu fayl paketni boshqa foydalanuvchilarga tushunish va ishlatishni osonlashtiradi. O'z loyihangiz uchun uni to'ldirishingiz mumkin.
```
