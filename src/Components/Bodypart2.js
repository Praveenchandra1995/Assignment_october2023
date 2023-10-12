import React from "react";

export default function Bodypart2() {
  return (
    <div className="body2">
      <h1 className="title-2">Sign Up Now</h1>
      <form>
        <input type="text" placeholder="Your Mail" className="txt1" />
        <input type="text" placeholder="Your Password" className="txt2" />
        <h2 className="title-3">
          <input type="radio" className="radio" />I agree to the terms and
          conditions
        </h2>
        <button className="sign-in">Sign In</button>
        <line>
          <span>or</span>
        </line>
        <button className="twitter">Login Via Twitter</button>
        <h3 className="title-4">
          Do You Have Account? <ol className="sign-in2">Sign</ol>
        </h3>
      </form>
    </div>
  );
}
