import React, {Component} from 'react';
import {
    Card, 
    CardContent,
    Avatar,
} from '@material-ui/core';

import {
    Form,
    Button,
} from 'react-bootstrap';

import '../assets/css/updateaccount.css';
import '../assets/css/bodypanel.css';

import d7 from '../assets/images/d7.png';

class UpdateAccount extends Component {
  
    render() {
        return (
            <div className="Rcontainer" >
                <Card className="updatecard">
                    <CardContent>
                        <Form>
                            <Form.Row className="formgroupO" >
                                    <Avatar alt="Remy Sharp" src={d7} style={{width: 60, height: 60}} />
                                
                                <div style={{paddingLeft: '20px'}}>
                                    <p style={{margin: '2px', color: '#FF475B', fontSize: '16px', fontWeight: 'bold'}} >Add a Logo</p>
                                    <p style={{margin: '2px', color: '#979797', fontSize: '12px'}} >(Square Images Only)</p>
                                </div>
                            </Form.Row> 
                            <Form.Group controlId="formGridFullName" className="formgroup" >
                                {/* <Form.Label>Address</Form.Label> */}
                                <Form.Control placeholder="FullName" className="inputtxt" />
                            </Form.Group>
                            <Form.Group controlId="formGridState" className="formgroup">
                                <Form.Control as="select" className="inputtxt" >
                                    <option value="">Category</option>
                                    <option value={10}>Ten</option>
                                    <option value={20}>Twenty</option>
                                    <option value={30}>Thirty</option>
                                </Form.Control>
                            </Form.Group>
                                        
                            <Form.Group controlId="formGridEmail" className="formgroup" >
                                {/* <Form.Label>Email</Form.Label> */}
                                <Form.Control type="email" placeholder="Email address" className="inputtxt" />
                            </Form.Group>

                            <Form.Group controlId="formGridPassword" className="formgroup" >
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="password" placeholder="Password" className="inputtxt" />
                            </Form.Group>                    

                            <Button type="submit" className="updatebnt" >
                                Update Account
                            </Button>
                        </Form>
                    </CardContent>
                </Card>
                
            </div>            
        );
    }
}

export default UpdateAccount;
