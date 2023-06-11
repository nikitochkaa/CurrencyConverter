import React from 'react';

const NavBar = () => {
  return (
    <div className="NavBar">
      <div className="NavBar__Left">
        <div className="NavBar__Left__Logo">
          <a href="#">
            <img src="https://cdn.reverso.net/context/v63200/images/reverso-context.ico" alt="Logo"/>
          </a>
        </div>
        <div className="NavBar__Left__Language">
            <a href="#">UA</a>
            <span> | </span>
            <a href="#">EN</a>
        </div>
      </div>
      <div className="NavBar__Middle">
        <div className="NavBar__Middle__Item1">
          <span>Menu</span>
        </div>
        <div className="NavBar__Middle__Item2">
          <span>News</span>
        </div>
        <div className="NavBar__Middle__Item3">
          <span>Calculator</span>
        </div>
        <div className="NavBar__Middle__FAQ">
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;