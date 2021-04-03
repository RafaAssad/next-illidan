import Header from '../components/Header';
import Footer from '../components/Footer';
import CreateDeck from '../components/CreateDeck';
import styles from '../styles/Home.module.css';

// <div className={styles.container}></div>

export default function Home() {
  return (
    <div className={styles.secBody}>
      <Header />
      <CreateDeck />
      <Footer />
    </div>
  );
}
