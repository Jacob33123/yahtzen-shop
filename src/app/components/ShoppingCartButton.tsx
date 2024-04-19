"use client";

import Badge from "@mui/material/Badge";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import { useCartContext } from "../CartContext";

const buttonClass = `
  flex
  w-1/6
  justify-end
  mt-6
  px-1
`;

export const ShoppingCartButton = () => {
  const { cartItems, setIsOpen } = useCartContext();

  return (
    <div className={buttonClass}>
      <Badge
        badgeContent={cartItems.length}
        color="primary"
        className="
            cursor-pointer
            transition-transform 
            duration-100 
            hover:scale-110 
            active:scale-95 
            active:text-gray-600 
            active:border-gray-600
          "
      >
        <ShoppingCart
          fontSize="large"
          onClick={() => {
            setIsOpen(true);
          }}
        />
      </Badge>
    </div>
  );
};
