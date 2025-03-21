import React from "react";
import "./fixedBar.css";
import avatar from "../../assets/images/Avatar.png";

function FixedBar() {
  return (
    <div className="fullPage">
      <div className="topBar">
        <div>
          <h1 className="nameText">Dimon and Vladon</h1>
          <h6 className="nameStatus">Onion</h6>
          <h2><img src={avatar} className="avatarPhoto"/></h2>
        </div>
      </div>

      <div className="main2">
        <p>Hello1</p>
        <p>Hello2</p>
        <p>Hello3</p>
        <p>Hello4</p>
        <p>Hello5</p>
        <p>Hello6</p>
        <p>Hello7</p>
        <p>Hello8</p>
      </div>
    </div>
  );
}

export default FixedBar;
