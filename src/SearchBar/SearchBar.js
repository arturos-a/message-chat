import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HomeIcon from "@material-ui/icons/Home"
import PeopleIcon from '@material-ui/icons/People';
import SubjectIcon from '@material-ui/icons/Subject';
import PersonIcon from '@material-ui/icons/Person';


export default function SearchBar() {
    return (
        <div className={"menu-wrapper"}>
            <AppBar position="static">
                <Toolbar>
                    {/*<IconButton edge="start" className={"menuButton"} color="inherit" aria-label="menu">*/}
                    {/*    <MenuIcon/>*/}
                    {/*</IconButton>*/}
                    {/*<Typography variant="h6" className={"title"}>*/}
                    {/*    News*/}
                    {/*</Typography>*/}
                    {/*<Button color="inherit">Login</Button>*/}
                </Toolbar>
            </AppBar>
            <HomeIcon/>
            <PeopleIcon/>
            <SubjectIcon/>
            <PersonIcon/>
        </div>
    );
}