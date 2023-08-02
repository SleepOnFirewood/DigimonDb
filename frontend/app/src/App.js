import React, {useState} from "react";
import './App.css';
import Header from './component/Header/Header';
import SearchForm from './component/SearchForm';
import Card from './component/Card/Card';

function App() {
  const [theDigiData, setDigiData] = useState([]);

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
      <div className="cardDisplay">
        {theDigiData.map(item =>(
      <Card digiPic = {item['image_url']}></Card>
      ))}
      </div>
    </div>
  );
}

export default App;
