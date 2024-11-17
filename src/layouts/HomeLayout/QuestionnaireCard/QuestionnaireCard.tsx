import styles from "./QuestionnaireCard.module.css";
import { Card } from "@/lib/Card";
import { QUESTIONNAIRE_ID, questions } from "@/data/questions";

const QuestionnaireCard = () => {
  return (
    <Card
      className={styles.card}
      href={`/questionnaire/${QUESTIONNAIRE_ID}`}
      title="My questionnaire"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      footer={`0 / ${questions.length} questions`}
    />
  );
};

export default QuestionnaireCard;
