import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const OrderSample = () => {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    setAddress((prevAddress) => ({
      ...prevAddress,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(address);
  };

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <form onSubmit={handleSubmit}>

        <TextField
            name="adr1"
            label="address line 1"
            value={address.adr1}
            onChange={handleChange}
            sx={{ m: 1, width: "75ch" }}
            required
          />
          <TextField
            name="adr2"
            label="adddress line 2"
            value={address.adr2}
            onChange={handleChange}
            sx={{ m: 1, width: "75ch" }}
            required
          />
        <TextField
            name="street"
            label="Street"
            value={address.street}
            onChange={handleChange}
            sx={{ m: 1, width: "50ch" }}
            required
          />
          <TextField
            name="city"
            label="City"
            value={address.city}
            onChange={handleChange}
            sx={{ m: 1, width: "25ch" }}
          />
          <TextField
            name="state"
            label="State"
            value={address.state}
            onChange={handleChange}
            sx={{ m: 1, width: "25ch" }}
            required
          />
          <TextField
            name="zip"
            label="ZIP"
            value={address.zip}
            onChange={handleChange}
            sx={{ m: 1, width: "25ch" }}
            required
          />
          <Box>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
          </Box>
        </form>
      </div>
    </Box>
  );
};

export default OrderSample;
