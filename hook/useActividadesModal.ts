import { create } from "zustand";

interface ActividadesModelStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useActividadesModal = create<ActividadesModelStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useActividadesModal;