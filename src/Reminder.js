import PropTypes from "prop-types";

function Reminder(props) {
  const handleChange = (e) => {
    console.log(props.isCompleted);

    props.setIsCompleted(!props.isCompleted, props.id);
    console.log("after applying the filter");
    console.log(props.isCompleted);
  };
  return (
    <div className="item">
      item:{props.reminderText}
      <span>DueDate:{props.dueDate}</span>
      <span>
        Completed?:
        <input
          type="checkbox"
          checked={props.isCompleted}
          onChange={handleChange}
        />
      </span>
    </div>
  );
}

Reminder.propsTypes = {
  reminderText: PropTypes.string,
  dueDate: PropTypes.string,
  isCompleted: PropTypes.bool,
};
// setting default props for reminder
const date = new Date();
const formattedDate = date.toISOString().slice(0, 10);
Reminder.defaultProps = {
  reminderText: "No Reminder Set",
  dueDate: formattedDate,
  isCompleted: false,
};
export default Reminder;
