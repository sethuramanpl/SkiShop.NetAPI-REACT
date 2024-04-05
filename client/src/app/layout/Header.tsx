import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const midLinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'}
]

const rightLinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'}
]

const navLinkStyling = {
    color: 'inherit',
    typography: 'h6',
    textDecoration: 'none',
    '&:hover':{
        color: 'grey.500'
    },
    '&.active':{
        color: 'text.secondary'
    }
}

interface Props {
    darkMode: boolean;
    themeChange : () => void;
}
export default function Header({darkMode, themeChange} : Props){

    return (
        <AppBar position="static" sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            
            <Box sx={{display: 'flex', alignItems:'center'}}>
                <Typography variant="h6" component={NavLink} 
                                        to={'/'} 
                                        sx={navLinkStyling}
                    > RE-STORE </Typography>   

                    <Switch  color="default" checked={darkMode} onChange={themeChange}/>
            </Box>


                <List sx={{display: 'flex'}}>
                {midLinks.map(({title, path})=> (
                    <ListItem 
                        component={NavLink}
                        to={path}
                        sx={navLinkStyling}
                        key={title}
                    >{title.toUpperCase()}</ListItem>
                ))}
            </List>

        <Box sx={{display: 'flex', alignItems:'center'}}>
            <IconButton size='large' edge='start' color="inherit" sx={{mr: 2}}>
                <Badge badgeContent='4' color="secondary">
                    <ShoppingCart />
                </Badge>
            </IconButton>

            <List sx={{display: 'flex'}}>
                {rightLinks.map(({title, path})=> (
                    <ListItem 
                        component={NavLink}
                        to={path}
                        sx={navLinkStyling}
                        key={title}
                    >{title.toUpperCase()}</ListItem>
                ))}
            </List>
        </Box>
            </Toolbar>
 
            
           

        </AppBar>

    )
}