import * as React from "react";
import * as ReactDOM from "react-dom";
import { render, screen, cleanup } from "@testing-library/react";

import ContactForm from "../Components/ContactForm";

test("Renders the correct journal form content", () => {
  // Render the component to the DOM
  render(<ContactForm />);
  const todoElement = screen.getByTestId("form-test");
  expect(todoElement).toBeInTheDocument();

  // Use DOM API's to make assertions
});
