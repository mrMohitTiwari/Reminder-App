function FilterSelect(props) {
  return (
    <>
      <label htmlFor="filterReminders">
        Show Tasks Due:
        <select id="filterReminders" value={props.selectedfilter}>
          <option value="2day">within 2 day</option>
          <option value="1week">within 1 week</option>
          <option value="30days">within 30 Days</option>
          <option value="all">Any Time</option>
        </select>
      </label>
    </>
  );
}

export default FilterSelect;
