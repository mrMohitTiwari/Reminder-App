import PropTypes from "prop-types";

function FilterSelect(props) {
  // creating handler
  const handleChange = (e) => {
    props.setSelectedFilter(e.target.value);
  };
  return (
    <>
      <label htmlFor="filterReminders">
        Show Tasks Due:
        <select
          id="filterReminders"
          value={props.selectedFilter}
          onChange={handleChange}
        >
          <option value="2day">within 2 day</option>
          <option value="1week">within 1 week</option>
          <option value="30days">within 30 Days</option>
          <option value="all">Any Time</option>
        </select>
      </label>
    </>
  );
}
// setting Proptype
FilterSelect.propTypes = {
  selectedFilter: PropTypes.string,
  setSelectedFilter: PropTypes.func,
};
// creating default props
FilterSelect.defaultProps = {
  selectedFilter: "all",
};
export default FilterSelect;
