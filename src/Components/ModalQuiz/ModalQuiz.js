import React from 'react'
import styles from './ModalQuiz.module.css'
import { Button, Modal, Box } from '@material-ui/core'

const ModalQuiz = ({ open, handleClose, handleClearQuiz }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='parent-modal-title'
      aria-describedby='parent-modal-description'
    >
      <Box sx={{ ...style, width: 500 }}>
        <h2 id='parent-modal-title'>Clear Questionnaires</h2>
        <p id='parent-modal-description'>
          Are you sure you want to clear the quizzes?
        </p>
        <Button className={styles.buttonDefault} onClick={handleClearQuiz}>
          Clear
        </Button>
      </Box>
    </Modal>
  )
}

export default ModalQuiz
