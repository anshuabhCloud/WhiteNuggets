import React from "react";
import { TextField, Button, Box, Grid, Typography, Paper } from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import { styled } from '@mui/material/styles';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="start" // Align items to the start of the grid
      >
        <Grid item xs={12} md={6}>
          <Item>
            <form onSubmit={handleSubmit}>
              <TextField label="Name" variant="outlined" fullWidth sx={{ mb: 2 }} />
              <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
              <TextField 
                label="Message" 
                variant="outlined" 
                fullWidth 
                multiline 
                rows={4} 
                sx={{ mb: 2 }} 
              />
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </form>
          </Item>
        </Grid>
        <Grid item xs={12} md={6}>
          <Item>
            <Typography variant="h5" component="div" gutterBottom>
              <ContactMailIcon sx={{ mr: 1, verticalAlign: 'bottom' }} /> Contact Us
            </Typography>
            <Typography>
              <BusinessIcon sx={{ mr: 1, verticalAlign: 'bottom' }} /> 1234 Main St, Anytown, USA
            </Typography>
            <Typography>
              <LocalPhoneIcon sx={{ mr: 1, verticalAlign: 'bottom' }} />123-456-7890
            </Typography>
          </Item>
        </Grid>
      </Grid>
      <Box sx={{ width: '100%', overflow: 'hidden', mt: 2 }}>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="450"
          title="Google Maps Location"
          loading="lazy"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe> */}
      </Box>
    </>
  );
};

export default Contact;
