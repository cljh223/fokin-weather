import React from "react";
import Loading from "./Loading";
import * as Loaction from "expo-location";
import axios from "axios";

const API_KEY = "b3cec0fbdb6b14e138f40b6b70963caf";

export default class extends React.Component {
  state = {
    isLoading: true
  };

  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}`
    );
    console.log(data);
  };
  getLocation = async () => {
    try {
      await Loaction.requestPermissionsAsync();
      const {
        coords: { latitude, longitude }
      } = await Loaction.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      alert.alert("Can't find you.", "So sad");
    }
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading></Loading> : null;
  }
}
