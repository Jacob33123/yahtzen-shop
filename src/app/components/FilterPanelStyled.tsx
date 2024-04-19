import styled from "styled-components";

export const FilterPanelStyled = styled.div`
  .filter-panel-container {
    display: flex;
    width: 100%;
    flex-direction: column;
    background-color: black;
    border-width: 2px;
    border-color: var(--spectrum-global-color-gray-900);
    overflow: hidden;
    border-radius: 10px;
    padding: 10px;
    margin-left: 10px;
    font-family: var(--font-courier-prime);
    font-size: 16px;
    color: var(--spectrum-global-color-gray-900);
  }

  .filter-checkbox {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 1em;
  }

  .filter-checkbox-label {
    padding-left: 10px;
    padding-top: 3px;
    font-size: 14px;
  }

  input[type="checkbox"] {
    transform: scale(0.9);
  }

  .apply-filters-btn {
    border-width: 1px;
    border-color: #ffffff;
    border-radius: 3px;
    font-size: 12px;
    padding: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin: 0px 15px 10px 15px;
    &:hover {
      transition: transform 0.1s;
      transform: scale(1.02);
    }
    &:active {
      transition: all 0.1s;
      transform: scale(0.97);
      color: #909090;
      border-color: #909090;
    }
  }

  .rc-slider {
    .rc-slider-track {
      background-color: #d1d1d1;
    }

    .rc-slider-rail {
      background-color: #262626;
    }

    .rc-slider-handle-1 {
      background-color: #545454;
      border-color: #545454;
      opacity: 1;
    }

    .rc-slider-handle-2 {
      background-color: #545454;
      border-color: #545454;
      opacity: 1;
    }

    .rc-slider-handle-dragging {
      border: solid 2px #d1d1d1;
      box-shadow: 0 0 5px #ebebeb;
    }

    .rc-slider-mark-text {
      color: #ebebeb;
      width: 55px;
    }
  }
`;
