import './App.css';
import Dictionary from './Dictionary';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p><strong>Dictionary</strong></p>
      </header>
      <main>
        <p className="question">What word are you wondering today?</p>
        <Dictionary />
      </main>
      <footer>Coded by <a href="https://github.com/Sea-Hummingbird/dictionary-app" target="blank">Claudia Medel</a></footer>
    </div>
  );
}

export default App;
