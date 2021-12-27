import React from 'react'
import '../Style.css'

class CitySearch extends React.Component{

    constructor(props){
        super(props)
        this.state = {searchInputValue: ""}
    }

    onFormSubmit = (event) =>{
        event.preventDefault();
        this.props.onSearchSubmit(this.state.searchInputValue); 
        
    }

    onClear = (e) => {
        this.setState({searchInputValue: ""});
        this.onFormSubmit(e);
    }
    render() {
        return(
        <form className="search-loaction" onSubmit={this.onFormSubmit}>
            <div className="input-group mb-3">
                <input type="text" name="city" value={this.state.searchInputValue}className="form-control" placeholder="Enter a City"  onChange={(event) => this.setState({searchInputValue: event.target.value})}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.onClear}>X</button>
                </div>
            </div>
        </form>
        )
    }
}

export default CitySearch;