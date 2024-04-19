import { ShoppingCartButton } from "./ShoppingCartButton";

export const Header = () => {
  return (
    <div className="flex flex-row w-5/6 pb-10 ">
      <h1
        className="flex flex-row w-5/6 justify-center items-center p-3 pl-20 text-7xl"
        style={{ fontFamily: "var(--font-courier-prime-bold)" }}
      >
        YAHTZEN SHOP
      </h1>
      <ShoppingCartButton />
    </div>
  );
};
