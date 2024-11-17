import styles from "./QuestionnaireCard.module.css";
import { Card } from "@/lib/Card";
import { Questionnaire, QUESTIONNAIRE_ID, questions } from "@/data/questions";

const QuestionnaireCard = ({
  questionnaire,
}: {
  questionnaire: Questionnaire;
}) => {
  return (
    <Card
      className={styles.card}
      href={`/questionnaire/${questionnaire.id}`}
      title={questionnaire.title}
      subtitle={questionnaire.subtitle}
      footer={`0 / ${questions.length} questions`}
    />
  );
};

export default QuestionnaireCard;
