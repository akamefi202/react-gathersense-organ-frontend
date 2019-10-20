import React, {Component} from 'react';

import '../assets/css/bodypanel.css';


import Header from '../components/Header';
import LeftPanel from '../components/LeftPanel';
import CandiRP from '../components/CandiRP';

import Data from '../common/dataOrg';

class Candidates extends Component {  
  render() {   
    return (
      <div>
        <Header menu={Data.menus[2]} history={this.props.history} />
        <LeftPanel menus={Data.menus} selectTag={Data.menus[2].text} />
        <CandiRP />
      </div>
    );
  }
}

export default Candidates;
