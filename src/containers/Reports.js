import React, {Component} from 'react';

import '../assets/css/bodypanel.css';


import Header from '../components/Header';
import LeftPanel from '../components/LeftPanel';
import ReportsView from '../components/ReportsView';
import ReportsResults from '../components/ReportsResults';
import ReportsResultView from '../components/ReportsResultView';

import Data from '../common/dataOrg';

class Reports extends Component {  
    constructor(props) {
        super(props)
        this.state = {
            showflag: 0,
        }
    }

    changeFlag = (value) => {
        this.setState({showflag: value})
        console.log(value)
    }

    render() {   
        return (
            <div>
                <Header menu={Data.menus[3]}  history={this.props.history}/>
                <LeftPanel menus={Data.menus} selectTag={Data.menus[3].text} />              
                {this.state.showflag === 0 && (<ReportsView history={this.props.history} changeFlag={this.changeFlag} />)}
                {this.state.showflag === 1 && (<ReportsResults history={this.props.history} changeFlag={this.changeFlag} />)}
                {this.state.showflag === 2 && (<ReportsResultView history={this.props.history} changeFlag={this.changeFlag} />)}
                
            </div>
        );
    }
}

export default Reports;
