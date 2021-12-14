import React from "react";
import { Button } from "react-bootstrap";

function ButtonMain(props) {
  const { title } = props;
  return (
    <div className="button">
      <Button>{title}</Button>
    </div>
  );
}

export default ButtonMain;
