function Inputform() {
  return (
    <>
      <form>
        <input
          id="#ReminderText"
          type="text"
          placeholder="What do You want to do ?"
        />
        <br />
        <input type="date" id="dueDate" />
        <br />
        <button>Add Item</button>
      </form>
    </>
  );
}

export default Inputform;
