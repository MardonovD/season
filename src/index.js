import React from "react";

import ReactDOM from "react-dom";

// const App = () => {
//   navigator.geolocation.getCurrentPosition(
//     function (pos) {
//       console.log(pos);
//     },
//     function (err) {
//       console.log(err);
//     }
//   );
//   return <div>Sani joylashuving {pos}</div>;
// };

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    // this.state.lat = 2;
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.state.lat = position.coords.latitude;
        console.log(position);
      },
      (err) => {
        this.state.errorMessage = err.message;
      }
    );
  }

  render() {
    // console.log(this.state.lat);
    // console.log(this.state.errorMessage);

    return (
      <div>
        <div>Latitude:{this.state.lat}</div>
        <div>Error:{this.state.errorMessage}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
