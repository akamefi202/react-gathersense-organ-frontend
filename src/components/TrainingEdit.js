import React, {Component} from 'react';
import {
    Card, 
    CardContent,
    Avatar,
    Divider,
    Paper,
    TextareaAutosize ,
} from '@material-ui/core';

import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import FormatColorFillIcon from '@material-ui/icons/FormatColorFill';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

import {
    Form,
    Button,
} from 'react-bootstrap';
import { Typeahead } from 'react-bootstrap-typeahead';

import {sortableContainer, sortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

import Data from '../common/dataOrg';

import 'react-bootstrap-typeahead/css/Typeahead.css';

import '../assets/css/Tranining.css';
import '../assets/css/bodypanel.css';

const SortableItem = sortableElement(({value}) => 
    // <li style={{color: 'red'}}>{value}</li>
    <Card className="editcard">
        <CardContent>
            <div className="betweendiv">
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <label style={{paddingLeft: 10, margin: 0, fontSize: 16, fontWeight: 'bold'}}> {value} </label>
                    <label style={{paddingLeft: 10, margin: 0, fontSize: 14}}> What is your favorite color? </label>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <svg style={{margin: 10}} width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M14.4374 0C15.0921 0 15.7197 0.26142 16.1781 0.723423L19.279 3.82432C19.7407 4.286 20.0001 4.91217 20.0001 5.56508C20.0001 6.21799 19.7407 6.84416 19.279 7.30584L7.95751 18.6238C7.25902 19.4295 6.2689 19.9245 5.1346 20.0023H0V19.0023L0.00324765 14.7873C0.0884382 13.7328 0.578667 12.7523 1.3265 12.0934L12.6954 0.724628C13.1564 0.26083 13.7834 0 14.4374 0ZM5.06398 18.0048C5.59821 17.967 6.09549 17.7184 6.49479 17.2616L14.0567 9.69972L10.3023 5.94519L2.6961 13.5496C2.29095 13.9079 2.04031 14.4092 2 14.8678V18.0029L5.06398 18.0048ZM11.7167 4.53115L15.4709 8.2855L17.8648 5.89162C17.9514 5.80502 18.0001 5.68756 18.0001 5.56508C18.0001 5.4426 17.9514 5.32514 17.8648 5.23854L14.7611 2.13486C14.6755 2.04855 14.5589 2 14.4374 2C14.3158 2 14.1992 2.04855 14.1136 2.13486L11.7167 4.53115Z" fill="#FF475B"/>
                    </svg>
                    <svg style={{margin: 10}} width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.30171 0H20.3017C21.4063 0 22.3017 0.89543 22.3017 2V14C22.3017 15.1046 21.4063 16 20.3017 16H7.30171C6.7965 16 6.56859 15.8135 6.10516 15.3177C6.05883 15.2681 6.01163 15.216 5.96363 15.1616C5.77978 14.9533 5.61592 14.7494 5.53349 14.6402L0 8L0.533487 7.35982L5.48348 1.42511C5.58756 1.27697 5.74534 1.0672 5.92873 0.851777C6.00195 0.765768 6.07423 0.685229 6.14572 0.610795C6.53134 0.209291 6.81743 0 7.30171 0ZM7.45179 2.14822C7.31595 2.3078 7.19167 2.47303 7.07009 2.64018L2.60352 8.00007L7.09623 13.3926C7.17883 13.5006 7.31644 13.6717 7.46347 13.8384C7.49933 13.879 7.53381 13.9171 7.56648 13.952C7.58231 13.969 7.59755 13.985 7.61208 14H20.3019V2H7.58468C7.54385 2.0427 7.4991 2.09265 7.45179 2.14822ZM15.5938 4.29297L13.3009 6.58586L11.008 4.29297L9.59375 5.70718L11.8866 8.00008L9.59375 10.293L11.008 11.7072L13.3009 9.41429L15.5938 11.7072L17.008 10.293L14.7151 8.00008L17.008 5.70718L15.5938 4.29297Z" fill="#FF475B"/>
                    </svg>
                    <svg style={{margin: 10}} width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M20 2V0H0V2H20ZM20 6V8H0V6H20ZM20 12V14H0V12H20Z" fill="#979797"/>
                    </svg>
                </div>                                    
            </div>
        </CardContent>
    </Card>
);

const SortableContainer = sortableContainer(({children}) => {
  return <ul style={{padding: 0}}>{children}</ul>;
});

class TrainingEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showflag: 0,
            alignment: 'left',
            formats: 'italic',
            selected: [],
            items: ['Question 1', 'Question 2', 'Question 3', 'Question 4'],
            options: ['Option 1', 'Option 2',],
        }
        this.onShowFlag = this.onShowFlag.bind(this)
    }

    handleFormat = (event, newFormats) => {
        this.setState({formats: newFormats});
        console.log(newFormats)
    };

    handleAlignment = (event, newAlignment) => {
        this.setState({alignment: newAlignment});
    };

    onShowFlag = (event) => {
        this.setState({
            showflag: event.target.value,
        })
        console.log(event.target.value)
        console.log(this.state.selected)
    }

    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState(({items}) => ({
          items: arrayMove(items, oldIndex, newIndex),
        }));
    };
    addOption = () => {
        var options = this.state.options;
        var cnt = options.length + 1;
        var newOtion = 'Option' + cnt;
        options.push(newOtion);
        this.setState({options: options})
    }
  
    render() {
        return (
                <div className="container" style={{width: '80%'}}>
                    <Card className="editcard">
                        <CardContent>
                            <Form>                             
                                <Form.Group controlId="formGridSessionTitle" className="formgroup" >
                                    <Form.Control placeholder="SessionTitle" className="inputtxt" />
                                </Form.Group>
                                <Form.Group controlId="formGridDescription" className="formgroup" >
                                    <Form.Control placeholder="Description" className="inputtxt" />
                                </Form.Group>
                                <Divider style={{margin: 20}}/>                                
                                <div style={Number(this.state.showflag) === 0 ? {display: 'block'} : {display: 'none'}}>
                                    <Form.Row className="formgroupO" style={{paddingLeft: 5, paddingRight: 5}} >
                                        <Form.Group controlId="formGridQuetion" className="formgrouptxt" >
                                            {/* <Form.Label>Address</Form.Label> */}
                                            <Form.Control placeholder="Quetion" className="inputtxt" />
                                        </Form.Group>
                                        <Form.Group controlId="formGridState" className="formgroupch">
                                            <Form.Control as="select" className="inputtxt"
                                                onChange={this.onShowFlag} 
                                            >
                                                <option value={0} defaultChecked>Multiple Choice</option>
                                                <option value={1} >Plain Text, Image, Video</option>
                                                <option value={2}>Sequence</option>
                                                <option value={3}>Selection</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row> 
                                    {/* <Form.Group controlId="formGridEmail" className="formgroup" style={{display: 'flex', backgroundColor: '#F2F2F2', padding: 0, margin: 10, borderRadius: 10}}>
                                        <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '5px', borderRadius: '15px', color: '#009FFA', border: '1px solid #009FFA', backgroundColor: '#F2FAFF', alignSelf: 'right'}}>
                                                Knowledge 
                                        </Button>
                                        <Form.Control type="email" placeholder="Select Tags" className="inputtxt" />
                                    </Form.Group> */}

                                    <Typeahead
                                        {...this.state}
                                        id="basic-example"
                                        multiple={true}
                                        onChange={selected => this.setState({ selected })}
                                        options={Data.country}
                                        placeholder="Select Tags"
                                        className="typeheadset"
                                    />
                                    {this.state.options.map((value, index) => (
                                        <Form.Row className="formgroupO" style={{paddingLeft: 5, paddingRight: 5}} key={index}>
                                            <Form.Group controlId="formGridOption1" className="formgrouptxt" >
                                                <Form.Control placeholder={value} className="inputtxt" />
                                            </Form.Group>
                                            <Form.Group controlId="formGridState" className="formgroupch">
                                                <div >
                                                    <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="16.5" cy="16.5" r="16.5" fill="#F2F2F2"/>
                                                    </svg>
                                                    <label style={{paddingLeft: 10, color: '#979797'}}>Mark as correct option</label>
                                                </div>
                                            </Form.Group>
                                        </Form.Row>
                                    ))}
                                    {/* <Form.Row className="formgroupO" style={{paddingLeft: 5, paddingRight: 5}} >
                                        <Form.Group controlId="formGridOption1" className="formgrouptxt" >
                                            <Form.Control placeholder="Option 1" className="inputtxt" />
                                        </Form.Group>
                                        <Form.Group controlId="formGridState" className="formgroupch">
                                            <div >
                                                <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <circle cx="16.5" cy="16.5" r="16.5" fill="#F2F2F2"/>
                                                </svg>
                                                <label style={{paddingLeft: 10, color: '#979797'}}>Mark as correct option</label>
                                            </div>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row className="formgroupO" style={{paddingLeft: 5, paddingRight: 5}} >
                                        <Form.Group controlId="formGridOption1" className="formgrouptxt" >
                                            <Form.Control placeholder="Option 1" className="inputtxt" />
                                        </Form.Group>
                                        <Form.Group controlId="formGridState" className="formgroupch">
                                            <div style={{display: 'flex'}}>
                                                <Avatar style={{backgroundColor: '#FF475B', width: 33, height: 33 }}>
                                                    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.70711 9.29289L15 0L16.4142 1.41421L5.70711 12.1213L0 6.41421L1.41421 5L5.70711 9.29289Z" fill="white"/>
                                                    </svg>
                                                </Avatar>
                                                <label style={{paddingLeft: 10, color: '#979797'}}>Mark as correct option</label>
                                            </div>
                                        </Form.Group>
                                    </Form.Row> */}
                                    <Form.Group controlId="formGridAnswerfeedback" className="formgroup" >
                                        <Form.Control placeholder="Answer feedback" className="inputtxt" />
                                    </Form.Group>
                                    <div className="betweendiv">
                                        <div onClick={this.addOption} style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM12 7H9V4H7V7H4V9H7V12H9V9H12V7Z" fill="#FF475B"/>
                                            </svg>
                                            <label style={{color: '#FF475B', paddingLeft: 10, margin: 0, cursor: 'pointer'}}> Add another option </label>
                                        </div>
                                        <Button type="submit" className="updatebnt" >
                                            Add Question
                                        </Button>                                    
                                    </div>
                                </div>
                                <div style={Number(this.state.showflag) === 1 ? {display: 'block'} : {display: 'none'}}>
                                    <Form.Row className="formgroupO" style={{paddingLeft: 5, paddingRight: 5}} >
                                        <Form.Group controlId="formGridQuetion" className="formgrouptxt" >
                                            <Form.Control placeholder="Quetion" className="inputtxt" />
                                        </Form.Group>
                                        <Form.Group controlId="formGridState" className="formgroupch">
                                            <Form.Control as="select" className="inputtxt" 
                                                onChange={this.onShowFlag} 
                                            >
                                                <option value={1}>Plain Text, Image, Video</option>
                                                <option value={0}>Multiple Choice</option>
                                                <option value={2}>Sequence</option>
                                                <option value={3}>Selection</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row> 
                                    <Form.Group controlId="formGridEmail" className="formgroup" style={{display: 'flex', backgroundColor: '#F2F2F2', padding: 0, margin: 10, borderRadius: 10}}>
                                        <Card className="toggleCard" style={{backgroundColor: '#f2f2f2'}}>
                                            <CardContent >
                                                <Paper elevation={0} className="togglebntgroup" style={{backgroundColor: '#f2f2f2'}} >
                                                    <ToggleButtonGroup
                                                    size="small"
                                                    value={this.state.alignment}
                                                    exclusive
                                                    onChange={this.handleAlignment}
                                                    aria-label="text alignment"
                                                    >
                                                        <ToggleButton value="left" aria-label="left aligned">
                                                            <FormatAlignLeftIcon />
                                                        </ToggleButton>
                                                        <ToggleButton value="center" aria-label="centered">
                                                            <FormatAlignCenterIcon />
                                                        </ToggleButton>
                                                        <ToggleButton value="right" aria-label="right aligned">
                                                            <FormatAlignRightIcon />
                                                        </ToggleButton>
                                                        <ToggleButton value="justify" aria-label="justified" disabled>
                                                            <FormatAlignJustifyIcon />
                                                        </ToggleButton>
                                                    </ToggleButtonGroup>
                                                    <Divider orientation="vertical" />
                                                    <ToggleButtonGroup
                                                    size="small"
                                                    value={this.state.formats}
                                                    onChange={this.handleFormat}
                                                    arial-label="text formatting"
                                                    >
                                                        <ToggleButton value="bold" aria-label="bold">
                                                            <FormatBoldIcon />
                                                        </ToggleButton>
                                                        <ToggleButton value="italic" aria-label="italic">
                                                            <FormatItalicIcon />
                                                        </ToggleButton>
                                                        <ToggleButton value="underlined" aria-label="underlined">
                                                            <FormatUnderlinedIcon />
                                                        </ToggleButton>
                                                        <ToggleButton value="color" aria-label="color" disabled>
                                                            <FormatColorFillIcon />
                                                            <ArrowDropDownIcon />
                                                        </ToggleButton>
                                                    </ToggleButtonGroup>
                                                </Paper>
                                                <Divider style={{margin:0}}/>
                                            </CardContent>
                                            <TextareaAutosize
                                                rowsMax={4}
                                                aria-label="maximum height"
                                                // placeholder="Maximum 4 rows"
                                                // defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                                //     ut labore et dolore magna aliqua."
                                                style={{height: '100px'}}
                                                className="toggletxt"
                                            />
                                        </Card>
                                    </Form.Group>
                                    <Form.Row className="formgroupO" style={{paddingLeft: 5, paddingRight: 5}} >
                                        <Form.Group controlId="formGridOption1" className="formgrouphalf" >
                                            <Form.Control placeholder="Upload Image (Optional)" className="inputtxt" />
                                        </Form.Group>
                                        <Form.Group controlId="formGridOption1" className="formgrouphalf" >
                                            <Form.Control placeholder="Embed YouTube Video (Optional)" className="inputtxt" />
                                        </Form.Group>
                                    </Form.Row>
                                    <div className="betweendiv">
                                        <div onClick={this.addOption} style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM12 7H9V4H7V7H4V9H7V12H9V9H12V7Z" fill="#FF475B"/>
                                            </svg>
                                            <label style={{color: '#FF475B', paddingLeft: 10, margin: 0, cursor: 'pointer'}}> Add another option </label>
                                        </div>
                                        <Button type="submit" className="updatebnt" >
                                            Add Question
                                        </Button>                                    
                                    </div> 
                                </div>                                                 
                                <div style={Number(this.state.showflag) === 2 ? {display: 'block'} : {display: 'none'}}> 
                                    <Form.Row className="formgroupO" style={{paddingLeft: 5, paddingRight: 5}} >
                                        <Form.Group controlId="formGridQuetion" className="formgrouptxt" >
                                            {/* <Form.Label>Address</Form.Label> */}
                                            <Form.Control placeholder="Quetion" className="inputtxt" />
                                        </Form.Group>
                                        <Form.Group controlId="formGridState" className="formgroupch">
                                            <Form.Control as="select" className="inputtxt"
                                                onChange={this.onShowFlag} 
                                            >
                                                <option value={2} >Sequence</option>
                                                <option value={0} >Multiple Choice</option>
                                                <option value={1} >Plain Text, Image, Video</option>
                                                <option value={3}>Selection</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row> 
                                    {/* <Form.Group controlId="formGridEmail" className="formgroup" style={{display: 'flex', backgroundColor: '#F2F2F2', padding: 0, margin: 10, borderRadius: 10}}>
                                        <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '5px', borderRadius: '15px', color: '#009FFA', border: '1px solid #009FFA', backgroundColor: '#F2FAFF', alignSelf: 'right'}}>
                                                Knowledge 
                                        </Button>
                                        <Form.Control type="email" placeholder="Select Tags" className="inputtxt" />
                                    </Form.Group> */}

                                    <Typeahead
                                        {...this.state}
                                        id="basic-example"
                                        multiple={true}
                                        onChange={selected => this.setState({ selected })}
                                        options={Data.country}
                                        placeholder="Select Tags"
                                        className="typeheadset"
                                    />

                                    <Form.Row className="formgroupO" style={{paddingLeft: 5, paddingRight: 5, display: 'flex'}} >
                                        <Form.Group controlId="formGridOption1" className="formgrouptxt90" >
                                            <Form.Control placeholder="Option 1" className="inputtxt" />
                                        </Form.Group>
                                        <Form.Group controlId="formGridState" className="formgroupch10">
                                            <div style={{display: 'flex', marginTop: 8}}>
                                                <svg width="24" height="18" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.1252 2V0H0.25V2H20.1252ZM20.1252 6V8H0.25V6H20.1252ZM20.1252 12V14H0.25V12H20.1252Z" fill="#979797"/>
                                                </svg>
                                            </div>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row className="formgroupO" style={{paddingLeft: 5, paddingRight: 5, display: 'flex'}} >
                                        <Form.Group controlId="formGridOption1" className="formgrouptxt90" >
                                            <Form.Control placeholder="Option 1" className="inputtxt" />
                                        </Form.Group>
                                        <Form.Group controlId="formGridState" className="formgroupch10">
                                            <div style={{display: 'flex', marginTop: 8}}>
                                                <svg width="24" height="18" viewBox="0 0 21 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M20.1252 2V0H0.25V2H20.1252ZM20.1252 6V8H0.25V6H20.1252ZM20.1252 12V14H0.25V12H20.1252Z" fill="#979797"/>
                                                </svg>
                                            </div>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Group controlId="formGridAnswerfeedback" className="formgroup" >
                                        <Form.Control placeholder="Answer feedback" className="inputtxt" />
                                    </Form.Group>
                                    <div className="betweendiv">
                                        <div onClick={this.addOption} style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM12 7H9V4H7V7H4V9H7V12H9V9H12V7Z" fill="#FF475B"/>
                                            </svg>
                                            <label style={{color: '#FF475B', paddingLeft: 10, margin: 0, cursor: 'pointer'}}> Add another option </label>
                                        </div>
                                        <Button type="submit" className="updatebnt" >
                                            Add Question
                                        </Button>                                    
                                    </div>
                                </div>
                                <div style={Number(this.state.showflag) === 3 ? {display: 'block'} : {display: 'none'}}>
                                    <Form.Row className="formgroupO" style={{paddingLeft: 5, paddingRight: 5}} >
                                        <Form.Group controlId="formGridQuetion" className="formgrouptxt" >
                                            <Form.Control placeholder="Quetion" className="inputtxt" />
                                        </Form.Group>
                                        <Form.Group controlId="formGridState" className="formgroupch">
                                            <Form.Control as="select" className="inputtxt"
                                                onChange={this.onShowFlag} 
                                            >
                                                <option value={0} defaultChecked>Multiple Choice</option>
                                                <option value={1} >Plain Text, Image, Video</option>
                                                <option value={2}>Sequence</option>
                                                <option value={3}>Selection</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Form.Row> 
                                    {/* <Form.Group controlId="formGridEmail" className="formgroup" style={{display: 'flex', backgroundColor: '#F2F2F2', padding: 0, margin: 10, borderRadius: 10}}>
                                        <Button onClick={this.handleClick} style={{fontSize: '10px', margin: '5px', borderRadius: '15px', color: '#009FFA', border: '1px solid #009FFA', backgroundColor: '#F2FAFF', alignSelf: 'right'}}>
                                                Knowledge 
                                        </Button>
                                        <Form.Control type="email" placeholder="Select Tags" className="inputtxt" />
                                    </Form.Group> */}

                                    <Typeahead
                                        {...this.state}
                                        id="basic-example"
                                        multiple={true}
                                        onChange={selected => this.setState({ selected })}
                                        options={Data.country}
                                        placeholder="Select Tags"
                                        className="typeheadset"
                                    />

                                    <Form.Row className="formgroupO" style={{paddingLeft: 5, paddingRight: 5}} >
                                        <Form.Group controlId="formGridOption1" className="formgrouptxt" >
                                            <Form.Control placeholder="Option 1" className="inputtxt" />
                                        </Form.Group>
                                        <Form.Group controlId="formGridState" className="formgroupch">
                                            <div style={{display: 'flex'}}>
                                                <Avatar style={{backgroundColor: '#FF475B', width: 33, height: 33 }}>
                                                    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.70711 9.29289L15 0L16.4142 1.41421L5.70711 12.1213L0 6.41421L1.41421 5L5.70711 9.29289Z" fill="white"/>
                                                    </svg>
                                                </Avatar>
                                                <label style={{paddingLeft: 10, color: '#979797'}}>Mark as correct option</label>
                                            </div>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Row className="formgroupO" style={{paddingLeft: 5, paddingRight: 5}} >
                                        <Form.Group controlId="formGridOption1" className="formgrouptxt" >
                                            <Form.Control placeholder="Option 1" className="inputtxt" />
                                        </Form.Group>
                                        <Form.Group controlId="formGridState" className="formgroupch">
                                            <div style={{display: 'flex'}}>
                                                <Avatar style={{backgroundColor: '#FF475B', width: 33, height: 33 }}>
                                                    <svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M5.70711 9.29289L15 0L16.4142 1.41421L5.70711 12.1213L0 6.41421L1.41421 5L5.70711 9.29289Z" fill="white"/>
                                                    </svg>
                                                </Avatar>
                                                <label style={{paddingLeft: 10, color: '#979797'}}>Mark as correct option</label>
                                            </div>
                                        </Form.Group>
                                    </Form.Row>
                                    <Form.Group controlId="formGridAnswerfeedback" className="formgroup" >
                                        <Form.Control placeholder="Answer feedback" className="inputtxt" />
                                    </Form.Group>
                                    <div className="betweendiv">
                                        <div onClick={this.addOption} style={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM12 7H9V4H7V7H4V9H7V12H9V9H12V7Z" fill="#FF475B"/>
                                            </svg>
                                            <label style={{color: '#FF475B', paddingLeft: 10, margin: 0, cursor: 'pointer'}}> Add another option </label>
                                        </div>
                                        <Button type="submit" className="updatebnt" >
                                            Add Question
                                        </Button>                                    
                                    </div>
                                </div>
                                
                            
                            </Form>
                        </CardContent>
                    </Card>
                    <div >
                        <SortableContainer onSortEnd={this.onSortEnd}>
                            {this.state.items.map((value, index) => (
                            <SortableItem key={`item-${value}`} index={index} value={value} />
                            ))}
                        </SortableContainer>
                    </div>

                    <Card className="editcard">
                        <CardContent>
                            <div style={{display: 'inline', float:'right'}}>                                
                                <Button type="submit" className="savdrbnt" style={{border: '2px solid #FF475B', color: '#FF475B'}}>
                                    Save Draft
                                </Button>                                
                                <Button type="submit" className="cresebnt" onClick={this.props.createNew}>
                                    Create Session
                                </Button>                           
                            </div>
                        </CardContent>
                    </Card>
                </div>           
        );
    }
}

export default TrainingEdit;
