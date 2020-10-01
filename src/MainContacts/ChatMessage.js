import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
    chatBlock: {
        position: 'relative',
        minHeight: '600px',
        width: '60%',
        float: 'left',
        backgroundColor: '#e3e6e8'
    }
}));

export function ChatMessage() {
    let classes = useStyles();
    return <div className={classes.chatBlock}></div>
}