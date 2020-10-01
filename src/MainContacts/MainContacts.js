import React from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import PhoneIcon from '@material-ui/icons/Phone';
import HomeIcon from '@material-ui/icons/Home'
import PersonIcon from '@material-ui/icons/Person';
import GroupIcon from '@material-ui/icons/Group';
import SubjectIcon from '@material-ui/icons/Subject';
import MenuIcon from '@material-ui/icons/Menu';
import Badge from "@material-ui/core/Badge";
import InputBase from "@material-ui/core/InputBase";
import Typography from "@material-ui/core/Typography";
import SearchIcon from '@material-ui/icons/Search';
import MailIcon from '@material-ui/icons/Mail';
import {AccountCircle} from "@material-ui/icons";

export function MainContacts() {
    // return <AppBar position="static">
    //     <Toolbar >
    //         <IconButton edge="start" className={"menuButton"} color="inherit" aria-label="menu">
    //             <HomeIcon/>
    //         </IconButton>
    //         <IconButton edge="start" className={"menuButton"} color="inherit" aria-label="menu">
    //             <PhoneIcon/>
    //         </IconButton>
    //         <IconButton edge="start" className={"menuButton"} color="inherit" aria-label="menu">
    //             <GroupIcon/>
    //         </IconButton>
    //         <IconButton edge="start" className={"menuButton"} color="inherit" aria-label="menu">
    //             <SubjectIcon/>
    //         </IconButton>
    //         <IconButton edge="start" className={"menuButton"} color="inherit" aria-label="menu">
    //             <PersonIcon/>
    //         </IconButton>
    //     </Toolbar>
    return <div className={"grow"}>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    className={"menuButton"}
                    color="inherit"
                    aria-label="open drawer"
                >
                    <MenuIcon />
                </IconButton>
                <Typography className={"title"} variant="h6" noWrap>
                    Material-UI
                </Typography>
                <div className={"search"}>
                    <div className={"searchIcon"}>
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Search…"
                        classes={{
                            root: "inputRoot",
                            input: "inputInput",
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                <div className={"grow"} />
                <div className={"sectionDesktop"}>
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    {/*<IconButton aria-label="show 17 new notifications" color="inherit">*/}
                    {/*    <Badge badgeContent={17} color="secondary">*/}
                    {/*        <NotificationsIcon />*/}
                    {/*    </Badge>*/}
                    {/*</IconButton>*/}
                    {/*<IconButton*/}
                    {/*    edge="end"*/}
                    {/*    aria-label="account of current user"*/}
                    {/*    aria-controls={"menuId"}*/}
                    {/*    aria-haspopup="true"*/}
                    {/*    // onClick={handleProfileMenuOpen}*/}
                    {/*    color="inherit"*/}
                    {/*>*/}
                    {/*    <AccountCircle />*/}
                    {/*</IconButton>*/}
                </div>
            </Toolbar>
        </AppBar>
        {/*{renderMobileMenu}*/}
        {/*{renderMenu}*/}
    </div>;
}