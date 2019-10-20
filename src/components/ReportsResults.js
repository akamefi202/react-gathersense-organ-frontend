import React, {Component } from 'react';
import {
    Paper, 
    Button,
    //DialogContentText,
    Table,
    TableBody,
    TableCell,
    TableHead,
    //TablePagination,
    TableRow,
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
} from '@material-ui/core';

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

const columns = [
  { id: 'candidate', label: 'CANDIDATE', minWidth: 100 },
  { id: 'aggregatescore', label: 'AGGREGATE SCORE', minWidth: 300 },
  {
    id: 'action',
    label: 'ACTIONS',
    minWidth: 100,
    align: 'right',
    format: value => value.toLocaleString(),
  },
];

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

class ReportsResults extends Component {
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

    handleViewResult = () => {
        this.props.history.push('/TrainingsResultView')
    }

    render() {

        return (
            <div className="Rcontainer">
                <Grid className="root" container justify="center" >
                    <Grid item xs={12} sm={3} xd={3} lg={3} container justify="center" >
                        <Card className="train1Cardresult">
                            <CardContent>
                                <div style={{float: 'right', marginRight: '10px'}}>
                                    <svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.542969 2C0.542969 3.10457 1.54795 4 2.78765 4C4.02735 4 5.03233 3.10457 5.03233 2C5.03233 0.89543 4.02735 0 2.78765 0C1.54795 0 0.542969 0.89543 0.542969 2ZM2.78765 11C1.54795 11 0.542969 10.1046 0.542969 9C0.542969 7.89543 1.54795 7 2.78765 7C4.02735 7 5.03233 7.89543 5.03233 9C5.03233 10.1046 4.02735 11 2.78765 11ZM2.78765 18C1.54795 18 0.542969 17.1046 0.542969 16C0.542969 14.8954 1.54795 14 2.78765 14C4.02735 14 5.03233 14.8954 5.03233 16C5.03233 17.1046 4.02735 18 2.78765 18Z" fill="#CFCFCF"/>
                                    </svg>
                                </div>                                       
                                <br />
                                <Avatar className="trainAvatar" style={{backgroundColor: Data.circleColor[3].svgColor, width: 80, height: 80, fontSize: '40px'}}>CT</Avatar>
                                <div className="h2txt">Critical Thinking</div>
                                <div style={{margin: 'auto', padding: '10px', display: 'flex'}}>
                                    <Button className="trainAvatar" onClick={this.handleClick} style={{fontSize: '10px', margin: 'auto', borderRadius: '15px', color: '#FFA800', border: '1px solid #FFA800', backgroundColor: '#FFF6E5', display: 'table-cell', verticalAlign: 'middle'}}>
                                        Investigation
                                    </Button>
                                </div>
                                <div className="h3txtb">Add training description here</div>
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
                                                <label className="trtxtb"> 13 candidates </label>
                                            </Grid>
                                        </Grid>
                                    </Grid>                                            
                                </div>
                                
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={9} xd={9} lg={9} container justify="center" >                        
                        <Paper className="tableroot" style={{margin: 0}}>
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
                                                    <Avatar alt="Remy Sharp" src={c3} style={{width: 30, height: 30, border: '2px solid #fff'}} />
                                                    <label className="trtxt"> John Doe </label>
                                                </div>
                                            </TableCell>
                                            <TableCell >
                                                <div className="divCard">
                                                    <div className="col-lg-10" style={{padding: 5}}>
                                                        <ProgressBar variant="warning" now={45} label={`${45}%`} srOnly style={{borderRadius: '5px', height: '8px'}} />
                                                    </div>
                                                    <div className="col-lg-2" style={{padding: 0, fontSize: '12px', float: 'right'}}>45%</div>
                                                </div>
                                            </TableCell>
                                            <TableCell align="right">
                                                <Button onClick={() => this.props.changeFlag(2)} style={{marginLeft: '15px', borderRadius: '30px', color: '#009FFA', backgroundColor: 'rgba(0, 159, 250, 0.1)', borderWidth: '0px'}}> 
                                                    View Result 
                                                </Button>
                                                
                                            </TableCell>
                                        </TableRow>
                                        <TableRow hover role="checkbox" tabIndex={-1}>
                                            <TableCell >
                                                <div className="divCard">
                                                    <Avatar alt="Remy Sharp" src={c2} style={{width: 30, height: 30, border: '2px solid #fff'}} />
                                                    <label className="trtxt"> John Dawson </label>
                                                </div>
                                            </TableCell>
                                            <TableCell >
                                                <div className="divCard">
                                                    <div className="col-lg-10" style={{padding: 5}}>
                                                        <ProgressBar variant="warning" now={45} label={`${45}%`} srOnly style={{borderRadius: '5px', height: '8px'}} />
                                                    </div>
                                                    <div className="col-lg-2" style={{padding: 0, fontSize: '12px', float: 'right'}}>45%</div>
                                                </div>
                                            </TableCell>
                                            <TableCell align="right">
                                                <Button onClick={() => this.props.changeFlag(2)} style={{marginLeft: '15px', borderRadius: '30px', color: '#009FFA', backgroundColor: 'rgba(0, 159, 250, 0.1)', borderWidth: '0px'}}> 
                                                    View Result 
                                                </Button>
                                                
                                            </TableCell>
                                        </TableRow>
                                        <TableRow hover role="checkbox" tabIndex={-1}>
                                            <TableCell >
                                                <div className="divCard">
                                                    <Avatar alt="Remy Sharp" src={c3} style={{width: 30, height: 30, border: '2px solid #fff'}} />
                                                    <label className="trtxt"> James Doe </label>
                                                </div>
                                            </TableCell>
                                            <TableCell >
                                                <div className="divCard">
                                                    <div className="col-lg-10" style={{padding: 5}}>
                                                        <ProgressBar variant="warning" now={45} label={`${45}%`} srOnly style={{borderRadius: '5px', height: '8px'}} />
                                                    </div>
                                                    <div className="col-lg-2" style={{padding: 0, fontSize: '12px', float: 'right'}}>45%</div>
                                                </div>
                                            </TableCell>
                                            <TableCell align="right">
                                                <Button onClick={() => this.props.changeFlag(2)} style={{marginLeft: '15px', borderRadius: '30px', color: '#009FFA', backgroundColor: 'rgba(0, 159, 250, 0.1)', borderWidth: '0px'}}> 
                                                    View Result 
                                                </Button>
                                                
                                            </TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </div>                    
                        </Paper>
                    </Grid>
                </Grid>

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


ReportsResults = connect(mapStateToProps, mapDispatchToProps)(ReportsResults)
export default ReportsResults;