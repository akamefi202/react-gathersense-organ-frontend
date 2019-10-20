import React, {Component} from 'react';

import '../assets/css/bodypanel.css';


import Header from '../components/Header';
import LeftPanel from '../components/LeftPanel';
import TrainingCreate from '../components/TrainingCreate';

import Data from '../common/dataOrg';

class TrainingsCreate extends Component {  
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {   
        return (
            <div>
                <Header menu={Data.menus[1]}  history={this.props.history}/>
                <LeftPanel menus={Data.menus} selectTag={Data.menus[1].text} />
                <TrainingCreate />
            </div>
        );
    }
}

export default TrainingsCreate;
