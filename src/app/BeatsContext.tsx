"use client";

import { graphql } from "@/gql";
import { useQuery } from "@apollo/client";
import isEqual from "lodash.isequal";
import { createContext, useContext, useEffect, useState } from "react";
import { usePrevious } from "./hooks/usePrevious";
import { PlayList } from "react-modern-audio-player";

type Filters = {
  exclusiveAvailable: boolean;
  leaseAvailable: boolean;
  bpmRange: number[];
};

interface BeatsContextValue {
  beats?: PlayList;
  setBeats: React.Dispatch<React.SetStateAction<PlayList | undefined>>;
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultFilters = {
  exclusiveAvailable: false,
  leaseAvailable: false,
  bpmRange: [60, 180],
};

const BeatsContext = createContext<BeatsContextValue | undefined>(undefined);

const latestBeats = graphql(/* GraphQL */ `
  query latestBeats($first: Int!) {
    products(
      first: $first
      channel: "default-channel"
      where: { productType: { eq: "UHJvZHVjdFR5cGU6MQ==" } }
    ) {
      edges {
        node {
          id
          name
          description
          variants {
            id
            name
            quantityAvailable
          }
          metadata {
            key
            value
          }
        }
      }
    }
  }
`);

const getAudioUrl = (fileName?: string) => `/beats/${fileName}`;

export const BeatsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { data, loading } = useQuery(latestBeats, { variables: { first: 20 } });
  const [beats, setBeats] = useState<PlayList | undefined>();
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [isLoading, setIsLoading] = useState(false);

  const prevFilters = usePrevious(filters);

  useEffect(() => {
    const beatData = data?.products?.edges.map(({ node }, id) => {
      const src = getAudioUrl(
        node.metadata.find((item) => item.key === "fileName")?.value
      );

      const bpm = node.metadata.find((item) => item.key === "bpm")?.value;

      return {
        id,
        src,
        name: node.name,
        img: "yahtzenLogo.jpg",
        writer: `${bpm} bpm`,
        trackId: node.id,
      };
    });

    setBeats(beatData);
  }, [data, setBeats]);

  useEffect(() => {
    if (data && !isEqual(filters, prevFilters)) {
      const filteredBeats = data?.products?.edges
        .filter(({ node }, id) => {
          let conditions = [];
          const { variants, metadata } = node;

          const exclusiveInfo = variants
            ? variants.find(({ name }) => name === "Exclusive")
            : null;

          if (filters.leaseAvailable) {
            // If exclusive beat is yet to sell, we still have leases available
            const isLeaseAvailable = exclusiveInfo?.quantityAvailable == 1;
            conditions.push(isLeaseAvailable);
          }

          if (filters.exclusiveAvailable) {
            // If the beat has yet to be leased, exclusive rights are still available for purchase
            const leaseInfo = variants
              ? variants.find(({ name }) => name === "Lease")
              : null;

            const isExclusiveAvailable =
              exclusiveInfo?.quantityAvailable &&
              exclusiveInfo.quantityAvailable > 0 &&
              leaseInfo?.quantityAvailable === 50;

            conditions.push(isExclusiveAvailable);
          }

          const bpm = metadata.find((item) => item.key === "bpm")?.value;
          const isBpmInRange =
            bpm &&
            Number(bpm) >= filters.bpmRange[0] &&
            Number(bpm) <= filters.bpmRange[1];

          conditions.push(isBpmInRange);

          return conditions.every((condition) => condition === true);
        })
        .map(({ node }, id) => {
          const src = getAudioUrl(
            node.metadata.find((item) => item.key === "fileName")?.value
          );

          const bpm = node.metadata.find((item) => item.key === "bpm")?.value;

          return {
            id,
            src,
            name: node.name,
            img: "yahtzenLogo.jpg",
            writer: `${bpm} bpm`,
            trackId: node.id,
          };
        });

      setBeats(filteredBeats);
    }
  }, [filters, prevFilters, data]);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading, setIsLoading]);

  return (
    <BeatsContext.Provider
      value={{ beats, setBeats, filters, setFilters, isLoading, setIsLoading }}
    >
      {children}
    </BeatsContext.Provider>
  );
};

export const useBeatsContext = () => {
  const beatsContext = useContext(BeatsContext);

  if (beatsContext === undefined) {
    throw new Error("useBeatsContext must be inside a BeatsContextProvider");
  }
  return beatsContext;
};
