import React from 'react';
import styles from '../styles/Home.module.css';

const HSCards = ({ id, name, image, onClick }) => {
  return <img className={styles.image} src={image} alt={`${id} - ${name}`} name={name} onClick={onClick} width={'80%'} />;
};

export default HSCards;
