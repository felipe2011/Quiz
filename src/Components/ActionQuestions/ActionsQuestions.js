import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ActionsQuestions.module.css'
import { FormControl, Button } from '@material-ui/core'
import { CancelTwoTone, PlayCircleFilledWhiteTwoTone } from '@material-ui/icons'

const ActionsQuestions = ({
  numberQuestions,
  setBtnContinue,
  setNumberQuestions,
}) => {
  return (
    <>
      <p>You will answer {numberQuestions} questions. Ready?</p>
      <FormControl
        fullWidth
        style={{ display: 'inline-block', textAlign: 'center' }}
      >
        <Button
          className={styles.buttonCancel}
          variant='outlined'
          startIcon={<CancelTwoTone />}
          onClick={() => {
            setBtnContinue(false)
            setNumberQuestions(0)
          }}
        >
          Cancel
        </Button>
        <Link
          className={styles.linkDefault}
          to={`/Questions?number=${numberQuestions}`}
        >
          <Button
            className={styles.buttonDefault}
            variant='outlined'
            endIcon={<PlayCircleFilledWhiteTwoTone />}
          >
            Start
          </Button>
        </Link>
      </FormControl>
    </>
  )
}

export default ActionsQuestions
