/* eslint-disable import/prefer-default-export */
import { z } from 'zod';

export const Product = z.object({
  produto: z.string({
    required_error: 'produto is required',
    invalid_type_error: 'produto must be a string',
  }).min(3, { message: 'produto must be 3 or more characters long' }),
  valor: z.number({
    required_error: 'valor is required',
    invalid_type_error: 'valor must be a number',
  }).gte(1900, { message: 'this is too small' })
    .lte(2022, { message: 'this is too bid' }).int({ message: 'You know this isnt right' }),
  descricao: z.string({
    required_error: 'descricao is required',
    invalid_type_error: 'descricao must be a string',
  }).min(3, { message: 'descricao must be 3 or more characters long' }),
  created: z.string({
    required_error: 'created is required',
    invalid_type_error: 'created must be a string',
  }).min(3, { message: 'created must be 3 or more characters long' }),
  updated: z.string({
    required_error: 'updated is required',
    invalid_type_error: 'updated must be a string',
  }).min(3, { message: 'updated must be 3 or more characters long' }),
});

export type IProduct = z.infer<typeof Product>
