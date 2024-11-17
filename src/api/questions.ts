import { Question, ALLOWED_QUESTIONNAIRES, questions } from "@/data/questions";
import { sleep } from "@/api/utils";
import { SHARING_TOKEN } from "@/data/token";
import { useEffect, useState } from "react";

export const loadQuestions = async (questionnaireId: number) => {
  await sleep(1000);
  if (!ALLOWED_QUESTIONNAIRES.includes(questionnaireId))
    throw Error("Unknown questionnaire.");
  return questions;
};

export const useQuestions = (
  questionnaireId: number,
  questionId?: number,
  token?: string
) => {
  const [questions, setQuestions] = useState<Question[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const load = async () => {
      try {
        if (questionId && token) {
          return setQuestions([
            await loadQuestionWithSharingToken(questionId, token),
          ]);
        }
        return setQuestions(await loadQuestions(questionnaireId));
      } catch (e) {
        return setError((e as Error).message);
      }
    };
    void load();
  }, [questionnaireId]);

  return { questions, error };
};
export const useQuestionsWithSharingToken = (
  questionnaireId: number,
  questionId: number,
  token: string
) => {
  const [questions, setQuestions] = useState<Question[]>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const load = async () => {
      try {
        if (questionId && token) {
          setQuestions([await loadQuestionWithSharingToken(questionId, token)]);
        }
      } catch (e) {
        setError((e as Error).message);
      }
    };
    void load();
  }, [questionnaireId, questionId, token]);

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
