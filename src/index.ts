import { processFile } from './fileProcessor';

/**
 * The file path provided as a command line argument.
 * @type {string}
 */
const filePath = process.argv[2];

// Validate the file path
if (!filePath) {
    console.error('Error: Please provide a file path as an argument.');
    process.exit(1);
}

// Process the file
processFile(filePath).catch(error => {
    console.error('Error processing file:', error);
    process.exit(1);
});