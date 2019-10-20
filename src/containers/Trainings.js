import React, {Component} from 'react';

import '../assets/css/bodypanel.css';


import Header from '../components/Header';
import LeftPanel from '../components/LeftPanel';
import TrainingTable from '../components/TrainingTable';

import Data from '../common/dataOrg';

class Trainings extends Component {  
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
                <TrainingTable history={this.props.history} />
            </div>
        );
    }
}

export default Trainings;
