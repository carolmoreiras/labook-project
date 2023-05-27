export type PostDB = {
  id: string
  creator_id: string
  content: string
  likes: number
  dislikes: number
  created_at: string
  updated_at: string
}

export type EditedPost = {
  id: string
  content: string
}

export type PostMinimal = {
  id: string
  creator_id: string
  content: string
}

export type LikedPost = {
  post_id: string
  user_id: string
  like: boolean
}

export type DeleteLikedPost = Omit<LikedPost, 'like'>