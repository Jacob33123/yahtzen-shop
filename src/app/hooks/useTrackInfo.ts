import { graphql } from "@/gql";
import { useQuery } from "@apollo/client";

const useTrackPurchaseInfo = (trackId: string) => {
  const productInfoRaw = graphql(/* GraphQL */ `
    query productInfo($trackId: ID!) {
      product(id: $trackId) {
        id
        name
        variants {
          id
          name
          quantityAvailable
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
  `);

  const { data, loading } = useQuery(productInfoRaw, {
    variables: { trackId },
  });

  const trackName = data?.product?.name;
  const productVariants = data?.product?.variants;

  const exclusiveInfo = productVariants
    ? productVariants.find(({ name }) => name === "Exclusive")
    : null;

  const leaseInfo = productVariants
    ? productVariants.find(({ name }) => name === "Lease")
    : null;

  const isExclusiveAvailable =
    exclusiveInfo?.quantityAvailable &&
    exclusiveInfo.quantityAvailable > 0 &&
    leaseInfo?.quantityAvailable === 50;

  const isLeaseAvailable = exclusiveInfo?.quantityAvailable == 1;

  return {
    loading,
    isExclusiveAvailable,
    isLeaseAvailable,
    trackName,
    exclusiveInfo,
    leaseInfo,
  };
};

export default useTrackPurchaseInfo;
