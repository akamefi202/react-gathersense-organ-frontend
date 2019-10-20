import React, {Component } from 'react';
import {
    Paper, 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Slide,
    Avatar,
    Grid,
    Divider,
    Card,
    CardContent,
    ExpansionPanel,
    ExpansionPanelSummary,
    Typography,
    ExpansionPanelDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import {
    Form,
    ProgressBar
} from 'react-bootstrap';

import { connect } from 'react-redux'
import { addClose } from '../actions';
import { colorPopOpen } from '../actions';

import Data from '../common/dataOrg';
import StyledPopper from '../common/styledPopper';

import '../assets/css/bodypanel.css';
import '../assets/css/Tranining.css';

import c1 from '../assets/images/c1.png';
import c2 from '../assets/images/c2.png';
import c3 from '../assets/images/c3.png';

var rows = [
    { trainings:"Gao kotalentsu", candidates:"talent0620kobal1@outlook.com" },
    { trainings:"Gao kotalentsu", candidates:"talent0620kobal2@outlook.com" },
    { trainings:"Gao kotalentsu", candidates:"talent0620kobal3@outlook.com" },
    { trainings:"Gao kotalentsu", candidates:"talent0620kobal4@outlook.com" },
    { trainings:"Gao kotalentsu", candidates:"talent0620kobal5@outlook.com" },
    { trainings:"Gao kotalentsu", candidates:"talent0620kobal6@outlook.com" },
    { trainings:"Gao kotalentsu", candidates:"talent0620kobal7@outlook.com" },
    { trainings:"Gao kotalentsu", candidates:"talent0620kobal8@outlook.com" },
    { trainings:"Gao kotalentsu", candidates:"talent0620kobal9@outlook.com" },
    { trainings:"Gao kotalentsu", candidates:"talent0620kobal10@outlook.com" },
    { trainings:"Gao kotalentsu", candidates:"talent0620kobal11@outlook.com" },
    { trainings:"Gao kotalentsu", candidates:"talent0620kobal12@outlook.com" },
    { trainings:"Gao kotalentsu", candidates:"talent0620kobal13@outlook.com" },
    { trainings:"Gao kotalentsu", candidates:"talent0620kobal14@outlook.com" },
    { trainings:"Gao kotalentsu", candidates:"talent0620kobal15@outlook.com" },
    { trainings:"Gao kotalentsu", candidates:"talent0620kobal16@outlook.com" },
    { trainings:"Gao kotalentsu", candidates:"talent0620kobal17@outlook.com" },
    { trainings:"Gao kotalentsu", candidates:"talent0620kobal18@outlook.com" },
    { trainings:"Gao kotalentsu", candidates:"talent0620kobal19@outlook.com" },
];

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class ReportsResultView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            rowsPerPage: 10,    
            selectdata: '',
            fullname: '',
            email: '',
            password: '',
            anchorElement: null,
            arrowRef: null,
            open: false,
            colorpopopen: true,
            anchorElementCirCol: null,
            selectColor: Data.circleColor[0].svg,
            dotopen: false,
            anchorElDot: null,
        }
    }

    componentDidMount() {
        
    }

    dotOpen = event => {
        if (this.state.dotopen)
            this.setState({
                anchorElDot: null,
                dotopen: false
            })
        else
            this.setState({
                anchorElDot: event.currentTarget,
                dotopen: true
            })
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
            open: false,
            selectdata: '',
            fullname: '',
            email: '',
            password: '',
        });
    };

    render() {

        return (
            <div className="Rcontainer">
                <div className="bothdiv">
                    <div className="leftdiv" >
                        <Card className="reportCardAvt">
                            <CardContent>                                
                                <Avatar className="middle" alt="Sharp" src={c1} style={{width: 75, height: 75, marginTop: '20px' }} />
                                <div className="h2txt" style={{marginTop: '10px'}}>John Dawson</div>
                                <div className="h3txt">Police Officer</div>
                            </CardContent>
                        </Card>
                        <Card className="reportCard">
                            <CardContent>
                                <div style={{float: 'right', marginRight: '10px'}}>
                                    <svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.542969 2C0.542969 3.10457 1.54795 4 2.78765 4C4.02735 4 5.03233 3.10457 5.03233 2C5.03233 0.89543 4.02735 0 2.78765 0C1.54795 0 0.542969 0.89543 0.542969 2ZM2.78765 11C1.54795 11 0.542969 10.1046 0.542969 9C0.542969 7.89543 1.54795 7 2.78765 7C4.02735 7 5.03233 7.89543 5.03233 9C5.03233 10.1046 4.02735 11 2.78765 11ZM2.78765 18C1.54795 18 0.542969 17.1046 0.542969 16C0.542969 14.8954 1.54795 14 2.78765 14C4.02735 14 5.03233 14.8954 5.03233 16C5.03233 17.1046 4.02735 18 2.78765 18Z" fill="#CFCFCF"/>
                                    </svg>
                                </div>                                       
                                <br />
                                <Avatar className="trainAvatar" style={{backgroundColor: Data.circleColor[3].svgColor, width: 80, height: 80, fontSize: '40px'}}>CT</Avatar>
                                <div className="h2txt">Critical Thinking</div>   
                                <div className="middle" style={{margin: '5px', alignItems: 'center', textAlign: 'center'}}>                                                                      
                                    <Button className="trainAvatar" onClick={this.handleClick} style={{fontSize: '10px', margin: '5px', borderRadius: '15px', color: '#FFA800', border: '1px solid #FFA800', backgroundColor: '#FFF6E5', padding: 3}}>
                                        Investigation
                                    </Button>
                                    <Button className="trainAvatar" onClick={this.handleClick} style={{fontSize: '10px', margin: '5px', borderRadius: '15px', color: '#009FFA', border: '1px solid #009FFA', backgroundColor: '#F2FAFF', padding: 3}}>
                                        Roles
                                    </Button>
                                    <Button className="trainAvatar" onClick={this.handleClick} style={{fontSize: '10px', margin: '5px', borderRadius: '15px', color: '#FF475B', border: '1px solid #FF475B', backgroundColor: '#FFEDED', padding: 3}}>
                                        Procedues
                                    </Button>
                                    <Button className="trainAvatar" onClick={this.handleClick} style={{fontSize: '10px', margin: '5px', borderRadius: '15px', color: '#00B187', border: '1px solid #00B187', backgroundColor: '#F2FBF9', padding: 3}}>
                                        Knowledge
                                    </Button>
                                    <Button className="trainAvatar" onClick={this.handleClick} style={{fontSize: '10px', margin: '5px', borderRadius: '15px', color: '#7F3CEE', border: '1px solid #7F3CEE', backgroundColor: '#F9F5FE', padding: 3}}>
                                        Powers
                                    </Button>
                                </div>
                                <div className="h3txt">Add training description here</div>
                                <Divider style={{marginTop: '25px'}}/>
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
                            </CardContent>
                        </Card>
                        <Card className="reportCardView">
                            <CardContent style={{display: 'flex'}}>                                
                                <Avatar className="middle" alt="Sharp" src={c1} style={{width: 50, height: 50 }} />
                                <div >
                                    <div className="h3txt">Next Candidate</div>
                                    <div className="h2txt">Zhiliang</div>
                                </div>
                                <Button className="trainAvatar" onClick={this.handleClick} style={{fontSize: '10px', margin: 'auto', borderRadius: '15px', color: '#00B187', border: '1px solid #00B187', backgroundColor: '#F2FBF9', padding: 2 }}>
                                    View
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="rightdiv">                        
                        <Paper style={{marginBottom: 20}}>
                            <label style={{fontSize: 16, fontWeight: 600, color: '#0F1B33', padding: '12px',margin: 0, marginLeft: '30px'}}> Introduction </label>
                            <div className="tableWrapper">
                                <div className="row" style={{ margin: 'auto', marginBottom: '10px'}}>
                                    <div className="col-lg-2 right" style={{padding: 0, fontSize: '12px', textAlign: 'right'}}>Investigation</div>
                                    <div className="col-lg-9" style={{padding: 5}}>                                                
                                        <ProgressBar variant="color1" now={50} label={`${60}%`} srOnly style={{borderRadius: '5px', height: '8px'}} />
                                    </div>
                                    <div className="col-lg-1" style={{padding: 0, fontSize: '12px', color: '#8D8D8D'}}>50/100</div>
                                </div>
                                <div className="row" style={{ margin: 'auto', marginBottom: '10px'}}>
                                    <div className="col-lg-2 right" style={{padding: 0, fontSize: '12px', textAlign: 'right'}}>Trial</div>
                                    <div className="col-lg-9" style={{padding: 5}}>
                                        <ProgressBar variant="color3" now={90} label={`${60}%`} srOnly style={{borderRadius: '5px', height: '8px'}} />
                                    </div>
                                    <div className="col-lg-1" style={{padding: 0, fontSize: '12px', color: '#8D8D8D'}}>90/100</div>
                                </div>
                                <div className="row" style={{ margin: 'auto', marginBottom: '10px'}}>
                                    <div className="col-lg-2 right" style={{padding: 0, fontSize: '12px', textAlign: 'right'}}>knowledge</div>
                                    <div className="col-lg-9" style={{padding: 5}}>
                                        <ProgressBar variant="color4" now={70} label={`${60}%`} srOnly style={{borderRadius: '5px', height: '8px', color: 'green'}} />
                                    </div>
                                    <div className="col-lg-1" style={{padding: 0, fontSize: '12px', color: '#8D8D8D'}}>70/100</div>
                                </div>
                            </div>
                            <div style={{height: 10}} />
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography style ={{margin: 'auto', color:'#979797', fontSize:'12px'}}> VIEW RESULTS </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div   className="blockdiv">
                                        <div >
                                                <label style={{fontSize: 14, fontWeight: 600, color: '#0F1B33', padding: '10px',margin: 0, marginLeft: '10px', marginTop: '20px'}} > 
                                                    Q1. what color do you like your orange to be? 
                                                </label>
                                                <div style={{display: 'flex'}}>
                                                    <Avatar style={{backgroundColor: '#F2F2F2', width: 20, height: 20, fontSize: '12px', margin: '10px'}}>A</Avatar>
                                                    <div className="h3txt" style={{margin: '11px'}}> Red </div>
                                                </div>
                                                <div style={{display: 'flex'}}>
                                                    <Avatar style={{backgroundColor: '#F2F2F2', width: 20, height: 20, fontSize: '12px', margin: '10px'}}>B</Avatar>
                                                    <div className="h3txt" style={{margin: '11px'}}> Blue </div>
                                                </div>
                                                <div style={{display: 'flex'}}>
                                                    <Avatar style={{backgroundColor: '#FF475B', width: 20, height: 20, fontSize: '12px', margin: '10px'}}>C</Avatar>
                                                    <div className="h3txt" style={{margin: '11px'}}> Green </div>
                                                    <hr className="hrset"></hr>
                                                    <div className="h3txt" style={{margin: '11px', color: '#aaa'}}> Your answer </div>
                                                </div>
                                                <div style={{display: 'flex'}}>
                                                    <Avatar style={{backgroundColor: '#00B187', width: 20, height: 20, fontSize: '12px', margin: '10px'}}>D</Avatar>
                                                    <div className="h3txt" style={{margin: '11px'}}> orange </div>
                                                    <hr className="hrset"></hr>
                                                    <div className="h3txt" style={{margin: '11px', color: '#aaa'}}> Correct answer </div>
                                                </div>
                                        </div>
                                        <div>
                                                <label style={{fontSize: 14, fontWeight: 600, color: '#0F1B33', padding: '10px',margin: 0, marginLeft: '10px', marginTop: '20px'}} > 
                                                    Q2. what color do you like your orange to be? 
                                                </label>
                                                <div style={{display: 'flex'}}>
                                                    <Avatar style={{backgroundColor: '#F2F2F2', width: 20, height: 20, fontSize: '12px', margin: '10px'}}>A</Avatar>
                                                    <div className="h3txt" style={{margin: '11px'}}> Red </div>
                                                </div>
                                                <div style={{display: 'flex'}}>
                                                    <Avatar style={{backgroundColor: '#F2F2F2', width: 20, height: 20, fontSize: '12px', margin: '10px'}}>B</Avatar>
                                                    <div className="h3txt" style={{margin: '11px'}}> Blue </div>
                                                </div>
                                                <div style={{display: 'flex'}}>
                                                    <Avatar style={{backgroundColor: '#F2F2F2', width: 20, height: 20, fontSize: '12px', margin: '10px'}}>C</Avatar>
                                                    <div className="h3txt" style={{margin: '11px'}}> Green </div>
                                                </div>
                                                <div style={{display: 'flex'}}>
                                                    <Avatar style={{backgroundColor: '#00B187', width: 20, height: 20, fontSize: '12px', margin: '10px'}}>D</Avatar>
                                                    <div className="h3txt" style={{margin: '11px'}}> orange </div>
                                                    <hr className="hrset"></hr>
                                                    <div className="h3txt" style={{margin: '11px', color: '#aaa'}}> Correct answer </div>
                                                </div>
                                        </div>
                                    </div>
                                </ExpansionPanelDetails>
                               
                            </ExpansionPanel>                    
                        </Paper>
                        <Paper style={{marginBottom: 20}}>
                            <label style={{fontSize: 16, fontWeight: 600, color: '#0F1B33', padding: '12px',margin: 0, marginLeft: '30px'}}> Logic </label>
                            <div className="tableWrapper">
                                <div className="row" style={{ margin: 'auto', marginBottom: '10px'}}>
                                    <div className="col-lg-2 right" style={{padding: 0, fontSize: '12px', textAlign: 'right'}}>Criminalization</div>
                                    <div className="col-lg-9" style={{padding: 5}}>                                                
                                        <ProgressBar variant="color1" now={50} label={`${60}%`} srOnly style={{borderRadius: '5px', height: '8px'}} />
                                    </div>
                                    <div className="col-lg-1" style={{padding: 0, fontSize: '12px', color: '#8D8D8D'}}>50/100</div>
                                </div>
                                <div className="row" style={{ margin: 'auto', marginBottom: '10px'}}>
                                    <div className="col-lg-2 right" style={{padding: 0, fontSize: '12px', textAlign: 'right'}}>Powers</div>
                                    <div className="col-lg-9" style={{padding: 5}}>
                                        <ProgressBar variant="color3" now={90} label={`${60}%`} srOnly style={{borderRadius: '5px', height: '8px'}} />
                                    </div>
                                    <div className="col-lg-1" style={{padding: 0, fontSize: '12px', color: '#8D8D8D'}}>90/100</div>
                                </div>
                                <div className="row" style={{ margin: 'auto', marginBottom: '10px'}}>
                                    <div className="col-lg-2 right" style={{padding: 0, fontSize: '12px', textAlign: 'right'}}>Roles</div>
                                    <div className="col-lg-9" style={{padding: 5}}>
                                        <ProgressBar variant="color4" now={70} label={`${60}%`} srOnly style={{borderRadius: '5px', height: '8px', color: 'green'}} />
                                    </div>
                                    <div className="col-lg-1" style={{padding: 0, fontSize: '12px', color: '#8D8D8D'}}>70/100</div>
                                </div>
                                <div className="row" style={{ margin: 'auto', marginBottom: '10px'}}>
                                    <div className="col-lg-2 right" style={{padding: 0, fontSize: '12px', textAlign: 'right'}}>Procedues</div>
                                    <div className="col-lg-9" style={{padding: 5}}>
                                        <ProgressBar variant="color2" now={90} label={`${60}%`} srOnly style={{borderRadius: '5px', height: '8px', color: 'green'}} />
                                    </div>
                                    <div className="col-lg-1" style={{padding: 0, fontSize: '12px', color: '#8D8D8D'}}>90/100</div>
                                </div>
                                <div className="row" style={{ margin: 'auto', marginBottom: '10px'}}>
                                    <div className="col-lg-2 right" style={{padding: 0, fontSize: '12px', textAlign: 'right'}}>knowledge</div>
                                    <div className="col-lg-9" style={{padding: 5}}>
                                        <ProgressBar variant="color5" now={70} label={`${60}%`} srOnly style={{borderRadius: '5px', height: '8px', color: 'green'}} />
                                    </div>
                                    <div className="col-lg-1" style={{padding: 0, fontSize: '12px', color: '#8D8D8D'}}>70/100</div>
                                </div>
                            </div>
                            <div style={{height: 10}} />
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography style ={{margin: 'auto', color:'#979797', fontSize:'12px'}}> VIEW RESULTS </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <div   className="blockdiv">
                                        <div >
                                                <label style={{fontSize: 14, fontWeight: 600, color: '#0F1B33', padding: '10px',margin: 0, marginLeft: '10px', marginTop: '20px'}} > 
                                                    Q1. Is there an explicit definition of terrorism inancing with the Anti-Terrorism 1997? 
                                                </label>
                                                <div style={{display: 'flex'}}>
                                                    <Avatar style={{backgroundColor: '#F2F2F2', width: 20, height: 20, fontSize: '12px', margin: '10px', color: '#979797'}}>A</Avatar>
                                                    <div className="h3txt" style={{margin: '11px'}}> Yes, it is deplicitly define within the ATA </div>
                                                </div>
                                                <div style={{display: 'flex'}}>
                                                    <Avatar style={{backgroundColor: '#F2F2F2', width: 20, height: 20, fontSize: '12px', margin: '10px', color: '#979797'}}>B</Avatar>
                                                    <div className="h3txt" style={{margin: '11px'}}> Terrorism financing is not mentioned in the ATA </div>
                                                </div>
                                                <div style={{display: 'flex'}}>
                                                    <Avatar style={{backgroundColor: '#FF475B', width: 20, height: 20, fontSize: '12px', margin: '10px', color: '#eee'}}>C</Avatar>
                                                    <div className="h3txt" style={{margin: '11px'}}> No, however, the definition is included within the Anti-Money Laundering Act 2010 </div>
                                                </div>
                                                <div style={{display: 'flex'}}>
                                                    <Avatar style={{backgroundColor: '#00B187', width: 20, height: 20, fontSize: '12px', margin: '10px', color: '#eee'}}>D</Avatar>
                                                    <div className="h3txt" style={{margin: '11px'}}> It is not explicitl defined in the ATA </div>
                                                </div>
                                                <div className="h3txt" style={{margin: '11px', color: 'red', textAlign: 'left'}}> Your answer was incorrect </div>
                                        </div>
                                        <div>
                                                <label style={{fontSize: 14, fontWeight: 600, color: '#0F1B33', padding: '10px',margin: 0, marginLeft: '10px', marginTop: '20px'}} > 
                                                    Q2. Kamran works for a bank. he has been a long-term supporter of proscribed individual, 'Mehreen', and donates money to her madrassah, where terrorist attacks may be planned. What dffence(s) have been committed by kamran? 
                                                </label>
                                                <div style={{display: 'flex'}}>
                                                    <Avatar style={{backgroundColor: '#F2F2F2', width: 20, height: 20, fontSize: '12px', margin: '10px', color: '#979797'}}>A</Avatar>
                                                    <div className="h3txt" style={{margin: '11px'}}> No offence has been committed </div>
                                                </div>
                                                <div style={{display: 'flex'}}>
                                                    <Avatar style={{backgroundColor: '#F2F2F2', width: 20, height: 20, fontSize: '12px', margin: '10px', color: '#979797'}}>B</Avatar>
                                                    <div className="h3txt" style={{margin: '11px'}}> Terrorism financing and money laundering </div>
                                                </div>
                                                <div style={{display: 'flex'}}>
                                                    <Avatar style={{backgroundColor: '#F2F2F2', width: 20, height: 20, fontSize: '12px', margin: '10px', color: '#979797'}}>C</Avatar>
                                                    <div className="h3txt" style={{margin: '11px'}}> Money laundering </div>
                                                </div>
                                                <div style={{display: 'flex'}}>
                                                    <Avatar style={{backgroundColor: '#00B187', width: 20, height: 20, fontSize: '12px', margin: '10px', color: '#eee'}}>D</Avatar>
                                                    <div className="h3txt" style={{margin: '11px'}}> Terrorism Financing </div>
                                                </div>
                                        </div>
                                        <div>
                                                <label style={{fontSize: 14, fontWeight: 600, color: '#0F1B33', padding: '10px',margin: 0, marginLeft: '10px', marginTop: '20px'}} > 
                                                    Q3. What are the steps in which money laundering take place?
                                                </label>
                                                <div style={{display: 'flex'}}>
                                                    <div style={{width: 'auto'}}>
                                                        <div className="h3txtb"> Your sequence </div>
                                                        <div style={{display: 'flex'}}>
                                                            <Avatar style={{backgroundColor: '#F2F2F2', width: 20, height: 20, fontSize: '12px', margin: '10px', color: '#979797'}}>A</Avatar>
                                                            <div className="h3txt" style={{margin: '11px'}}> Placement </div>
                                                        </div>
                                                        <div style={{display: 'flex'}}>
                                                            <Avatar style={{backgroundColor: '#F2F2F2', width: 20, height: 20, fontSize: '12px', margin: '10px', color: '#979797'}}>B</Avatar>
                                                            <div className="h3txt" style={{margin: '11px'}}> Integration </div>
                                                        </div>
                                                        <div style={{display: 'flex'}}>
                                                            <Avatar style={{backgroundColor: '#F2F2F2', width: 20, height: 20, fontSize: '12px', margin: '10px', color: '#979797'}}>C</Avatar>
                                                            <div className="h3txt" style={{margin: '11px'}}> Layering </div>
                                                        </div>
                                                        <div style={{display: 'flex'}}>
                                                            <Avatar style={{backgroundColor: '#F2F2F2', width: 20, height: 20, fontSize: '12px', margin: '10px', color: '#979797'}}>D</Avatar>
                                                            <div className="h3txt" style={{margin: '11px'}}> Conclusion </div>
                                                        </div>
                                                    </div>
                                                    <div style={{width: 'auto'}}>
                                                        <div className="h3txtb"> Correct sequence </div>
                                                        <div style={{display: 'flex'}}>
                                                            <Avatar style={{backgroundColor: '#00B187', width: 20, height: 20, fontSize: '12px', margin: '10px', color: '#eee'}}>A</Avatar>
                                                            <div className="h3txt" style={{margin: '11px'}}> Placement </div>
                                                        </div>
                                                        <div style={{display: 'flex'}}>
                                                            <Avatar style={{backgroundColor: '#00B187', width: 20, height: 20, fontSize: '12px', margin: '10px', color: '#eee'}}>B</Avatar>
                                                            <div className="h3txt" style={{margin: '11px'}}> Layering </div>
                                                        </div>
                                                        <div style={{display: 'flex'}}>
                                                            <Avatar style={{backgroundColor: '#00B187', width: 20, height: 20, fontSize: '12px', margin: '10px', color: '#eee'}}>C</Avatar>
                                                            <div className="h3txt" style={{margin: '11px'}}> Integration </div>
                                                        </div>
                                                        <div style={{display: 'flex'}}>
                                                            <Avatar style={{backgroundColor: '#00B187', width: 20, height: 20, fontSize: '12px', margin: '10px', color: '#eee'}}>D</Avatar>
                                                            <div className="h3txt" style={{margin: '11px'}}> Conclusion </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="h3txt" style={{margin: '11px', color: 'red', textAlign: 'left'}}> Your answer was incorrect </div>                                                
                                        </div>
                                        <div>
                                                <label style={{fontSize: 14, fontWeight: 600, color: '#0F1B33', padding: '10px',margin: 0, marginLeft: '10px', marginTop: '20px'}} > 
                                                    Q4. What are the two types fo assessment methodologies adopted by the FATF for determining with FATF recommendations?
                                                </label>
                                                <div style={{display: 'flex'}}>
                                                    <div style={{width: 'auto'}}>
                                                        <div className="h3txtb"> Your selection </div>
                                                        <div style={{display: 'flex'}}>
                                                            <Avatar style={{backgroundColor: '#F2F2F2', width: 20, height: 20, fontSize: '12px', margin: '10px', color: '#979797'}}>A</Avatar>
                                                            <div className="h3txt" style={{margin: '11px'}}> Technical Compliance </div>
                                                        </div>
                                                        <div style={{display: 'flex'}}>
                                                            <Avatar style={{backgroundColor: '#F2F2F2', width: 20, height: 20, fontSize: '12px', margin: '10px', color: '#979797'}}>B</Avatar>
                                                            <div className="h3txt" style={{margin: '11px'}}> Efficiency Standards </div>
                                                        </div>                                                       
                                                    </div>
                                                    <div style={{width: 'auto'}}>
                                                        <div className="h3txtb"> Correct selection </div>
                                                        <div style={{display: 'flex'}}>
                                                            <Avatar style={{backgroundColor: '#00B187', width: 20, height: 20, fontSize: '12px', margin: '10px', color: '#eee'}}>A</Avatar>
                                                            <div className="h3txt" style={{margin: '11px'}}> Technical Compliance </div>
                                                        </div>
                                                        <div style={{display: 'flex'}}>
                                                            <Avatar style={{backgroundColor: '#00B187', width: 20, height: 20, fontSize: '12px', margin: '10px', color: '#eee'}}>B</Avatar>
                                                            <div className="h3txt" style={{margin: '11px'}}> Efficiency Standards </div>
                                                        </div>                                                       
                                                    </div>
                                                </div>
                                                <div className="h3txt" style={{margin: '11px', color: 'red', textAlign: 'left'}}> Your answer was incorrect </div>                                                
                                        </div>
                                        
                                    </div>
                                </ExpansionPanelDetails>
                               
                            </ExpansionPanel>                    
                        </Paper>
                        <Paper style={{marginBottom: 20, backgroundColor: '#FF475B'}}>
                            <label style={{fontSize: 16, fontWeight: 600, color: '#fff', padding: '12px',margin: 0, marginLeft: '30px'}}> Aggregate Scores </label>
                            <div className="tableWrapper">
                                <div className="row" style={{ margin: 'auto', marginBottom: '10px'}}>
                                    <div className="col-lg-2 right" style={{padding: 0, fontSize: '12px', textAlign: 'right', color: '#fff'}}>Investigation</div>
                                    <div className="col-lg-9" style={{padding: 5}}>                                                
                                        <ProgressBar variant="color9" now={50} label={`${60}%`} srOnly style={{borderRadius: '5px', height: '8px', backgroundColor: 'rgba(255, 255, 255, 0.4)'}} />
                                    </div>
                                    <div className="col-lg-1" style={{padding: 0, fontSize: '12px', color: '#fff'}}>50/100</div>
                                </div>
                                <div className="row" style={{ margin: 'auto', marginBottom: '10px'}}>
                                    <div className="col-lg-2 right" style={{padding: 0, fontSize: '12px', textAlign: 'right', color: '#fff'}}>Trial</div>
                                    <div className="col-lg-9" style={{padding: 5}}>
                                        <ProgressBar variant="color9" now={90} label={`${60}%`} srOnly style={{borderRadius: '5px', height: '8px', backgroundColor: 'rgba(255, 255, 255, 0.4)'}} />
                                    </div>
                                    <div className="col-lg-1" style={{padding: 0, fontSize: '12px', color: '#fff'}}>90/100</div>
                                </div>
                                <div className="row" style={{ margin: 'auto', marginBottom: '10px'}}>
                                    <div className="col-lg-2 right" style={{padding: 0, fontSize: '12px', textAlign: 'right', color: '#fff'}}>knowledge</div>
                                    <div className="col-lg-9" style={{padding: 5}}>
                                        <ProgressBar variant="color9" now={70} label={`${60}%`} srOnly style={{borderRadius: '5px', height: '8px', backgroundColor: 'rgba(255, 255, 255, 0.4)'}} />
                                    </div>
                                    <div className="col-lg-1" style={{padding: 0, fontSize: '12px', color: '#fff'}}>70/100</div>
                                </div>
                            </div>
                            <div style={{height: 25}} />                                                
                        </Paper>
                        
                    </div>
                </div>

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
                                </div>
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
                    open={this.state.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                    fullWidth={true}
                    //maxWidth="xl"
                >
                    <DialogTitle id="alert-dialog-slide-title" className="deltitle" style={{margin: 'auto', padding: '25px 100px 10px'}}>
                        Create a new tag
                    </DialogTitle>
                    <DialogContent>
                        <Form style={{width: '560px'}}>
                            <Form.Group controlId="aformGridFullName" className="dialogAdd" >
                                <Form.Control placeholder="Enter tag" value={this.state.fullname} className="inputtxtD" onChange={(event) => this.setState({fullname: event.target.value})} />
                                <div onClick={this.circleCO}>
                                    {this.state.selectColor}                                    
                                </div>
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
                            </Form.Group>
                        </Form>
                    </DialogContent>
                    <DialogActions style={{margin: 'auto', padding: '0px 30px 30px'}}>
                        <Button onClick={this.handleCreate} style={{borderRadius: '10px', color: '#fff', backgroundColor: '#FF475B', borderWidth: '0px', float: 'right'}}>
                            Create Tag
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


ReportsResultView = connect(mapStateToProps, mapDispatchToProps)(ReportsResultView)
export default ReportsResultView;