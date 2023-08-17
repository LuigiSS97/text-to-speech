const API_URL = "http://localhost:5174/content";

/**
 * Fetch the content from the api
 */
const fetchContent = async () => {
  const response = await fetch(API_URL).then((response) => response.json());

  return response.content;
};

/**
 * Parse the content into sentences, and return an array of sentences. Look at the Readme for sample input and expected output.
 * Avoid using DOMParser for implementing this function.
 */
const parseContentIntoSentences = (content: string) => {
  var text = [];
  const markupRemovedText = content.replace(/(<([^>]+)>)/gi, "");
  text = markupRemovedText.split(".");

  return text;
};

export { fetchContent, parseContentIntoSentences };
