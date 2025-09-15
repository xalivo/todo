import {AppViews} from "../common/enums.ts";
import {create} from "zustand/react";

interface IAppViewStore {
    view: AppViews;
    setView: (view: AppViews) => void;
}

const useAppViewStore = create<IAppViewStore>((set) => ({
    view: AppViews.Home,
    setView: (view: AppViews) => set({view})
}));

export default useAppViewStore;