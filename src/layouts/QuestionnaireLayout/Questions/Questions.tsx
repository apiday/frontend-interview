import styles from "./Questions.module.css";
import { Question } from "@/data/questions";
import { Chip } from "@/lib/Chip";
import { IconButton } from "@/lib/Button";
import LinkIcon from "@/icons/link.svg";
import { Answers } from "./Answers";
import { encodeHash } from "@/utils/crypto";
import { getSharingToken } from "@/api/token";
import { useState } from "react";

interface QuestionsProps {
  questionnaireId: number;
  questions: Question[];
  isShared: boolean;
}

const Questions = ({
  questionnaireId,
  questions,
  isShared,
}: QuestionsProps) => {
  const [isCopied, setIsCopied] = useState<number>();
  const [isLoading, setIsLoading] = useState<number>();
  const handleCopy = async (questionId: number) => {
    try {
      setIsLoading(questionId);
      const sharingToken = await getSharingToken();
      const hash = await encodeHash(sharingToken, questionId);
      const url = `http://localhost:3000/questionnaire/${questionnaireId}?hash=${encodeURIComponent(hash)}`;

      navigator.clipboard.writeText(url);

      setIsCopied(questionId);
    } catch (err) {
      setIsLoading(0);
      alert(err);
    }
  };

  return (
    <div className={styles.root}>
      {questions.map((question) => (
        <div className={styles.card} key={question.id}>
          <div className={styles.cardHead}>
            {!isShared && (
              <div className={styles.cardLink}>
                {isCopied && isCopied === question.id ? (
                  <Chip>COPIED</Chip>
                ) : (
                  //TODO: Implement tooltip to improve UX
                  <IconButton
                    ariaLabel="share link"
                    onClick={() => handleCopy(question.id)}
                    loading={isLoading === question.id}
                  >
                    <LinkIcon />
                  </IconButton>
                )}
              </div>
            )}
            <Chip className={styles.status}>{question.status}</Chip>
          </div>
          <h2>{question.text}</h2>
          <Answers question={question} />
        </div>
      ))}
    </div>
  );
};

export default Questions;
