import { useEffect, useState } from "react";
import CreatePost from "../../components/CreatePost/CreatePost";
import FeedPost from "../../components/FeedPost/FeedPost";
import data from '../../assets/data.json'
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FeedContainer } from "./FeedPage.styled";

const FeedPage = () => {
  const [postList, setPostList] = useState<IFeedPost[]>([])
  const [loginActive, setLoginActive] = useState<Boolean | null>(false);

  let location = useLocation();
  console.log(location)

  let navigate = useNavigate();

  useEffect(() => {
    setPostList([...data])
  }, [])

  const handleFeedOnClick = () => {
    navigate('/feed/register');
    setLoginActive(true);
  }

  const handleOutSideClick = () => {
    if(loginActive){
      setLoginActive(false);
      navigate('/feed')
    } 
  }
 
  return (
    <FeedContainer onClick={handleOutSideClick}>
      <Outlet />
      <div className="FeedTopSection">
        <div className="FeedGreeting">
          <h2>Hello Jane</h2>
        </div>
        <div className="FeedGreetingDesc">
          <p>
            How are you doing today? Would you like to share something with the
            community 🤗
          </p>
        </div>
      </div>
      <div className="FeedBottomSection" onClick={handleFeedOnClick}>
        <CreatePost />
        <div className="FeedPostList">
          {postList?.map((post) => (
            <FeedPost details={post} key={post.id}/>
          ))}
        </div>
      </div>
    </FeedContainer>
  );
};

export default FeedPage;
