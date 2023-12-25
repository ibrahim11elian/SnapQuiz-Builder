import { useState } from "react";
import Choices from "./components/choices-list";
import Question from "./components/question";
import QuizResult from "./components/quiz-result";
import domtoimage from "dom-to-image";
import { useAppContext } from "./utilities/context";
import { toast } from "react-toastify";
import Developer from "./components/developer";

// App component represents the main application
function App() {
  // State to store the generated result image
  const [resultImage, setResultImage] = useState("");
  // Accessing the codeSnippet from the app context
  const { codeSnippet } = useAppContext();

  // Function to generate and download the image
  const generateImage = () => {
    // Check if there is a code snippet before generating the image
    if (!codeSnippet) {
      // Show an error toast if there is no code snippet
      toast.error("You should add some code!", {
        position: "bottom-left",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      return;
    }
    // Get the DOM element with the specified ID (replace with actual ID)
    const node = document.getElementById("quiz-image");
    // Use dom-to-image to convert the DOM element to PNG data URL
    domtoimage
      .toPng(node)
      .then((dataUrl) => {
        // Create an image element and set its source to the data URL
        const img = new Image();
        img.src = dataUrl;
        // Set the result image state with the outer HTML of the image element
        setResultImage(img.outerHTML);
        // Create a link element for downloading the image
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "SnapQuizImage.png"; // Set the desired file name
        // Append the link to the document body, trigger a click, and remove the link
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((error) => {
        // Log an error if there's an issue capturing the screenshot
        console.error("Error capturing screenshot:", error);
      });
  };

  // JSX for the App component
  return (
    <>
      {/* Header section */}
      <header id="header">
        <h1 className="title">
          SnapQuiz <span>Builder</span>
        </h1>
      </header>

      {/* Question, Choices, and QuizResult components */}
      <Question />
      <Choices />
      <QuizResult />

      {/* Button to generate the image */}
      <button className="btn-generate" onClick={generateImage}>
        Generate Image
      </button>

      {/* Container to display the generated result image */}
      <div
        id="result-container"
        dangerouslySetInnerHTML={{ __html: resultImage }}
      />

      {/* Developer component */}
      <Developer />
    </>
  );
}

export default App;
