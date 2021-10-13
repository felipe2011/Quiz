import React, { useContext, useState } from 'react'
import styles from './QuizList.module.css'
import { Grid, Card, Button } from '@material-ui/core'
import GridQuizList from '../../Components/GridQuizList/GridQuizList'
import { CancelTwoTone } from '@material-ui/icons'
import { UserContext } from '../../UserContext'
import ModalQuiz from '../../Components/ModalQuiz/ModalQuiz'

const QuizList = () => {
  const {
    setListReportsStorage,
    setHasListReports,
    hasListReports,
    setAmount,
  } = useContext(UserContext)

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  const handleClearQuiz = () => {
    setListReportsStorage(false)
    setHasListReports(false)
    setAmount(0)
    handleClose()
    if (localStorage.getItem('ListReports')) {
      localStorage.removeItem('ListReports')
    }
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card className={styles.root}>
          {hasListReports ? (
            <>
              <Button
                className={styles.buttonDefault}
                variant='outlined'
                startIcon={<CancelTwoTone />}
                onClick={handleOpen}
              >
                Clear Questionnaires
              </Button>

              <ModalQuiz
                open={open}
                handleClose={handleClose}
                handleClearQuiz={handleClearQuiz}
              />

              <GridQuizList />
            </>
          ) : (
            <p>No questionnaire answered!</p>
          )}
        </Card>
      </Grid>
    </Grid>
  )
}

export default QuizList
