import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { Link } from "react-router-dom";

const pages = {
    JOIN: 'pages.join',
    CREATE: 'pages.create',
};

export default function Info(props){
    const [page, setPage] = useState(pages.JOIN);

    function joinInfo(){

        return(
            <Grid item xs={12} align="center">
            <Typography component="h6" variant="h6">
                Join Page
            </Typography>
            <Typography component="h7" variant="h7" align="center">
            Join a room by clicking on Join Room, and then key in the 6 letter passcode. 
            Inside the room, users can vote to skip songs if the room creator allows it.
            </Typography>
        </Grid>
        );
    }

    function createInfo(){

        return(
            <Grid item xs={12} align="center">
            <Typography component="h6" variant="h6">
                Create Page
            </Typography>
            <Typography component="h7" variant="h7" align="center">
            Click Create Room in the homepage to create a room. 
            The host can set the playback state: play/pause enabled or no control. 
            In addition, the user can set the number of votes required to skip a song. 
            Once a room is create, a 6 letter uppercase passcode is generated.
            Other people can join the room by keying in the passcode.
            </Typography>
        </Grid>
        );
    }

    //this hook runs the function inside whenever a component lifcycle method is called
    useEffect(() => {
        console.log("ran");
        return () => console.log("cleanup"); //called when a component unmounts/gets updated
    });

    return (
      <Grid container spacing={1}>
        <Grid item xs={12} align="center">
            <Typography component="h3" variant="h3">
                What is House Party?
            </Typography>
        </Grid>
        <Grid item xs={12} align="center">
            <Typography variant="body1">
                { page === pages.JOIN ? joinInfo() : createInfo() }
            </Typography>
        </Grid>
        <Grid item xs={12} align="center">
            <IconButton onClick={ () => {
                page === pages.CREATE ? setPage(pages.JOIN) : setPage(pages.CREATE);
            }}>
                {page === pages.CREATE ? <NavigateBeforeIcon /> : <NavigateNextIcon />}
            </IconButton>
        </Grid>
        <Grid item xs={12} align="center">
            <Button color="secondary" variant="contained" to="/" component={Link}>
                Back
            </Button>
        </Grid>
      </Grid>
    );
}