const countries = [
    'venezuela',
    'estados unidos',
    'canada',
    'mexico',
    'brasil',
    'argentina',
    'colombia',
    'espana',
    'francia',
    'alemania',
    'italia',
    'reino unido',
    'australia',
    'japon',
    'china',
    'india',
    'rusia',
    'sudafrica',
    'egipto',
    'nigeria'
];

const phoneData = [
    { code: '58', numberLength: 10 },
    { code: '1', numberLength: 9 },
    { code: '1', numberLength: 9 },
    { code: '52', numberLength: 10 },
    { code: '55', numberLength: 10 },
    { code: '54', numberLength: 10 },
    { code: '57', numberLength: 9 },
    { code: '34', numberLength: 9 },
    { code: '33', numberLength: 9 },
    { code: '49', numberLength: 9 },
    { code: '39', numberLength: 9 },
    { code: '44', numberLength: 9 },
    { code: '61', numberLength: 9 },
    { code: '81', numberLength: 9 },
    { code: '86', numberLength: 9 },
    { code: '91', numberLength: 9 },
    { code: '7', numberLength: 9 },
    { code: '27', numberLength: 9 },
    { code: '20', numberLength: 9 },
    { code: '234', numberLength: 10 }      
];

const currentYear = new Date().getFullYear();

const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? true : false;

const birthdayDate = {
    month : [
        { name: "january", days: 31 },
        { name: "february", days: 28 },
        { name: "march", days: 31 },
        { name: "april", days: 30 },
        { name: "may", days: 31 },
        { name: "june", days: 30 },
        { name: "july", days: 31 },
        { name: "august", days: 31 },
        { name: "september", days: 30 },
        { name: "october", days: 31 },
        { name: "november", days: 30 },
        { name: "december", days: 31 },
    ],
    year: Array.from({ length: 100 - 18 }, (_, i) => {
        const year = currentYear - 100 + i + 1;
        return {
            name: year.toString(),
            isLeap: isLeapYear(year),
        };
    }),
}

export { countries, phoneData, birthdayDate }