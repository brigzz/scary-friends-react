import React, {Component} from 'react';
import 'tachyons';

class SearchBox extends Component {

    render() {
        return(
            <div>
            <input className='db' 
                   style={{margin:'0 auto 1em auto', fontSize:'1.2em', padding:'1em', backgroundColor: 'lightblue', border: '3px solid blue'}} 
                   type ='search' 
                   placeholder='Search Scary Friends'
                   onChange = {this.props.searchChange} 
            />
            </div>
        )
    }
}

export default SearchBox;