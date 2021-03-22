import * as React from "react";
import * as ReactDOM from "react-dom";
import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Contacts from "../Components/Contacts";

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
});

//Snapshot Test
it("renders entire journal sections structure correctly", () => {
  const contacts = renderer.create(<Contacts />).toJSON();
  expect(contacts).toMatchSnapshot();
});
