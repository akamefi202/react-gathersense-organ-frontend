import React, {Component} from 'react';

import '../assets/css/bodypanel.css';

import Header from '../components/Header';
import LeftPanel from '../components/LeftPanel';
import Overview from '../components/Overview';

import Data from '../common/dataOrg';

class Dashboard extends Component {  
  render() {   
    return (
      <div>
        <Header  menu={Data.menus[0]}  history={this.props.history} />
        <LeftPanel menus={Data.menus} selectTag={Data.menus[0].text} />
        <Overview />
      </div>
    );
  }
}

export default Dashboard;
