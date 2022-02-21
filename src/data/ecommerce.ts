export const itemsMock: Item[] = [
  {
    id: 1,
    title: 'Black t-shirt',
    subtitle: 'Unisex Basic Softstyle T-Shirt',
    image: '/images/remera.webp',
    price: 7.95,
  },
  {
    id: 2,
    title: 'Black hoodie',
    subtitle: 'A Hoodie to enter in flow',
    image: '/images/buzo.webp',
    price: 13,
  },
  {
    id: 3,
    title: 'Black cap',
    subtitle: 'Coolest Cap around',
    image: '/images/gorra.webp',
    price: 23,
  },
];

export interface Item {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  price: number;
}
