import z from 'zod'

export type SignupInputDTO = {
  name: string
  email: string
  password: string
}

export const SignupSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(4)
}).transform(data => data as SignupInputDTO)
