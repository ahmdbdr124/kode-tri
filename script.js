const firstNames = [
    "ELU"
];

const lastNames = [
    "KONTOL!!!"
];

function generateName() {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    return `${firstName} ${lastName}`;
}

document.getElementById('generateButton').addEventListener('click', function() {
    const name = generateName();
    document.getElementById('generatedName').innerText = name;
});
