import styled from "styled-components";

export const BeatListStyled = styled.div`
  .rm-audio-player-provider {
    justify-content: center;
    border: solid var(--spectrum-global-color-gray-900) 2px;
    border-radius: 10px;
    overflow: hidden;
    font-family: var(--font-courier-prime);
    --rm-audio-player-waveform-background: var(
      --spectrum-global-color-gray-600
    );
    --rm-audio-player-interface-container: black;
    --rm-audio-player-progress-bar: var(--spectrum-global-color-gray-900);
    --rm-audio-player-track-current-time: var(--spectrum-global-color-gray-900);
    --rm-audio-player-sortable-list: var(--spectrum-global-color-gray-50);
    --rm-audio-player-selected-list-item-background: var(
      --spectrum-global-color-gray-100
    );
    --rm-audio-player-sortable-list-button-active: var(
      --spectrum-global-color-gray-500
    );
  }

  .title {
    font-size: 1.1em;
    font-family: var(--font-courier-prime-bold);
  }

  .writer {
    font-family: var(--font-courier-prime);
  }

  .track-current-time {
    font-family: var(--font-courier-prime);
    font-size: 1em;
  }

  .track-duration {
    font-family: var(--font-courier-prime);
    font-size: 1em;
  }

  .buy-lease-container {
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    padding-right: 10px;
  }

  .buy-lease-button {
    font-size: 12px;
    padding: 5px 10px 5px 10px;
    margin-top: 5px;
    margin-bottom: 5px;
    border: solid white 1px;
    border-radius: 3px;
    background-color: black;
    color: white;
    &:hover {
      transition: transform 0.1s;
      transform: scale(1.05);
    }
    &:active {
      transition: all 0.1s;
      transform: scale(0.95);
      color: var(--spectrum-global-color-gray-500);
      border-color: var(--spectrum-global-color-gray-500);
    }
  }

  .buy-lease-button:disabled {
    border: solid var(--spectrum-global-color-gray-800) 1px;
    border-radius: 3px;
    background-color: var(--spectrum-global-color-gray-500);
    cursor: default;
    &:hover {
      transform: none;
    }
    &:active {
      color: white;
    }
  }

  .list-item-root-container {
    border-top: solid var(--spectrum-global-color-gray-600) 1px;
  }

  .playlist-content-enter-active {
    max-height: 45vh !important;
  }

  li:hover {
    background-color: var(--spectrum-global-color-gray-75);
  }
`;
