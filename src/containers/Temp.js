import React, {Component, createRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Button, withStyles} from '@material-ui/core';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = theme => ({
    popper: {
        zIndex: 1,
        '&[x-placement*="bottom"] $arrow': {
            top: 0,
            left: 0,
            marginTop: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '0 1em 1em 1em',
                borderColor: `transparent transparent ${theme.palette.background.paper} transparent`,
            },
        },
        '&[x-placement*="top"] $arrow': {
            bottom: 0,
            left: 0,
            marginBottom: '-0.9em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '1em 1em 0 1em',
                borderColor: `${theme.palette.background.paper} transparent transparent transparent`,
            },
        },
        '&[x-placement*="right"] $arrow': {
            left: 0,
            marginLeft: '-0.9em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 1em 1em 0',
                borderColor: `transparent ${theme.palette.background.paper} transparent transparent`,
            },
        },
        '&[x-placement*="left"] $arrow': {
            right: 0,
            marginRight: '-0.9em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 0 1em 1em',
                borderColor: `transparent transparent transparent ${theme.palette.background.paper}`,
            },
        },
    },
    arrow: {
        position: 'absolute',
        fontSize: 7,
        width: '3em',
        height: '3em',
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        },
    },
});

class Temp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorRef: createRef(null),
            arrowRef: null,
            open: false,
        }
    }

    handleArrowRef = node => {
        this.setState({
            arrowRef: node,
        });
    };
    handleClickButton = () => {
        this.setState({open: !this.state.open});
    };
    render() {
        const { classes } = this.props;
        const id = this.state.open ? 'scroll-playground' : null;
        return (
            <div style={{padding: '10px', margin: 'auto'}}>
                    <Button
                      ref={this.state.anchorRef}
                      variant="contained"
                      onClick={this.handleClickButton}
                      aria-describedby={id}
                      
                    >
                      Toggle Popper
                    </Button>
                    
                    <Popper
                      id={id}
                      open={this.state.open}
                      anchorEl={this.state.anchorRef.current}
                      placement="left"
                      disablePortal={false}
                      className={classes.popper}
                      modifiers={{
                        flip: {
                          enabled: true,
                        },
                        arrow: {
                          enabled: true,
                          element: this.state.arrowRef,
                        },
                        preventOverflow: {
                          enabled: "true",
                          boundariesElement: 'scrollParent'
                        },
                      }}
                    >
                      {true ? <span className={classes.arrow} ref={this.state.setArrowRef} /> : null}
                      <Paper className={classes.paper}>
                        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
                        <DialogContent>
                          <DialogContentText>Let Google help apps determine location.</DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={this.handleClickButton} color="primary">
                            Disagree
                          </Button>
                          <Button onClick={this.handleClickButton} color="primary">
                            Agree
                          </Button>
                        </DialogActions>
                      </Paper>
                    </Popper>
            </div>
        );
    }
}

export default withStyles(useStyles)(Temp);