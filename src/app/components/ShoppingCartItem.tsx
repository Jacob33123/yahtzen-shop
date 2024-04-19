import { useCallback } from "react";
import { PurchaseType, useCartContext } from "../CartContext";
import useTrackPurchaseInfo from "../hooks/useTrackInfo";

interface Props {
  trackId: string;
  purchaseType: PurchaseType;
}

export default function ShoppingCartItem({ trackId, purchaseType }: Props) {
  const { trackName, exclusiveInfo, leaseInfo } = useTrackPurchaseInfo(trackId);
  const { setCartItems, cartItems } = useCartContext();
  const onRemoveItem = useCallback(() => {
    const updatedCartItems = cartItems.filter((item) => item.id !== trackId);
    console.log("updated cart items: ", updatedCartItems);
    setCartItems(updatedCartItems);
  }, [setCartItems, cartItems, trackId]);
  const purchaseInfo =
    purchaseType === PurchaseType.BeatExclusive ? exclusiveInfo : leaseInfo;

  const price = purchaseInfo?.pricing?.price?.gross.amount;

  return (
    <div className="flex flex-row justify-between p-5 my-1 w-full">
      <div className="flex flex-col">
        <span className="text-lg mb-1">{trackName}</span>
        <span
          className="text-xs underline cursor-pointer"
          onClick={onRemoveItem}
        >
          Remove Item
        </span>
      </div>
      <div className="flex flex-col items-end justify-between">
        <span
          className="mb-1"
          style={{ fontFamily: "var(--font-courier-prime-bold)" }}
        >
          {price
            ? Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(price)
            : ""}
        </span>
        <span className="text-sm italic">{purchaseInfo?.name}</span>
      </div>
    </div>
  );
}
