import { DeleteLikedPost, EditedPost, LikedPost, PostDB, PostMinimal } from "../models/Posts"
import { connectDB } from "./database"

export class PostDatabase {
  public static TABLE_POSTS = 'posts'
  public static TABLE_LIKES = 'likes_posts'

  public async editPost(editedPost: EditedPost):Promise<PostDB> {
    const [post] = await connectDB(PostDatabase.TABLE_POSTS)
      .update({
        content: editedPost.content,
        updated_at: new Date().toISOString()
      })
      .where({id: editedPost.id})
      .returning('*')

    return post
  }

  public async deletePost(postId: string) {
    return await connectDB(PostDatabase.TABLE_POSTS).del().where({id: postId})
  }

  public async getPostById(postId: string):Promise<PostDB> {
    const [post] = await connectDB(PostDatabase.TABLE_POSTS).where({id: postId})

    return post
  }

  public async createPost(newPost: PostMinimal):Promise<PostDB> {
    const [post] = await connectDB(PostDatabase.TABLE_POSTS)
      .insert(newPost)
      .returning('*')

    return post
  } 

  public async getPosts(): Promise<PostDB[]> {
    return await connectDB(PostDatabase.TABLE_POSTS)
  }

  public async getLikedPost(postId: string, userId: string) {
    const [likedPost] = await connectDB(PostDatabase.TABLE_LIKES)
      .where({post_id: postId, user_id: userId})

    return likedPost
  }

  public async createLikePost(likedPost: LikedPost) {
    return await connectDB(PostDatabase.TABLE_LIKES).insert(likedPost)
  }

  public async editLikePost(likedPost: LikedPost) {
    return await connectDB(PostDatabase.TABLE_LIKES)
      .update({like: likedPost.like})
      .where({post_id: likedPost.post_id, user_id: likedPost.user_id})
  }

  public async deleteLikePost(deleteLikedPost: DeleteLikedPost)  {
    return await connectDB(PostDatabase.TABLE_LIKES)
      .del()
      .where({
        post_id: deleteLikedPost.post_id,
        user_id: deleteLikedPost.user_id
      })
  }
}