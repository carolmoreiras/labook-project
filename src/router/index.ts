import { Router } from 'express'
import { UserController } from '../controller/UserController'
import { UserBusiness } from '../business/UserBusiness'
import { UserDatabase } from '../db/UserDatabase'
import { PostController } from '../controller/PostController'
import { PostBusiness } from '../business/PostBusiness'
import { PostDatabase } from '../db/PostDatabase'

export const router = Router()

const { signup, signin } = new UserController(
  new UserBusiness(
    new UserDatabase()
  )
)

const { getPosts, createPost, editPost, deletePost, likePost } = new PostController(
  new PostBusiness(
    new PostDatabase()
  )
)

router.post('/signup', signup)
router.post('/signin', signin)
router.get('/posts', getPosts)
router.post('/posts', createPost)
router.put('/posts/:postId', editPost)
router.delete('/posts/:postId', deletePost)
router.put('/posts/:postId/like', likePost)
