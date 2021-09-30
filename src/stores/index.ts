import { createContext, useContext } from 'react'
import { configure, observable } from 'mobx'
import productStore from '../stores/Products'
import productStoreAPI from '../stores/ProductsAPI'
configure({ enforceActions: 'observed' })

class RootStore {
  @observable productStore = productStore
  @observable productStoreAPI = productStoreAPI
}

const rootStore = new RootStore()

export const StoreContext = createContext<RootStore>(rootStore)

export const useStore = (): RootStore => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error('You have forgot to use StoreProvider, shame on you.')
  }
  return store
}

export default new RootStore()
