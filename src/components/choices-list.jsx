import { IoIosAddCircleOutline } from "react-icons/io";
import { useAppContext } from "../utilities/context";
import { toast } from "react-toastify";
import Choice from "./choice";

function Choices() {
  // Accessing choiceList and setChoiceList from the app context
  const { choiceList, setChoiceList } = useAppContext();

  // Function to add a new choice
  const addChoice = () => {
    // Check if the maximum number of choices is reached
    if (choiceList.length < 6) {
      // Add a new choice with a unique ID based on milliseconds
      setChoiceList([
        ...choiceList,
        { id: new Date().getMilliseconds(), value: "" },
      ]);
    } else {
      // Show an error toast if the maximum number of choices is reached
      toast.error("Maximum number of choices!", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  // Function to update the value of a choice
  const updateChoice = (id, newValue) => {
    // Find the specific choice by ID and update its value
    let choice = choiceList.find((ele) => ele.id === id);
    if (choice) {
      choice.value = newValue;
    }
    // Update the entire choiceList with the modified choice
    setChoiceList([...choiceList]);
  };

  // Function to delete a choice
  const deleteChoice = (id) => {
    // Create a new choiceList excluding the choice to be deleted
    const newChoiceList = choiceList.filter((ele) => ele.id !== id);
    // Update the choiceList with the new list
    setChoiceList([...newChoiceList]);
  };

  // Object containing updateChoice and deleteChoice functions to pass as props
  const choiceOp = {
    updateChoice,
    deleteChoice,
  };

  return (
    <div className="choices">
      <p className="answers">Choices</p>
      {choiceList.length
        ? choiceList.map((choice, i) => {
            // Render the Choice component for each choice in the list
            return (
              <Choice
                key={choice.id}
                {...choice}
                {...choiceOp}
                label={String.fromCharCode(65 + i)}
              />
            );
          })
        : ""}
      {/* Button to add a new choice */}
      <button className="btn-add" title="Add Choice" onClick={addChoice}>
        <IoIosAddCircleOutline />
      </button>
    </div>
  );
}

export default Choices;
