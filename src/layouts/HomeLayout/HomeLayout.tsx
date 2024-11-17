import styles from "./HomeLayout.module.css";
import { QuestionnaireCard } from "./QuestionnaireCard";
import { Questionnaire, questionnaires } from "@/data/questions";

const HomeLayout = () => {
  return (
    <>
      <div className={styles.appBar}>
        <img
          width={100}
          src="https://cdn.prod.website-files.com/63721a84a9a62db8eb794541/63736a71868f853b9bb0b3d0_logo-apiday_blanc.svg"
        />
      </div>
      <main className={styles.root}>
        <h2>Find your ESG surveys. Report. Improve.</h2>
        <p>
          <b className={styles.bold}>Boost your ESG performance</b> through
          tangible tools and actionable insights. 180+ integrations, AI data
          extraction and ecosystem ESG surveys
        </p>
        <section className={styles.bold}>Your surveys:</section>
        <div className={styles.row}>
          {questionnaires.map((questionnaire: any) => (
            <div className={styles.column}>
              <QuestionnaireCard questionnaire={questionnaire} />
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default HomeLayout;
