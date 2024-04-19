"use client";

import { useCallback, useState } from "react";
import { useBeatsContext } from "../BeatsContext";
import { FilterPanelStyled } from "./FilterPanelStyled";
import "rc-slider/assets/index.css";
import TooltipSlider from "./TooltipSlider";

export const FilterPanel = () => {
  const [bpmRange, setBpmRange] = useState([60, 180]);
  const [exclusiveAvailable, setExclusiveAvailable] = useState(false);
  const [leaseAvailable, setLeaseAvailable] = useState(false);
  const { setFilters } = useBeatsContext();

  const onApplyFilters = useCallback(() => {
    setFilters({
      exclusiveAvailable,
      leaseAvailable,
      bpmRange,
    });
  }, [setFilters, exclusiveAvailable, leaseAvailable, bpmRange]);

  return (
    <FilterPanelStyled>
      <div className="filter-panel-container">
        <div className="flex flex-col pb-5">
          <span className="text-center">
            Selected BPM Range: {bpmRange[0]}-{bpmRange[1]}
          </span>
          <div
            style={{
              display: "flex",
              width: "95%",
              justifyContent: "center",
              height: 50,
              paddingTop: 10,
              marginBottom: 15,
            }}
          >
            <TooltipSlider
              style={{ width: "80%" }}
              range
              min={60}
              max={180}
              value={bpmRange}
              tipFormatter={(value: number) => `${value} BPM`}
              marks={{
                60: "60 BPM",
                180: "180 BPM",
              }}
              onChange={(values) => {
                setBpmRange(values as number[]);
              }}
            />
          </div>
          <span className="filter-checkbox">
            <input
              type="checkbox"
              id="includeExclusive"
              onChange={(e) => {
                setExclusiveAvailable(e.target.checked);
              }}
            />
            <label htmlFor="includeExclusive" className="filter-checkbox-label">
              Exclusive Available
            </label>
          </span>
          <span className="filter-checkbox">
            <input
              type="checkbox"
              id="includeLease"
              onChange={(e) => {
                setLeaseAvailable(e.target.checked);
              }}
            />
            <label htmlFor="includeLease" className="filter-checkbox-label">
              Lease Available
            </label>
          </span>
        </div>
        <button
          type="submit"
          className="apply-filters-btn"
          onClick={onApplyFilters}
        >
          Apply Filters
        </button>
      </div>
    </FilterPanelStyled>
  );
};
