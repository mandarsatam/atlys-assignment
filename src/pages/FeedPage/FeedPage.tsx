import { useEffect, useState } from "react";
import CreatePost from "../../components/CreatePost/CreatePost";
import FeedPost from "../../components/FeedPost/FeedPost";
import data from "../../assets/data.json";
import { Outlet, useNavigate } from "react-router-dom";
import {
  FeedBottomSection,
  FeedGreeting,
  FeedGreetingDesc,
  FeedTopSection,
  FeedContainer,
} from "./FeedPage.styled";

const FeedPage = () => {
  const [postList, setPostList] = useState<IFeedPost[]>([]);
  const [loginActive, setLoginActive] = useState<boolean>(false);

  let navigate = useNavigate();


  useEffect(() => {
    setPostList([...data]);
  }, []);

  const handleFeedOnClick = () => {
    navigate("/feed/register");
    setLoginActive(true);
  };

  const handleOutSideClick = () => {
    if (loginActive) {
      setLoginActive(false);
      navigate("/feed");
    }
  };

  return (
    <>
      <Outlet />
      <FeedContainer onClick={handleOutSideClick} $isBlur={loginActive}>
        <FeedTopSection>
          <FeedGreeting>Hello Jane</FeedGreeting>
          <FeedGreetingDesc>
            How are you doing today? Would you like to share something with the
            community 🤗
          </FeedGreetingDesc>
        </FeedTopSection>
        <FeedBottomSection onClick={handleFeedOnClick}>
          <CreatePost />
          <div className="FeedPostList">
            {postList?.map((post) => (
              <FeedPost details={post} key={post.id} />
            ))}
          </div>
        </FeedBottomSection>
      </FeedContainer>
    </>
  );
};

export default FeedPage;
