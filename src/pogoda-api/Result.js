import React from 'react';

const Result = (props) => {
    const { data,
            city,
            sunrise,
            sunset,
            temp,
            pressure,
            wind,
            err}=props.watcher;

    let content=null;

    if(!err&&city){
        const sunriseTime=new Date(sunset*1000).toLocaleTimeString();
        const sunsetTime=new Date(sunrise*1000).toLocaleTimeString();
        content=(
            <div>
                <h3>Wyniki wyszukiwanie dla <em>{city}</em></h3>          
                <h4>Dane dla dnia i godziny: {data}</h4>
                <h4>Aktualna temperatura: {temp} &#176;C</h4>
                <h4>Wschód słońca dzisiaj: {sunsetTime}</h4>
                <h4>Zachód słońca dzisiaj: {sunriseTime}</h4>
                <h4>Aktualna siła wiatru: {wind} m/s</h4>
                <h4>Aktualne cisnienie: {pressure} hpa</h4>
            </div>
        );
    }

    return ( 
        <div className="result">
            {err?`Nie mamy w bazie ${city}`:content}
        </div>
     );
}
 
export default Result;