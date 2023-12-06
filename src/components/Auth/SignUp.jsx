/* eslint-disable no-unused-vars */
import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Box, Container, TextField } from "@mui/material";

const SignUp = () => {
  return (
    <Box>
      <Container maxWidth='lg'>
        <Stack spacing={2} direction='row'>
          <Button variant='text'>Text</Button>
          <Button variant='contained'>Contained</Button>
          <Button variant='outlined'>Outlined</Button>

          <TextField id='standard-basic' label='Standard' variant='standard' />
        </Stack>
      </Container>
    </Box>
  );
};

export default SignUp;
