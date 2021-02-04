import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function MyVerticallyCenteredModal(props) {
  const { name, description, tagline, brewers_tips } = props.moredata;
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{tagline}</h4>
        <p>{description}</p>
        <p>{brewers_tips}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
