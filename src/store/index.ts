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
  updateItem: (item: CartItem, id: number) => void;
  deleteItem: (id: number) => void;
}

export const useStore = create<Store>((set) => ({
  cartItems: new Array<CartItem>(),
  addItem: (item: CartItem) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
  updateItem: (item: CartItem, id: number) =>
    set((state) => {
      const updatedItems = state.cartItems.map((cartItem) => ({
        ...(cartItem.id === id ? item : cartItem),
      }));

      return { cartItems: updatedItems };
    }),
  deleteItem: (id: number) =>
    set((state) => {
      const updatedItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== id
      );
      return { cartItems: updatedItems };
    }),
}));
