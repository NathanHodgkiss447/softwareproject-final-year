import React, { useState, useEffect } from "react";
import db from "../firebase";
import ReactTooltip from "react-tooltip";
import nlp from "compromise";
import { v4 as uuidv4 } from "uuid";

//Followed tutorial from CodAffection

// HTTP Errors from: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status

const ContactForm = (props) => {
  const initialFieldValues = {
    projectName: "",
    id: "",
    programmingLanguage: "",
    error: "",
    solution: "",
  };

  var [values, setValues] = useState(initialFieldValues);
  var [id, setId] = useState("");
  var [tooltip, setTooltip] = useState("");

  useEffect(() => {
    if (props.currentId === "")
      setValues({
        ...initialFieldValues,
      });
    else
      setValues({
        projectName: props.projectName,
        id: props.currentId,
        programmingLanguage: props.programmingLanguage,
        error: props.error,
        solution: props.solution,
      });
  }, [props.currentId, props.journalObjects]);

  //Used to update input fields
  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  var form = document.getElementById("Form");
  //Used to submit form
  const handleFormSubmit = (e) => {
    e.preventDefault();
    var id = uuidv4();
    setId(id);
    props.addOrEdit(values, id);
  };

  const handleAnalyse = () => {
    //NLP  TESTING
    let input = nlp(values.error);
    let result = input.sentences().terms().out("array");
    let numberArray = result.filter(Number);
    let numberCollection = numberArray.map(Number);
    let number = numberCollection[0];
    let text = "";
    console.log(number);

    // HTTP Handling
    switch (number) {
      default:
        text = "No suggestion available";
        setTooltip(text);
        break;
      case 100:
        text =
          "HTTP ERROR CODE: This interim response indicates that everything so far is OK and that the client should continue the request, or ignore the response if the request is already finished.";
        setTooltip(text);
        break;
      case 101:
        text =
          "HTTP ERROR CODE: This code is sent in response to an Upgrade request header from the client, and indicates the protocol the server is switching to.";
        setTooltip(text);
        break;
      case 102:
        text =
          "HTTP ERROR CODE: This code indicates that the server has received and is processing the request, but no response is available yet.";
        setTooltip(text);
        break;
      case 103:
        text =
          "HTTP ERROR CODE: This status code is primarily intended to be used with the Link header, letting the user agent start preloading resources while the server prepares a response.";
        setTooltip(text);
        break;
      case 200:
        text =
          "HTTP ERROR CODE: The request has succeeded. The meaning of the success depends on the HTTP method.";
        setTooltip(text);
        break;
      case 201:
        text =
          "HTTP ERROR CODE: The request has succeeded and a new resource has been created as a result. This is typically the response sent after POST requests, or some PUT requests.";
        setTooltip(text);
        break;
      case 202:
        text =
          "HTTP ERROR CODE: The result has been received but not yet acted upon. It is noncommittal, since there is no way in HTTP to later send an asynchronous response indicating the outcome of the request. It is intended for cases where another process or server handles the request, or for batch processing.";
        setTooltip(text);
        break;
      case 203:
        text =
          "HTTP ERROR CODE: This response code means the returned meta-information is not exactly the same as is available from the origin server, but is collected from a local or a third-party copy.";
        setTooltip(text);
        break;
      case 204:
        text =
          "HTTP ERROR CODE: There is no content to send for this request, but the headers may be useful. The user-agent may update its cached headers for this resource with the new ones.";
        setTooltip(text);
        break;
      case 205:
        text =
          "HTTP ERROR CODE: Tells the user-agent to reset the document which sent this request.";
        setTooltip(text);
        break;
      case 206:
        text =
          "HTTP ERROR CODE: This response code is used when the Range header is sent from the client to request only part of a resource.";
        setTooltip(text);
        break;
      case 207:
        text =
          "HTTP ERROR CODE: Conveys information about multiple resources, for situations where multiple status codes might be appropriate.";
        setTooltip(text);
        break;
      case 208:
        text =
          "HTTP ERROR CODE: Used inside a <dav:propstat> response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.";
        setTooltip(text);
        break;
      case 226:
        text =
          "HTTP ERROR CODE: The server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.";
        setTooltip(text);
        break;
      case 300:
        text =
          "HTTP ERROR CODE: The request has more than one possible response. The user-agent or user should choose one of them. ";
        setTooltip(text);
        break;
      case 301:
        text =
          "HTTP ERROR CODE: The URL of the requested resource has been changed permanently. The new URL is given in the response.";
        setTooltip(text);
        break;
      case 302:
        text =
          "HTTP ERROR CODE: This response code means that the URI of requested resource has been changed temporarily. Further changes in the URI might be made in the future. Therefore, this same URI should be used by the client in future requests.";
        setTooltip(text);
        break;
      case 303:
        text =
          "HTTP ERROR CODE: The server sent this response to direct the client to get the requested resource at another URI with a GET request.";
        setTooltip(text);
        break;
      case 304:
        text =
          "HTTP ERROR CODE: This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.";
        setTooltip(text);
        break;
      case 305:
        text =
          "HTTP ERROR CODE: Defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy.";
        setTooltip(text);
        break;
      case 306:
        text =
          "HTTP ERROR CODE: This response code is no longer used; it is just reserved. It was used in a previous version of the HTTP/1.1 specification.";
        setTooltip(text);
        break;
      case 307:
        text =
          "HTTP ERROR CODE: The server sends this response to direct the client to get the requested resource at another URI with same method that was used in the prior request. This has the same semantics as the 302 Found HTTP response code, with the exception that the user agent must not change the HTTP method used: If a POST was used in the first request, a POST must be used in the second request.";
        setTooltip(text);
        break;
      case 308:
        text =
          "HTTP ERROR CODE: This means that the resource is now permanently located at another URI, specified by the Location: HTTP Response header";
        setTooltip(text);
        break;
      case 400:
        text =
          "HTTP ERROR CODE: The server could not understand the request due to invalid syntax.";
        setTooltip(text);
        break;
      case 401:
        text =
          "HTTP ERROR CODE: Although the HTTP standard specifies unauthorized, semantically this response means unauthenticated. That is, the client must authenticate itself to get the requested response.";
        setTooltip(text);
        break;
      case 402:
        text =
          "HTTP ERROR CODE: This response code is reserved for future use. The initial aim for creating this code was using it for digital payment systems, however this status code is used very rarely and no standard convention exists.";
        setTooltip(text);
        break;
      case 403:
        text =
          "HTTP ERROR CODE: The client does not have access rights to the content; that is, it is unauthorized, so the server is refusing to give the requested resource.";
        setTooltip(text);
        break;
      case 404:
        text =
          "HTTP ERROR CODE: The server can not find the requested resource. In the browser, this means the URL is not recognized";
        setTooltip(text);
        break;
      case 405:
        text =
          "HTTP ERROR CODE: The request method is known by the server but has been disabled and cannot be used.";
        setTooltip(text);
        break;
      case 406:
        text =
          "HTTP ERROR CODE: This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content that conforms to the criteria given by the user agent.";
        setTooltip(text);
        break;
      case 407:
        text =
          "HTTP ERROR CODE: This is similar to 401 but authentication is needed to be done by a proxy.";
        setTooltip(text);
        break;
      case 408:
        text =
          "HTTP ERROR CODE: This response is sent on an idle connection by some servers, even without any previous request by the client. It means that the server would like to shut down this unused connection";
        setTooltip(text);
        break;
      case 409:
        text =
          "HTTP ERROR CODE: This response is sent when a request conflicts with the current state of the server.";
        setTooltip(text);
        break;
      case 410:
        text =
          "HTTP ERROR CODE: This response is sent when the requested content has been permanently deleted from server, with no forwarding address";
        setTooltip(text);
        break;
      case 411:
        text =
          "HTTP ERROR CODE: Server rejected the request because the Content-Length header field is not defined and the server requires it.";
        setTooltip(text);
        break;
      case 412:
        text =
          "HTTP ERROR CODE: The client has indicated preconditions in its headers which the server does not meet.";
        setTooltip(text);
        break;
      case 413:
        text =
          "HTTP ERROR CODE: Request entity is larger than limits defined by server; the server might close the connection or return an Retry-After header field.";
        setTooltip(text);
        break;
      case 414:
        text =
          "HTTP ERROR CODE: The URI requested by the client is longer than the server is willing to interpret.";
        setTooltip(text);
        break;
      case 415:
        text =
          "HTTP ERROR CODE: The media format of the requested data is not supported by the server, so the server is rejecting the request.";
        setTooltip(text);
        break;
      case 416:
        text =
          "HTTP ERROR CODE: The range specified by the Range header field in the request can't be fulfilled; it's possible that the range is outside the size of the target URI's data.";
        setTooltip(text);
        break;
      case 417:
        text =
          "HTTP ERROR CODE: This response code means the expectation indicated by the Expect request header field can't be met by the server.";
        setTooltip(text);
        break;
      case 418:
        text =
          "HTTP ERROR CODE: The server refuses the attempt to brew coffee with a teapot.";
        setTooltip(text);
        break;
      case 421:
        text =
          "HTTP ERROR CODE: The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI";
        setTooltip(text);
        break;
      case 422:
        text =
          "HTTP ERROR CODE: The request was well-formed but was unable to be followed due to semantic errors.";
        setTooltip(text);
        break;
      case 423:
        text =
          "HTTP ERROR CODE: The resource that is being accessed is locked.";
        setTooltip(text);
        break;
      case 424:
        text =
          "HTTP ERROR CODE: The request failed due to failure of a previous request.";
        setTooltip(text);
        break;
      case 425:
        text =
          "HTTP ERROR CODE: Indicates that the server is unwilling to risk processing a request that might be replayed.";
        setTooltip(text);
        break;
      case 426:
        text =
          "HTTP ERROR CODE: The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.";
        setTooltip(text);
        break;
      case 428:
        text =
          "HTTP ERROR CODE: The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.";
        setTooltip(text);
        break;
      case 429:
        text =
          "HTTP ERROR CODE: The user has sent too many requests in a given amount of time (rate limiting).";
        setTooltip(text);
        break;
      case 431:
        text =
          "HTTP ERROR CODE: The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.";
        setTooltip(text);
        break;
      case 451:
        text =
          "HTTP ERROR CODE: The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.";
        setTooltip(text);
        break;
      case 500:
        text =
          "HTTP ERROR CODE: The server has encountered a situation it doesn't know how to handle.";
        setTooltip(text);
        break;
      case 501:
        text =
          "HTTP ERROR CODE: The request method is not supported by the server and cannot be handled. The only methods that servers are required to support (and therefore that must not return this code) are GET and HEAD.";
        setTooltip(text);
        break;
      case 502:
        text =
          "HTTP ERROR CODE: This error response means that the server, while working as a gateway to get a response needed to handle the request, got an invalid response.";
        setTooltip(text);
        break;
      case 503:
        text =
          "HTTP ERROR CODE: The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded.";
        setTooltip(text);
        break;
      case 504:
        text =
          "HTTP ERROR CODE: This error response is given when the server is acting as a gateway and cannot get a response in time.";
        setTooltip(text);
        break;
      case 505:
        text =
          "HTTP ERROR CODE: The HTTP version used in the request is not supported by the server.";
        setTooltip(text);
        break;
      case 506:
        text =
          "HTTP ERROR CODE: The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.";
        setTooltip(text);
        break;
      case 507:
        text =
          "HTTP ERROR CODE: The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.";
        setTooltip(text);
        break;
      case 508:
        text =
          "HTTP ERROR CODE: The server detected an infinite loop while processing the request.";
        setTooltip(text);
        break;
      case 510:
        text =
          "HTTP ERROR CODE: Further extensions to the request are required for the server to fulfill it.";
        setTooltip(text);
        break;
      case 511:
        text =
          "HTTP ERROR CODE: The 511 status code indicates that the client needs to authenticate to gain network access.";
        setTooltip(text);
        break;
    }

    //Java Common Errors

    //Python Common Errors

    //JavaScript Common Errors
  };

  return (
    <>
      <form
        autoComplete="off"
        onSubmit={handleFormSubmit}
        className="Form"
        data-testid="form-test"
      >
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            className="form-control"
            placeholder="Project Name"
            name="projectName"
            value={values.projectName}
            onChange={handleInputChange}
            data-testid="placeholder-name"
          />
        </div>
        <div className="form-row">
          <div className="form-group input-group ">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-user"></i>
              </div>
            </div>
            <input
              className="form-control"
              placeholder="Programming Language"
              name="programmingLanguage"
              value={values.programmingLanguage}
              onChange={handleInputChange}
              data-testid={tooltip}
            />
          </div>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Error"
            name="error"
            value={values.error}
            onChange={handleInputChange}
            data-testid="placeholder-error"
            data-tip={tooltip}
          />
        </div>

        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Solution"
            name="solution"
            value={values.solution}
            onChange={handleInputChange}
            data-testid="placeholder-solution"
          />
          <ReactTooltip place="right" type="dark" effect="float" />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value={props.currentId === "" ? "Save" : "Update"}
            className="btn btn-primary btn-block"
          ></input>
        </div>
      </form>
      <button className="btn btn-primary btn-block" onClick={handleAnalyse}>
        Analyse
      </button>
    </>
  );
};

export default ContactForm;
