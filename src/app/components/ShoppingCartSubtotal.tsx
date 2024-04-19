import { graphql } from "@/gql";
import { useQuery } from "@apollo/client";
import { PurchaseType, useCartContext } from "../CartContext";
import { useEffect, useState } from "react";

const cartProducts = graphql(/* GraphQL */ `
  query cartProducts($ids: [ID!], $first: Int!) {
    products(where: { ids: $ids }, channel: "default-channel", first: $first) {
      edges {
        node {
          id
          variants {
            id
            name
            pricing {
              price {
                gross {
                  amount
                }
              }
            }
          }
        }
      }
    }
  }
`);

export const ShoppingCartSubtotal = () => {
  const [subtotal, setSubtotal] = useState(0);
  const { cartItems } = useCartContext();
  const { data, loading } = useQuery(cartProducts, {
    variables: {
      ids: cartItems.map((item) => item.id),
      first: cartItems.length,
    },
  });
  const products = data?.products?.edges;

  useEffect(() => {
    const updatedSubtotal = cartItems.reduce((sum, cartItem) => {
      const { id, purchaseType } = cartItem;
      const product = products?.find((product) => product.node.id === id);

      const variantInfo = product?.node.variants?.find((variant) => {
        if (purchaseType === PurchaseType.BeatExclusive) {
          return variant.name === "Exclusive";
        }

        return variant.name === "Lease";
      });

      const price = variantInfo?.pricing?.price?.gross.amount;

      if (price) {
        const updatedSubtotal = sum + price;
        return updatedSubtotal;
      }

      return sum;
    }, 0);

    setSubtotal(updatedSubtotal);
  }, [cartItems, products]);

  return loading ? (
    ""
  ) : (
    <span style={{ fontFamily: "var(--font-courier-prime-bold)" }}>
      {Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(subtotal)}
    </span>
  );
};
