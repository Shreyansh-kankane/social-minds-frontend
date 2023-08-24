import { Box, Typography, useTheme } from "@mui/material";
import Friend from "components/Friend";
import WidgetWrapper from "components/WidgetWrapper";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { setFriends } from "state";
import { BASE_URI } from "helper";
import Navbar from "scenes/navbar";

const Peoples = () => {
//   const dispatch = useDispatch();
  const { palette } = useTheme();
  const token = useSelector((state) => state.token);
//   const friends = useSelector((state) => state.user.friends);
  const [load,setLoad] = useState(true);
  const loggedInUserId = useSelector((state) => state.user._id);
  const [peoples,setPeoples] = useState([]);

  useEffect(() => {
    const getPeoples = async () => {
      const response = await fetch(
        `${BASE_URI}/users/`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
    );
    const data = await response.json();
    // dispatch(setFriends({ friends: data }));
    setPeoples(data);
    setLoad(false);
};
getPeoples();
},[token]);


  return (
        <>
      <Navbar />
      <WidgetWrapper>
      <Typography
        color={palette.neutral.dark}
        variant="h5"
        fontWeight="500"
        sx={{ mb: "1.5rem" }}
      >
        Social minds
      </Typography>
      <Box display="flex" flexDirection="column" gap="1.5rem">

        { load===false ? 
        (
          peoples.length!==0 && peoples.map((person) => (
            <Friend
              key={person._id}
              friendId={person._id}
              name={`${person.firstName} ${person.lastName}`}
              subtitle={person.occupation}
              userPicturePath={person.picturePath}
              userId={loggedInUserId}
              loggedInUserId={loggedInUserId}
            />
          ))
        // <div>Hii</div>
        ) : (
          <div>Loading...</div>
        )
      }
      </Box>
    </WidgetWrapper>
    </>
  );
};

export default Peoples;
