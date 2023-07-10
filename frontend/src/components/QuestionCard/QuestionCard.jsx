import React, { useEffect, useState } from 'react'
import { useRef } from 'react';
import './questioncard.css'

const QuestionCard = ({topicFunction}) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const dataFetchedRef = useRef(false);
  
  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current=true;
    const {question, answer} = topicFunction();
    setQuestion(question);
    setAnswer(answer);
  }, []);

  return (
    <article>
      <h1>question: {question}</h1>
      <h5>answer: {answer}</h5>
    </article>
  )
}

export default QuestionCard