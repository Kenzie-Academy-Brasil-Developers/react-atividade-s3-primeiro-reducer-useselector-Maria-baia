import FruitsPage from "./store/modules/fruits/action";
import GlobalStyle from "./styles/global"

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <FruitsPage/>
    </div>
  );
}

export default App;
