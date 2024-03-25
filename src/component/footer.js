import React from "react";
import { Box, Grid, Link, Typography, List, ListItem, IconButton } from "@mui/material";
import { Facebook, Instagram, Twitter, YouTube, LinkedIn } from "@mui/icons-material";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";

export function Footer() {
  const address = "1234 Main St, Anytown, USA";
  const phone = "123-456-7890";

  return (
    <Box sx={{ width: "100%", backgroundColor: "#424242", color: "white", p: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={4}>
          <List>
            <ListItem>
              <Typography variant="h6">Contact Us</Typography>
            </ListItem>
            <ListItem>
              <BusinessOutlinedIcon sx={{ mr: 1 }} />
              <Typography>{address}</Typography>
            </ListItem>
            <ListItem>
              <HeadsetMicOutlinedIcon sx={{ mr: 1 }} />
              <Typography>{phone}</Typography>
            </ListItem>
            <ListItem>
              <AlternateEmailOutlinedIcon sx={{ mr: 1 }} />
              <Typography>
                <Link href="mailto:support@whitenuggets.com" color="inherit">
                  support@whitenuggets.com
                </Link>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography>
                <Link href="mailto:info@whitenuggets.com" color="inherit">
                  info@whitenuggets.com
                </Link>
              </Typography>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Quick Links</Typography>
          <List>
            <ListItem>
              <Link href="/home" underline="hover" color="inherit">
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/about" underline="hover" color="inherit">
                About us
              </Link>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="h6">Terms And Condition</Typography>
          <List>
            <ListItem>
              <Link href="/privacy" underline="hover" color="inherit">
                Privacy Policy
              </Link>
            </ListItem>
            <ListItem>
              <Link href="/terms" underline="hover" color="inherit">
                Terms And Condition
              </Link>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
          <IconButton color="inherit" href="https://facebook.com">
            <Facebook />
          </IconButton>
          <IconButton color="inherit" href="https://instagram.com">
            <Instagram />
          </IconButton>
          <IconButton color="inherit" href="https://twitter.com">
            <Twitter />
          </IconButton>
          <IconButton color="inherit" href="https://youtube.com">
            <YouTube />
          </IconButton>
          <IconButton color="inherit" href="https://linkedin.com">
            <LinkedIn />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;
