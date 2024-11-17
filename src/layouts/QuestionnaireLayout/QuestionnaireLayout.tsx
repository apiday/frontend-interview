import styles from "./QuestionnaireLayout.module.css";
import { useQuestions } from "@/api/questions";
import { Alert } from "@/lib/Alert";
import { Loader } from "@/lib/Loader";
import { Button } from "@/lib/Button";
import { Questions } from "@/layouts/QuestionnaireLayout/Questions";
import Link from "next/link";
import { useEffect, useState } from "react";
interface QuestionnaireLayoutProps {
  questionnaireId: number;
  questionId?: number;
  token?: string;
}

const QuestionnaireLayout = ({
  questionnaireId,
  questionId,
  token,
}: QuestionnaireLayoutProps) => {
  const [isShared, setIsShared] = useState<boolean>(false);
  const { questions, error } = useQuestions(
    questionnaireId,
    questionId as number,
    token
  );

  useEffect(() => {
    if (token) {
      setIsShared(true);
    }
  }, [token]);

  if (error)
    return (
      <main className={styles.alert}>
        <Alert color="danger">{error}</Alert>
      </main>
    );
  if (!questions) return <Loader />;
  return (
    <>
      <div className={styles.appBar}>
        {!isShared ? (
          <Link href="/">
            <img
              alt="logo"
              width={100}
              src="https://cdn.prod.website-files.com/63721a84a9a62db8eb794541/63736a71868f853b9bb0b3d0_logo-apiday_blanc.svg"
            />
          </Link>
        ) : (
          <img
            alt="logo"
            width={100}
            src="https://cdn.prod.website-files.com/63721a84a9a62db8eb794541/63736a71868f853b9bb0b3d0_logo-apiday_blanc.svg"
          />
        )}
      </div>
      <main className={styles.root}>
        <Questions
          questionnaireId={questionnaireId}
          questions={questions}
          isShared={isShared}
        />
        {!isShared && (
          <Button
            type="secondary"
            size="small"
            onClick={() => window.history.back()}
          >
            Back
          </Button>
        )}
      </main>
    </>
  );
};

export default QuestionnaireLayout;
