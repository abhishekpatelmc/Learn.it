import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Speech from "react-speech";

const cardLayout = (props) => {
  const cards = props.result.privPronJson.Words;
  console.log(cards);
  return (
    <div>
      <Container sx={{ py: 8 }} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map((card, index) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {props.result.privPronJson.Words[index].Word || "Omitted"}
                  </Typography>
                  <Typography>
                    {
                      props.result.privPronJson.Words[index]
                        .PronunciationAssessment.AccuracyScore
                    }
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">
                    Listen
                    <Speech
                      text={
                        props.result.privPronJson.Words[index].Word || "Omitted"
                      }
                      voice="Daniel"
                    />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default cardLayout;
