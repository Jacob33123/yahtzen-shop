"use client";

import { createContext, useContext, useState } from "react";

export enum PurchaseType {
  BeatLease = "beat-lease",
  BeatExclusive = "beat-exclusive",
}

interface CartItem {
  id: string;
  purchaseType: PurchaseType;
}

interface CartContextValue {
  cartItems: CartItem[];
  isOpen: boolean;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartContext.Provider
      value={{ cartItems, isOpen, setCartItems, setIsOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const cartContext = useContext(CartContext);

  if (cartContext === undefined) {
    throw new Error("useCartContext must be inside a CartContextProvider");
  }

  return cartContext;
};
