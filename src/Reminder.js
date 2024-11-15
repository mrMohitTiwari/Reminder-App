function Reminder(props) {
  return (
    <div>
      item:{props.text} DueDate:{props.date}
      TargetAchived:{String(props.isCompleted)}
    </div>
  );
}

export default Reminder;
