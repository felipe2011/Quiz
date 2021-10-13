import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import styles from './Questions.module.css'
import { Grid, Card } from '@material-ui/core'
import Report from '../../Components/Report/Report'
import { UserContext } from '../../UserContext'
import Question from '../../Components/Question/Question'

const Questions = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const numberParams = urlParams.get('number')
  const { setHasListReports, amount, setAmount, setListReportsStorage } =
    useContext(UserContext)

  const [listQuestions, setListQuestions] = useState([])
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const [inCorrectAnswer, setInCorrectAnswer] = useState(0)
  const [listReport, setListReport] = useState([])
  const [idQuiz, setIdQuiz] = useState(0)

  useEffect(() => {
    axios
      .get(`https://opentdb.com/api.php?amount=${numberParams}`)
      .then(({ data }) => {
        createListQuestions(data.results)
      })
      .catch(() => {
        console.log('Tente mais tarde!')
      })
  }, [numberParams])

  useEffect(() => {
    if (showScore) {
      recordReport()
    }
  }, [showScore])

  const sort = (arr, text) => {
    arr.sort(function (a, b) {
      if (a[text] > b[text]) {
        return 1
      }
      if (a[text] < b[text]) {
        return -1
      }
      return 0
    })
    return arr
  }

  const listAnswers = (answersArr, correct_answer) => {
    const newAnswers = answersArr.map((item) => {
      return {
        answers: item,
        correct: false,
      }
    })
    newAnswers.push({
      answers: correct_answer,
      correct: true,
    })

    return sort(newAnswers, 'answers')
  }

  const createListQuestions = (list) => {
    let listObj = {}
    listObj = list.map((item) => {
      return {
        category: item.category,
        difficulty: item.difficulty,
        question: item.question,
        type: item.type,
        answers: listAnswers(item.incorrect_answers, item.correct_answer),
      }
    })

    setListQuestions((current) => [...current, ...listObj])
  }

  const recordReport = () => {
    let listReportStorage = []

    if (localStorage.getItem('ListReports')) {
      listReportStorage = JSON.parse(localStorage.getItem('ListReports'))
      listReportStorage.push({
        idQuiz,
        correctAnswer: correctAnswer,
        inCorrectAnswer: inCorrectAnswer,
        listReport,
      })
      localStorage.setItem('ListReports', JSON.stringify(listReportStorage))
      setAmount(amount + 1)
      setListReportsStorage(listReportStorage)
    } else {
      listReportStorage.push({
        idQuiz,
        correctAnswer,
        inCorrectAnswer,
        listReport,
      })
      localStorage.setItem('ListReports', JSON.stringify(listReportStorage))
      setAmount(amount + 1)
      setListReportsStorage(listReportStorage)
    }
    setHasListReports(true)
  }

  const counter = ({ correct }) => {
    if (correct === true) {
      setCorrectAnswer(correctAnswer + 1)
    } else {
      setInCorrectAnswer(inCorrectAnswer + 1)
    }
  }

  const createIdQuiz = () => {
    if (localStorage.getItem('ListReports')) {
      const listReportStorage = JSON.parse(localStorage.getItem('ListReports'))
      setIdQuiz(listReportStorage.length + 1)
    } else {
      setIdQuiz(1)
    }
  }

  const handleAnswerBtn = (question, answer) => {
    let objReport = {
      question,
      answerSelected: answer,
      correct: answer.correct,
    }

    setListReport((current) => [...current, objReport])
    counter(answer)

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < listQuestions.length) {
      setCurrentQuestion(nextQuestion)
    } else {
      createIdQuiz()
      setShowScore(true)
    }
  }

  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Card className={styles.root}>
            {!showScore && listQuestions.length > 0 ? (
              <Question
                listQuestions={listQuestions}
                currentQuestion={currentQuestion}
                handleAnswerBtn={handleAnswerBtn}
              />
            ) : (
              <>
                {showScore && (
                  <Report
                    correctAnswer={correctAnswer}
                    inCorrectAnswer={inCorrectAnswer}
                    listReport={listReport}
                  />
                )}
              </>
            )}
          </Card>
        </Grid>
      </Grid>
    </>
  )
}

export default Questions
