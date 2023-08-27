import { CreatePostBottom, CreatePostBtn, CreatePostContainer, CreatePostEmoji, CreatePostInput, CreatePostTitle } from "./CreatePost.styled"

const CreatePost = () => {
  return (
    <CreatePostContainer>
      <CreatePostTitle>Create Title</CreatePostTitle>
      <CreatePostInput placeholder="How are you feeling today?"/>
      <CreatePostEmoji>💬</CreatePostEmoji>
      <CreatePostBottom>
        <CreatePostBtn>Post</CreatePostBtn>
      </CreatePostBottom>
    </CreatePostContainer>
  )
}

export default CreatePost