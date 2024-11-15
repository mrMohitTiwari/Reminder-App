import PropTypes from "prop-types";
function Inputform(props) {
  // creating the handler for each input field and button
  // handler for text change
  const handleTextChange = (e) => {
    const newText = { ...props.userInput, reminderText: e.target.value };

    props.setUserInput(newText);
  };
  // handler for date change
  const handleDateChange = (e) => {
    const date = new Date(e.target.value);
    const formattedDate = date.toISOString().slice(0, 10);
    const newUserInput = { ...props.userInput, dueDate: formattedDate };
    props.setUserInput(newUserInput);
  };
  //   handler to handle form submission and adding item to reminder array
  const handleClick = (e) => {
    e.preventDefault();

    const itemToAdd = { ...props.userInput, Iscompleted: false };
    props.addNewReminder(itemToAdd);
  };
  return (
    <>
      <form>
        <input
          value={props.userInput.reminderText}
          id="#ReminderText"
          type="text"
          placeholder="What do You want to do ?"
          onChange={handleTextChange}
        />
        <br />
        <input
          onChange={handleDateChange}
          type="date"
          id="dueDate"
          value={props.userInput.dueDate}
        />

        <br />
        <button onClick={handleClick}>Add Item</button>
      </form>
    </>
  );
}

// Now validating the data using propType
Inputform.propTypes = {
  userInput: PropTypes.shape({
    reminderText: PropTypes.string,
    dueDate: PropTypes.string,
  }),
  setUserInput: PropTypes.func,
  addNewReminder: PropTypes.func,
};
// maintinang a date formatter
const date = new Date();
const formattedDate = date.toISOString().slice(0, 10);
Inputform.defaultProps = {
  userInput: {
    reminderText: "",
    dueDate: formattedDate,
  },
};

export default Inputform;
