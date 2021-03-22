import * as React from "react";
import * as ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import ContactForm from "../Components/ContactForm";
import { render, screen, cleanup } from "@testing-library/react";

test("Renders the correct journal form content", () => {
  // Render the component to the DOM
  render(<ContactForm />);
  const form = screen.getByTestId("form-test");
  const placeholderName = screen.getByTestId("placeholder-name");
  const placeholderLanguage = screen.getByTestId("placeholder-language");
  const placeholderError = screen.getByTestId("placeholder-error");
  const placeholderSolution = screen.getByTestId("placeholder-solution");

  //Testing if form exists
  expect(form).toBeInTheDocument();

  //Testing to check for appropriate placeholders
  expect(placeholderName.placeholder).toBe("Project Name");
  expect(placeholderLanguage.placeholder).toBe("Programming Language");
  expect(placeholderError.placeholder).toBe("Error");
  expect(placeholderSolution.placeholder).toBe("Solution");
});

//Snapshot Test
it("renders entire journal sections structure correctly", () => {
  const journalForm = renderer.create(<ContactForm />).toJSON();
  expect(journalForm).toMatchSnapshot();
});
