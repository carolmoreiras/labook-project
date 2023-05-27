import z from 'zod'

export type LikeInputDTO = {
  postId: string
  token: string
  like: boolean
}

export const LikeSchema = z.object({
  postId: z.string().min(4),
  token: z.string().min(4),
  like: z.boolean()
}).transform(data => data as LikeInputDTO)
