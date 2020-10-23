import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {dashSelector} from "../redux/reducers/dashboardSlice";
import {connect} from "react-redux";

const useStyles = makeStyles((theme) => ({
    chatBlock: {
        position: 'relative',
        minHeight: '600px',
        width: '60%',
        float: 'left',
        backgroundColor: '#e3e6e8'
    }
}));

function ChatMessage(props) {
    const chats = props.chats;
    let classes = useStyles();
    return <div className={classes.chatBlock}></div>
}

const mapState = state => dashSelector(state);
export default connect(mapState)(ChatMessage)