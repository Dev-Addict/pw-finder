# PW Finder

This project help you find persian words with your custom filters. Also, you can use the list of Persian words in this library.

## Installation

Using NPM:

```
npm install --save-dev pw-finder
```

Using Yarn:

```
yarn add pw-finder
```

## Usage

### Finding words

You can find words using the `find` function. Look at the example below:

```
import {find} from 'pw-finder';

const words = find({length: 5, letters: ['ا', 'ب', 'پ', 'ت']});
```

Usage of `find` function is very easy. Take a look at function typing:

```
(options?: Options) => string[];
```

You can pass argument of `options` to the function but if you don't want to pass anything you can, and you will receive all the words.

The `options` object that you are passing doesn't contain of `endsWith`, `includes`, `length`, `letters`, `repetition`, and `startsWith`. Keep in mind none of these properties are required. Take a look at table below to understand each property.

| Property    | Type            | Description                                                                                     |
| :---       | :---            | :---                                                                                            |
| endsWith   | String          | This property if passed, forces all of the results to end with the passed string                |
| includes   | String          | This property if passed, forces all of the results to include the passed string                 |
| length     | Number          | This property if passed, forces all of the results to have the same length as the passed number |
| letters    | Array of String | This property if passed, forces all of the results to contain the passed letters                |
| repetition | Boolean         | This property if passed as `false`, will force all results to have no letter repetition         |
| startsWith | String          | This property if passed, forces all of the results to start with the passed string              |

###  Persian words list

In order to get the list of the persian words used you can just import the `words`. Look at the example below:

```
import {words} from 'pw-finder';
```

## Credit

The credit for to words list goes to [Persian-Words-Database](https://github.com/shahind/Persian-Words-Database) project from [shahind](https://github.com/shahind).