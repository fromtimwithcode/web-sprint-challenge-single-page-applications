import * as yup from 'yup'

export default yup.object().shape({
   size:yup.string()
      .oneOf(['small','medium','large'], 'Size is a required input.'),
   instructions:yup.string()
      .required('Instructions required. Type N/A if none.'),
   name:yup.string()
      .required('Name is a required input.')
      .min(2, 'name must be at least 2 characters'),
   sausage: yup.boolean(),
   pepperoni: yup.boolean(),
   peppers: yup.boolean(),
   olives: yup.boolean(),
})