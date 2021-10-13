import React, {Fragment} from 'react'
import styles from './Report.module.css'
import { Grid, Chip, Card, Button } from '@material-ui/core'
import { CheckCircleTwoTone, HighlightOffTwoTone } from '@material-ui/icons'

const Report = ({ correctAnswer, inCorrectAnswer, listReport }) => {
  return (
    <Grid className={styles.containerReport}>
      <Chip
        className={styles.correctAnswers}
        icon={<CheckCircleTwoTone style={{ color: 'white' }} />}
        label={`${correctAnswer} correct answers`}
      />
      <Chip
        className={styles.inCorrectAnswers}
        icon={<HighlightOffTwoTone style={{ color: 'white' }} />}
        label={`${inCorrectAnswer} incorrect answers`}
      />
      {listReport.map((item, index) => (
        <Card key={index} className={styles.report}>
          <Chip
            className={
              item.correct ? styles.correctAnswers : styles.inCorrectAnswers
            }
            icon={
              item.correct ? (
                <CheckCircleTwoTone style={{ color: 'white' }} />
              ) : (
                <HighlightOffTwoTone style={{ color: 'white' }} />
              )
            }
            label={item.correct ? `correct` : `incorrect`}
          />
          Difficulty: {item.question.difficulty} | {item.question.category}
          <Grid className={styles.questions}>
            <p className={styles.title}>{item.question.question}</p>
          </Grid>
          <Grid className={styles.optionContainer}>
            {item.question.answers.map((itemAnswers, i) => (
              <Fragment key={`${i}-${index}`}>
                {!item.correct &&
                item.answerSelected.answers === itemAnswers.answers ? (
                  <Button
                    className={styles.btnOptionIncorrect}
                    variant='contained'
                  >
                    {itemAnswers.answers}
                  </Button>
                ) : (
                  <Button
                    className={
                      itemAnswers.correct
                        ? styles.btnOptionCorrect
                        : styles.btnOption
                    }
                    variant='contained'
                  >
                    {itemAnswers.answers}
                  </Button>
                )}
                </Fragment>
            ))}
          </Grid>
        </Card>
      ))}
    </Grid>
  )
}

export default Report
