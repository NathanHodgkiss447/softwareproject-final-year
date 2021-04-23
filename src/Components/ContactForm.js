import React, { useState, useEffect } from "react";
import db from "../firebase";
import ReactTooltip from "react-tooltip";
import nlp from "compromise";
import { v4 as uuidv4 } from "uuid";
import InfoIcon from "@material-ui/icons/Info";
import IconWithTooltip from "icon-with-tooltip";
import "../Styles/tooltip.scss";

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
    var input = nlp(values.error);
    let result = input.sentences().terms().out("array");
    let numberArray = result.filter(Number);
    let numberCollection = numberArray.map(Number);
    let number = numberCollection[0];
    let text = "";
    let test = "";
    let solutionCheck;

    // First Check  --- Test to see if there is a use provided solution
    if (values.solution == "None") {
      solutionCheck = "None";
    } else if (values.solution == "") {
      solutionCheck = "empty";
    } else {
      solutionCheck = "other";
    }

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
    if (values.programmingLanguage === "Java" && solutionCheck !== "other") {
      var stringLiteralError = nlp(values.error)
        .match("unclosed string literal")
        .text();
      var illegalExpressionError = nlp(values.error)
        .match("illegal start of expression")
        .text();
      var symbolError = nlp(values.error).match("cannot find symbol").text();
      var typeError = nlp(values.error).match("incompatible types").text();
      var invalidMethod = nlp(values.error)
        .match("invalid method declaration return type required")
        .text();
      var returnStatementError = nlp(values.error)
        .match("missing return statement")
        .text();
      var precisionError = nlp(values.error)
        .match("possible loss of precision")
        .text();
      var endOfFileError = nlp(values.error)
        .match("reached end of file while parsing")
        .text();
      var initilisationError = nlp(values.error)
        .match("variable might not have been initialized")
        .text();
      var incovertibleTypesError = nlp(values.error)
        .match("inconvertible types")
        .text();
      var missingReturnError = nlp(values.error)
        .match("missing return value")
        .text();
      var cannotReturnValue = nlp(values.error)
        .match("cannot return a value from method whose result type is void")
        .text();
      var nonStaticVariable = nlp(values.error)
        .match("non-static variable cannot be referenced from a static context")
        .text();
      var nonStaticMethod = nlp(values.error)
        .match("non-static method cannot be referenced from a static context")
        .text();
      let javaInput;

      //Checking for what error occured
      if (stringLiteralError === "unclosed string literal") {
        javaInput = stringLiteralError;
      } else if (illegalExpressionError === "illegal start of expression") {
        javaInput = illegalExpressionError;
      } else if (symbolError === "cannot find symbol") {
        javaInput = symbolError;
      } else if (typeError === "incompatible types") {
        javaInput = typeError;
      } else if (
        invalidMethod === "invalid method declaration return type required"
      ) {
        javaInput = invalidMethod;
      } else if (returnStatementError === "missing return statement") {
        javaInput = returnStatementError;
        console.log(javaInput);
      } else if (precisionError === "possible loss of precision") {
        javaInput = precisionError;
      } else if (endOfFileError === "reached end of file while parsing") {
        javaInput = endOfFileError;
      } else if (
        initilisationError === "variable might not have been initialized"
      ) {
        javaInput = initilisationError;
      } else if (incovertibleTypesError === "inconvertible types") {
        javaInput = incovertibleTypesError;
      } else if (missingReturnError === "missing return value") {
        javaInput = missingReturnError;
      } else if (
        cannotReturnValue ===
        "cannot return a value from method whose result type is void"
      ) {
        javaInput = cannotReturnValue;
      } else if (
        nonStaticVariable ===
        "non static variable cannot be referenced from a static context"
      ) {
        javaInput = nonStaticVariable;
      } else if (
        nonStaticMethod ===
        "non static method cannot be referenced from a static context"
      ) {
        javaInput = nonStaticMethod;
      }

      //Switch statement for setting the tooltip
      switch (javaInput) {
        default:
          setTooltip("No Suggestion Available");
          break;
        case "unclosed string literal":
          setTooltip(
            `Java Error: The “unclosed string literal” error message is created when the string literal ends without quotation marks, and the message will appear on the same line as the error`
          );
          break;
        case "illegal start of expression":
          setTooltip(
            "The compiler expects to find an expression and cannot find it because the syntax does not match expectations"
          );
          break;
        case "cannot find symbol":
          setTooltip(`Java Error: There are many reasons you might receive the cannot find symbol message
                      - The spelling of the identifier when declared may not be the same as when it is used in the code.
                      - The variable was never declared.
                      - The variable is not being used in the same scope it was declared.`);
          break;

        case "incompatible types":
          setTooltip(`Java Error: “Incompatible types” is an error in logic that occurs when an assignment statement tries to pair a variable with an expression of types
                    It often comes when the code tries to place a text string into an integer`);
          break;
        case "invalid method declaration return type required":
          setTooltip(
            `Java Error: This Java software error message means the return type of a method was not explicitly stated in the method signature`
          );
          break;
        case "missing return statement":
          setTooltip(
            "Java Error: The “missing return statement” message occurs when a method does not have a return statement. Each method that returns a value (a non-void type) must have a statement that literally returns that value so it can be called outside the method."
          );
          break;
        case "possible loss of precision":
          setTooltip(
            "Java Error: Possible loss of precision” occurs when more information is assigned to a variable than it can hold. If this happens, pieces will be thrown out."
          );
          break;

        case "reached end of file while parsing":
          setTooltip(
            "Java Error: This error message usually occurs in Java when the program is missing the closing curly brace (“}”). Sometimes it can be quickly fixed by placing it at the end of the code."
          );
          break;

        case "variable might not have been initialized":
          setTooltip(
            "Java Error: This occurs when a local variable declared within a method has not been initialized. It can occur when a variable without an initial value is part of an if statement."
          );
          break;

        case "inconvertible types":
          setTooltip(
            "Java Error: The “inconvertible types” error occurs when the Java code tries to perform an illegal conversion."
          );
          break;

        case "missing return value":
          setTooltip(
            "Java Error: You’ll get the “missing return value” message when the return statement includes an incorrect type."
          );
          break;
        case "cannot return a value from method whose result type is void":
          setTooltip(
            "Java Error: This Java error occurs when a void method tries to return any value. Often this is fixed by changing to method signature to match the type in the return statement"
          );
          break;
        case "non static variable cannot be referenced from a static context":
          setTooltip(
            "Java Error: This error occurs when the compiler tries to access non-static variables from a static method"
          );
          break;

        case "non static method cannot be referenced from a static context":
          setTooltip(
            "Java Error: This issue occurs when the Java code tries to call a non-static method in a non-static class"
          );
          break;
      }
    }

    //Python Common Errors
    if (values.programmingLanguage === "Python" && solutionCheck !== "other") {
      let pythonInput;
      var pythonAttributeError = nlp(values.error)
        .match("attribute error")
        .text();
      var pythonSyntaxError = nlp(values.error).match("SyntaxError").text();
      var keyError = nlp(values.error).match("KeyError").text();
      var nameError = nlp(values.error).match("NameError").text();
      var runtimeError = nlp(values.error).match("RuntimeError").text();
      var indexError = nlp(values.error).match("IndexError").text();
      var indentationError = nlp(values.error).match("IndentationError").text();
      var fileError = nlp(values.error).match("FileNotFoundError").text();
      var importError = nlp(values.error).match("ImportError").text();
      var pythonTypeError = nlp(values.error).match("TypeError").text();
      var valueError = nlp(values.error).match("ValueError").text();
      var referenceError = nlp(values.error).match("ReferenceError").text();
      var systemError = nlp(values.error).match("SystemError").text();

      //Checking for error
      if (pythonAttributeError === "attribute error") {
        pythonInput = pythonAttributeError;
      } else if (pythonSyntaxError === "SyntaxError") {
        pythonInput = pythonSyntaxError;
      } else if (keyError === "KeyError") {
        pythonInput = keyError;
      } else if (nameError === "NameError") {
        pythonInput = nameError;
      } else if (runtimeError === "RunTimeError") {
        pythonInput = runtimeError;
      } else if (indexError === "IndexError") {
        pythonInput = indexError;
      } else if (indentationError === "IndentationError") {
        pythonInput = indentationError;
      } else if (fileError === "FileNotFoundError") {
        pythonInput = fileError;
      } else if (importError === "ImportError") {
        pythonInput = importError;
      } else if (pythonTypeError === "TypeError") {
        pythonInput = typeError;
      } else if (valueError === "ValueError") {
        pythonInput = valueError;
      } else if (referenceError === "ReferenceError") {
        pythonInput = referenceError;
      } else if (systemError === "SystemError") {
        pythonInput = systemError;
      }

      //Switch statement to set the tooltip
      switch (pythonInput) {
        default:
          setTooltip(
            "No suggestion available - Ensure any errors are in their original form provided by IDE/console."
          );
          break;

        case "attribute error":
          setTooltip(
            "Python Error: You are calling a method on the wrong type of object"
          );
          break;

        case "SyntaxError":
          setTooltip(
            "Python Error: When the proper syntax of the language is not followed then syntax error is thrown, check for missed semi-colons etc."
          );
          break;

        case "KeyError":
          setTooltip(
            "Python Error: The key error is thrown when a key is not found."
          );
          break;
        case "NameError":
          setTooltip(
            "Python Error: The Name Error is raised when a variable is not found in the local or global scope - check where you are defining your variables."
          );
          break;
        case "RuntimeError":
          setTooltip(
            "Python Error: A runtime occurs when the error raised does not fall into a standard category."
          );
          break;
        case "IndexError":
          setTooltip(
            "Python Error: Raised when the index of a sequence is out of range, often the index won't exist in the array you are working with."
          );
          break;
        case "IndentationError":
          setTooltip(
            "Python Error: Indendation Error is raised when your code is not indendated correctly, check your code for any white space issues."
          );
          break;
        case "FileNotFoundError":
          setTooltip(
            "Python Error: The file not found error often results when a pathname has been specified incorrectly."
          );
          break;
        case "ImportError":
          setTooltip(
            "Python Error: The import error is raised when an imported module is not found - double check all imports at the top of your scripts."
          );
          break;
        case "TypeError":
          setTooltip(
            "Python Error: The type error is thrown when an operation or function is applied to an object of an inappropriate type"
          );
          break;
        case "ValueError":
          setTooltip(
            "Python Error: The value error is thrown when a function's argument is of an inappropriate type, double check your function arguements for invalid types."
          );
          break;
        case "ReferenceError":
          setTooltip(
            "Python Error: The reference error is  raised when a weak reference proxy is used to access a garbage collected referent."
          );
          break;

        case "SystemError":
          setTooltip(
            "Python Error: The system error is raised when the interpreter detects an internal error "
          );
          break;
      }
    }

    //JavaScript Common Errors
    if (
      values.programmingLanguage === "JavaScript" &&
      solutionCheck !== "other"
    ) {
      let javaScriptInput;
      var internalError = nlp(values.error).match("InternalError").text();
      var rangeError = nlp(values.error).match("RangeError").text();
      var javaScriptReferenceError = nlp(values.error)
        .match("ReferenceError")
        .text();
      var javaScriptSyntaxError = nlp(values.error).match("SyntaxError").text();

      //Checking for which error has occured
      if (internalError === "InternalError") {
        javaScriptInput = internalError;
      } else if (rangeError === "RangeError") {
        javaScriptInput = rangeError;
      } else if (javaScriptReferenceError === "ReferenceError") {
        javaScriptInput = javaScriptReferenceError;
      } else {
        javaScriptInput = javaScriptSyntaxError;
      }

      //Switch statement to set the tooltip
      switch (javaScriptInput) {
        default:
          setTooltip(
            "No suggestion available - Ensure any errors are in their original form provided by IDE/console."
          );
          break;
        case "InternalError":
          setTooltip(
            "JavaScript Error: The internal error often occurs when something is too large, EG: too many switch cases, too much recursion, too many parantheses in regular expression"
          );
          break;
        case "RangeError":
          setTooltip(
            "JavaScript Error: A Range Error is thrown when trying to pass a value as an argument to a function that does not allow a range that includes the value."
          );
          break;
        case "ReferenceError":
          setTooltip(
            "JavaScript Error: A ReferenceError object represents an error when a non-existent variable is referenced, make sure to check your variable names. "
          );
          break;
        case "SyntaxError":
          setTooltip(
            "JavaScript Error: A SyntaxError object represents an error when trying to interpret syntactically invalid code. Double check for brackets semi-colons."
          );
      }
    }
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
          <InfoIcon data-tip data-for="projectNameTip" />
          <span classaName="tooltip">
            <ReactTooltip id="projectNameTip" place="top" effect="solid">
              Please enter your project name.
            </ReactTooltip>
          </span>
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
            <InfoIcon data-tip data-for="languageTip" />
            <span classaName="tooltip">
              <ReactTooltip id="languageTip" place="top" effect="solid">
                Please enter the programming language used in this project.
              </ReactTooltip>
            </span>
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
          <InfoIcon data-tip data-for="errorTip" />
          <span classaName="tooltip">
            <ReactTooltip id="errorTip" place="top" effect="solid">
              Please enter the error you have encountered.
            </ReactTooltip>
          </span>
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
          <InfoIcon data-tip data-for="solutionTip" />
          <span classaName="tooltip">
            <ReactTooltip
              className="tooltip"
              id="solutionTip"
              place="top"
              effect="solid"
            >
              Please enter your solution, if you would like a suggestion, leave
              the input blank or input "None", then click the "Analyse" button.{" "}
              <br />
              <b>
                Current Supported Languages: Java, JavaScript, Python, HTTP
                Error Codes.
              </b>
            </ReactTooltip>
          </span>
        </div>
        <ReactTooltip data-tip={tooltip}></ReactTooltip>
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
