import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Grid } from '@mui/material';
import ImageSlider from './slider/slider';

export default function ItemCard({ src, title, desc, price }) {
  return (
    <Card sx={{ maxWidth: 345, backgroundColor:'#F5EFEF' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={src}
          alt="item"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <Grid
          item
          container
          flexDirection={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
          height={'40px'}
        >
          <Button size="large"  color="primary" onClick={() => {}}>
            Add To Cart
          </Button>
          <Typography variant="h6" color="text.secondary">
            {price}{' JOD'}
          </Typography>
        </Grid>
      </CardActions>
    </Card>
  );
}
