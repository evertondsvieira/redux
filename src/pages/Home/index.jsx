import Header from '../../components/Header'
import CardItem from '../../components/CardItem';
import { useSelector } from 'react-redux'
import { Box, Container } from '@mui/material';

const Home = () => {
    const item = useSelector(state => state.item);

    return(
        <div>
            <Header />
            <Container sx={{display: 'flex', flexWrap: 'wrap'}}>
                {item.map((item) => (
                    <CardItem key={item.id} {...item} />
                ))}
            </Container>
        </div>
    )
}

export default Home;