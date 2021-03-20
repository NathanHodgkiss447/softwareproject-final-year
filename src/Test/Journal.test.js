import * as React from "react";
import * as ReactDOM from "react-dom";
import { render, screen, cleanup } from "@testing-library/react";

import Contacts from "../Components/Contacts";
import { CardActions } from "@material-ui/core";

test("Renders the correct journal content", () => {
  // Render the component to the DOM
  render(<Contacts />);
  const journal = screen.getByTestId("journal-test");
  const projectNameHeading = screen.getByTestId("heading-name");
  const programmingLanguageHeading = screen.getByTestId("heading-language");
  const errorHeading = screen.getByTestId("heading-error");
  const solutionHeading = screen.getByTestId("heading-solution");
  const actionsHeading = screen.getByTestId("heading-actions");

  expect(journal).toBeInTheDocument();
  expect(projectNameHeading).toHaveTextContent("Project Name");
  expect(programmingLanguageHeading).toHaveTextContent("Programming Language");
  expect(errorHeading).toHaveTextContent("Error");
  expect(solutionHeading).toHaveTextContent("Solution");
  expect(actionsHeading).toHaveTextContent("Actions");

  // Use DOM API's to make assertions
});
