import React, { Component } from 'react';
import Counter from './counter';

class BigCounter extends Component {
    state = {  }
    render() { 
        return ( <div>
            <Counter />
            <Counter />
            <Counter />
            <Counter />
        </div> );
    }
}
 
export default BigCounter;