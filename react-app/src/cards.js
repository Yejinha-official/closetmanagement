import React from 'react';
import { Card, CardContent, CardMedia, Grid, Typography, Container} from '@material-ui/core';

const cards = [
  {
    title: 'Card 1',
    subtitle: 'Subtitle 1',
    image: 'https://via.placeholder.com/150',
    description: 'Description 1',
  },
  {
    title: 'Card 2',
    subtitle: 'Subtitle 2',
    image: 'https://via.placeholder.com/150',
    description: 'Description 2',
  },
  {
    title: 'Card 3',
    subtitle: 'Subtitle 3',
    image: 'https://via.placeholder.com/150',
    description: 'Description 3',
  },
  {
    title: 'Card 1',
    subtitle: 'Subtitle 1',
    image: 'https://via.placeholder.com/150',
    description: 'Description 1',
  },
  {
    title: 'Card 2',
    subtitle: 'Subtitle 2',
    image: 'https://via.placeholder.com/150',
    description: 'Description 2',
  },
  {
    title: 'Card 3',
    subtitle: 'Subtitle 3',
    image: 'https://via.placeholder.com/150',
    description: 'Description 3',
  },
  {
    title: 'Card 1',
    subtitle: 'Subtitle 1',
    image: 'https://via.placeholder.com/150',
    description: 'Description 1',
  },
  {
    title: 'Card 2',
    subtitle: 'Subtitle 2',
    image: 'https://via.placeholder.com/150',
    description: 'Description 2',
  },
  {
    title: 'Card 3',
    subtitle: 'Subtitle 3',
    image: 'https://via.placeholder.com/150',
    description: 'Description 3',
  },
  {
    title: 'Card 1',
    subtitle: 'Subtitle 1',
    image: 'https://via.placeholder.com/150',
    description: 'Description 1',
  },
  {
    title: 'Card 2',
    subtitle: 'Subtitle 2',
    image: 'https://via.placeholder.com/150',
    description: 'Description 2',
  },
  {
    title: 'Card 3',
    subtitle: 'Subtitle 3',
    image: 'https://via.placeholder.com/150',
    description: 'Description 3',
  }
];

function CardComponent() {
  return (
    <Container maxWidth="md">
      <Grid container spacing={1}>
        {cards.map((card) => (
          <Grid item xs={4} sm={2} md={4} key={card.title} style={{ width: 100 }}>
            <Card>
              <CardMedia
                component="img"
                alt={card.title}
                height="150"
                image={card.image}
                title={card.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {card.subtitle}
                </Typography>
                <Typography variant="body2" component="p">
                  {card.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default CardComponent;
