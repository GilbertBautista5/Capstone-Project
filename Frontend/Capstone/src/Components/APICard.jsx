import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Quote of the Day
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard({ Quote, AuthorName }) {
  return (
    <Box
      sx={{
        minWidth: 400,
        maxWidth: 275,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: 2,
      }}
    >
      <Card variant="outlined">
        {card}
        <h5> {Quote} </h5>
        {AuthorName}
      </Card>
    </Box>
  );
}
