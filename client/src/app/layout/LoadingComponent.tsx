import { Backdrop, Box, CircularProgress, Typography } from "@mui/material";

interface Props {
    message? : string;
}
export default function LoadingComponent({message = 'Loading...'} : Props) {

    return (
        <Backdrop open={true} invisible={true}>
            <Box display='flex' justifyContent='center' alignItems='center' height='100vh' >
                <CircularProgress size={100}/>
                <Typography>{message}</Typography>
            </Box>
            
        </Backdrop>
    )
}