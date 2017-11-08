import React, { Component } from 'react';
import Sidebar from "./Sidebar";
import Content from "./Content";

class HomeBody extends Component {
    render() {
        return (
            <div>Hello Body
                <Sidebar/>
                <Content/>
            </div>
        );
    }
}

HomeBody.defaultProps = {};

export default HomeBody;
