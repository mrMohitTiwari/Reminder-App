import PropTypes from "prop-types";

function Reminder(props) {
  return (
    <div>
      item:{props.reminderText} DueDate:{props.dueDate}
      TargetAchived:{String(props.isCompleted)}
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
