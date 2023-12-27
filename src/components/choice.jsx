import PropTypes from "prop-types";
import { CiCircleRemove } from "react-icons/ci";

// Choice component represents a single choice in the quiz
function Choice({ id, val, updateChoice, deleteChoice, label }) {
  return (
    <div className="choice">
      {/* Label for the choice */}
      <label htmlFor={id} className="answer-label">
        {label} :
      </label>

      {/* Input field for entering the choice value */}
      <input
        type="text"
        id={id}
        value={val}
        className="choice-input"
        onChange={(e) => updateChoice(id, e.target.value)}
      />

      {/* Button to delete the choice */}
      <button
        className="btn-del"
        title="Delete this choice"
        onClick={() => deleteChoice(id)}
      >
        {/* Icon for delete action */}
        <CiCircleRemove />
      </button>
    </div>
  );
}

// PropTypes for type-checking and documenting the expected props
Choice.propTypes = {
  id: PropTypes.number.isRequired, // Unique identifier for the choice
  label: PropTypes.string.isRequired, // Label for the choice
  val: PropTypes.string, // Value of the choice
  updateChoice: PropTypes.func.isRequired, // Function to update the choice value
  deleteChoice: PropTypes.func.isRequired, // Function to delete the choice
};

// Export the Choice component as the default export
export default Choice;
