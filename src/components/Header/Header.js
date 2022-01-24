import React from "react";
import "./Header.css";

export default function Header({ title }) {
  return (
    <>
      <h1 data-test-id="heading-1" className="header">
        {title}
      </h1>
      {/*}<h3 className="header">The second one</h3> {*/}
    </>
  );
}
