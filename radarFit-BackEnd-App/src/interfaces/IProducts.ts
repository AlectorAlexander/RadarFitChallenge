/* eslint-disable import/prefer-default-export */
import { z } from 'zod';

export const ProductZodSchema = z.object({
  produto: z.string({
    required_error: 'produto is required',
    invalid_type_error: 'produto must be a string',
  }).min(3, { message: 'produto must be 3 or more characters long' }),
  valor: z.number({
    required_error: 'valor is required',
    invalid_type_error: 'valor must be a number',
  }).gte(1, { message: 'this is too small' }),
  descricao: z.string({
    required_error: 'descricao is required',
    invalid_type_error: 'descricao must be a string',
  }).min(3, { message: 'descricao must be 3 or more characters long' }),
  url_image: z.string({
    required_error: 'url_image is required',
    invalid_type_error: 'url_image must be a string',
  }).min(3, { message: 'url_image must be 3 or more characters long' }),
  created: z.date({
    required_error: 'created is required',
    invalid_type_error: 'created must be a string',
  }),
  updated: z.date({
    required_error: 'updated is required',
    invalid_type_error: 'updated must be a string',
  }),
});

export type IProduct = z.infer<typeof ProductZodSchema>
