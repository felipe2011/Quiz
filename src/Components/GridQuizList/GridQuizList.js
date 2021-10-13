import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './GridQuizList.module.css'
import { Card, Chip, Grid } from '@material-ui/core'
import { CheckCircleTwoTone, HighlightOffTwoTone } from '@material-ui/icons'
import { UserContext } from '../../UserContext'

const GridQuizList = () => {
  const { listReportsStorage } = useContext(UserContext)

  return (
    <Grid className={styles.containerQuiz}>
      {listReportsStorage.length > 0 &&
        listReportsStorage?.map((quiz, index) => (
          <Link key={index} className={styles.linkDefault} to={`/report-detail?id=${quiz.idQuiz}`}>
          <Card className={styles.Quiz}>
            QUIZ {quiz.idQuiz}
            <div>
              <Chip
                className={styles.correctAnswers}
                icon={<CheckCircleTwoTone style={{ color: 'white' }} />}
                label={`${quiz.correctAnswer} correct answers`}
              />
              <Chip
                className={styles.inCorrectAnswers}
                icon={<HighlightOffTwoTone style={{ color: 'white' }} />}
                label={`${quiz.inCorrectAnswer} incorrect answers`}
              />
            </div>
          </Card>
          </Link>
        ))}
    </Grid>
  )
}

export default GridQuizList
