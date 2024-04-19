import React, { useEffect, useState } from "react";
import useTrackPurchaseInfo from "../hooks/useTrackInfo";
import { PurchaseType, useCartContext } from "../CartContext";

const getBuyBtnTitle = (
  trackName: string,
  isItemInCart: boolean,
  isExclusiveAvailable: boolean,
  isLeaseAvailable: boolean
) => {
  if (isItemInCart) {
    return `${trackName} is already in your cart!`;
  } else if (isExclusiveAvailable) {
    return `Purchase exclusive rights to ${trackName}`;
  } else if (isLeaseAvailable) {
    return `Exclusive rights are unavailable because ${trackName} is already being leased`;
  }

  return `Exclusive rights for ${trackName} have already been purcahsed`;
};

const getLeaseBtnTitle = (
  trackName: string,
  isItemInCart: boolean,
  isLeaseAvailable: boolean
) => {
  if (isItemInCart) {
    return `${trackName} is already in your cart!`;
  } else if (isLeaseAvailable) {
    return `Purchase lease for ${trackName}`;
  }

  return `Exclusive rights for ${trackName} have already been purchased`;
};

const BuyLeaseButtons = ({ trackId }: { trackId: string }) => {
  const { loading, isExclusiveAvailable, isLeaseAvailable, trackName } =
    useTrackPurchaseInfo(trackId);
  const { cartItems, setCartItems, setIsOpen } = useCartContext();
  const [isItemInCart, setIsItemInCart] = useState(false);

  useEffect(() => {
    const itemInCart = cartItems.find((item) => item.id === trackId);
    setIsItemInCart(!!itemInCart);
  }, [cartItems, trackId]);

  return loading ? (
    "Loading"
  ) : (
    <>
      <button
        disabled={isItemInCart || !isExclusiveAvailable}
        onClick={() => {
          setCartItems([
            ...cartItems,
            { id: trackId as string, purchaseType: PurchaseType.BeatExclusive },
          ]);
          setIsOpen(true);
        }}
        title={getBuyBtnTitle(
          trackName as string,
          isItemInCart,
          isExclusiveAvailable as boolean,
          isLeaseAvailable
        )}
        className="buy-lease-button"
      >
        Buy
      </button>
      <button
        disabled={isItemInCart || !isLeaseAvailable}
        onClick={() => {
          setCartItems([
            ...cartItems,
            { id: trackId as string, purchaseType: PurchaseType.BeatLease },
          ]);
          setIsOpen(true);
        }}
        title={getLeaseBtnTitle(
          trackName as string,
          isItemInCart,
          isLeaseAvailable
        )}
        className="buy-lease-button"
      >
        Lease
      </button>
    </>
  );
};

export default BuyLeaseButtons;
