import { Grid, Typography } from "@material-ui/core";
import isAuth, { userType } from "../lib/isAuth";

const Welcome = (props) => {
  console.log("$$$$$$$$$$", userType);
  return (
    <Grid
      container
      item
      direction='column'
      alignItems='center'
      justify='center'
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant='h2'>Welcome to Find Jobs</Typography>
      </Grid>
    </Grid>
  );
};

export const ErrorPage = (props) => {
  return (
    <Grid
      container
      item
      direction='column'
      alignItems='center'
      justify='center'
      style={{ padding: "30px", minHeight: "93vh" }}
    >
      <Grid item>
        <Typography variant='h2'>Error 404</Typography>
      </Grid>
    </Grid>
  );
};

export default Welcome;
