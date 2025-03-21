import "./App.css";
import TopBanner from "./components/topNavigation/topNavigation";
import TextInput from "./components/textInput/textInput";
import FixedBar from "./components/fixedBar/fixedBar";

function App() {
  return (
    <div>
      <FixedBar/>
      <TopBanner/>
      <TextInput/>
    </div>
  );
}

export default App;
