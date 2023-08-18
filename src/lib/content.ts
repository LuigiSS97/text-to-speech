const API_URL = "http://localhost:5174/content";

const fetchContent = async () => {
  try {
    const response = await fetch(API_URL).then((response) => response.json());
    return response.content;
  } catch (error) {
    console.log(error);
  }
};

const parseContentIntoSentences = (content: string) => {
  const openingTag = "<s>";
  const closingTag = "</s>";
  const sentences: string[] = [];

  let startIndex = content.indexOf(openingTag);
  while (startIndex !== -1) {
    const endIndex = content.indexOf(closingTag, startIndex);
    if (endIndex !== -1) {
      const sentence = content.substring(
        startIndex + openingTag.length,
        endIndex
      );
      sentences.push(sentence);
      startIndex = content.indexOf(openingTag, endIndex + closingTag.length);
    } else {
      break;
    }
  }

  return sentences;
};

export { fetchContent, parseContentIntoSentences };
