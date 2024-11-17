import { Question, QUESTIONNAIRE_ID, questions } from "@/data/questions";
import { sleep } from "@/api/utils";
import { SHARING_TOKEN } from "@/data/token";
import { useEffect, useState } from "react";

export const loadQuestions = async (questionnaireId: number) => {
  await sleep(1000);
  //TODO: Allowed questionnaire
  if (questionnaireId !== QUESTIONNAIRE_ID)
    throw Error("Unknown questionnaire.");
  //TODO: improve this to filter by questionnaireId
  return questions;
};

export const useQuestions = (questionnaireId: number) => {
  const [questions, setQuestions] = useState<Question[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const load = async () => {
      try {
        setQuestions(await loadQuestions(questionnaireId));
      } catch (e) {
        setError((e as Error).message);
      }
    };
    void load();
  }, [questionnaireId]);

  return { questions, error };
};

export const loadQuestionWithSharingToken = async (
  questionId: number,
  token: string
) => {
  await sleep(1000);
  if (token != SHARING_TOKEN) throw Error("Wrong token");
  const question = questions.find((q) => q.id === questionId);
  if (!question) throw Error("Unknown question.");
  return question;
};
