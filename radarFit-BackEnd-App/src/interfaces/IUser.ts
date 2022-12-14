/* eslint-disable import/prefer-default-export */
import { z } from 'zod';

export const UserZodSchema = z.object({
  nome: z.string({
    required_error: 'nome is required',
    invalid_type_error: 'nome must be a string',
  }).min(3, { message: 'nome must be 3 or more characters long' }),
  email: z.string({
    required_error: 'email is required',
    invalid_type_error: 'email must be a string',
  }).min(10, { message: 'email must be 3 or more characters long' }),
  role: z.string({
    required_error: 'role is required',
    invalid_type_error: 'role must be a string',
  }).min(3, { message: 'role must be 3 or more characters long' }),
  senha: z.string({
    required_error: 'senha is required',
    invalid_type_error: 'senha must be a string',
  }).min(5, { message: 'senha must be 3 or more characters long' }),
});

export type IUser = z.infer<typeof UserZodSchema>
