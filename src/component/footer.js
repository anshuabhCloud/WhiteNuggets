// src/componetns/Footer.tsx

import React from "react";
import {
  Box,
  Grid,
  Link,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  LinkedIn,
} from "@mui/icons-material";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";

export function Footer() {
  const address = "1234 Main St, Anytown, USA";
  const phone = "123-456-7890";

  return (
    <>
      {/* <Box sx={{ width: "100%" }} justifyContent="center"> */}
        <Grid
          container
        //   rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          backgroundColor="gray"
          justifyContent="rigth"
        >
          <Grid item xs={4} justifyContent="center" backgroundColor="green">
            <List>
              <ListItem justifyContent="center"  disablePadding >
                <Typography align="justify"  justifyContent="center" variant="h6">
                       Contact Us
                </Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <BusinessOutlinedIcon />
                  </ListItemIcon>
                  <Typography variant="h7">{address}</Typography>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HeadsetMicOutlinedIcon />
                  </ListItemIcon>
                  <Typography variant="h7">{phone}</Typography>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AlternateEmailOutlinedIcon />
                  </ListItemIcon>
                  <Typography variant="h7">
                    Feedback and Complaints
                    <br />
                    <Link href="mailto:support@whitenuggets.com">
                      support@whitenuggets.com
                    </Link>
                  </Typography>
                </ListItemButton>
              </ListItem>

              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <HeadsetMicOutlinedIcon />
                  </ListItemIcon>
                  <Typography variant="h7">
                    Info And Marketing
                    <br />
                    <Link href="mailto:info@whitenuggets.com">
                      info@whitenuggets.com
                    </Link>
                  </Typography>
                </ListItemButton>
              </ListItem>
            </List>


          </Grid>
          <Grid item xs={4}>
            <List>
              <ListItem disablePadding>
                <Typography variant="h6">Quick Links</Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link href="/home" underline="hover">
                    <Typography variant="h7">Home</Typography>
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link href="/about" underline="hover">
                    <Typography variant="h7"> About us </Typography>
                  </Link>
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={4}>
            <List>
              <ListItem disablePadding>
                <Typography variant="h6">Terms And Condition</Typography>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link href="/home" underline="hover">
                    <Typography variant="h7">Privacy Policy</Typography>
                  </Link>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link href="/about" underline="hover">
                    <Typography variant="h7"> Terms And Condition </Typography>
                  </Link>
                </ListItemButton>
              </ListItem>
            </List>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h6">Follow Us</Typography>
            <Facebook />
            <Instagram />
            <Twitter />
            <YouTube />
            <LinkedIn />
          </Grid>
        </Grid>
      {/* </Box> */}
    </>
  );
}

export default Footer;
