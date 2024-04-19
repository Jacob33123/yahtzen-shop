"use client";

import Drawer from "@mui/material/Drawer";
import ShoppingCartItem from "./ShoppingCartItem";
import { useCartContext } from "../CartContext";
import { ShoppingCartSubtotal } from "./ShoppingCartSubtotal";

const drawerWidth = 300;
const buttonClass = `
  bg-black
  border 
  border-solid 
  border-gray-50 
  rounded 
  w-full 
  my-2 
  p-1 
  transition-transform 
  duration-100 
  hover:scale-105 
  active:scale-90 
  active:text-gray-600 
  active:border-gray-600
`;

export default function ShoppingCartPanel() {
  const { cartItems, isOpen, setIsOpen } = useCartContext();

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          fontFamily: "var(--font-courier-prime)",
          backgroundColor: "#222222",
          color: "#f8f8f8",
        },
      }}
      onClose={() => {
        setIsOpen(false);
      }}
    >
      <div className="flex flex-col justify-center items-start w-full p-2 divide-y divide-gray-500">
        <div>
          <h1
            className="text-2xl p-3"
            style={{ fontFamily: "var(--font-courier-prime-bold)" }}
          >
            Shopping Cart
          </h1>
          {cartItems?.length ? (
            <div className="flex flex-row justify-between pb-2 px-4 w-full">
              <span>Subtotal</span>
              <ShoppingCartSubtotal />
            </div>
          ) : null}
        </div>
        {cartItems?.length ? (
          cartItems.map(({ id, purchaseType }) => (
            <ShoppingCartItem
              key={`shopping-cart-item-${purchaseType}-${id}`}
              trackId={id}
              purchaseType={purchaseType}
            />
          ))
        ) : (
          <>
            <span className="w-full h-24 flex justify-center items-center">
              Your cart is empty.
            </span>
            <div className="w-full p-4">
              <button
                className={buttonClass}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Continue Browsing
              </button>
            </div>
          </>
        )}
        <>
          {cartItems?.length ? (
            <div className="w-full p-4">
              <button
                className={buttonClass}
                onClick={() => {
                  setIsOpen(false);
                }}
              >
                Continue Browsing
              </button>
              <button className={`${buttonClass}`}>Proceed to Checkout</button>
            </div>
          ) : null}
        </>
      </div>
    </Drawer>
  );
}
