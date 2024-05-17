import axios from 'axios';
import fs from 'fs/promises';
import { countWords, countLetters, countSpaces, findFrequentWords } from './utils';

/**
 * Processes a file and performs word analysis on its content.
 * @param filePath - The path/url to the file to be processed.
 * @returns void.
 */
export async function processFile(filePath: string): Promise<void> {
    let content: string;

    // Read the file content
    if (filePath.startsWith('http')) {
        const response = await axios.get(filePath); // Fetch the external file content
        content = response.data;
    } else {
        content = await fs.readFile(filePath, 'utf-8');
    }

    // Perform word analysis
    const totalWords = countWords(content);
    const totalLetters = countLetters(content);
    const totalSpaces = countSpaces(content);
    const frequentWords = findFrequentWords(content);

    // Output the results
    console.log(`\n-----------------------------------------`);
    console.log(`EXECUTION RESULTS`);
    console.log(`-----------------------------------------`);
    console.log(`Total words: ${totalWords}`);
    console.log(`Total letters: ${totalLetters}`);
    console.log(`Total spaces: ${totalSpaces}`);
    console.log('Frequent words:', frequentWords);
    console.log(`-----------------------------------------\n`);
}