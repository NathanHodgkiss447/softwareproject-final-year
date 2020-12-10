import React from "react";
import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { InputGroup, Input, InputGroupAddon } from "reactstrap";
import "../Styles/Books.scss";
import { FormGroup } from "@material-ui/core";

function Books() {
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState("");

  return (
    <div className="search">
      <div className="search_area">
        <InputGroup size="lg" className="mb-3">
          <Input placeholder="Search" />
          <InputGroupAddon addonType="append">
            <Button variant="contained" color="secondary">
              Search
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="d-flex">
        <FormGroup className="ml-5">
          <Input type="number" id="maxResults" placeholder="Max Results" />
        </FormGroup>
        <FormGroup className="ml-5">
          <Input type="number" id="startIndex" placeholder="Start Index" />
        </FormGroup>
      </div>
    </div>
  );
}
export default Books;
