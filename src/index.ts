import persianWords from './data/words.json';

export const words: string[] = persianWords as string[];

interface Options {
	endsWith?: string;
	includes?: string;
	length?: number;
	letters?: string[];
	repetition?: boolean;
	startsWith?: string;
}

export const find = ({
	endsWith,
	includes,
	length,
	letters = [],
	repetition = true,
	startsWith,
}: Options | undefined = {}) => {
	let results = words;

	if (letters.includes('ا') && !letters.includes('آ'))
		letters = [...letters, 'آ'];
	if (!letters.includes('ا') && letters.includes('آ'))
		letters = [...letters, 'ا'];

	if (length) results = results.filter((word) => word.length === length);

	if (letters.length)
		results = results.filter((word) =>
			Array.from(word).every((letter) => letters.includes(letter))
		);

	if (startsWith)
		results = results.filter((word) => word.startsWith(startsWith));

	if (endsWith) results = results.filter((word) => word.endsWith(endsWith));

	if (includes) results = results.filter((word) => word.includes(includes));

	if (!repetition)
		results = results.filter((word) => word.length === new Set(word).size);

	return results;
};
