import { create } from 'zustand';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface AppStore {
  darkMode: boolean;
  toggleDarkMode: () => void;

  chatOpen: boolean;
  toggleChat: () => void;

  cartOpen: boolean;
  toggleCart: () => void;

  wishlistOpen: boolean;
  toggleWishlistPanel: () => void;

  // Wishlist
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;

  // Cart
  cart: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: () => number;
  cartCount: () => number;

  // Viewed Products
  viewedProducts: string[];
  addToViewed: (productId: string) => void;
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

  chatOpen: false,
  toggleChat: () => set((state) => ({ chatOpen: !state.chatOpen })),

  cartOpen: false,
  toggleCart: () => set((state) => ({ cartOpen: !state.cartOpen })),

  wishlistOpen: false,
  toggleWishlistPanel: () => set((state) => ({ wishlistOpen: !state.wishlistOpen })),

  // Wishlist
  wishlist: [],
  toggleWishlist: (productId: string) => {
    set((state) => {
      const wishlist = state.wishlist.includes(productId)
        ? state.wishlist.filter((id) => id !== productId)
        : [...state.wishlist, productId];
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      return { wishlist };
    });
  },
  isInWishlist: (productId: string) => get().wishlist.includes(productId),

  // Cart
  cart: [],
  addToCart: (item: Omit<CartItem, 'quantity'>) => {
    set((state) => {
      const existing = state.cart.find((i) => i.id === item.id);
      let cart: CartItem[];
      if (existing) {
        cart = state.cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        cart = [...state.cart, { ...item, quantity: 1 }];
      }
      localStorage.setItem('cart', JSON.stringify(cart));
      return { cart, cartOpen: true };
    });
  },
  removeFromCart: (productId: string) => {
    set((state) => {
      const cart = state.cart.filter((i) => i.id !== productId);
      localStorage.setItem('cart', JSON.stringify(cart));
      return { cart };
    });
  },
  updateQuantity: (productId: string, quantity: number) => {
    set((state) => {
      const cart = state.cart.map((i) =>
        i.id === productId ? { ...i, quantity: Math.max(0, quantity) } : i
      ).filter((i) => i.quantity > 0);
      localStorage.setItem('cart', JSON.stringify(cart));
      return { cart };
    });
  },
  clearCart: () => {
    localStorage.removeItem('cart');
    set({ cart: [] });
  },
  cartTotal: () => get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
  cartCount: () => get().cart.reduce((sum, item) => sum + item.quantity, 0),

  // Viewed Products
  viewedProducts: [],
  addToViewed: (productId: string) => {
    set((state) => {
      const viewed = [productId, ...state.viewedProducts.filter((id) => id !== productId)].slice(0, 20);
      localStorage.setItem('viewedProducts', JSON.stringify(viewed));
      return { viewedProducts: viewed };
    });
  },
}));