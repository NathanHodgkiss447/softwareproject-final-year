import * as React from "react";
import * as ReactDOM from "react-dom";
import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

import Resources from "../Components/Resources";

test("Renders the correct resources content", () => {
  render(<Resources />);

  const search = screen.getByTestId("search");
  const searchInput = screen.getByTestId("search-input");
  const searchButton = screen.getByTestId("search-button");
  const searchInputBar = screen.getByTestId("search-input-bar");

  expect(search).toBeInTheDocument();
  expect(searchInput).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();

  expect(search).toHaveTextContent("Resources");
  expect(searchInputBar.placeholder).toBe("Search");
});

//Snapshot Test
it("renders entire resource sections structure correctly", () => {
  const resources = renderer.create(<Resources />).toJSON();
  expect(resources).toMatchSnapshot();
});
