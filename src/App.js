import "./App.css";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function App() {
  function showWeather(response) {
    alert(
      `The weather in Auckland is ${Math.round(
        response.data.main.temp
      )} degrees celcius`
    );
  }

  let url =
    "https://api.openweathermap.org/data/2.5/weather?q=Auckland&appid=c31b4fce1a46009ae0af063ea44bb353&units=metric";

  axios.get(url).then(showWeather);

  return (
    <div className="App">
      <header className="App-header">
        <Loader
          type="Puff"
          color="blue"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      </header>
    </div>
  );
}
