const names = [
  'Aaran',
  'Aaren',
  'Aarez',
  'Aarman',
  'Aaron',
  'Aaron-James',
  'Aarron',
  'Aaryan',
  'Aaryn',
  'Aayan',
  'Aazaan',
  'Abaan',
  'Abbas',
  'Abdallah',
  'Abdalroof',
  'Abdihakim',
  'Abdirahman',
  'Abdisalam',
  'Abdul',
  'Abdul-Aziz',
  'Abdulbasir',
  'Abdulkadir',
  'Abdulkarem',
  'Smith',
  'Jones',
  'Coollastname',
  'enter_name_here',
  'Ze',
  'Zechariah',
  'Zeek',
  'Zeeshan',
  'Zeid',
  'Zein',
  'Zen',
  'Zendel',
  'Zenith',
  'Zennon',
  'Zeph',
  'Zerah',
  'Zhen',
  'Zhi',
  'Zhong',
  'Zhuo',
  'Zi',
  'Zidane',
  'Zijie',
  'Zinedine',
  'Zion',
  'Zishan',
  'Ziya',
  'Ziyaan',
  'Zohaib',
  'Zohair',
  'Zoubaeir',
  'Zubair',
  'Zubayr',
  'Zuriel',
  'Xander',
  'Jared',
  'Courtney',
  'Gillian',
  'Clark',
  'Jared',
  'Grace',
  'Kelsey',
  'Tamar',
  'Alex',
  'Mark',
  'Tamar',
  'Farish',
  'Sarah',
  'Nathaniel',
  'Parker',
];

const emailCompany = [
  'gmail.com',
  'yahoo.com',
  'hotmail.com',
  'outlook.com',
  'aol.com',
  'icloud.com',
  'mail.com',
  'yandex.com',
];

const thoughts = [
  'JavaScript is a programming language that lets you make your own web applications.',
  'React is a JavaScript library for building user interfaces.',
  'Vue is a JavaScript framework for building user interfaces.',
  'Angular is a JavaScript framework for building user interfaces.',
  'Css is a language that describes how HTML elements are to be displayed on screen.',
  'Html is a markup language that describes how HTML elements are to be displayed on screen.',
  'MongoDB is a NoSQL database.',
  'Express is a Node.js web application framework.',
  'Node.js is a JavaScript runtime environment for executing JavaScript code outside of a browser.',
  'Heroku is a cloud platform as a service (PaaS) that allows developers to deploy their applications in the cloud.',
  'Git is a version control system.',
  'Github is a web-based Git repository hosting service.',
  'Handlebars is a templating language that is used to generate HTML markup.',
  'Mocha is a JavaScript test framework.',
  'Chai is a JavaScript assertion library.',
  'Sinon is a JavaScript test framework.',
  'Jest is a JavaScript test framework.',
  'Jasmine is a JavaScript test framework.',
  'Ajax is a JavaScript library for making asynchronous HTTP requests.',
  'Fetch is a JavaScript library for making asynchronous HTTP requests.'
];

  
// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
  `${getRandomArrItem(names)}${getRandomArrItem(names)}`;


const getRandomEmail = (name) => {
  return `${name}@${getRandomArrItem(emailCompany)}`;
};

const getRandomThought = () => {
  return getRandomArrItem(thoughts);
}

// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomEmail, getRandomThought };
