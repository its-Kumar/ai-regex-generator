// Paste this code to generateRegex success even handler script
const history = promptHistory.value;
if (!history.includes(regexPrompt.value)){
  history.unshift(regexPrompt.value);
  promptHistory.setValue(history);
}

// update text field
if (
  generateRegex.data && generateRegex.data?.choices?.length > 0
) {
  const choice = generateRegex.data.choices[0];
  generatedRegex.setValue(choice.text);
  
  currentRegexText.setValue(choice.text);
  currentTestString.setValue(regexTestString.value);
  
  codeEditor.updateModel({
    regex: choice.text,
    testString: regexTestString.value
  });
}
