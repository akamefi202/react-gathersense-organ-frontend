import React, {Component} from 'react';

import '../assets/css/bodypanel.css';


import Header from '../components/Header';
import LeftPanel from '../components/LeftPanel';
import UpdateAccount from '../components/UpdateAccount';

import Data from '../common/dataOrg';

class MyAccount extends Component {  
  render() {   
    return (
      <div>
        <Header  menu={Data.menus[4]}  history={this.props.history} />
        <LeftPanel menus={Data.menus} selectTag={Data.menus[4].text} />
        <UpdateAccount />
      </div>
    );
  }
}

export default MyAccount;
