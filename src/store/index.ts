import create from 'zustand';

import { Item } from '@/data/ecommerce';

export interface CartItem {
  id: number;
  item: Item;
  quantity: number;
  size: string;
}

interface Store {
  cartItems: CartItem[];
  addItem: (item: CartItem) => void;
}

export const useStore = create<Store>((set) => ({
  cartItems: [],
  addItem: (item: CartItem) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
  // updateItem: (item: CartItem) => set((state) => ({}))
}));
