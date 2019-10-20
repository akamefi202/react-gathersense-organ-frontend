import React, {Component } from 'react';
import {
    Paper, 
    Button,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    Avatar,
    Grid,
    Divider,
} from '@material-ui/core';

import {
    Form,
} from 'react-bootstrap';

import { connect } from 'react-redux'
import { addClose } from '../actions';
import { colorPopOpen } from '../actions';

import { Link } from 'react-router-dom';

import Data from '../common/dataOrg';
import StyledPopper from '../common/styledPopper';

import '../assets/css/bodypanel.css';
import '../assets/css/Tranining.css';

import c1 from '../assets/images/c1.png';
import c2 from '../assets/images/c2.png';
import c3 from '../assets/images/c3.png';

const columns = [
  { id: 'trainings', label: 'TRAININGS', minWidth: 200 },
  { id: 'candidates', label: 'CANDIDATES', minWidth: 150 },
  {
    id: 'action',
    label: 'ACTIONS',
    minWidth: 300,
    align: 'right',
    format: value => value.toLocaleString(),
  },
];

var rows = [
    { trainings:"Gao kotalentsu", candidates:"talent0620kobal1@outlook.com" },
    { trainings:"Gao kotalentsu", candidates:"talent0620kobal2@outlook.com" },
];

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class ReportsView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 10,            
            delopen: false,
            editopen: false,
            selectdata: '',
            fullname: '',
            email: '',
            password: '',
            anchorElement: null,
            arrowRef: null,
            open: false,
            colorpopopen: true,
            anchorElementCirCol: null,
            selectColor: Data.circleColor[0].svg
        }
    }

    componentDidMount() {
        
    }

    handleViewResult = () => {
        this.props.history.push('/TrainingsResult');
    } 
    selectColors(number) {
        this.setState({
            selectColor: Data.circleColor[number].svg,
            colorpopopen: false,
            anchorElementCirCol: null,
        })
    }

    circleCO = event => {
        if (this.state.colorpopopen)
            this.setState({
                anchorElementCirCol: null,
                colorpopopen: false
            })
        else
            this.setState({
                anchorElementCirCol: event.currentTarget,
                colorpopopen: true
            })
    }

    handleAnchor = event => {
        if (this.state.open)
            this.setState({
                anchorElement: null,
                open: false
            })
        else
            this.setState({
                anchorElement: event.currentTarget,
                open: true
            })
    }
    handleClickButton = () => {
        this.setState({open: !this.state.open});
    };    
    handleArrowRef = node => {
        this.setState({
            arrowRef: node,
        });
    };


    handleCreate = () => {
        for( var i = rows.length-1; i--;){            
            if ( rows[i].email === this.state.selectdata){
                rows[i].fullname = this.state.fullname;
                rows[i].email = this.state.email;
                break;
            }
        }
        this.handleClose();
        this.props.addclose();
        //this.props.history.push('/TrainingsCreate');
    }

    handleClickEdit(keyvalue) {
        this.setState({
            editopen: true,
            selectdata: keyvalue,
        });
    }

    handleEdit = () => {
        for( var i = rows.length-1; i--;){            
            if ( rows[i].email === this.state.selectdata){
                rows[i].fullname = this.state.fullname;
                rows[i].email = this.state.email;
                break;
            }
        }
        this.handleClose();
    }

    handleClickDelete(keyvalue) {
        this.setState({
            delopen: true,
            selectdata: keyvalue,
        });
    };

    handleDelete = () => {
        for( var i = rows.length-1; i--;){            
            if ( rows[i].email === this.state.selectdata){
                rows.splice(i, 1);
                break;
            }
        }
        this.handleClose();
    }
    
    handleClose = () => {
        this.setState({
            editopen: false,
            delopen: false,
            selectdata: '',
            fullname: '',
            email: '',
            password: '',
        });
    };

    render() {

        return (
            <div className="Rcontainer">
                <Paper className="tableroot">
                    <div className="tableWrapper">
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                {columns.map(column => (
                                    <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    >
                                    {column.label}
                                    </TableCell>
                                ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow hover role="checkbox" tabIndex={-1}>
                                    <TableCell >
                                        <div className="divCard">
                                            <Avatar style={{backgroundColor: '#FFA800', width: 30, height: 30}}>CT</Avatar>
                                            <label className="trtxt"> Critical Thinking </label>
                                        </div>
                                    </TableCell>
                                    <TableCell >
                                        <div className="divCard">
                                        <Grid item xs={12} space={9}>
                                            <Grid container justify="center"  space={9} >
                                                <Grid item xs={1}container justify="center" space={9}>
                                                    <Avatar alt="Remy Sharp" src={c1} style={{width: 30, height: 30, border: '2px solid #fff'}} />
                                                </Grid>
                                                <Grid item xs={1}container justify="center" space={9}>
                                                    <Avatar alt="Remy Sharp" src={c2} style={{width: 30, height: 30, border: '2px solid #fff'}} />
                                                </Grid>
                                                <Grid item xs={1}container justify="center" space={9}>
                                                    <Avatar alt="Remy Sharp" src={c3} style={{width: 30, height: 30, border: '2px solid #fff'}} />
                                                </Grid>
                                                <Grid item xs={9}container justify="center" >
                                                    <label className="trtxt"> 13 candidates </label>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                            
                                        </div>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button onClick={() => this.props.changeFlag(1)} style={{marginLeft: '15px', borderRadius: '30px', color: '#009FFA', backgroundColor: 'rgba(0, 159, 250, 0.1)', borderWidth: '0px'}}> 
                                            View Results 
                                        </Button>                                        
                                    </TableCell>
                                </TableRow>
                                <TableRow hover role="checkbox" tabIndex={-1}>
                                    <TableCell >
                                        <div className="divCard">
                                        <Avatar style={{backgroundColor: '#FF475B', width: 30, height: 30}}>PL</Avatar>
                                            <label className="trtxt"> Property Law </label>
                                        </div>
                                    </TableCell>
                                    <TableCell >
                                        <div className="divCard">
                                        <Grid item xs={12} space={9}>
                                            <Grid container justify="center"  space={9} >
                                                <Grid item xs={1}container justify="center" space={9}>
                                                    <Avatar alt="Remy Sharp" src={c1} style={{width: 30, height: 30, border: '2px solid #fff'}} />
                                                </Grid>
                                                <Grid item xs={1}container justify="center" space={9}>
                                                    <Avatar alt="Remy Sharp" src={c2} style={{width: 30, height: 30, border: '2px solid #fff'}} />
                                                </Grid>
                                                <Grid item xs={1}container justify="center" space={9}>
                                                    <Avatar alt="Remy Sharp" src={c3} style={{width: 30, height: 30, border: '2px solid #fff'}} />
                                                </Grid>
                                                <Grid item xs={9}container justify="center" >
                                                    <label className="trtxt"> 13 candidates </label>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                            
                                        </div>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button onClick={() => this.props.changeFlag(1)} style={{marginLeft: '15px', borderRadius: '30px', color: '#009FFA', backgroundColor: 'rgba(0, 159, 250, 0.1)', borderWidth: '0px'}}> 
                                            View Results 
                                        </Button>                                        
                                    </TableCell>
                                </TableRow>
                                <TableRow hover role="checkbox" tabIndex={-1}>
                                    <TableCell >
                                        <div className="divCard">
                                            <Avatar style={{backgroundColor: '#009FFA', width: 30, height: 30}}>TL</Avatar>
                                            <label className="trtxt"> Tax Law </label>
                                        </div>
                                    </TableCell>
                                    <TableCell >
                                        <div className="divCard">
                                        <Grid item xs={12} space={9}>
                                            <Grid container justify="center"  space={9} >
                                                <Grid item xs={1}container justify="center" space={9}>
                                                    <Avatar alt="Remy Sharp" src={c1} style={{width: 30, height: 30, border: '2px solid #fff'}} />
                                                </Grid>
                                                <Grid item xs={1}container justify="center" space={9}>
                                                    <Avatar alt="Remy Sharp" src={c2} style={{width: 30, height: 30, border: '2px solid #fff'}} />
                                                </Grid>
                                                <Grid item xs={1}container justify="center" space={9}>
                                                    <Avatar alt="Remy Sharp" src={c3} style={{width: 30, height: 30, border: '2px solid #fff'}} />
                                                </Grid>
                                                <Grid item xs={9}container justify="center" >
                                                    <label className="trtxt"> 13 candidates </label>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                            
                                        </div>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Button onClick={() => this.props.changeFlag(1)} style={{marginLeft: '15px', borderRadius: '30px', color: '#009FFA', backgroundColor: 'rgba(0, 159, 250, 0.1)', borderWidth: '0px'}}> 
                                            View Results 
                                        </Button>
                                    </TableCell>
                                </TableRow>                            
                                {
                                    this.state.anchorElement &&
                                    <StyledPopper
                                    placement="bottom"
                                    open={this.state.open}
                                    anchorEl={this.state.anchorElement}
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
                                    {
                                        true &&
                                        <span className="arrow" ref={this.handleArrowRef} />
                                    }
                                    <div className={"popper-content"}>
                                        <Link to="#" className="poplinkcli" > New Candidate</Link>
                                        <Divider />
                                        <Link to="#" className="poplinkcli" > Existing Candidate</Link>
                                    </div>
                                    </StyledPopper>
                                }
                            </TableBody>
                        </Table>
                    </div>                    
                </Paper>
                <Dialog
                    open={this.props.addopen}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    fullWidth={true}
                    //maxWidth="xl"
                >
                    <DialogTitle id="alert-dialog-slide-title" className="deltitle" style={{margin: 'auto', padding: '25px 100px 10px'}}>
                        Create a new training
                    </DialogTitle>
                    <DialogContent>
                        <Form style={{width: '560px'}}>
                            <Form.Group controlId="aformGridFullName" className="dialogAdd" >
                                <Form.Control placeholder="Training Title" value={this.state.fullname} className="inputtxtD" onChange={(event) => this.setState({fullname: event.target.value})} />
                                <div onClick={this.circleCO}>
                                    {this.state.selectColor}
                                    {
                                    this.state.anchorElementCirCol &&
                                    <StyledPopper
                                    placement="right"
                                    open={true}
                                    disablePortal={true}
                                    anchorEl={this.state.anchorElementCirCol}
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
                                    {
                                        true &&
                                        <span className="arrow" ref={this.handleArrowRef} />
                                    }
                                    <div className={"popper-content-color"}>
                                        <div style={{display: 'flex'}}>
                                        <div onClick={() => this.selectColors(0)}> {Data.circleColor[0].svg} </div>
                                        <div onClick={() => this.selectColors(1)}> {Data.circleColor[1].svg} </div>
                                        <div onClick={() => this.selectColors(2)}> {Data.circleColor[2].svg} </div>
                                        <div onClick={() => this.selectColors(3)}> {Data.circleColor[3].svg} </div>
                                        </div>
                                        <div style={{display: 'flex'}}>
                                        <div onClick={() => this.selectColors(4)}> {Data.circleColor[4].svg} </div>
                                        <div onClick={() => this.selectColors(5)}> {Data.circleColor[5].svg} </div>
                                        <div onClick={() => this.selectColors(6)}> {Data.circleColor[6].svg} </div>
                                        <div onClick={() => this.selectColors(7)}> {Data.circleColor[7].svg} </div>
                                        </div>
                                    </div>
                                    </StyledPopper>
                                } 
                                </div>
                                
                            </Form.Group>
                        </Form>
                    </DialogContent>
                    <DialogActions style={{margin: 'auto', padding: '0px 30px 30px'}}>
                        <Button onClick={this.handleCreate} style={{borderRadius: '10px', color: '#fff', backgroundColor: '#FF475B', borderWidth: '0px', float: 'right'}}>
                            Create Training
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={this.state.editopen}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    style={{paddingLeft: '316px'}}
                >
                    <DialogTitle id="alert-dialog-slide-title" className="deltitle" style={{margin: 'auto', padding: '25px 100px 10px'}}>
                        Edit Administrator Information
                    </DialogTitle>
                    <DialogContent>
                        <Form>
                            <Form.Group controlId="formGridFullName" className="formgroupD" >
                                <Form.Control placeholder="FullName" value={this.state.fullname} className="inputtxtD" onChange={(event) => this.setState({fullname: event.target.value})} />
                            </Form.Group>                                        
                            <Form.Group controlId="formGridEmail" className="formgroupD" >
                                <Form.Control type="email" value={this.state.email} placeholder="Email address" className="inputtxtD" onChange={(event) => this.setState({email: event.target.value})} />
                            </Form.Group>
                            <Form.Group controlId="formGridPassword" className="formgroupD" >
                                <Form.Control type="password" value={this.state.password} placeholder="Password" className="inputtxtD" onChange={(event) => this.setState({password: event.target.value})} />
                            </Form.Group> 
                        </Form>
                    </DialogContent>
                    <DialogActions style={{margin: 'auto', padding: '0px 30px 30px'}}>
                        <Button onClick={this.handleEdit} style={{borderRadius: '10px', color: '#fff', backgroundColor: '#FF475B', borderWidth: '0px'}}>
                            Update Account
                        </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={this.state.delopen}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title" className="deltitle" style={{margin: 'auto', padding: '25px 100px 10px'}}>
                        Are you sure you want to delete?
                    </DialogTitle>
                    <DialogContent>
                        {/* <DialogContentText id="alert-dialog-slide-description">
                            Let Google help apps determine location. This means sending anonymous location data to
                            Google, even when no apps are running.
                        </DialogContentText> */}
                    </DialogContent>
                    <DialogActions style={{margin: 'auto', padding: '0px 30px 30px'}}>
                        <Button onClick={this.handleDelete} style={{marginRight: '20px', borderRadius: '10px', color: '#fff', backgroundColor: '#FF475B', borderWidth: '0px'}}>
                            Yes
                        </Button>
                        <Button onClick={this.handleClose} style={{marginLeft: '20px', borderRadius: '10px', color: '#fff', backgroundColor: '#9AA9B7', borderWidth: '0px'}}>
                            No
                        </Button>
                    </DialogActions>
                </Dialog>                    
          </div>
        );
    }
}

const mapDispatchToProps = {
    addclose: addClose,
    colorPopOpen: colorPopOpen,
}

const mapStateToProps = (state) => ({
    addopen: state.addopen,
})


ReportsView = connect(mapStateToProps, mapDispatchToProps)(ReportsView)
export default ReportsView;