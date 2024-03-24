import React from "react";
import { TextField, Button, Box, Grid, Typography } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
const Contact = () => {
  const address = (
    <Box>
      <Typography variant="h5" component="div" justifyContent="center">
        <ContactMailIcon> </ContactMailIcon> Contact Us
      </Typography>
      <p>
        {" "}
        <BusinessIcon> </BusinessIcon> 1234 Main St, Anytown, USA
      </p>
      <p>
        <LocalPhoneIcon> </LocalPhoneIcon>123-456-7890
      </p>
    </Box>
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
 {/* <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>
    </Box> */}

      <Grid
        container
        // rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        backgroundColor="white"
        justifyContent="center"
      >
        <Grid item xs={6} justifyContent="center">
            <form onSubmit={handleSubmit}>
              <TextField
                label="Name"
                variant="outlined"
                sx={{ m: 1, width: "35ch" }}
              />
              <TextField
                label="Email"
                variant="outlined"
                sx={{ m: 1, width: "35ch" }}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                sx={{ m: 1, width: "70ch" }}
                rows={4}
              />
              <Box  sx={{ p: 2 }}>
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </Box>
            </form>
        </Grid>
        <Grid item xs={6} justifyContent="center">
          {address}
        </Grid>
      </Grid>
      <Box display="flex" justifyContent="center" alignItems="center" spacing={10}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224097.62384538134!2d76.92842441392075!3d28.64398388281161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1711295191166!5m2!1sen!2sin"
          width="1200"
          height="600"
          title="Google Maps Location"
          style={{ border: "0" }}
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </>
  );
};

export default Contact;
