import React from 'react'
import styles from './Question.module.css'
import { Box, Button, Grid } from '@material-ui/core'

const Question = ({ listQuestions, currentQuestion, handleAnswerBtn }) => {
  return (
    <>
      <Box
        className={styles.questions}
        sx={{ display: 'flex', flexWrap: 'wrap', p: 2 }}
      >
        <p className={styles.info}>
          Difficulty: {listQuestions[currentQuestion].difficulty} |{' '}
          {listQuestions[currentQuestion].category}
        </p>
        <p className={styles.title}>
          {currentQuestion + 1}) {listQuestions[currentQuestion].question}
        </p>
      </Box>
      <Grid container className={styles.optionContainer}>
        {listQuestions[currentQuestion].answers.map((item, index) => (
          <Button
            key={index}
            className={styles.btnOption}
            variant='contained'
            onClick={() =>
              handleAnswerBtn(listQuestions[currentQuestion], item)
            }
          >
            {item.answers}
          </Button>
        ))}
      </Grid>
    </>
  )
}

export default Question
