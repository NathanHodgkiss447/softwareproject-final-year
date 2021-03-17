import * as React from "react";
import * as ReactDOM from "react-dom";
import { render, screen, cleanup } from "@testing-library/react";

import Contacts from "../Components/Contacts";

test("Renders the correct journal content", () => {
  // Render the component to the DOM
  render(<Contacts />);
  const todoElement = screen.getByTestId("journal-test");
  expect(todoElement).toBeInTheDocument();

  // Use DOM API's to make assertions
});
