import React from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import BookCards from "./BookCards.js";
import { useState, useEffect } from "react";
import { InputGroup, Input, InputGroupAddon, Spinner } from "reactstrap";
import { FormGroup } from "@material-ui/core";
import { toast } from "react-toastify";
import "../Styles/Books.scss";
import "../Styles/Resource.scss";
import "react-toastify/dist/ReactToastify.css";

function Resources() {
  const [maxResults, setMaxResults] = useState(10);
  const [startIndex, setStartIndex] = useState(1);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  /*
   * Class Name: BookCards.js
   * Date: 28/04/2021
   *
   * @author Nathan Hodgkiss, X17381176
   *
   * @reference https://www.youtube.com/watch?v=kL3H-wTWPSQ
   * @reference https://developers.google.com/books/docs/v1/using#PerformingSearch
   */

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
          toast.error("Cannot find item");
        });
    }
  };

  const onKeyDownHandler = (e) => {
    if (e.keyCode === 13) {
      handleSubmit();
    }
  };

  const handleCards = () => {
    const items = cards.map((item, io) => {
      let thumbnail = "";
      try {
        if (item.volumeInfo.imageLinks.thumbnail) {
          thumbnail = item.volumeInfo.imageLinks.thumbnail;
        }
      } catch (err) {
        console.log("Error finding thumbnail");
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
    <div className="search" data-testid="search">
      <div className="journal__header">
        <h3>Resources</h3>
      </div>
      <div className="search_area" data-testid="search-input">
        <InputGroup size="lg" className="mb-3">
          <Input
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDownHandler}
            data-testid="search-input-bar"
          />
          <InputGroupAddon addonType="append" onClick={handleSubmit}>
            <Button
              variant="contained"
              color="secondary"
              data-testid="search-button"
              data-cy="search"
            >
              Search
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
      {handleCards()}
    </div>
  );
}

export default Resources;
