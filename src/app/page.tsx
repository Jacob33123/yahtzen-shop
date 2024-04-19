import { BeatsContextProvider } from "./BeatsContext";
import { CartContextProvider } from "./CartContext";
import { BeatList } from "./components/BeatList";
import { FilterPanel } from "./components/FilterPanel";
import { Header } from "./components/Header";
import { ShoppingCartButton } from "./components/ShoppingCartButton";
import ShoppingCartPanel from "./components/ShoppingCartPanel";

export default function Home() {
  return (
    <main className="pl-10 pt-10 flex flex-col w-full items-center">
      <CartContextProvider>
        <Header />
        <ShoppingCartPanel />
        <div className="flex flex-row w-5/6">
          <BeatsContextProvider>
            <div className="w-4/5">
              <BeatList />
            </div>
            <div className="w-1/5">
              <FilterPanel />
            </div>
          </BeatsContextProvider>
        </div>
      </CartContextProvider>
    </main>
  );
}
