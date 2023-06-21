import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import PostWidget from "./PostWidget";
import { useState } from "react";
import { BASE_URI } from "helper";

const PostsWidget = ({ userId,isProfile = false }) => {

  const [load,setLoad] = useState(true);

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);;
  const token = useSelector((state) => state.token);

  useEffect(() => {

    const getPosts = async () => {
      const response = await fetch(`${BASE_URI}/posts`, {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      dispatch(setPosts({ posts: data }));
      setLoad(false);
    };

    const getUserPosts = async () => {
      const response = await fetch(
        `${BASE_URI}/posts/${userId}/posts`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      dispatch(setPosts({ posts: data }));
      setLoad(false);
    };

    if (isProfile) {
      getUserPosts();
    } else {
      getPosts();
    }
  }, [token,userId,isProfile,dispatch]);

  return (
    <>

      { load===false ? (posts.map( ({
          _id,
          userId,
          firstName,
          lastName,
          description,
          location,
          picturePath,
          userPicturePath,
          likes,
          comments,
        }) => (
          <PostWidget
            key={_id}
            postId={_id}
            postUserId={userId}
            name={`${firstName} ${lastName}`}
            description={description}
            location={location}
            picturePath={picturePath}
            userPicturePath={userPicturePath}
            likes={likes}
            comments={comments}
          />
        )
      )) : (
        <div>Loading...</div>
      )
    }
    </>
  );
};

export default PostsWidget;
