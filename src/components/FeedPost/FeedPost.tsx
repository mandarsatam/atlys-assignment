const FeedPost = ({details}: {details: IFeedPost}) => {
  return (
    <div className="PostContainer">
      <div className="PostTopSection">
        <div className="LeftSection">
          <img src="" />
        </div>
        <div className="MiddleSection">
          <div className="ProfileName">{details.name}</div>
          <div className="CreateTime">{details.createdAt}</div>
        </div>
        <div className="RightSection">
          <img src="" />
        </div>
      </div>
      <div className="PostContentSection">
        <div className="PostLeftSection">👋</div>
        <div className="PostRightSection">
            {details.postContent}
        </div>
      </div>
      <div className="PostBottomSection">
        <div className="PostCommentContainer">
            <div className="CommentIcon">
                Icon
            </div>
            <div className="CommentIcon">
                {details.numComments} comments
            </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPost;
