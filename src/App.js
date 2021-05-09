// import logo from "./logo.svg";
import "./App.css";
import { DatePicker } from "@blueprintjs/datetime";
// import { TimePicker } from "@blueprintjs/datetime";

const modifiers = { isSunday };

function isSunday(date) {
  return date.getDay() === 0;
}

function App() {
  return (
    <div className="App">
      <DatePicker defaultValue={new Date()} modifiers={modifiers} />
    </div>
  );
}

export default App;
