const MyContext = React.createContext("Default Value");

const App = props => React.createElement("div", null, React.createElement(Header, null), React.createElement("ul", null, React.createElement("li", null, "Item One"), React.createElement("li", null, "Item Two"), React.createElement("li", null, "Item Three")));

const Header = props => React.createElement("div", null, React.createElement(Title, null));

const Title = props => {
  const value = React.useContext(MyContext);
  return React.createElement("h1", null, value);
};

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));