import styles from "./Questions.module.css";
import { Question } from "@/data/questions";
import { Chip } from "@/lib/Chip";
import { IconButton } from "@/lib/Button";
import LinkIcon from "@/icons/link.svg";
import { Answers } from "./Answers";
interface QuestionsProps {
  questions: Question[];
}

const Questions = ({ questions }: QuestionsProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText("www.google.es");
  };
  return (
    <div className={styles.root}>
      {questions.map((question) => (
        <div className={styles.card} key={question.id}>
          <div className={styles.cardHead}>
            <div className={styles.cardLink}>
              <IconButton ariaLabel="link" onClick={handleCopy}>
                <LinkIcon />
              </IconButton>
            </div>
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
