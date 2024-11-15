import PropTypes from "prop-types";
function Inputform(props) {
  return (
    <>
      <form>
        <input
          value={props.userInput.reminderText}
          id="#ReminderText"
          type="text"
          placeholder="What do You want to do ?"
        />
        <br />
        <input type="date" id="dueDate" />
        value={props.userInput.dueDate}
        <br />
        <button>Add Item</button>
      </form>
    </>
  );
}

export default Inputform;
// Now validating the data using propType
Inputform.propTypes = {
  userInput: PropTypes.shape({
    reminderText: PropTypes.string,
    dueDate: PropTypes.string,
  }),
  setUserInput: PropTypes.func,
};
// maintinang a date formatter
const date = new Date();
const formattedDate = date.toISOString().substr(0, 10);
Inputform.defaultProps = {
  userInput: {
    reminderText: "",
    dueDate: formattedDate,
  },
};
