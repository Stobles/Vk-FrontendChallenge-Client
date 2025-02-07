import { Cat } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

export type CatState = {
  favorites: Cat[];
};

const initialState: CatState = {
  favorites: [],
};

export const FavoriteCatsSlice = createSlice({
  name: "favorites_cats_slice",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<Cat>) {
      const isFavorite = state.favorites.find(
        (cat) => cat.id === action.payload.id
      );

      if (isFavorite) {
        state.favorites = state.favorites.filter(
          (cat) => cat.id !== action.payload.id
        );
        toast.error("Котик был удален из избранного");
      } else {
        state.favorites.push(action.payload);
        toast.success("Котик был добавлен в избранное");
      }
    },
  },
});

export const { toggleFavorite } = FavoriteCatsSlice.actions;

export const catsReducer = FavoriteCatsSlice.reducer;
