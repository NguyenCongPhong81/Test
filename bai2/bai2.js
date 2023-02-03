const fs = require('fs');

function describeArray(matrix) {
    const rowDescriptions = [];
    const colDescriptions = [];
    const n = matrix.length;

    // Describe rows
    for (let row = 0; row < n; row++) {
        let currentCount = 0;
        const rowDescription = [];
        for (let col = 0; col < n; col++) {
            if (matrix[row][col] === 1) {
                currentCount++;
            } else if (currentCount > 0) {
                rowDescription.push(currentCount);
                currentCount = 0;
            }
        }
        if (currentCount > 0) {
            rowDescription.push(currentCount);
        }
        rowDescriptions.push(rowDescription);
    }

    // Describe columns
    for (let col = 0; col < n; col++) {
        let currentCount = 0;
        const colDescription = [];
        for (let row = 0; row < n; row++) {
            if (matrix[row][col] === 1) {
                currentCount++;
            } else if (currentCount > 0) {
                colDescription.push(currentCount);
                currentCount = 0;
            }
        }
        if (currentCount > 0) {
            colDescription.push(currentCount);
        }
        colDescriptions.push(colDescription);
    }

    return { rowDescriptions, colDescriptions };
}

function readMatrixFromFile(filepath) {
    const content = fs.readFileSync(filepath, 'utf-8');
    const lines = content.split('\n');
    const n = parseInt(lines[0]);
    const matrix = [];
    for (let i = 1; i <= n; i++) {
        matrix.push(lines[i].split(' ').map(Number));
    }
    return matrix;
}

function writeDescriptionsToFile(descriptions, filepath) {
    let content = '';

    // Write row descriptions
    descriptions.rowDescriptions.forEach(rowDescription => {
        content += rowDescription.join(' ') + '\n';
    });

    // Write column descriptions
    descriptions.colDescriptions.forEach(colDescription => {
        content += colDescription.join(' ') + '\n';
    });

    fs.writeFileSync(filepath, content);
}

const matrix = readMatrixFromFile('in.txt');
const descriptions = describeArray(matrix);
writeDescriptionsToFile(descriptions, 'out.txt');