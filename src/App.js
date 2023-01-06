import "./App.css";
import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import HomePage from "./components/HomePage";
import Nav from "./components/Nav";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [newList, setNewList] = useState([]);
  const [homePage, setHomePage] = useState(true);

  return (
    <div className="App">
      <HomePage setHomePage={setHomePage} homePage={homePage} />

      <header className={homePage !== true ? "App-header" : "App-headerOff"}>
        <Nav setHomePage={setHomePage} />
      </header>

      <main className={homePage !== true ? "App-main" : "App-mainOff"}>
        <div className="Div-main">
          <Form
            listTransactions={listTransactions}
            setLitsTransactions={setListTransactions}
            setNewList={setNewList}
          />
          <List
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            setNewList={setNewList}
            newList={newList}
          />
        </div>
        <TotalMoney listTransactions={listTransactions} />
      </main>
    </div>
  );
}

export default App;
