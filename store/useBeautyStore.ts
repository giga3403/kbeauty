import { create } from 'zustand';

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stockStatus: 'High Stock' | 'Medium Stock' | 'Out of Stock';
}

interface BeautyState {
  skinType: string;
  concerns: string[];
  budget: number;
  selectedProducts: Product[];
  setSkinType: (type: string) => void;
  setConcerns: (concerns: string[]) => void;
  setBudget: (budget: number) => void;
  toggleProduct: (product: Product) => void;
  clearState: () => void;
}

export const useBeautyStore = create<BeautyState>((set) => ({
  skinType: '',
  concerns: [],
  budget: 100,
  selectedProducts: [],
  setSkinType: (type) => set({ skinType: type }),
  setConcerns: (concerns) => set({ concerns }),
  setBudget: (budget) => set({ budget }),
  toggleProduct: (product) => set((state) => {
    const exists = state.selectedProducts.find((p) => p.id === product.id);
    if (exists) {
      return { selectedProducts: state.selectedProducts.filter((p) => p.id !== product.id) };
    }
    return { selectedProducts: [...state.selectedProducts, product] };
  }),
  clearState: () => set({ skinType: '', concerns: [], budget: 100, selectedProducts: [] }),
}));
