import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  paragraphStyle: {
    fontSize: "25px",
    margin: "5px 0px",
  },
  searchBtn: {
    marginLeft: 'auto',
  },
}));

export default function MainView({ themeColor, deviceWidth }) {
  const classes = useStyles();
  const [cityInfo, SetCityInfo] = useState(null);
  const [cityName, SetcityName] = useState("Wan Chai");
  const API_KEY = "375a63cc369dd4b4ebcf4e7418d37a35";

  useEffect(() => {
    const FetchApi = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`;
      const response = await fetch(url);
      const responseJson = await response.json();
      SetCityInfo(responseJson);
    };
    FetchApi();
  }, [cityName])

  const buttonColor = {
    backgroundColor: themeColor,
    color: "#ffffff",
  };

  const Container = {
    width: deviceWidth,
    margin: "10px auto",
  };

  const currentWeatherHolder = {
    width: deviceWidth,
    margin: "10px auto",
  };

  return (
    <Card style={Container} variant="outlined">
        <CardContent>
            <TextField id="input-city" style={{width: "100%"}} label="Enter Any City Name" variant="outlined" />
            <div style={currentWeatherHolder}>
              <center>
                { (cityInfo != null && cityInfo.cod === 200) && <img width="150px" src={"https://openweathermap.org/img/wn/" + cityInfo.weather[0].icon + "@2x.png"} alt="Weather Icon" />}
                { cityInfo !== null ? 
                    cityInfo.cod !== 200 ? 
                      <p className={classes.paragraphStyle}>{cityInfo.message}</p> 
                      : <>
                        <p className={classes.paragraphStyle}> Weather: {cityInfo.weather[0].description}</p>
                        <p className={classes.paragraphStyle}> Temperature: {cityInfo.main.temp + "℃"}</p>
                        <p className={classes.paragraphStyle}> Wind Speed: {cityInfo.wind.speed}</p>
                        <p className={classes.paragraphStyle}> Humidity: {cityInfo.main.humidity}</p>
                        <p className={classes.paragraphStyle}> City: {cityName + " ," + cityInfo.sys.country}</p>
                        </>
                  : "unknown error"
                }
              </center>
            </div>
        </CardContent>
        <CardActions>
            <Button
              className={classes.searchBtn}
              variant="contained"
              style={buttonColor}
              onClick={() => SetcityName(document.getElementById("input-city").value)}
            >
              Search
            </Button>
        </CardActions>
    </Card>
  );
}
