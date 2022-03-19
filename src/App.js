import './App.css';
import Example from './components/Example';
import StyleContext from './components/StyleContext';

function App() {
  const styledText = {
    fontSize: "25px",
    textAlign: "center",
    margin: "40px",
    border: "2px solid green"
  };

  const styledLink = {
    textDecoration: 'none',
    fontSize: '20px'
  }


  return (
    <StyleContext.Provider value={[styledText, styledLink]}>
      <div className="App">
        <h1>Hello World</h1>
        <Example />
      </div>
    </StyleContext.Provider>
  );
}

export default App;
