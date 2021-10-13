import React from 'react'
import { Field, ErrorMessage } from 'formik'
import styles from './FormNumberQuestions.module.css'
import { Button, Grid } from '@material-ui/core'
import { Send } from '@material-ui/icons'

const FormNumberQuestions = () => {
  return (
    <Grid container spacing={2}>
      <label>How many questions do you want to answer?</label>
      <Field
        className={styles.inputNumber}
        type='number'
        name='amountQuestions'
      />
      <p className={styles.error}>
        <ErrorMessage name='amountQuestions' />
      </p>
      <Button
        className={styles.buttonDefault}
        variant='outlined'
        endIcon={<Send />}
        type='submit'
      >
        Continue
      </Button>
    </Grid>
  )
}

export default FormNumberQuestions
