import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    username: [
      {
        validator: Validators.required,
        message: 'required'
      },
      {
        validator: Validators.email,
        message: 'Please, insert a valid email'
      }],
    password: [Validators.required, {
      validator: Validators.minLength,
      customArgs: { length: 4 },
      message: 'minimum 4 characters'
    }],
  },
};

export const formLoginValidation = createFormValidation(validationSchema);