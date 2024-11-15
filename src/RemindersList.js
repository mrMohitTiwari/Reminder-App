import { isClickableInput } from "@testing-library/user-event/dist/utils";
import Reminder from "./Reminder";
import PropTypes from "prop-types";

function RemindersList(props) {
  const reminders = props.reminders.map((reminder, index) => {
    return (
      <Reminder
        reminderText={reminder.reminderText}
        dueDate={reminder.dueDate}
        isComplete={reminder.isComplete}
        key={index}
      />
    );
  });
  return <div>{reminders}</div>;
}

// with every remainder component we will pass props
// setting up the data type for props
RemindersList.propTypes = { reminder: PropTypes.array };
// creating a default prop when no value is present
const date = new Date();
const formattedDate = date.toISOString().substr(0, 10);
RemindersList.defaultProps = {
  reminders: [
    {
      reminderText: "No Reminder Yet",
      dueDate: formattedDate,
      isComplete: false,
    },
  ],
};
export default RemindersList;
