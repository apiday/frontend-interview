import Head from "next/head";
import { useRouter } from "next/router";
import { Loader } from "@/lib/Loader";
import { QuestionnaireLayout } from "@/layouts/QuestionnaireLayout";
import { decodeHash } from "@/utils/crypto";
import { useEffect, useState } from "react";

export default function Questionnaire() {
  const { isReady, query } = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [questionnaireId, setQuestionnaireId] = useState<number>();
  const [questionId, setQuestionId] = useState<number>();
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    if (isReady) {
      setQuestionnaireId(parseInt(query.questionnaireId as string));
      if (query.hash) {
        const decodedData = decodeHash(
          decodeURIComponent(query.hash as string)
        );
        setQuestionId(decodedData.questionId);
        setToken(decodedData.token);
      }
      setIsLoading(false);
    }
  }, [query.hash, query.questionnaireId, isReady]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Head>
        <title>Questionnaire</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {questionnaireId && (
        <QuestionnaireLayout
          questionnaireId={questionnaireId}
          questionId={questionId}
          token={token}
        />
      )}
    </>
  );
}
