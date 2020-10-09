import React, {useEffect} from 'react'
import makeStyles from "@material-ui/core/styles/makeStyles";
import Avatar from "@material-ui/core/Avatar";
import {deepOrange} from '@material-ui/core/colors';
import {connect, useDispatch} from "react-redux";
import {dashSelector, updateChat} from "../redux/reducers/dashboardSlice";

const useStyles = makeStyles((theme) => ({
    contactsBlock: {
        marginTop: '10px'
    },
    contactItem: {
        marginTop: '5px', color: 'white', height: '60px',
        "&:hover, &:focus": {
            backgroundColor: '#3f51b5', cursor: 'default'
        }
    },
    itemAvatar: {
        float: 'left',
        width: '64px',
        height: '64px',
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    itemHeader: {float: 'left', width: '59%', marginTop: '5px'},
    itemShortMsg: {float: 'left'},
    itemLastDate: {float: 'right', marginRight: '5px', marginTop: '5px'}


}));

function ContactList(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const state = dashSelector(props)
    const contactsList = state.contacts
    useEffect(() => {
        dispatch(updateChat({userId:5}));
        console.log('mount it!');
    }, []);
    return (
        <div className={classes.contactsBlock}>{contactsList.map((item, i) => {
            const iconAvatar = item.avatarImg && item.avatarImg !== "" ?
                <Avatar className={classes.orange}>{item.name.charAt(0)}</Avatar> :
                <Avatar alt={item.name} src={item.avatarImg}/>
            return (<div key={item.id} className={classes.contactItem}>
                <div className={classes.itemAvatar}>{iconAvatar}</div>
                <div className={classes.itemHeader}>{item.name}</div>
                <div className={classes.itemLastDate}>{item.lastContactDate}</div>
                <div className={classes.itemShortMsg}>{item.shortMessage}</div>
            </div>)
        })}</div>
    )
}

const mapState = state => {
    return state
};
export default connect(mapState)(ContactList)