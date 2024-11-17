import { Question } from "@/data/questions";
import { TextArea } from "@/lib/TextArea";
import { useState } from "react";
import { Radio } from "@/lib/Radio";
import { Checkbox } from "@/lib/Checkbox";

interface AnswersProps {
  question: Question;
}

const Answers = ({ question: rawQuestion }: AnswersProps) => {
  const [question, setQuestion] = useState<Question>(rawQuestion);
  const setAnswer = (answerId: number, selected: boolean, text: string) => {
    const answers = question.answers.map((answer) => {
      if (answer.id !== answerId) {
        if (question.type !== "SINGLE_SELECT") return answer;
        return { ...answer, selected: false };
      }
      return { ...answer, selected, user_text: text };
    });
    // TODO: Lift the state up
    setQuestion({
      ...question,
      status: answers.some((a) => a.selected) ? "ANSWERED" : "UNANSWERED",
      answers,
    });
  };
  switch (question.type) {
    case "FREE_TEXT":
      return (
        <div>
          {question.answers.map((answer) => (
            <TextArea
              key={answer.id}
              name={answer.id.toString()}
              onChange={(newValue) =>
                setAnswer(answer.id, newValue !== "", newValue)
              }
              value={answer.user_text}
            />
          ))}
        </div>
      );
    case "SINGLE_SELECT":
      return (
        <div>
          {question.answers.map((answer) => (
            <Radio
              key={answer.id}
              checked={answer.selected}
              name={`question-${question.id}`}
              onChange={(newValue) =>
                setAnswer(answer.id, newValue === answer.id.toString(), "")
              }
              value={String(answer.id)}
              label={answer.text}
            />
          ))}
        </div>
      );
    case "MULTI_SELECT":
      return (
        <div>
          {question.answers.map((answer) => (
            <Checkbox
              key={answer.id}
              checked={answer.selected}
              onChange={() => setAnswer(answer.id, !answer.selected, "")}
              label={answer.text}
            />
          ))}
        </div>
      );
  }
};

export default Answers;
