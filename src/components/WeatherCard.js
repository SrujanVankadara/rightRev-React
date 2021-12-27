import React from 'react'
import '../Style.css'


class WeatherCard extends React.Component{

    constructor(props){
        super(props);
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();        
        this.state = {
            currentDate: date,
            weatherIcon: ""
        }
    }
    renderSwitch() {
        switch(this.props.weatherResult.weather[0].main) {
          case "Rain":
            return "Icons/Rainy.svg";
          case "Clouds":
                return "Icons/Night-rainy.svg";
          case "Fog":
                return "Icons/Cloud-wind.svg";
         case "Clear":
                return "Icons/Sun.svg";
          default:
            return "Icons/Sunshine.svg";
        }
      }
    render() {
        return(
            <div className="container center">
                <div className="card">      
                    <div className="card-header bg-info text-white">
                        My WEATHER
                    </div>              
                   
                    <div className="card-body text-center">
                        <div className=" jumbotron jumbotron-fluid">
                            <p>{this.props.weatherResult.name}</p>
                            <img className="card-img-top img" src={this.renderSwitch()} alt="Card image" />
                            <p>{this.props.weatherResult.weather[0].main}</p>
                            <h4 className="card-title"> {this.props.weatherResult.main.temp}&deg;C</h4>
                            <h4>{this.state.currentDate}</h4>
                        </div>
                    </div>

                </div>
            </div>
        
        )
    }
}

export default WeatherCard;