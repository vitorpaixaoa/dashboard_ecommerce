import React from 'react';


import BarraTopo from './BarraTopo';
import Menu from './Menu';

class Dashboard extends React.Component {
    render(){
        return(
            <div className="flex horizontal full-height">
                <div className="flex vertical">
                    <Menu history={this.props.history}/>
                </div>
                    
                <div className="flex vertical full-width">
                    <div className="flex horizontal">
                        <BarraTopo/>
                    </div>
                    <div className="flex full-height">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;