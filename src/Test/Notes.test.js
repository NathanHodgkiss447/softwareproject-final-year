import * as React from "react";
import * as ReactDOM from "react-dom";
import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

import EditorNote from "../Components/Editor/EditorNote";
import Note from "../Components/Note";
import SidebarItem from "../Components/SidebarItem/SidebarItem";
import SidebarNotes from "../Components/SidebarNotes/SidebarNotes";

it("renders editor correctly", () => {
  const editor = renderer.create(<Note />).toJSON();
  expect(editor).toMatchSnapshot();
});
