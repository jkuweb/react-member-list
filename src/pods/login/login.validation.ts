import { Validators, createFormValidation } from '@lemoncode/fonk';

const validationSchema = {
  field: {
    username: [
      {
        validator: Validators.required,
        message: 'valor requerido'
      },
      {
        validator: Validators.email,
        message: 'introduce un email válido'
      }],
    password: [Validators.required, {
      validator: Validators.minLength,
      customArgs: { length: 4 },
      message: 'mínimo 4 caracteres'
    }],
  },
};

export const formLoginValidation = createFormValidation(validationSchema);