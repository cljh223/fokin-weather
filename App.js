import React from "react";
import Loading from "./Loading";
import * as Loaction from "expo-location";
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "b3cec0fbdb6b14e138f40b6b70963caf";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    const {
      data: {
        main: { temp },
        weather
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`
    );
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp
    });
  };
  getLocation = async () => {
    try {
      await Loaction.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Loaction.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      alert.alert("Can't find you.", "So sad");
    }
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state;
    return isLoading ? (
      <Loading></Loading>
    ) : (
      <Weather temp={Math.round(temp)} condition={condition}></Weather>
    );
  }
}
