import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, Button, CardMedia, CssBaseline, Grid, Toolbar, Container} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import useStyles from './styles';

const cards = [1,2,3,4,5,6,7,8,9]

function App() {
	const classes = useStyles();
  return (
    <>
		<CssBaseline/>
		<AppBar position='relative'>
			<Toolbar>
				<PhotoCameraIcon className={classes.icon}/>
				<Typography variant='h6'>
					Photo Album
				</Typography>
			</Toolbar>
		</AppBar>
		<main>
			<div className={classes.container}>
				<Container maxWidth='sm'>
					<Typography variant='h2' align='center' color='textPrimary' gutterBottom> Photo Album</Typography>
					<Typography variant='h5' align='center' color='textSecondary' paragraph>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis ipsam aliquid, ex quam esse velit repellendus accusantium dolorem expedita asperiores corrupti est? Molestiae animi temporibus doloremque est laborum excepturi sint!
					</Typography>
					<div className={classes.button}>
						<Grid container spacing={2} justifyContent='center'>
							<Grid item>
								<Button variant="contained">See my photos</Button>
							</Grid>
							<Grid item>
								<Button variant="outlined">Secondaty action</Button>
							</Grid>
						</Grid>
					</div>
				</Container>
			</div>
			<Container className={classes.cardGrid} maxWidth="md">
				<Grid container spacing={4}>
					{cards.map((card) => (

					<Grid item key={card} xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardMedia
								className={classes.CardMedia}
								image="https://source.unsplash.com/random"
								title="Image title"
							/>
							<CardContent className={classes.CardContent}>
								<Typography gutterBottom variant='h5'>
									Heading
								</Typography>
								<Typography gutterBottom variant='h5'>
									This is a media card. You can use this section to describe the content.
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small" color='primary'>View</Button>
								<Button size="small" color='primary'>Edit</Button>
							</CardActions>
						</Card>
					</Grid>
					))}
				</Grid>
			</Container>
		</main>
		<footer className={classes.footer}>
			<Typography variant='h6' align='center' gutterBottom>
				Footer
			</Typography>
			<Typography variant='subtitle1' align='center' color='textSecondary' gutterBottom>
				Facebook | Instagram | Youtube | Twitter
			</Typography>
		</footer>
    </>
  );
}

export default App;
