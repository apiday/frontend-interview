import styles from "./HomeLayout.module.css";
import { QuestionnaireCard } from "./QuestionnaireCard";

const HomeLayout = () => {
  return (
    <main className={styles.root}>
      <h2>Find your ESG surveys. Report. Improve.</h2>
      <p>
        <b className={styles.bold}>Boost your ESG performance</b> through
        tangible tools and actionable insights. 180+ integrations, AI data
        extraction and ecosystem ESG surveys
      </p>
      <section className={styles.bold}>Your surveys:</section>
      <div className={styles.row}>
        <div className={styles.column}>
          <QuestionnaireCard />
        </div>
        <div className={styles.column}>
          <QuestionnaireCard />
        </div>
        <div className={styles.column}>
          <QuestionnaireCard />
        </div>
        <div className={styles.column}>
          <QuestionnaireCard />
        </div>
        <div className={styles.column}>
          <QuestionnaireCard />
        </div>
        <div className={styles.column}>
          <QuestionnaireCard />
        </div>
      </div>
    </main>
  );
};

export default HomeLayout;
