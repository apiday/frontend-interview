type QuestionType = "FREE_TEXT" | "SINGLE_SELECT" | "MULTI_SELECT";

export interface Answer {
  id: number;
  text: string;
  user_text: string;
  selected: boolean;
}

export type Questionnaire = {
  id: number;
  title: string;
  subtitle: string;
  questions: Question[];
};

export type Question = {
  id: number;
  index: number;
  text: string;
  answers: Answer[];
  status: "UNANSWERED" | "ANSWERED";
  type: QuestionType | null;
};

export const QUESTIONNAIRE_ID = 5;
export const ALLOWED_QUESTIONNAIRES = [1, 2, 3, 4, 5];

export const questionnaires: Questionnaire[] = [
  {
    id: 1,
    title: "Your personal information",
    subtitle: "Let's know you a little bit better",
    questions: [
      {
        id: 1,
        index: 1,
        text: "What is your name?",
        status: "UNANSWERED",
        type: "FREE_TEXT",
        answers: [{ id: 1, text: "", user_text: "", selected: false }],
      },
      {
        id: 2,
        index: 2,
        text: "Where are you born?",
        status: "UNANSWERED",
        type: "SINGLE_SELECT",
        answers: [
          { id: 2, text: "A small city", user_text: "", selected: false },
          { id: 3, text: "A big city", user_text: "", selected: false },
          { id: 4, text: "In the countryside", user_text: "", selected: false },
          { id: 5, text: "Elsewhere", user_text: "", selected: false },
        ],
      },
      {
        id: 3,
        index: 3,
        text: "What fruits do you like?",
        status: "UNANSWERED",
        type: "MULTI_SELECT",
        answers: [
          { id: 6, text: "Strawberries", user_text: "", selected: false },
          { id: 7, text: "Apples", user_text: "", selected: false },
          { id: 8, text: "Oranges", user_text: "", selected: false },
          { id: 9, text: "Watermelon", user_text: "", selected: false },
          { id: 10, text: "None", user_text: "", selected: false },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "How your users interact with your platform?",
    subtitle:
      "Let's discover how the users interact with you platform, where they click, how much time they spend browsing, on which devices",
    questions: [
      {
        id: 1,
        index: 1,
        text: "How your users interact with your platform?",
        status: "UNANSWERED",
        type: "MULTI_SELECT",
        answers: [
          { id: 2, text: "By phone", user_text: "", selected: false },
          { id: 3, text: "By email", user_text: "", selected: false },
          { id: 4, text: "Via internet", user_text: "", selected: false },
          { id: 5, text: "Via mobile app", user_text: "", selected: false },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Top 3 questions to improve your productivity",
    subtitle:
      "Your company productivity can be improved by using the latest tools.",
    questions: [
      {
        id: 1,
        index: 1,
        text: "What is your favorite ticketing app?",
        status: "UNANSWERED",
        type: "MULTI_SELECT",
        answers: [
          { id: 2, text: "Asana", user_text: "", selected: false },
          { id: 3, text: "Trello", user_text: "", selected: false },
          { id: 4, text: "Monday", user_text: "", selected: false },
          { id: 5, text: "Jira", user_text: "", selected: false },
        ],
      },
      {
        id: 2,
        index: 3,
        text: "What is your favorite desing app?",
        status: "UNANSWERED",
        type: "MULTI_SELECT",
        answers: [
          { id: 6, text: "Photoshop", user_text: "", selected: false },
          { id: 7, text: "Sketch", user_text: "", selected: false },
          { id: 8, text: "Figma", user_text: "", selected: false },
          { id: 9, text: "Pixelmator", user_text: "", selected: false },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Why testing is important?",
    subtitle:
      "Let's discover the testing culture in your company with this quick survey.",
    questions: [
      {
        id: 1,
        index: 1,
        text: "Why do you think testing is important?",
        status: "UNANSWERED",
        type: "FREE_TEXT",
        answers: [{ id: 1, text: "", user_text: "", selected: false }],
      },
    ],
  },
  {
    id: 5,
    title: "You are hired!",
    subtitle: "The most relevant questions to your HR interviews",
    questions: [
      {
        id: 1,
        index: 1,
        text: "What is your name?",
        status: "UNANSWERED",
        type: "FREE_TEXT",
        answers: [{ id: 1, text: "", user_text: "", selected: false }],
      },
    ],
  },
  {
    id: 6,
    title: "You aren't allowed to this questionnaire",
    subtitle: "This survey is private and you don't have access",
    questions: [
      {
        id: 1,
        index: 1,
        text: "What is your name?",
        status: "UNANSWERED",
        type: "FREE_TEXT",
        answers: [{ id: 1, text: "", user_text: "", selected: false }],
      },
    ],
  },
];
