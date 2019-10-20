import React, {Component} from 'react';
import {
    Card,
    CardContent,
    CardActions,
} from '@material-ui/core';

import {
    Form,
    Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../assets/css/login.css';


class LoginRight extends Component {
  
    render() {
        return (
            <div className="loginRight" >
                <div className="logindiv" >
                    <Card className="loginCard">
                            <CardContent>
                                <Form>
                                    <label className="logintitle"  >Organization Login</label>
                                    <br />
                                    <label className="logintitletxt"  >Please enter your login credentials below</label>                                           
                                    <Form.Group controlId="formLoginEmail" className="formlogin" >
                                        <Form.Control type="email" placeholder="Email address" className="logintxt" />
                                    </Form.Group>
                                    <Form.Group controlId="formLoginPassword" className="formlogin" >
                                        <Form.Control type="password" placeholder="Password" className="logintxt" />
                                    </Form.Group>
                                    <Button type="submit" className="loginbnt" onClick={() => this.props.history.push('/Overview')}  >
                                        Login
                                    </Button>
                                    <Link to={'/Forget Password'}  style={{float: 'right', margin: '20px'}}> Forget Password ? </Link>
                                </Form>
                            </CardContent>
                        
                        <CardActions className="bottomcard">
                            <div style={{display: 'flex'}}>
                                <p className="bottomlabel" >This is the administration platform for GatherSense. Please read the 
                                <strong className="bottomlabelred" > Terms </strong>
                                and 
                                <strong className="bottomlabelred" > Privacy Policy </strong>
                                before using the platform.</p>
                            </div>
                        </CardActions>
                    </Card>
                </div>
                
                
            </div>            
        );
    }
}

export default LoginRight;
