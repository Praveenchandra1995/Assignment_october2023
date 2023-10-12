import React from "react";

export default function Navbar() {
  return (
    <div className="nav-bar">
      <h1 className="title">Startup 3</h1>
      <ul className="nav-bar1">
        <ol>Overview</ol>
        <ol>Prices</ol>
        <ol>Blog</ol>
        <ol>Feedback</ol>
        <button className="btn">Purchase</button>
      </ul>
    </div>
  );
}
