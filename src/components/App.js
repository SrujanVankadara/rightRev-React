import React from 'react';
import axios from 'axios';
import '../Style.css'
import CitySearch from './CitySearch';
import WeatherCard from './WeatherCard'

class App extends React.Component{

    state = {weatherResult: null}

    onSearchSubmit = async (searchInputValue) => {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${searchInputValue}&units=metric&APPID=6dc117b66b6e76ce57bb6fb0ac1fad35`)
        this.setState({weatherResult: response.data})
        console.log(response.data);
     }

    render() {
        return(
            <div className="container my-1">
                 <CitySearch onSearchSubmit = {this.onSearchSubmit} />
                 {this.state.weatherResult ?  <WeatherCard weatherResult = {this.state.weatherResult} /> : <div></div>}
            </div>
        )
    }

}

export default App;