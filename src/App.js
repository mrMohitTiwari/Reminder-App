import InputForm from "./Inputform.js";
import FilterSelect from "./FilterSelect";
import RemindersList from "./RemindersList";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState();
  const [reminders, setReminders] = useState();
  const [selectedFilter, setSelectedFilter] = useState("all");
  // function for adding a reminder to reminderList
  const addNewReminder = (itemToAdd) => {
    // if array is empty then initialise the value
    if (reminders === undefined) setReminders([itemToAdd]);
    // if array has some value then spread it and add the item
    else setReminders([...reminders, itemToAdd]);
    console.log(reminders);
  };
  // Since we are using filteration in dispalying the reminderList we should display the filtered content only even if it is set to show all(it is a good practice )
  // then in cahnge of reminders we will paas filteredList

  const filteredList = reminders ? [...reminders] : undefined;
  // function which will return the array according the selected filter
  function filterList(reminders, selectedFilter) {
    if (selectedFilter === "all") {
      return reminders;
    } else {
      let numberOfDays;
      switch (selectedFilter) {
        case "2day":
          numberOfDays = 2;
          break;
        case "1week":
          numberOfDays = 7;
          break;
        case "30days":
          numberOfDays = 30;
          break;
        default:
          numberOfDays = 0;
          break;
      }
      const result = reminders.filter((reminder) => {
        const todaysDate = new Date().toISOString().substr(0, 10);
        const todayTime = new Date(todaysDate).getTime();
        const dueTime = new Date(reminder.dueDate).getTime();
        return dueTime < todayTime + numberOfDays * 86400000;
      });
      return result;
    }
  }
  return (
    <div>
      <InputForm
        userInput={userInput}
        setUserInput={setUserInput}
        addNewReminder={addNewReminder}
      />
      <FilterSelect
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <RemindersList reminders={filteredList} />
    </div>
  );
}
export default App;
