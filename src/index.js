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
  constructor(props) {
    super(props);
    this.state;
  }
  render() {
    navigator.geolocation.getCurrentPosition(
      function (pos) {
        console.log(pos);
      },
      function (err) {
        console.log(err);
      }
    );
    return <div>Hello World</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
