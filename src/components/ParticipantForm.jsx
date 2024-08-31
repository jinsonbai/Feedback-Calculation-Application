import {
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Box,
} from '@mui/material';
import React from 'react';

const ParticipantForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    alert('Thank you for your valuable feedback.'); // Show the message
    window.location.href = 'https://ictkerala.org'; // Redirect to the URL
  };

  return (
    <Box sx={{ backgroundColor: '#eee7f6', minHeight: '100vh', pb: 5 }}>
      {/* Banner Image with increased height */}
      <Box
        component="img"
        src="https://as2.ftcdn.net/v2/jpg/04/63/26/43/1000_F_463264368_Y6FOKiJsbURjvoQWmhyGbE6RQuawNfWg.jpg"
        alt="banner"
        sx={{
          width: 'calc(100% - 40px)', // Small gap on left and right
          height: '400px', // Increase this value to adjust the height
          objectFit: 'cover',
          margin: '0 20px', // 20px margin on left and right
        }}
      />

      {/* Form Section with Light Purple Background */}
      <Box
        sx={{
          backgroundColor: '#eee7f6',
          minHeight: '100vh',
          pt: 10, // Padding top to provide spacing above the form
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <Card sx={{ maxWidth: '500px', width: '100%', padding: 2, backgroundColor: 'white' }}>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <Box mb={2}>
                  <FormLabel
                    id="label-1"
                    sx={{ color: 'black', '&.Mui-focused': { color: 'black' } }}
                  >
                    The training course was relevant and helpful for me to relate.
                  </FormLabel>
                  <RadioGroup row name="question-1" defaultValue="top">
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                  </RadioGroup>
                </Box>

                <Box mb={2}>
                  <FormLabel
                    id="label-2"
                    sx={{ color: 'black', '&.Mui-focused': { color: 'black' } }}
                  >
                    Delivery of the content was clear and understandable.
                  </FormLabel>
                  <RadioGroup row name="question-2" defaultValue="top">
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                  </RadioGroup>
                </Box>

                <Box mb={2}>
                  <FormLabel
                    id="label-3"
                    sx={{ color: 'black', '&.Mui-focused': { color: 'black' } }}
                  >
                    I am confident in applying the learnings into practice.
                  </FormLabel>
                  <RadioGroup row name="question-3" defaultValue="top">
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                  </RadioGroup>
                </Box>

                <Box mb={2}>
                  <FormLabel
                    id="label-4"
                    sx={{ color: 'black', '&.Mui-focused': { color: 'black' } }}
                  >
                    How would you rate the trainer?
                  </FormLabel>
                  <RadioGroup row name="question-4" defaultValue="top">
                    <FormControlLabel value="1" control={<Radio />} label="1" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4" />
                    <FormControlLabel value="5" control={<Radio />} label="5" />
                  </RadioGroup>
                </Box>

                <Box mb={2}>
                  <FormLabel
                    id="label-5"
                    sx={{ color: 'black', '&.Mui-focused': { color: 'black' } }}
                  >
                    What did you enjoy the most about the training session?
                  </FormLabel>
                  <TextField fullWidth label="" id="fullWidth-1" />
                </Box>

                <Box mb={2}>
                  <FormLabel
                    id="label-6"
                    sx={{ color: 'black', '&.Mui-focused': { color: 'black' } }}
                  >
                    Any additional comments/suggestions
                  </FormLabel>
                  <TextField fullWidth label="" id="fullWidth-2" />
                </Box>

                <Box mt={2} display="flex" justifyContent="center">
                  <Button variant="contained" type="submit">Submit</Button>
                </Box>
              </FormControl>
            </form>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default ParticipantForm;
