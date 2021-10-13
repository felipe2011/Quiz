import React, { useContext } from 'react'
import styles from './Header.module.css'
import { Grid, Card, Chip } from '@material-ui/core'
import { QuestionAnswerTwoTone } from '@material-ui/icons'
import { UserContext } from '../../UserContext'
import { Link } from 'react-router-dom'

const Header = () => {
  const { hasListReports, amount } = useContext(UserContext)

  return (
    <header className={styles.background}>
      <Grid container className={styles.root}>
        <Grid item xs={12}>
          <Card className={styles.card}>
            <Link to='/' className={styles.linkQuiz}>
              <Chip
                className={styles.quiz}
                icon={<QuestionAnswerTwoTone />}
                label='Quiz'
                style={{ fontSize: '2rem' }}
              />
            </Link>
            {hasListReports ? (
              <div>
              <Link to='/quiz-list' className={styles.linkReports}>
                {amount} Completed Questionnaires
              </Link>              
              </div>
            ) : (
              <div className={styles.txtReports}>No Reports Answered</div>
            )}
          </Card>
        </Grid>
      </Grid>
    </header>
  )
}

export default Header
