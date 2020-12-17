import React from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import BookCards from "./BookCards.js";
import { useState, useEffect } from "react";
import { InputGroup, Input, InputGroupAddon, Spinner } from "reactstrap";
import { FormGroup } from "@material-ui/core";
import { ToastContainer, toast } from "react-toastify";
import "../Styles/Books.scss";
import "../Styles/Resource.scss";
import "react-toastify/dist/ReactToastify.css";

function Resources() {
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  //Making the API call
  const handleSubmit = () => {
    setLoading(true);
    if (maxResults > 40 || maxResults < 1) {
      toast.error("Max results must be between 1 and 40");
    } else {
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${query}&maxReuslts=${maxResults}startIndex=${startIndex}`
        )
        .then((res) => {
          if (startIndex > res.data.totalItems || startIndex < 1) {
            toast.error(
              `Max results must be between 1 and ${res.data.totalItems}`
            );
          } else {
            if (res.data.items.length > 0) {
              setCards(res.data.items);
              setLoading(false);
            }
          }
        })
        .catch((err) => {
          setLoading(true);
          toast.error(`${err.response.data.error.message}`);
        });
    }
  };

  const handleCards = () => {
    console.log(cards);
    const items = cards.map((item, io) => {
      let thumbnail = "";
      if (item.volumeInfo.imageLinks.thumbnail) {
        thumbnail = item.volumeInfo.imageLinks.thumbnail;
      }

      return (
        <div className="col-lg-4" key={item.id}>
          <BookCards
            thumbnail={thumbnail}
            title={item.volumeInfo.title}
            pageCount={item.volumeInfo.pageCount}
            language={item.volumeInfo.language}
            authors={item.volumeInfo.authors}
            publisher={item.volumeInfo.publisher}
            description={item.volumeInfo.description}
            previewLink={item.volumeInfo.previewLink}
            infoLink={item.volumeInfo.infoLink}
          />
        </div>
      );
    });
    if (loading) {
      return (
        <div className="d-flex justify-content -center mt-3">
          <Spinner style={{ width: "3rem", height: "3rem" }} />
        </div>
      );
    } else {
      return (
        <div className="container ,my-5">
          <div className="row">{items}</div>
        </div>
      );
    }
  };

  return (
    <div className="search">
      <div className="journal__header">
        <h3>Resources</h3>
      </div>
      <div className="search_area">
        <InputGroup size="lg" className="mb-3">
          <Input
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <InputGroupAddon addonType="append" onClick={handleSubmit}>
            <Button variant="contained" color="secondary">
              Search
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
      <div className="d-flex">
        <FormGroup className="ml-5">
          <Input
            type="number"
            id="maxResults"
            placeholder="Max Results"
            value={maxResults}
            onChange={(e) => setMaxResults(e.target.value)}
          />
        </FormGroup>
        <FormGroup className="ml-5">
          <Input
            type="number"
            id="startIndex"
            placeholder="Start Index"
            value={startIndex}
            onChange={(e) => setStartIndex(e.target.value)}
          />
        </FormGroup>
        <ToastContainer />
      </div>
      {handleCards()}
    </div>
  );
}

export default Resources;
