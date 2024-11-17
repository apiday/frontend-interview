import styles from "./QuestionnaireLayout.module.css";
import { useQuestions, useQuestionsWithSharingToken } from "@/api/questions";
import { Alert } from "@/lib/Alert";
import { Loader } from "@/lib/Loader";
import { Button } from "@/lib/Button";
import { Questions } from "@/layouts/QuestionnaireLayout/Questions";

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
  const { questions, error } = useQuestions(
    questionnaireId,
    questionId as number,
    token
  );

  if (error)
    return (
      <main className={styles.alert}>
        <Alert color="danger">{error}</Alert>
      </main>
    );
  if (!questions) return <Loader />;
  return (
    <>
      <div style={{ backgroundColor: "#07034f", padding: 8 }}>
        <img
          alt="logo"
          width={100}
          src="https://cdn.prod.website-files.com/63721a84a9a62db8eb794541/63736a71868f853b9bb0b3d0_logo-apiday_blanc.svg"
        />
      </div>
      <main className={styles.root}>
        {/* TODO: Move to component */}
        {/* TODO: Take this title from JSON */}
        <h1>Here is the questionnaire content:</h1>
        <Questions questionnaireId={questionnaireId} questions={questions} />
        <Button
          type="secondary"
          size="small"
          onClick={() => window.history.back()}
        >
          Back
        </Button>
      </main>
    </>
  );
};

export default QuestionnaireLayout;
