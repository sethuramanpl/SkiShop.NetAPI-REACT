import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound(){

    return(
        <Container component={Paper} sx={{height: 200}}>
            <Typography gutterBottom variant='h3'>Oops We could not find</Typography>
            <Divider />
            <Button  component={Link} to='/catalog' fullWidth> Go back to the shop</Button>
        </Container>
        
    )
}