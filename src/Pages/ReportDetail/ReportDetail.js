import React, { useEffect, useState } from 'react'
import styles from './ReportDetail.module.css'
import { Grid, Card } from '@material-ui/core'
import Report from '../../Components/Report/Report'

const ReportDetail = () => {
  const urlParams = new URLSearchParams(window.location.search)
  const idParams = urlParams.get('id')

  const [report, setReport] = useState(null)

  useEffect(() => {
    if (localStorage.getItem('ListReports')) {
      const listReportStorage = JSON.parse(localStorage.getItem('ListReports'))
      const reportFilter = listReportStorage.filter(
        (filter) => filter.idQuiz === Number(idParams)
      )
      setReport(...reportFilter)
    }
  }, [idParams])

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card className={styles.root}>
          {report !== null && (
            <Report
              correctAnswer={report.correctAnswer}
              inCorrectAnswer={report.inCorrectAnswer}
              listReport={report.listReport}
            />
          )}
        </Card>
      </Grid>
    </Grid>
  )
}

export default ReportDetail
