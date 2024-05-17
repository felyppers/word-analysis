import {
  countWords,
  countLetters,
  countSpaces,
  findFrequentWords,
} from "../src/utils";

describe("Text analysis utilities", () => {
  const sampleText =
    'This is a test. This test is only a test. Test this test for a test. Test test test test test. ';

  test("counts words correctly", () => {
    expect(countWords(sampleText)).toBe(21);
  });

  test("counts letters correctly", () => {
    expect(countLetters(sampleText)).toBe(70);
  });

  test("counts spaces correctly", () => {
    expect(countSpaces(sampleText)).toBe(21);
  });

  test("finds frequent words correctly when more than 10", () => {
    console.log(findFrequentWords(sampleText));
    expect(findFrequentWords(sampleText)).toEqual({ test: 11 });
  });
});
