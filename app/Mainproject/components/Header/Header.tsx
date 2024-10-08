"use client"
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import styles from "./Header.module.css"

const Header = ({ addBase }) => {
  const [inputValue, setInputValue] = useState("");

  const handleFireBase = () => {
    if (inputValue.trim() !== "") {
      addBase({ id: Date.now(), text: inputValue });
      setInputValue("");
    }
  };

  return (
    <div>
      <div className={styles.contactApp}>
        <img src={"/images/logos_firebase.svg"} alt="Firebase Logo" />
        <h2>Firebase Contact App</h2>
      </div>
      <div className={styles.inputBtnContainer}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add Firebase"
        />
        <button onClick={handleFireBase}>
          <img src={"/images/material-symbols_add.png"} alt="Add" />
        </button>
      </div>
    </div>
  );
};

export default Header;
