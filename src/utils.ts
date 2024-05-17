/**
 * Counts the number of words in a given text.
 * @param text - The text to count words from.
 * @returns The number of words in the text.
 */
export function countWords(text: string): number {
    const words = text.match(/\b\w+\b/g);
    return words ? words.length : 0;
}

/**
 * Counts the number of letters in a given text.
 * 
 * @param text - The text to count the letters from.
 * @returns The number of letters in the text.
 */
export function countLetters(text: string): number {
    const letters = text.match(/[a-zA-Z]/g);
    return letters ? letters.length : 0;
}

/**
 * Counts the number of spaces in a given text.
 * 
 * @param text - The text to count spaces in.
 * @returns The number of spaces in the text.
 */
export function countSpaces(text: string): number {
    const spaces = text.match(/\s+/g);
    return spaces ? spaces.length : 0;
}

/**
 * Finds the frequent words in a given text.
 * @param text - The input text to analyze.
 * @param threshold - The minimum count for a word to be considered frequent. Default is 10. Only words with counts greater than this threshold will be returned.
 * @returns An object containing the frequent words and their counts.
 */
export function findFrequentWords(text: string, threshold: number = 10): { [key: string]: number } {
    const words = text.match(/\b\w+\b/g);            // regex to match words
    const wordCount: { [key: string]: number } = {}; // empty dictionary to store word counts
    if (words) {
        words.forEach(word => {
            word = word.toLowerCase(); // convert to lowercase to avoid case sensitivity
            wordCount[word] = (wordCount[word] || 0) + 1; // increment the count for each word
        });
    }

    return Object.fromEntries(Object.entries(wordCount).filter(([_, count]) => count > threshold)); // filter out words with counts less or equal than the threshold
}