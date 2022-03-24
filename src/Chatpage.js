import React, { Component } from 'react';


class Post extends Component {
    state = { value:'' } 
    render() { 
        return (
            <React.Fragment>
            <textarea placeholder='Post'>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </textarea>
            </React.Fragment>
        );
    }
}
 
export default Post ;



  
 