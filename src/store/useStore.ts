import { create } from 'zustand';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface CartItem extends Product {
  quantity: number;
}

interface AppStore {
  darkMode: boolean;
  toggleDarkMode: () => void;

  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (id: string) => void;
  isFavorite: (id: string) => boolean;

  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  cartTotal: () => number;

  viewedProducts: Product[];
  addViewedProduct: (product: Product) => void;

  chatOpen: boolean;
  toggleChat: () => void;

  cartOpen: boolean;
  toggleCartPanel: () => void;
}

export const useStore = create<AppStore>((set, get) => ({
  darkMode: false,
  toggleDarkMode: () => {
    set((state) => {
      const newMode = !state.darkMode;
      if (typeof document !== 'undefined') {
        document.documentElement.classList.toggle('dark', newMode);
        localStorage.setItem('darkMode', JSON.stringify(newMode));
      }
      return { darkMode: newMode };
    });
  },

  favorites: [],
  addFavorite: (product) =>
    set((state) => ({ favorites: [...state.favorites, product] })),
  removeFavorite: (id) =>
    set((state) => ({ favorites: state.favorites.filter((p) => p.id !== id) })),
  isFavorite: (id) => get().favorites.some((p) => p.id === id),

  cart: [],
  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((p) => p.id === product.id);
      if (existing) {
        return {
          cart: state.cart.map((p) =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
          ),
        };
      }
      return { cart: [...state.cart, { ...product, quantity: 1 }] };
    }),
  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((p) => p.id !== id) })),
  updateQuantity: (id, quantity) =>
    set((state) => ({
      cart: state.cart.map((p) => (p.id === id ? { ...p, quantity } : p)),
    })),
  cartTotal: () => get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0),

  viewedProducts: [],
  addViewedProduct: (product) =>
    set((state) => {
      const exists = state.viewedProducts.some((p) => p.id === product.id);
      if (exists) return state;
      const updated = [product, ...state.viewedProducts].slice(0, 10);
      return { viewedProducts: updated };
    }),

  chatOpen: false,
  toggleChat: () => set((state) => ({ chatOpen: !state.chatOpen })),

  cartOpen: false,
  toggleCartPanel: () => set((state) => ({ cartOpen: !state.cartOpen })),
}));
