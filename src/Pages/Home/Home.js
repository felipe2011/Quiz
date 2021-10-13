import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import styles from './Home.module.css'
import { Grid, Card, Box } from '@material-ui/core'
import FormNumberQuestions from '../../Components/FormNumberQuestions/FormNumberQuestions'
import ActionsQuestions from '../../Components/ActionQuestions/ActionsQuestions'
import Schema from './schema'

const Home = () => {
  const [numberQuestions, setNumberQuestions] = useState()
  const [btnContinue, setBtnContinue] = useState(false)

  // const handleNumberQuestions = ({ target }) => {
  //   if (target.value <= 0) {
  //     setNumberQuestions(0)
  //     return
  //   }
  //   setNumberQuestions(Number(target.value))
  // }

  const onSubmit = (values) => {
    setNumberQuestions(values.amountQuestions)
    setBtnContinue(true)
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card className={styles.root}>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 2 }}>
            <Formik
              validationSchema={Schema}
              onSubmit={onSubmit}
              handleChange
              initialValues={{
                amountQuestions: '',
              }}
            >
              {({ values }) => (
                <Form style={{ width: '100%' }}>
                  {!btnContinue ? (
                    <FormNumberQuestions />
                  ) : (
                    <ActionsQuestions
                      setNumberQuestions={setNumberQuestions}
                      setBtnContinue={setBtnContinue}
                      numberQuestions={numberQuestions}
                    />
                  )}
                </Form>
              )}
            </Formik>
          </Box>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
