
  import { Box, Typography, Divider, useTheme } from "@mui/material";
  // import UserImage from "components/UserImage";
  import FlexBetween from "components/FlexBetween";
  import WidgetWrapper from "components/WidgetWrapper";
  import { useNavigate } from "react-router-dom";
  // import { NavLink } from "react-router-dom";
  
  const UserWidget = () => {
    
    const { palette } = useTheme();
    const navigate = useNavigate();

    const dark = palette.neutral.dark;
    const medium = palette.neutral.medium;
    const main = palette.neutral.main;
    
    return (
      <WidgetWrapper>
          <Box>
            <Typography
              variant="h4"
              color={dark}
              fontWeight="500"
            >
              Get Connect
            </Typography>
            <Typography color={medium}></Typography>
          </Box>
        {/* </FlexBetween> */}
  
        <Divider />

        <Box p="1rem 0">
          <FlexBetween mb="0.5rem">
            <Typography color={main} > Users on Social minds </Typography>
            <Typography color={main} fontWeight="500"
            onClick={() => navigate(`/users`)}
            sx={{
              "&:hover": {
                cursor: "pointer",
              }
            }}
            >
              Get Connected
            </Typography>
          </FlexBetween>
          <FlexBetween>
            <Typography color={main} > organisation  </Typography>
            <Typography color={main} fontWeight="500"
            onClick={() => navigate(`/organisation`)}
            sx={{
              "&:hover": {
                cursor: "pointer",
              }
            }}
            >
                Get Registered
            </Typography>
          </FlexBetween>
        </Box>
  
        {/* <Divider /> */}

      </WidgetWrapper>
    );
  };
  
  export default UserWidget;
  