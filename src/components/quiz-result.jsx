import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useAppContext } from "../utilities/context";
import codeImage from "../assets/code.png";

// Base URL for language icons
let languageIconBaseURL = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";

// QuizResult component displays the quiz result, including code, choices, and icons
function QuizResult() {
  // State to track whether the language image is available
  const [imageAvailable, setImageAvailable] = useState(false);

  // Accessing codeSnippet, programming language, and choiceList from the app context
  const { codeSnippet, pl, choiceList } = useAppContext();

  // Constructing the URL for the language icon
  let langImgURL = `${languageIconBaseURL}${pl}/${pl}-original.svg`;

  // Effect to check if the language image is available
  useEffect(() => {
    const img = new Image();
    img.onload = () => setImageAvailable(true);
    img.onerror = () => setImageAvailable(false);
    img.src = langImgURL;
  }, [langImgURL]);

  // JSX for the QuizResult component
  return codeSnippet ? (
    <div id="quiz-image">
      {/* Header for the quiz result */}
      <h2 className="head">What do you think is the expected output? 🤔</h2>
      <div className="blob"></div>
      <div className="blob"></div>

      {/* SyntaxHighlighter to display code snippet with syntax highlighting */}
      <SyntaxHighlighter id="code" language={pl} style={vscDarkPlus} wrapLines>
        {codeSnippet}
      </SyntaxHighlighter>

      {/* List of choices */}
      <div className="choices-list">
        {choiceList.length
          ? choiceList.map((ele, i) => {
              return (
                <div className="choice-container" key={ele.id}>
                  {/* Displaying characters A, B, C, ... for each choice */}
                  <span className="character">
                    {String.fromCharCode(65 + i)}
                  </span>
                  {/* Displaying the choice text */}
                  <div className="choice-text">{ele.value}</div>
                </div>
              );
            })
          : ""}
      </div>

      {/* Container for images, including code, think, and language icon */}
      <div className="images">
        {/* Displaying the language icon if available, otherwise fallback to codeImage */}
        <img
          src={imageAvailable ? langImgURL : codeImage}
          className="icon"
          alt="language"
        />
      </div>
    </div>
  ) : (
    // If there is no code snippet, render nothing
    ""
  );
}

export default QuizResult;
