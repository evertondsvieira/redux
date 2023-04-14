import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { switchFavorite } from '../../store/reducers';
import { useDispatch } from 'react-redux';

export default function CardItem({ id, name, description, image, alt, favorite }) {
    
    const dispatch = useDispatch();

    function resolveFavorite() {
        dispatch(switchFavorite(id))
    }

    return (
        <Card sx={{ maxWidth: 345, margin: 2 }}>
        <CardMedia
            component="img"
            height="250"
            src={image}
            alt={alt}
        />
        <CardContent>
            <Typography style={{ fontWeight: "bold" }}>{name}</Typography>
            <Typography variant="body2" color="text.secondary">{description}</Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
                {favorite ? <FavoriteIcon style={{color: '#ff0000'}} onClick={resolveFavorite} /> : <FavoriteIcon style={{color: '#696969'}} onClick={resolveFavorite} />}
            </IconButton>
            <IconButton aria-label="share">
            <ShareIcon />
            </IconButton>
        </CardActions>
        </Card>
    );
}