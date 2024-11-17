import styles from "./QuestionnaireCard.module.css";
import { Card } from "@/lib/Card";
import { Questionnaire } from "@/data/questions";
import { useEffect, useState } from "react";

const QuestionnaireCard = ({
  questionnaire,
}: {
  questionnaire: Questionnaire;
}) => {
  const [subtitle, setSubtitle] = useState(questionnaire.subtitle);
  useEffect(() => {
    if (questionnaire.subtitle.length > 55) {
      setSubtitle(questionnaire.subtitle.substring(0, 52) + "...");
    }
  }, []);

  return (
    <Card
      className={styles.card}
      href={`/questionnaire/${questionnaire.id}`}
      title={questionnaire.title}
      subtitle={subtitle}
      footer={`0 / ${questionnaire.questions.length} questions`}
    />
  );
};

export default QuestionnaireCard;
