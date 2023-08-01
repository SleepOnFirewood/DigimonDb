import React, {useState} from "react";
import './App.css';
import Header from './component/Header/Header';
import SearchForm from './component/SearchForm';
import Card from './component/Card/Card';

function App() {
  const [theDigiData, setDigiData] = useState('dragon');

  const onSearchHandler = (searchData) => {
    const searchResults = searchData;

    console.log(searchResults);
    cardHandler(searchResults);
  }

  const cardHandler = (digiData) => {
    setDigiData(digiData);
  }

  return (
    <div className="App">
      <Header></Header>
      <section id="search-border">
      <SearchForm onSearch ={onSearchHandler}></SearchForm>
      </section>
      <Card digiPic = {theDigiData}></Card>
    </div>
  );
}

export default App;
