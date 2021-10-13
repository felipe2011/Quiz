import * as Yup from 'yup'

export default Yup.object().shape({
  amountQuestions: Yup.number().required('Required field').min(1, 'value must be greater than 0')
})