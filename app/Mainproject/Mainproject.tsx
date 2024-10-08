"use client"
import React, { useState } from 'react';
import styles from './Mainproject.module.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

const Mainproject = () => {
  const [fireBasies, setFireBasies] = useState([]);

  const updatedFireBasies = (updatedFireBasies) => {
    setFireBasies(updatedFireBasies);
  };

  const addBase = (fireBase) => {
    setFireBasies([...fireBasies, fireBase]);
  };

  return (
    <div className={styles.mainContainer}>
      <Header addBase={addBase} />
      <Content fireBasies={fireBasies} updatedFireBasies={updatedFireBasies} />
    </div>
  );
};

export default Mainproject;
