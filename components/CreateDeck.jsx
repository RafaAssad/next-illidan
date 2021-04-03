import React, { useState } from 'react';
import { cards } from '../data/minions.json';
import { spells } from '../data/spells.json';
import HSCards from './Cards';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const CreateDeck = () => {
  const [minion, setMinion] = useState(cards);
  const [spell, setSpell] = useState(spells);

  return (
    <section>
      <h1 className={styles.cd}>Create Decks</h1>
      <Link href="/decks">
        <a>Go to Decks</a>
      </Link>
      <div className={styles.cards}>
        <h2>Minions</h2>
        <h2>Spells</h2>
      </div>
      <div className={styles.cards}>
        <div className={styles.grid}>
          {minion.map((card, idx) => (
            <div key={idx}>
              <HSCards key={card.id} {...card} />
            </div>
          ))}
        </div>
        <div className={styles.grid}>
          {spells.map((card, idx) => (
            <div key={idx}>
              <HSCards key={card.id} {...card} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CreateDeck;
