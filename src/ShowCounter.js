import React, { Component } from 'react';

class ShowCounter extends Component {
    render() {
        const {counter} = this.props;
        return (
            <div>{`--- ${counter ? counter : '0'} ---`}</div>
        );
    }
}

/*const ShowCounter = ({counter , info}) => ({

})*/

ShowCounter.defaultProps = {};

export default ShowCounter;
