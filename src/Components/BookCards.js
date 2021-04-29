import React from "react";
import { useState } from "react";
import { Card, CardTitle, CardImg, CardBody, Button, Modal } from "reactstrap";
import "../Styles/BookCard.scss";

/*
 * Class Name: BookCards.js
 * Date: 28/04/2021
 *
 * @author Nathan Hodgkiss, X17381176
 *
 * @reference https://www.youtube.com/watch?v=kL3H-wTWPSQ
 *
 */

const BookCards = ({
  thumbnail,
  title,
  pageCount,
  language,
  authors,
  publisher,
  description,
  previewLink,
  infoLink,
}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Card style={{ width: "233px" }} className="m-auto mb-3">
      <CardImg
        top
        style={{ width: "80%", height: "233px" }}
        src={thumbnail}
        alt="Image"
      />
      <CardBody>
        <CardTitle className="card-title">{title}</CardTitle>
        <Button onClick={toggle}>More Info</Button>
      </CardBody>
      <Modal isOpen={modal} toggle={toggle}>
        <div className="modal-header d-flex justifyy-content-center">
          <h5 className="modal-title text-center" id="ModalLabel">
            {title}
          </h5>
          <button
            ari-label="Close"
            className="close"
            type="button"
            onClick={toggle}
          >
            <span ari-label="Close">X</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="d-flex justify-content-between">
            <img
              src={thumbnail}
              alt={title}
              style={{ height: "233px", padding: "5px" }}
            />
            <div>
              <p>Page Count: {pageCount}</p>
              <p>Language: {language}</p>
              <p>Authors: {authors}</p>
              <p>Publisher: {publisher}</p>
            </div>
          </div>
          <div className="mt=3">{description}</div>
        </div>
        <div className="modal-footer">
          <div className="left-slide">
            <a
              href={previewLink}
              className="btn-link"
              color="default"
              type="button"
              target="blank"
              Preview
              Link
            >
              Preview Link
            </a>
          </div>
          <div className="right-slide">
            <a
              href={infoLink}
              className="btn-link"
              color="default"
              type="button"
              target="blank"
              Preview
              Link
            >
              Info Link
            </a>
          </div>
        </div>
      </Modal>
    </Card>
  );
};

export default BookCards;
