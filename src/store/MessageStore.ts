import {create} from "zustand/react";

interface IMessageStore {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}


const useMessageStore = create<IMessageStore>((set) => ({
    isOpen: false,
    setIsOpen: (open: boolean) => set({isOpen: open})
}));

export default useMessageStore;