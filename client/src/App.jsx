import "./App.scss";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <>
      <header className="header">
        <h1 className="title">Электронный журнал</h1>
      </header>
      {/* <Header /> */}
      <Main />
    </>
  );
}

export default App;
