import React from "react";
import { render } from "react-dom";
import { TestLayer } from "@parcel-test/layers";
import { DeckGL } from "@deck.gl/react";

const INITIAL_VIEW_STATE = {
  longitude: -74,
  latitude: 40.7,
  zoom: 11,
  maxZoom: 16,
  pitch: 0,
  bearing: 0
};

export default function App() {
  const layers = [
    new TestLayer({ id: "test-layer" })
  ];

  return (
    <DeckGL layers={layers} initialViewState={INITIAL_VIEW_STATE} controller={true} />
  );
}

render(<App />, document.getElementById("root"));