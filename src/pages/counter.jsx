import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Counter() {
  const classes = useStyles();
  const [count, setCount] = useState(0);

  const handleCountIncrement = () => setCount(count+1);
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography variant="h1" color="textSecondary" component="p">
              {count}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="large" color="primary" onClick={handleCountIncrement}>
            Increase
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
