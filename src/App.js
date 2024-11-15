import InputForm from "./Inputform.js";
import FilterSelect from "./FilterSelect";
import RemindersList from "./RemindersList";
import { useState } from "react";
function App() {
  const [userInput, setuserInput] = useState();
  const [reminders, setReminders] = useState();
  const [selectedFilter, setSelectedFilter] = useState("all");
  return (
    <div>
      <InputForm userInput={userInput} setuserInput={setuserInput} />
      <FilterSelect
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <RemindersList reminders={reminders} />
    </div>
  );
}
export default App;
