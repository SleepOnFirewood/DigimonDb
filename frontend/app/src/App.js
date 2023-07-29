import './App.css';
import Header from './component/Header/Header';
import SearchForm from './component/SearchForm';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <section id="search-border">
      <SearchForm></SearchForm>
      </section>
    </div>
  );
}

export default App;
