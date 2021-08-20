import * as yup from 'yup'

export default yup.object().shape({
   size:yup.string()
      .oneOf(['small','medium','large'], 'Size is a required input.'),
   instructions:yup.string()
      .required('Instructions required. In none, type N/A'),
   name:yup.string()
      .required('Name is a required input.')
      .min(2, 'Must be 2 characters or longer'),
   sausage: yup.boolean(),
   pepperoni: yup.boolean(),
   peppers: yup.boolean(),
   olives: yup.boolean(),
})