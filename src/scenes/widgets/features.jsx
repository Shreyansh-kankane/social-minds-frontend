import {
    ManageAccountsOutlined,
  } from "@mui/icons-material";
  import { Box, Typography, Divider, useTheme } from "@mui/material";
  import UserImage from "components/UserImage";
  import FlexBetween from "components/FlexBetween";
  import WidgetWrapper from "components/WidgetWrapper";
  import { useNavigate } from "react-router-dom";
  import { NavLink } from "react-router-dom";
  
  const UserWidget = ({ userId,picturePath }) => {
    
    const { palette } = useTheme();
    const navigate = useNavigate();

    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;
    
    return (
      <WidgetWrapper>
        {/* FIRST ROW */}
        <FlexBetween
          gap="0.5rem"
          pb="1.1rem"
          onClick={() => navigate(`/profile/${userId}`)}
        >
          <FlexBetween gap="1rem">
            <UserImage image={picturePath} />
            <Box>
              <Typography
                variant="h4"
                color={dark}
                fontWeight="500"
                sx={{
                  "&:hover": {
                    color: palette.primary.light,
                    cursor: "pointer",
                  },
                }}
              >
                Get Connect
              </Typography>
              <Typography color={medium}></Typography>
            </Box>
          </FlexBetween>
          <ManageAccountsOutlined />
        </FlexBetween>
  
        <Divider />
  
        <Divider />
  
        {/* THIRD ROW */}
        <Box p="1rem 0">
          <FlexBetween mb="0.5rem">
            <Typography color={medium}>  <NavLink to='/users' style={{textDecoration:'none'}}>  Users </NavLink> </Typography>
            <Typography color={main} fontWeight="500">
                Get Connected
            </Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography color={medium}> <NavLink to='/organisation' style={{textDecoration:'none'}}> Organisation  </NavLink>  </Typography>
            <Typography color={main} fontWeight="500">
                Get Registered
            </Typography>
          </FlexBetween>
        </Box>
  
        <Divider />

      </WidgetWrapper>
    );
  };
  
  export default UserWidget;
  