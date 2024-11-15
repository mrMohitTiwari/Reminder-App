import Reminder from "./Reminder";

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

export default RemindersList;
// with every remainder component we will pass props
