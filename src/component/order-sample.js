import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

const OrderSample = () => {
  const [address, setAddress] = useState({
    adr1: "",
    adr2: "",
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
    console.log(address);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 , mt: 4}}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', maxWidth: 500, gap: 2 }}>
          <TextField
            name="adr1"
            label="Address line 1"
            value={address.adr1}
            onChange={handleChange}
            required
          />
          <TextField
            name="adr2"
            label="Address line 2"
            value={address.adr2}
            onChange={handleChange}
            required
          />
          <TextField
            name="street"
            label="Street"
            value={address.street}
            onChange={handleChange}
            required
          />
          <Box sx={{ display: 'flex', gap: 2 }}>
            <TextField
              name="city"
              label="City"
              value={address.city}
              onChange={handleChange}
              sx={{ flex: 1 }}
            />
            <TextField
              name="state"
              label="State"
              value={address.state}
              onChange={handleChange}
              sx={{ flex: 1 }}
              required
            />
            <TextField
              name="zip"
              label="ZIP"
              value={address.zip}
              onChange={handleChange}
              sx={{ flex: 1 }}
              required
            />
          </Box>
          <Button type="submit" variant="contained" sx={{ alignSelf: 'start' }}>
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default OrderSample;
