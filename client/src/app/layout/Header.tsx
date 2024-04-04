import { AppBar, Switch, Typography } from "@mui/material";

interface Props {
    darkMode: boolean;
    themeChange : () => void;
}
export default function Header({darkMode, themeChange} : Props){

    return (
        <AppBar position="static" sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
 
            <Typography variant="h6"> RE-STORE           
                <Switch  color="default" checked={darkMode} onChange={themeChange}/> [Enable Dark Mode]
            </Typography>
  

        </AppBar>
    )
}