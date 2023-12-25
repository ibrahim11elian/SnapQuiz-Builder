// Importing programming languages data and the context hook
import programmingLanguages from "../data/language";
import { useAppContext } from "../utilities/context";

// Question component represents the section where users select the programming language and enter code
function Question() {
  // Destructuring values from the app context
  const { codeSnippet, setCodeSnippet, pl, setPL } = useAppContext();

  // JSX for the Question component
  return (
    <>
      {/* Section for selecting the programming language */}
      <div className="lang">
        {/* Label for the language selector */}
        <label htmlFor="lang-selector" className="lang-label">
          Question Language:
        </label>

        {/* Dropdown/select menu for selecting the programming language */}
        <select
          name="language"
          title={pl}
          id="lang-selector"
          onChange={(e) => setPL(e.target.value)}
          value={pl}
        >
          {/* Mapping through programmingLanguages array to create options */}
          {programmingLanguages.map((lang, index) => (
            <option value={lang} key={index}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      {/* Textarea for entering or pasting code snippet */}
      <textarea
        id="codeSnippet"
        value={codeSnippet}
        placeholder="Type or paste your code here 😊..."
        onChange={(e) => setCodeSnippet(e.target.value)}
      />
    </>
  );
}

// Export the Question component as the default export
export default Question;
