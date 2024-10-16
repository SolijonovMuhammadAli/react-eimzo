import { useState, useEffect } from 'react'

export interface CRUDOptions<T> {
  fetchItems: () => Promise<T[]>
  createItem: (item: T) => Promise<void>
  updateItem: (id: string, item: T) => Promise<void>
  deleteItem: (id: string) => Promise<void>
}

export function useCrud<T>(options: CRUDOptions<T>) {
  const [items, setItems] = useState<T[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    setLoading(true)
    options
      .fetchItems()
      .then((fetchedItems) => setItems(fetchedItems))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [options])

  const create = async (item: T) => {
    try {
      setLoading(true)
      await options.createItem(item)
      setItems((prevItems) => [...prevItems, item])
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const update = async (id: string, item: T) => {
    try {
      setLoading(true)
      await options.updateItem(id, item)
      setItems((prevItems) => prevItems.map((i) => ((i as any).id === id ? item : i)))
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const remove = async (id: string) => {
    try {
      setLoading(true)
      await options.deleteItem(id)
      setItems((prevItems) => prevItems.filter((i) => (i as any).id !== id))
    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return {
    items,
    loading,
    error,
    create,
    update,
    remove
  }
}
