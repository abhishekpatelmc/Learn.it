import React, {useState} from "react";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Colors from "../utils/Colors"
import Recorder from "../Components/Recorder";
import "./RecorderPage.css";

import {quotesData} from '../data.js'
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const theme = createTheme({
     
  status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#6B89DB',
        darker: '#053e85',
      },
      neutral: {
        main: '#324A5F',
        contrastText: '#fff',
      },
      yellowBlock:{
        main: '#ffff00',
        contrastText:Colors.pitchblack
      }
    },
    
  });
const RecorderPage = () => {
  const [textAreaValue, setTextAreaValue] = useState("Lips red as the rose, hair black as ebony, skin white as snow. Over the seven jeweled hills, beyond the seventh wall, in the cottage of the seven dwarfs, dwells Snow White, fairest one of all.");

  const handleChange = (event) => {
    setTextAreaValue(event.target.value);
  } 

  const generateQuote = () => {
    const random = Math.floor(Math.random() * 10) + 1;
    setTextAreaValue(quotesData[random].text);
  }

  return (
    <ThemeProvider  theme={theme} sx={{background: Colors.black, color: "#324A5F"}}>
    <CssBaseline />
    <AppBar position="relative" sx={{ background: "#0C1821" }}>
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          LearnIt
        </Typography>
      </Toolbar>
    </AppBar>
    <main>
      {/* Hero unit */}
      <div className="main">
      <Box
      color= "#0C1821 "
      sx={{
        background: "#CCC9DC ",
        pt: 8,
        pb: 6,
      }}>
      <Container maxWidth="sm">
            <Typography
              component="h3"
              variant="h3"
              align="center"
              color = "inherit"
              gutterBottom
            >
              Speak Here
            </Typography>
        <div className="textContainer">
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center">
            <Typography
            component="h6"
            variant="h6"
            align="center"
            color = "inherit"
            gutterBottom>
            1. Copy and paste a piece of text you would like to read or <span> </span>
            <Button  color="neutral" variant="contained" onClick={generateQuote}>Generate something to Read!</Button>
            </Typography>
            
          </Stack>
         
          <TextField
            className='textArea' 
            fullWidth
            id="lastName"
            label="Enter Text Here"
            name="lastName"
            multiline 
            variant="outlined"
            value = {textAreaValue}
            onChange = {handleChange}
            
          />
        </div>
        <Typography
            component="h6"
            variant="h6"
            align="center"
            color = "inherit"
            gutterBottom>
              2. Hit the start button to record as you read through the paragraph.
              </Typography>

        <Recorder textValue={textAreaValue}/>
        </Container>
      
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column', background: "#324A5F"}}
                  color = "neutral"

                >
                  <CardContent sx={{ flexGrow: 1, color: "#000000", background: "#ffff00" }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Word
                    </Typography>
                    <Typography>
                      Accuracy
                    </Typography>
                  </CardContent>
                  <CardActions align="center">
                    <Button  size="small">Listen</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        </Box>
    </div>
    
      
      
    </main>
    
  </ThemeProvider>
    
  );
};

export default RecorderPage;
