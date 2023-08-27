import {
  CreateTime,
  LeftSection,
  MiddleSection,
  PostCommentContainer,
  PostContainer,
  PostContentSection,
  PostLeftSection,
  PostRightSection,
  PostTopSection,
  ProfileName,
  RightSection,
} from "./FeedPost.styled";
import ChatBubble from "../../assets/chatBubble.svg";
import HorizontalDots from '../../assets/dotsHorizontal.svg'
import moment from "moment";

const FeedPost = ({ details }: { details: IFeedPost }) => {
  return (
    <PostContainer>
      <PostTopSection>
        <LeftSection>
          <img src={details.imgUrl} />
        </LeftSection>
        <MiddleSection>
          <ProfileName>{details.name}</ProfileName>
          <CreateTime>{moment(details.createdAt).fromNow()}</CreateTime>
        </MiddleSection>
        <RightSection>
          <img src={HorizontalDots} />
        </RightSection>
      </PostTopSection>
      <PostContentSection>
        <PostLeftSection>👋</PostLeftSection>
        <PostRightSection>{details.postContent}</PostRightSection>
      </PostContentSection>
      <PostCommentContainer>
        <img src={ChatBubble} />
        <button className="CommentIcon">{details.numComments} comments</button>
      </PostCommentContainer>
    </PostContainer>
  );
};

export default FeedPost;
