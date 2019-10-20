import React, {Component} from 'react';
import {
    Card, 
    CardContent,
    Grid,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide, 
    Button,
    Fab,
} from '@material-ui/core';

import {
    Form,
    Col,
    ProgressBar,
} from 'react-bootstrap';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux'
import { addClose } from '../actions';
import StyledPopper from '../common/styledPopper';

import '../assets/css/candirp.css';
import '../assets/css/bodypanel.css';
import c1 from '../assets/images/c1.png';
import c2 from '../assets/images/c2.png';
import c3 from '../assets/images/c3.png';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class CandiRP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectdata: '',
            fullname: '',
            department: '',
            occupation: '',
            email: '',
            password: '',
            editopen: false,
            anchordot3: null,
            dot3open: false,
            arrowRef: null,
        }
    }

    handleCreate = () => {
        // for( var i = rows.length-1; i--;){            
        //     if ( rows[i].email === this.state.selectdata){
        //         rows[i].fullname = this.state.fullname;
        //         rows[i].email = this.state.email;
        //         break;
        //     }
        // }
        this.handleClose();
        this.props.addclose();
    }

    handleClick = () => {
        
    }

    handleClose = () => {
        this.setState({
            selectdata: '',
            fullname: '',
            email: '',
            password: '',
            editopen: false
        });
    };
    handleDot3 = event => {
        if (this.state.dot3open)
            this.setState({
                anchordot3: null,
                dot3open: false
            })
        else
            this.setState({
                anchordot3: event.currentTarget,
                dot3open: true
            })
    }
    handleArrowRef = node => {
        this.setState({
            arrowRef: node,
        });
    };
    edit = () => {
        this.setState({
            editopen: true,
            anchordot3: null,
            dot3open: false,
        })
    }

    render() {
        return (
            <div className="Rcontainer">
                <Grid container className="root" justify="center">
                    <Grid item xs={12} sm={6} xd={4} lg={4} container justify="center" >
                        <Card className="card">
                            <CardContent>
                                <div className="dot3" onClick={this.handleDot3}>
                                    <svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.542969 2C0.542969 3.10457 1.54795 4 2.78765 4C4.02735 4 5.03233 3.10457 5.03233 2C5.03233 0.89543 4.02735 0 2.78765 0C1.54795 0 0.542969 0.89543 0.542969 2ZM2.78765 11C1.54795 11 0.542969 10.1046 0.542969 9C0.542969 7.89543 1.54795 7 2.78765 7C4.02735 7 5.03233 7.89543 5.03233 9C5.03233 10.1046 4.02735 11 2.78765 11ZM2.78765 18C1.54795 18 0.542969 17.1046 0.542969 16C0.542969 14.8954 1.54795 14 2.78765 14C4.02735 14 5.03233 14.8954 5.03233 16C5.03233 17.1046 4.02735 18 2.78765 18Z" fill="#CFCFCF"/>
                                    </svg>
                                </div>                                       
                                <br />
                                <img
                                    src={c1}
                                    alt="user"
                                    className="rounded-circleimg"
                                    width="31"
                                />
                                <div className="h2txt">Evan Stark</div>                                                                         
                                <div className="h3txt">Police Officer, FIA</div>
                                <div className="row" style={{ margin: 'auto', paddingTop: 10}}>
                                    <div className="col-lg-3 right" style={{padding: 0, fontSize: '12px', textAlign: 'right'}}>Investigation</div>
                                    <div className="col-lg-7" style={{padding: 5}}>                                                
                                        <ProgressBar now={12/15*100} label={`${60}%`} srOnly style={{borderRadius: '5px', height: '8px'}} />
                                    </div>
                                    <div className="col-lg-2" style={{padding: 0, fontSize: '12px', color: '#8D8D8D'}}>12/15</div>
                                </div>
                                <div className="row" style={{ margin: 'auto', paddingTop: 10}}>
                                    <div className="col-lg-3 right" style={{padding: 0, fontSize: '12px', textAlign: 'right'}}>knowledge</div>
                                    <div className="col-lg-7" style={{padding: 5}}>
                                        <ProgressBar variant="info" now={7/15*100} label={`${60}%`} srOnly style={{borderRadius: '5px', height: '8px'}} />
                                    </div>
                                    <div className="col-lg-2" style={{padding: 0, fontSize: '12px', color: '#8D8D8D'}}>7/15</div>
                                </div>
                                <div className="row" style={{ margin: 'auto', paddingTop: 10}}>
                                    <div className="col-lg-3 right" style={{padding: 0, fontSize: '12px', textAlign: 'right'}}>Trial</div>
                                    <div className="col-lg-7" style={{padding: 5}}>
                                        <ProgressBar variant="success" now={9/15*100} label={`${60}%`} srOnly style={{borderRadius: '5px', height: '8px'}} />
                                    </div>
                                    <div className="col-lg-2" style={{padding: 0, fontSize: '12px', color: '#8D8D8D'}}>9/15</div>
                                </div>
                                <div className="middle2bnt">
                                    <Button onClick={this.handleCreate} style={{fontSize: '12px',  margin: '15px', borderRadius: '10px', color: '#fff', backgroundColor: '#FF475B', borderWidth: '0px'}}>
                                        Assign Training
                                    </Button>
                                    <Button onClick={this.handleCreate} style={{fontSize: '12px', margin: '15px', borderRadius: '10px', color: '#979797', backgroundColor: '#F2F2F2', borderWidth: '0px'}}>
                                        View Results
                                    </Button> 
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} xd={4} lg={4} container justify="center"  >
                        <Card className="card">
                            <CardContent>
                                <div className="dot3" onClick={this.handleDot3} >
                                    <svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.542969 2C0.542969 3.10457 1.54795 4 2.78765 4C4.02735 4 5.03233 3.10457 5.03233 2C5.03233 0.89543 4.02735 0 2.78765 0C1.54795 0 0.542969 0.89543 0.542969 2ZM2.78765 11C1.54795 11 0.542969 10.1046 0.542969 9C0.542969 7.89543 1.54795 7 2.78765 7C4.02735 7 5.03233 7.89543 5.03233 9C5.03233 10.1046 4.02735 11 2.78765 11ZM2.78765 18C1.54795 18 0.542969 17.1046 0.542969 16C0.542969 14.8954 1.54795 14 2.78765 14C4.02735 14 5.03233 14.8954 5.03233 16C5.03233 17.1046 4.02735 18 2.78765 18Z" fill="#CFCFCF"/>
                                    </svg>
                                </div>                                       
                                <br />
                                <img
                                    src={c2}
                                    alt="user"
                                    className="rounded-circleimg"
                                    width="31"
                                />
                                <div className="h2txt">Peter Theil</div>                                                                         
                                <div className="h3txt">Police Officer, FIA</div>
                                
                                <div className="row" style={{ margin: 'auto', paddingTop: 10}}>
                                    <div className="col-lg-3 right" style={{padding: 0, fontSize: '12px', textAlign: 'right'}}>Investigation</div>
                                    <div className="col-lg-7" style={{padding: 5}}>                                                
                                        <ProgressBar now={12/15*100} label={`${60}%`} srOnly style={{borderRadius: '5px', height: '8px'}} />
                                    </div>
                                    <div className="col-lg-2" style={{padding: 0, fontSize: '12px', color: '#8D8D8D'}}>12/15</div>
                                </div>
                                <div className="row" style={{ margin: 'auto', paddingTop: 10}}>
                                    <div className="col-lg-3 right" style={{padding: 0, fontSize: '12px', textAlign: 'right'}}>knowledge</div>
                                    <div className="col-lg-7" style={{padding: 5}}>
                                        <ProgressBar variant="info" now={7/15*100} label={`${60}%`} srOnly style={{borderRadius: '5px', height: '8px'}} />
                                    </div>
                                    <div className="col-lg-2" style={{padding: 0, fontSize: '12px', color: '#8D8D8D'}}>7/15</div>
                                </div>
                                <div className="row" style={{ margin: 'auto', paddingTop: 10}}>
                                    <div className="col-lg-3 right" style={{padding: 0, fontSize: '12px', textAlign: 'right'}}>Reasoning</div>
                                    <div className="col-lg-7" style={{padding: 5}}>
                                        <ProgressBar variant="warning" now={9/15*100} label={`${60}%`} srOnly style={{borderRadius: '5px', height: '8px'}} />
                                    </div>
                                    <div className="col-lg-2" style={{padding: 0, fontSize: '12px', color: '#8D8D8D'}}>9/15</div>
                                </div>
                                <div className="middle2bnt">
                                    <Button onClick={this.handleCreate} style={{fontSize: '12px',  margin: '15px', borderRadius: '10px', color: '#fff', backgroundColor: '#FF475B', borderWidth: '0px'}}>
                                        Assign Training
                                    </Button>
                                    <Button onClick={this.handleCreate} style={{fontSize: '12px', margin: '15px', borderRadius: '10px', color: '#979797', backgroundColor: '#F2F2F2', borderWidth: '0px'}}>
                                        View Results
                                    </Button> 
                                </div>                                        
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6} xd={4} lg={4} container justify="center" >
                        <Card className="card">
                            <CardContent>
                                <div className="dot3" onClick={this.handleDot3} >
                                <   svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.542969 2C0.542969 3.10457 1.54795 4 2.78765 4C4.02735 4 5.03233 3.10457 5.03233 2C5.03233 0.89543 4.02735 0 2.78765 0C1.54795 0 0.542969 0.89543 0.542969 2ZM2.78765 11C1.54795 11 0.542969 10.1046 0.542969 9C0.542969 7.89543 1.54795 7 2.78765 7C4.02735 7 5.03233 7.89543 5.03233 9C5.03233 10.1046 4.02735 11 2.78765 11ZM2.78765 18C1.54795 18 0.542969 17.1046 0.542969 16C0.542969 14.8954 1.54795 14 2.78765 14C4.02735 14 5.03233 14.8954 5.03233 16C5.03233 17.1046 4.02735 18 2.78765 18Z" fill="#CFCFCF"/>
                                    </svg>
                                </div>                                       
                                <br /> 
                                <img
                                    src={c3}
                                    alt="user"
                                    className="rounded-circleimg"
                                    width="31"
                                />
                                <div className="h2txt">Evan Stark</div>                                                                         
                                <div className="h3txt">Police Officer, FIA</div>
                                <div className="row" style={{ margin: 'auto', paddingTop: 10}}>
                                    <div className="col-lg-3 right" style={{padding: 0, fontSize: '12px', textAlign: 'right'}}>Investigation</div>
                                    <div className="col-lg-7" style={{padding: 5}}>                                                
                                        <ProgressBar now={12/15*100} label={`${60}%`} srOnly style={{borderRadius: '5px', height: '8px'}} />
                                    </div>
                                    <div className="col-lg-2" style={{padding: 0, fontSize: '12px', color: '#8D8D8D'}}>12/15</div>
                                </div>
                                <div className="row" style={{ margin: 'auto', paddingTop: 10}}>
                                    <div className="col-lg-3 right" style={{padding: 0, fontSize: '12px', textAlign: 'right'}}>knowledge</div>
                                    <div className="col-lg-7" style={{padding: 5}}>
                                        <ProgressBar variant="info" now={7/15*100} label={`${60}%`} srOnly style={{borderRadius: '5px', height: '8px'}} />
                                    </div>
                                    <div className="col-lg-2" style={{padding: 0, fontSize: '12px', color: '#8D8D8D'}}>7/15</div>
                                </div>
                                <div className="row" style={{ margin: 'auto', paddingTop: 10}}>
                                    <div className="col-lg-3 right" style={{padding: 0, fontSize: '12px', textAlign: 'right'}}>Trial</div>
                                    <div className="col-lg-7" style={{padding: 5}}>
                                        <ProgressBar variant="success" now={9/15*100} label={`${60}%`} srOnly style={{borderRadius: '5px', height: '8px'}} />
                                    </div>
                                    <div className="col-lg-2" style={{padding: 0, fontSize: '12px', color: '#8D8D8D'}}>9/15</div>
                                </div>
                                <div className="middle2bnt">
                                    <Button onClick={this.handleCreate} style={{fontSize: '12px',  margin: '15px', borderRadius: '10px', color: '#fff', backgroundColor: '#FF475B', borderWidth: '0px'}}>
                                        Assign Training
                                    </Button>
                                    <Button onClick={this.handleCreate} style={{fontSize: '12px', margin: '15px', borderRadius: '10px', color: '#979797', backgroundColor: '#F2F2F2', borderWidth: '0px'}}>
                                        View Results
                                    </Button> 
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
                
                <Dialog
                    open={this.props.addopen === undefined ? false : this.props.addopen}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    fullWidth={true}
                    style={{paperFullWidth: true}}
                    maxWidth='md'
                >
                    <DialogTitle id="alert-dialog-slide-title" style={{margin: 'auto', padding: '25px 100px 10px'}}>
                        Add a new candidate
                    </DialogTitle>
                    <DialogContent>
                        <Form>
                            <Form.Row className="formgroupO" >
                                <input
                                    accept="image/*"
                                    style={{display: 'none'}}
                                    id="outlined-button-file"
                                    multiple
                                    type="file"
                                />
                                <label htmlFor="outlined-button-file">
                                    <Fab variant="round" component="span" aria-label="add" style={{color: '#F2F2F2'}}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11 9H20V11H11V20H9V11H0V9H9V0H11V9Z" fill="#979797"/>
                                        </svg>
                                    </Fab>
                                </label>
                                
                                <div style={{paddingLeft: '20px'}}>
                                    <p style={{margin: '2px', color: '#FF475B', fontSize: '16px', fontWeight: 'bold'}} >Display Photo</p>
                                    <p style={{margin: '2px', color: '#979797', fontSize: '12px'}} >(Less than 10M)</p>
                                </div>
                            </Form.Row>  
                            <Form.Group controlId="aformGridCFullName" className="formgroupC" >
                                <Form.Control placeholder="Full Name" value={this.state.fullname} className="inputtxtC" onChange={(event) => this.setState({fullname: event.target.value})} />
                            </Form.Group>                          
                            <Form.Row>
                                <Form.Group as={Col} controlId="aformGridOName" className="formgroupO" >
                                    <Form.Control placeholder="Department" value={this.state.department} className="inputtxtO" onChange={(event) => this.setState({fullname: event.target.value})} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="aformGridDescription" className="formgroupO" >
                                    <Form.Control placeholder="Occupation" value={this.state.occupation} className="inputtxtO" onChange={(event) => this.setState({fullname: event.target.value})} />
                                </Form.Group>
                            </Form.Row>   
                            <Form.Row>                                    
                                <Form.Group as={Col} controlId="aformGridOEmail" className="formgroupO" >
                                    <Form.Control type="email" value={this.state.email} placeholder="Email address" className="inputtxtO" onChange={(event) => this.setState({email: event.target.value})} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="aformGridOPassword" className="formgroupO" >
                                    <Form.Control type="password" value={this.state.password} placeholder="Password" className="inputtxtO" onChange={(event) => this.setState({password: event.target.value})} />
                                </Form.Group>
                            </Form.Row> 
                        </Form>
                    </DialogContent>
                    <DialogTitle id="alert-dialog" style={{padding: 0, paddingLeft: '20px'}}>
                        Assign trainings
                    </DialogTitle>
                    <DialogContent style={{display: 'flex'}}>
                    <Card className="box" style={{backgroundColor: '#FF475B', borderRadius: '15px'}}>
                        <CardContent style={{backgroundColor: '#FF475B', borderRadius: '20px', paddingTop: '2px'}}>
                            <div style={{float: 'right'}}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14.5455C11.615 14.5455 14.5455 11.615 14.5455 8C14.5455 4.38505 11.615 1.45455 8 1.45455C4.38505 1.45455 1.45455 4.38505 1.45455 8C1.45455 11.615 4.38505 14.5455 8 14.5455ZM10.3949 5.30398L6.54551 9.15335L4.87795 7.4858L3.84943 8.51431L6.54551 11.2104L11.4234 6.3325L10.3949 5.30398Z" fill="white" fillOpacity="0.8"/>
                                </svg>
                            </div>
                            <br />
                            <p style={{fontSize: '15px', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.8)', margin: 0}}>Critical Thinking</p>
                            <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '2px', marginTop: '15px', borderRadius: '10px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderWidth: '0px', alignSelf: 'left'}}>
                                Investigation
                            </Button>
                            <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '2px', marginTop: '15px', borderRadius: '10px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderWidth: '0px', alignSelf: 'left'}}>
                                Knowledge
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="box" style={{borderRadius: '15px', borderWidth: '2px'}}>
                        <CardContent>
                            <p style={{fontSize: '15px', fontWeight: 'bold', color: 'black', margin: 0}}>Property Law</p>
                            <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '2px', marginTop: '25px', borderRadius: '10px', color: '#FFA800', border: '1px solid #FFA800', backgroundColor: '#FFF6E5', alignSelf: 'left'}}>
                                Investigation
                            </Button>
                            <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '2px', marginTop: '25px', borderRadius: '10px', color: '#009FFA', border: '1px solid #009FFA', backgroundColor: '#F2FAFF', alignSelf: 'right'}}>
                                Knowledge
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="box" style={{borderRadius: '15px', borderWidth: '2px'}}>
                        <CardContent>
                            <p style={{fontSize: '15px', fontWeight: 'bold', color: 'black', margin: 0}}>Tax Law</p>
                            <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '2px', marginTop: '25px', borderRadius: '10px', color: '#FFA800', border: '1px solid #FFA800', backgroundColor: '#FFF6E5', alignSelf: 'left'}}>
                                Investigation
                            </Button>
                            <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '2px', marginTop: '25px', borderRadius: '10px', color: '#009FFA', border: '1px solid #009FFA', backgroundColor: '#F2FAFF', alignSelf: 'right'}}>
                                Knowledge
                            </Button>
                        </CardContent>
                    </Card>
                    </DialogContent>
                    <DialogActions style={{ paddingRight: '30px', marginBottom: '30px'}}>
                        <Button onClick={this.handleCreate} style={{borderRadius: '10px', color: '#fff', backgroundColor: '#FF475B', borderWidth: '0px', alignSelf: 'right'}}>
                            Create Account
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
                    fullWidth={true}
                    style={{paperFullWidth: true}}
                    maxWidth='md'
                >
                    <DialogTitle id="alert-dialog-slide-title" style={{margin: 'auto', padding: '25px 100px 10px'}}>
                        Add a new candidate
                    </DialogTitle>
                    <DialogContent>
                        <Form>
                            <Form.Row className="formgroupO" >
                                <input
                                    accept="image/*"
                                    style={{display: 'none'}}
                                    id="outlined-button"
                                    multiple
                                    type="file"
                                />
                                <label htmlFor="outlined-button">
                                    <Fab variant="round" component="span" aria-label="add" style={{color: '#F2F2F2'}}>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11 9H20V11H11V20H9V11H0V9H9V0H11V9Z" fill="#979797"/>
                                        </svg>
                                    </Fab>
                                </label>
                                
                                <div style={{paddingLeft: '20px'}}>
                                    <p style={{margin: '2px', color: '#FF475B', fontSize: '16px', fontWeight: 'bold'}} >Display Photo</p>
                                    <p style={{margin: '2px', color: '#979797', fontSize: '12px'}} >(Less than 10M)</p>
                                </div>
                            </Form.Row>  
                            <Form.Group controlId="aformGridFullName" className="formgroupC" >
                                <Form.Control placeholder="Even Stark" value={this.state.fullname} className="inputtxtC" onChange={(event) => this.setState({fullname: event.target.value})} />
                            </Form.Group>                          
                            <Form.Row>
                                <Form.Group as={Col} controlId="aformGridName" className="formgroupO" >
                                    <Form.Control placeholder="FIA" value={this.state.department} className="inputtxtO" onChange={(event) => this.setState({fullname: event.target.value})} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="aformGridDescriptionE" className="formgroupO" >
                                    <Form.Control placeholder="Police Officer" value={this.state.occupation} className="inputtxtO" onChange={(event) => this.setState({fullname: event.target.value})} />
                                </Form.Group>
                            </Form.Row>   
                            <Form.Row>                                    
                                <Form.Group as={Col} controlId="aformGridEmail" className="formgroupO" >
                                    <Form.Control type="email" value={this.state.email} placeholder="police@gamil.com" className="inputtxtO" onChange={(event) => this.setState({email: event.target.value})} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="aformGridPassword" className="formgroupO" >
                                    <Form.Control type="password" value={this.state.password} placeholder="Password" className="inputtxtO" onChange={(event) => this.setState({password: event.target.value})} />
                                </Form.Group>
                            </Form.Row> 
                        </Form>
                    </DialogContent>
                    <DialogTitle id="alert-dialog" style={{padding: 0, paddingLeft: '20px'}}>
                        Assign trainings
                    </DialogTitle>
                    <DialogContent style={{display: 'flex'}}>
                    <Card className="box" style={{backgroundColor: '#FF475B', borderRadius: '15px'}}>
                        <CardContent style={{backgroundColor: '#FF475B', borderRadius: '20px', paddingTop: '2px'}}>
                            <div style={{float: 'right'}}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14.5455C11.615 14.5455 14.5455 11.615 14.5455 8C14.5455 4.38505 11.615 1.45455 8 1.45455C4.38505 1.45455 1.45455 4.38505 1.45455 8C1.45455 11.615 4.38505 14.5455 8 14.5455ZM10.3949 5.30398L6.54551 9.15335L4.87795 7.4858L3.84943 8.51431L6.54551 11.2104L11.4234 6.3325L10.3949 5.30398Z" fill="white" fillOpacity="0.8"/>
                                </svg>
                            </div>
                            <br />
                            <p style={{fontSize: '15px', fontWeight: 'bold', color: 'rgba(255, 255, 255, 0.8)', margin: 0}}>Critical Thinking</p>
                            <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '2px', marginTop: '15px', borderRadius: '10px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderWidth: '0px', alignSelf: 'left'}}>
                                Investigation
                            </Button>
                            <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '2px', marginTop: '15px', borderRadius: '10px', color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.2)', borderWidth: '0px', alignSelf: 'left'}}>
                                Knowledge
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="box" style={{borderRadius: '15px', borderWidth: '2px'}}>
                        <CardContent>
                            <p style={{fontSize: '15px', fontWeight: 'bold', color: 'black', margin: 0}}>Property Law</p>
                            <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '2px', marginTop: '25px', borderRadius: '10px', color: '#FFA800', border: '1px solid #FFA800', backgroundColor: '#FFF6E5', alignSelf: 'left'}}>
                                Investigation
                            </Button>
                            <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '2px', marginTop: '25px', borderRadius: '10px', color: '#009FFA', border: '1px solid #009FFA', backgroundColor: '#F2FAFF', alignSelf: 'right'}}>
                                Knowledge
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="box" style={{borderRadius: '15px', borderWidth: '2px'}}>
                        <CardContent>
                            <p style={{fontSize: '15px', fontWeight: 'bold', color: 'black', margin: 0}}>Tax Law</p>
                            <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '2px', marginTop: '25px', borderRadius: '10px', color: '#FFA800', border: '1px solid #FFA800', backgroundColor: '#FFF6E5', alignSelf: 'left'}}>
                                Investigation
                            </Button>
                            <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '2px', marginTop: '25px', borderRadius: '10px', color: '#009FFA', border: '1px solid #009FFA', backgroundColor: '#F2FAFF', alignSelf: 'right'}}>
                                Knowledge
                            </Button>
                        </CardContent>
                    </Card>
                    </DialogContent>
                    <DialogActions style={{ paddingRight: '30px', marginBottom: '30px'}}>
                        <Button onClick={this.handleCreate} style={{borderRadius: '10px', color: '#fff', backgroundColor: '#FF475B', borderWidth: '0px', alignSelf: 'right'}}>
                            Save Change
                        </Button>
                    </DialogActions>
                </Dialog>
                {
                    this.state.anchordot3 &&
                    <StyledPopper
                    placement="bottom"
                    open={this.state.dot3open}
                    anchorEl={this.state.anchordot3}
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
                    <div className={"popper-content-3dot"}>
                        <Link to="#" className="poplinkcli" onClick={this.edit}> Edit</Link>
                        
                        <Link to="#" className="poplinkcli" onClick={this.delete}> Delete </Link>
                    </div>
                    </StyledPopper>
                }
            </div>            
        );
    }
}

const mapStateToProps = (state) => ({addopen: state.addopen})
const mapDispatchToProps = { addclose: addClose,};
CandiRP = connect(mapStateToProps, mapDispatchToProps)(CandiRP)
export default CandiRP;
