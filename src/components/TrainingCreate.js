import React, {Component } from 'react';
import {
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
} from '@material-ui/core';

import {
    Form,
} from 'react-bootstrap';

import {sortableContainer, sortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

import { connect } from 'react-redux'
import { addClose } from '../actions';
import { colorPopOpen } from '../actions';

import { Link } from 'react-router-dom';

import Data from '../common/dataOrg';
import StyledPopper from '../common/styledPopper';

import TrainingEdit from './TrainingEdit';

import '../assets/css/bodypanel.css';
import '../assets/css/Tranining.css';

import c1 from '../assets/images/c1.png';
import c2 from '../assets/images/c2.png';
import c3 from '../assets/images/c3.png';
import { retry } from '@redux-saga/core/effects';

// class SortableItem extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             dotopen: false,
//         }
//     }

//     dotOpen = event => {
//         if (this.state.dotopen)
//             this.setState({
//                 anchorElDot: null,
//                 dotopen: false
//             })
//         else
//             this.setState({
//                 anchorElDot: event.currentTarget,
//                 dotopen: true
//             })
//     }

//     render() {
//         return(
//             <div className="sessionTag">
//                 <div style={{display: 'flex', alignSelf: 'center', marginLeft: '20px'}}>
//                     <div >
//                         <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path fillRule="evenodd" clipRule="evenodd" d="M20 2V0H0V2H20ZM20 6V8H0V6H20ZM20 12V14H0V12H20Z" fill="#979797"/>
//                         </svg>
//                     </div>
//                     <label style={{display: 'flex', alignSelf: 'center', marginLeft: '20px'}}>
//                         {this.props.value}
//                     </label>
//                 </div>
//                 <div style={{display: 'flex', alignSelf: 'center', marginLeft: '20px'}}>
//                     <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '5px', borderRadius: '15px', color: '#FFA800', border: '1px solid #FFA800', backgroundColor: '#FFF6E5', alignSelf: 'left'}}>
//                         Investigation
//                     </Button>
//                     <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '5px', borderRadius: '15px', color: '#009FFA', border: '1px solid #009FFA', backgroundColor: '#F2FAFF', alignSelf: 'right'}}>
//                         Knowledge 
//                     </Button>
//                     <div onClick={this.dotOpen} style={{float: 'right', margin: '5px', marginLeft: '20px', marginRight: '15px', cursor: 'pointer'}}>
//                         <svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path fillRule="evenodd" clipRule="evenodd" d="M0.542969 2C0.542969 3.10457 1.54795 4 2.78765 4C4.02735 4 5.03233 3.10457 5.03233 2C5.03233 0.89543 4.02735 0 2.78765 0C1.54795 0 0.542969 0.89543 0.542969 2ZM2.78765 11C1.54795 11 0.542969 10.1046 0.542969 9C0.542969 7.89543 1.54795 7 2.78765 7C4.02735 7 5.03233 7.89543 5.03233 9C5.03233 10.1046 4.02735 11 2.78765 11ZM2.78765 18C1.54795 18 0.542969 17.1046 0.542969 16C0.542969 14.8954 1.54795 14 2.78765 14C4.02735 14 5.03233 14.8954 5.03233 16C5.03233 17.1046 4.02735 18 2.78765 18Z" fill="#CFCFCF"/>
//                         </svg>
//                     </div>
//                     {
//                         this.state.anchorElDot &&
//                         <StyledPopper
//                         placement="bottom"
//                         open={this.state.dotopen}
//                         anchorEl={this.state.anchorElDot}
//                         modifiers={{
//                             flip: {
//                             enabled: true,
//                             },
//                             arrow: {
//                             enabled: true,
//                             element: this.state.arrowRef,
//                             },
//                             preventOverflow: {
//                             enabled: "true",
//                             boundariesElement: 'scrollParent'
//                             },
//                         }}
//                         >
//                         {
//                             true &&
//                             <span className="arrow" ref={this.handleArrowRef} />
//                         }
//                         <div className={"popper-content-3dot"}>
//                             <Link onClick={this.editGo}> Edit</Link>
//                             <Link to="#" className="poplinkcli" > Delete </Link>
//                         </div>
//                         </StyledPopper>
//                     }
//                 </div>                                    
//             </div>
//         );
//     }
// }


const SortableItem = sortableElement(({value}) =>{
    
    return <li style={{color: 'red'}}>{value}</li>
    } 
    // <div className="sessionTag">
    //     <div style={{display: 'flex', alignSelf: 'center', marginLeft: '20px'}}>
    //         <div >
    //             <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                 <path fillRule="evenodd" clipRule="evenodd" d="M20 2V0H0V2H20ZM20 6V8H0V6H20ZM20 12V14H0V12H20Z" fill="#979797"/>
    //             </svg>
    //         </div>
    //         <label style={{display: 'flex', alignSelf: 'center', marginLeft: '20px'}}>
    //             {value}
    //         </label>
    //     </div>
    //     <div style={{display: 'flex', alignSelf: 'center', marginLeft: '20px'}}>
    //         <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '5px', borderRadius: '15px', color: '#FFA800', border: '1px solid #FFA800', backgroundColor: '#FFF6E5', alignSelf: 'left'}}>
    //             Investigation
    //         </Button>
    //         <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '5px', borderRadius: '15px', color: '#009FFA', border: '1px solid #009FFA', backgroundColor: '#F2FAFF', alignSelf: 'right'}}>
    //             Knowledge 
    //         </Button>
    //         <div onClick={this.dotOpen} style={{float: 'right', margin: '5px', marginLeft: '20px', marginRight: '15px', cursor: 'pointer'}}>
    //             <svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                 <path fillRule="evenodd" clipRule="evenodd" d="M0.542969 2C0.542969 3.10457 1.54795 4 2.78765 4C4.02735 4 5.03233 3.10457 5.03233 2C5.03233 0.89543 4.02735 0 2.78765 0C1.54795 0 0.542969 0.89543 0.542969 2ZM2.78765 11C1.54795 11 0.542969 10.1046 0.542969 9C0.542969 7.89543 1.54795 7 2.78765 7C4.02735 7 5.03233 7.89543 5.03233 9C5.03233 10.1046 4.02735 11 2.78765 11ZM2.78765 18C1.54795 18 0.542969 17.1046 0.542969 16C0.542969 14.8954 1.54795 14 2.78765 14C4.02735 14 5.03233 14.8954 5.03233 16C5.03233 17.1046 4.02735 18 2.78765 18Z" fill="#CFCFCF"/>
    //             </svg>
    //         </div>
    //         {
    //             this.state.anchorElDot &&
    //             <StyledPopper
    //             placement="bottom"
    //             open={this.state.dotopen}
    //             anchorEl={this.state.anchorElDot}
    //             modifiers={{
    //                 flip: {
    //                 enabled: true,
    //                 },
    //                 arrow: {
    //                 enabled: true,
    //                 element: this.state.arrowRef,
    //                 },
    //                 preventOverflow: {
    //                 enabled: "true",
    //                 boundariesElement: 'scrollParent'
    //                 },
    //             }}
    //             >
    //             {
    //                 true &&
    //                 <span className="arrow" ref={this.handleArrowRef} />
    //             }
    //             <div className={"popper-content-3dot"}>
    //                 <Link onClick={this.editGo}> Edit</Link>
    //                 <Link to="#" className="poplinkcli" > Delete </Link>
    //             </div>
    //             </StyledPopper>
    //         }
    //     </div>                                    
    // </div>                                
);

const SortableContainer = sortableContainer(({children}) => {
  return <ul style={{padding: 0}}>{children}</ul>;
});



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

class TrainingCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rightpanal: 0,
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
            items: ['Introduction', 'Logic', 'Critical', 'Thinking'],
        }
    }

    componentDidMount() {
        
    }
    handleClick = () => {
        
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
    editGo = () => {
        this.setState({rightpanal: 1})
        this.dotOpen();
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
    }

    handleArrowRef = node => {
        this.setState({
            arrowRef: node,
        });
    }

    handleClickEdit(keyvalue) {
        this.setState({
            editopen: true,
            selectdata: keyvalue,
        });
    }

    handleClickDelete(keyvalue) {
        this.setState({
            delopen: true,
            selectdata: keyvalue,
        });
    }
    
    handleClose = () => {
        this.setState({
            open: false,
            selectdata: '',
            fullname: '',
            email: '',
            password: '',
        });
    }

    createNew = () => {
        this.setState({rightpanal: 2})
    }

    handleFormat = (event, newFormats) => {
        this.setState({formats: newFormats});
        console.log(newFormats)
    };

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({items}) => ({
          items: arrayMove(items, oldIndex, newIndex),
        }));
      };
    render() {

        return (
            <div className="Rcontainer">
                <Grid className="root" container justify="center" >
                {
                    (this.state.rightpanal === 0 || this.state.rightpanal === 2) && (
                    <Grid item xs={12} sm={6} xd={3} lg={3} container justify="center" >
                        <Card className="train1Card">
                            <CardContent >
                                <div style={{float: 'right', marginRight: '10px'}}>
                                    <svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M0.542969 2C0.542969 3.10457 1.54795 4 2.78765 4C4.02735 4 5.03233 3.10457 5.03233 2C5.03233 0.89543 4.02735 0 2.78765 0C1.54795 0 0.542969 0.89543 0.542969 2ZM2.78765 11C1.54795 11 0.542969 10.1046 0.542969 9C0.542969 7.89543 1.54795 7 2.78765 7C4.02735 7 5.03233 7.89543 5.03233 9C5.03233 10.1046 4.02735 11 2.78765 11ZM2.78765 18C1.54795 18 0.542969 17.1046 0.542969 16C0.542969 14.8954 1.54795 14 2.78765 14C4.02735 14 5.03233 14.8954 5.03233 16C5.03233 17.1046 4.02735 18 2.78765 18Z" fill="#CFCFCF"/>
                                    </svg>
                                </div>                                       
                                <br />
                                <Avatar className="trainAvatar" style={{backgroundColor: Data.circleColor[3].svgColor, width: 80, height: 80, fontSize: '40px'}}>CT</Avatar>
                                <div className="h2txt">Critical Thinking</div>
                                <div style={{margin: 'auto', padding: '10px', display: 'flex'}}>
                                    <Button onClick={this.handleClick} style={{fontSize: '10px', margin: 'auto', borderRadius: '15px', color: '#FFA800', border: '1px solid #FFA800', backgroundColor: '#FFF6E5', alignSelf: 'left', display: 'table-cell', verticalAlign: 'middle'}}>
                                        Investigation
                                    </Button>
                                    <Button onClick={this.handleClickButton} style={{fontSize: '10px', margin: 'auto', borderRadius: '15px', color: '#819CBC', border: '2px dotted #C1D5F4', backgroundColor: '#fff', alignSelf: 'right', display: 'table-cell', verticalAlign: 'middle'}}>
                                        + Add Tag
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
                                <Button onClick={this.handleClick} style={{fontSize: '10px', margin: 'auto', borderRadius: '10px', color: '#009FFA', border: '1px solid #fff', backgroundColor: '#F2FAFF', display: 'table-cell', verticalAlign: 'middle'}}>
                                    Add Candidates
                                </Button>
                            </CardContent>
                        </Card>
                    </Grid>
                    )
                }
                {
                    this.state.rightpanal === 0 && (
                    <Grid item xs={12} sm={6} xd={9} lg={9} container justify="center" >
                            <Card className="trainCard">
                                <CardContent style = {{alignItems: 'center'}}>
                                    <div style={{marginTop: '10%'}}>
                                        <Avatar onClick={() => this.setState({rightpanal: 1})} className="trainAvatar" style={{backgroundColor: '#F2F2F2', width: 65, height: 65, }}>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M11 9H20V11H11V20H9V11H0V9H9V0H11V9Z" fill="#979797"/>
                                            </svg>
                                        </Avatar> 
                                    </div>                                                               
                                    <div className="h3txtfixed" >
                                        You haven't added any sessions yet. Click here to add your first session.
                                    </div>                                                                 
                                </CardContent>
                            </Card>                    
                    </Grid>
                    )
                }
                {
                    this.state.rightpanal === 1 && (
                        <TrainingEdit history={this.props.history} createNew={this.createNew} />
                    )
                }
                {
                    this.state.rightpanal === 2 && (
                    <Grid item xs={12} sm={9} xd={9} lg={9} container justify="center">
                        <Card className="autoCard" style={{backgroundColor: 'transparent', boxShadow: 'none'}}>
                            <CardContent style={{padding: 0}}>
                                {/* <div >
                                    <SortableContainer onSortEnd={this.onSortEnd}>
                                        {this.state.items.map((value, index) => (
                                        <SortableItem key={`item-${value}`} index={index} value={value} />
                                        ))}
                                    </SortableContainer>
                                </div> */}
                                <div className="sessionTag">
                                        <div style={{display: 'flex', alignSelf: 'center', marginLeft: '20px'}}>
                                            <div >
                                                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M20 2V0H0V2H20ZM20 6V8H0V6H20ZM20 12V14H0V12H20Z" fill="#979797"/>
                                                </svg>
                                            </div>
                                            <label style={{display: 'flex', alignSelf: 'center', marginLeft: '20px'}}>
                                                Introduction
                                            </label>
                                        </div>
                                        <div style={{display: 'flex', alignSelf: 'center', marginLeft: '20px'}}>
                                            <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '5px', borderRadius: '15px', color: '#FFA800', border: '1px solid #FFA800', backgroundColor: '#FFF6E5', alignSelf: 'left'}}>
                                                Investigation
                                            </Button>
                                            <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '5px', borderRadius: '15px', color: '#009FFA', border: '1px solid #009FFA', backgroundColor: '#F2FAFF', alignSelf: 'right'}}>
                                                Knowledge 
                                            </Button>
                                            <div onClick={this.dotOpen} style={{float: 'right', margin: '5px', marginLeft: '20px', marginRight: '15px', cursor: 'pointer'}}>
                                                <svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.542969 2C0.542969 3.10457 1.54795 4 2.78765 4C4.02735 4 5.03233 3.10457 5.03233 2C5.03233 0.89543 4.02735 0 2.78765 0C1.54795 0 0.542969 0.89543 0.542969 2ZM2.78765 11C1.54795 11 0.542969 10.1046 0.542969 9C0.542969 7.89543 1.54795 7 2.78765 7C4.02735 7 5.03233 7.89543 5.03233 9C5.03233 10.1046 4.02735 11 2.78765 11ZM2.78765 18C1.54795 18 0.542969 17.1046 0.542969 16C0.542969 14.8954 1.54795 14 2.78765 14C4.02735 14 5.03233 14.8954 5.03233 16C5.03233 17.1046 4.02735 18 2.78765 18Z" fill="#CFCFCF"/>
                                                </svg>
                                            </div>
                                            {
                                                this.state.anchorElDot &&
                                                <StyledPopper
                                                placement="bottom"
                                                open={this.state.dotopen}
                                                anchorEl={this.state.anchorElDot}
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
                                                    <Link onClick={this.editGo}> Edit</Link>
                                                    <Link to="#" className="poplinkcli" > Delete </Link>
                                                </div>
                                                </StyledPopper>
                                            }
                                        </div>                                    
                                    </div>
                                <div className="sessionTag">
                                    <div style={{display: 'flex', alignSelf: 'center', marginLeft: '20px'}}>
                                        <div >
                                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M20 2V0H0V2H20ZM20 6V8H0V6H20ZM20 12V14H0V12H20Z" fill="#979797"/>
                                            </svg>
                                        </div>
                                        <label style={{display: 'flex', alignSelf: 'center', marginLeft: '20px'}}>
                                            Logic
                                        </label>
                                    </div>
                                    <div style={{display: 'flex', alignSelf: 'center', marginLeft: '20px'}}>
                                        <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '5px', borderRadius: '15px', color: '#FFA800', border: '1px solid #FFA800', backgroundColor: '#FFF6E5', alignSelf: 'left'}}>
                                            Investigation
                                        </Button>
                                        <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '5px', borderRadius: '15px', color: '#009FFA', border: '1px solid #009FFA', backgroundColor: '#F2FAFF', alignSelf: 'right'}}>
                                            Knowledge 
                                        </Button>
                                        <div onClick={this.dotOpen} style={{float: 'right', margin: '5px', marginLeft: '20px', marginRight: '15px', cursor: 'pointer'}}>
                                            <svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0.542969 2C0.542969 3.10457 1.54795 4 2.78765 4C4.02735 4 5.03233 3.10457 5.03233 2C5.03233 0.89543 4.02735 0 2.78765 0C1.54795 0 0.542969 0.89543 0.542969 2ZM2.78765 11C1.54795 11 0.542969 10.1046 0.542969 9C0.542969 7.89543 1.54795 7 2.78765 7C4.02735 7 5.03233 7.89543 5.03233 9C5.03233 10.1046 4.02735 11 2.78765 11ZM2.78765 18C1.54795 18 0.542969 17.1046 0.542969 16C0.542969 14.8954 1.54795 14 2.78765 14C4.02735 14 5.03233 14.8954 5.03233 16C5.03233 17.1046 4.02735 18 2.78765 18Z" fill="#CFCFCF"/>
                                            </svg>
                                        </div>
                                        {
                                            this.state.anchorElDot &&
                                            <StyledPopper
                                            placement="bottom"
                                            open={this.state.dotopen}
                                            anchorEl={this.state.anchorElDot}
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
                                                <Link onClick={this.editGo}> Edit</Link>
                                                <Link to="#" className="poplinkcli" > Delete </Link>
                                            </div>
                                            </StyledPopper>
                                        }
                                    </div>                                    
                                </div>
                                <div className="sessionTag">
                                        <div style={{display: 'flex', alignSelf: 'center', marginLeft: '20px'}}>
                                            <div >
                                                <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M20 2V0H0V2H20ZM20 6V8H0V6H20ZM20 12V14H0V12H20Z" fill="#979797"/>
                                                </svg>
                                            </div>
                                            <label style={{display: 'flex', alignSelf: 'center', marginLeft: '20px'}}>
                                                Critical Thinking
                                            </label>
                                        </div>
                                        <div style={{display: 'flex', alignSelf: 'center', marginLeft: '20px'}}>
                                            <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '5px', borderRadius: '15px', color: '#FFA800', border: '1px solid #FFA800', backgroundColor: '#FFF6E5', alignSelf: 'left'}}>
                                                Investigation
                                            </Button>
                                            <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '5px', borderRadius: '15px', color: '#009FFA', border: '1px solid #009FFA', backgroundColor: '#F2FAFF', alignSelf: 'right'}}>
                                                Knowledge 
                                            </Button>
                                            <div onClick={this.dotOpen} style={{float: 'right', margin: '5px', marginLeft: '20px', marginRight: '15px', cursor: 'pointer'}}>
                                                <svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M0.542969 2C0.542969 3.10457 1.54795 4 2.78765 4C4.02735 4 5.03233 3.10457 5.03233 2C5.03233 0.89543 4.02735 0 2.78765 0C1.54795 0 0.542969 0.89543 0.542969 2ZM2.78765 11C1.54795 11 0.542969 10.1046 0.542969 9C0.542969 7.89543 1.54795 7 2.78765 7C4.02735 7 5.03233 7.89543 5.03233 9C5.03233 10.1046 4.02735 11 2.78765 11ZM2.78765 18C1.54795 18 0.542969 17.1046 0.542969 16C0.542969 14.8954 1.54795 14 2.78765 14C4.02735 14 5.03233 14.8954 5.03233 16C5.03233 17.1046 4.02735 18 2.78765 18Z" fill="#CFCFCF"/>
                                                </svg>
                                            </div>
                                            {
                                                this.state.anchorElDot &&
                                                <StyledPopper
                                                placement="bottom"
                                                open={this.state.dotopen}
                                                anchorEl={this.state.anchorElDot}
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
                                                    <Link onClick={this.editGo}> Edit</Link>
                                                    <Link to="#" className="poplinkcli" > Delete </Link>
                                                </div>
                                                </StyledPopper>
                                            }
                                        </div>                                    
                                    </div>
                                <div className="sessionTag">
                                    <div style={{display: 'flex', alignSelf: 'center', marginLeft: '20px'}}>
                                        <div >
                                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M20 2V0H0V2H20ZM20 6V8H0V6H20ZM20 12V14H0V12H20Z" fill="#979797"/>
                                            </svg>
                                        </div>
                                        <label style={{display: 'flex', alignSelf: 'center', marginLeft: '20px'}}>
                                            Error
                                        </label>
                                    </div>
                                    <div style={{display: 'flex', alignSelf: 'center', marginLeft: '20px'}}>
                                        <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '5px', borderRadius: '15px', color: '#FFA800', border: '1px solid #FFA800', backgroundColor: '#FFF6E5', alignSelf: 'left'}}>
                                            Investigation
                                        </Button>
                                        <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '5px', borderRadius: '15px', color: '#009FFA', border: '1px solid #009FFA', backgroundColor: '#F2FAFF', alignSelf: 'right'}}>
                                            Knowledge 
                                        </Button>
                                        <div onClick={this.dotOpen} style={{float: 'right', margin: '5px', marginLeft: '20px', marginRight: '15px', cursor: 'pointer'}}>
                                            <svg width="6" height="18" viewBox="0 0 6 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M0.542969 2C0.542969 3.10457 1.54795 4 2.78765 4C4.02735 4 5.03233 3.10457 5.03233 2C5.03233 0.89543 4.02735 0 2.78765 0C1.54795 0 0.542969 0.89543 0.542969 2ZM2.78765 11C1.54795 11 0.542969 10.1046 0.542969 9C0.542969 7.89543 1.54795 7 2.78765 7C4.02735 7 5.03233 7.89543 5.03233 9C5.03233 10.1046 4.02735 11 2.78765 11ZM2.78765 18C1.54795 18 0.542969 17.1046 0.542969 16C0.542969 14.8954 1.54795 14 2.78765 14C4.02735 14 5.03233 14.8954 5.03233 16C5.03233 17.1046 4.02735 18 2.78765 18Z" fill="#CFCFCF"/>
                                            </svg>
                                        </div>
                                        {
                                            this.state.anchorElDot &&
                                            <StyledPopper
                                            placement="bottom"
                                            open={this.state.dotopen}
                                            anchorEl={this.state.anchorElDot}
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
                                                <Link to="#" className="poplinkcli" onClick={this.editGo}> Edit</Link>
                                                <Link to="#" className="poplinkcli" > Delete </Link>
                                            </div>
                                            </StyledPopper>
                                        }
                                    </div>                                    
                                </div>
                                
                                <div className="sessionAdd" onClick={() => this.setState({rightpanal: 1})}>
                                    <div style={{display: 'flex', alignSelf: 'center', marginLeft: '20px'}}>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7.7 6.3H14V7.7H7.7V14H6.3V7.7H0V6.3H6.3V0H7.7V6.3Z" fill="#819CBC"/>
                                        </svg>
                                    </div>                                    
                                    <label style={{display: 'flex', alignSelf: 'center', margin: '0px', marginLeft: '20px', cursor: 'pointer'}}>
                                        Add another session
                                    </label>
                                </div>                             
                            </CardContent>
                        </Card>           
                    </Grid>         
                    )
                }                
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


TrainingCreate = connect(mapStateToProps, mapDispatchToProps)(TrainingCreate)
export default TrainingCreate;