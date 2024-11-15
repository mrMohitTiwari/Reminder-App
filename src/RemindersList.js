import Reminder from "./Reminder";

function RemindersList() {
  return (
    <>
      <Reminder
        text="2 bje aata le aan a"
        date="2024-12-2"
        isCompleted={false}
      />
      <Reminder
        text="bhar k ghoom k aana"
        date="2024-12-3"
        isCompleted={false}
      />
      <Reminder text="AAj naah lena" date="2024-12-5" isCompleted={false} />
    </>
  );
}

export default RemindersList;
// with every remainder component we will pass props
