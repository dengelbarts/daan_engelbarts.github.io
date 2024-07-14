document.getElementById('inputField').addEventListener('input', function() {
    let inputValue = document.getElementById('inputField').value - 1; // Subtract 1 to make line numbers 1-based
    let fileNamesC = ['C0.txt', 'C1.txt', 'C2.txt', 'C3.txt', 'C4.txt', 'C5.txt', 'C6.txt'];
    let fileNamesR = ['R1.txt', 'R2.txt', 'R3.txt', 'R4.txt', 'R5.txt'];
    let fileNamesC0R = ['C0R1.txt', 'C0R2.txt', 'C0R3.txt', 'C0R4.txt', 'C0R5.txt'];
    let fileNamesC1R = ['C1R1.txt', 'C1R2.txt', 'C1R3.txt', 'C1R4.txt', 'C1R5.txt'];
    let fileNamesC2R = ['C2R1.txt', 'C2R2.txt', 'C2R3.txt', 'C2R4.txt', 'C2R5.txt'];
    let fileNamesC3R = ['C3R1.txt', 'C3R2.txt', 'C3R3.txt', 'C3R4.txt', 'C3R5.txt'];
    let fileNamesC4R = ['C4R1.txt', 'C4R2.txt', 'C4R3.txt', 'C4R4.txt', 'C4R5.txt'];
    let fileNamesC5R = ['C5R1.txt', 'C5R2.txt', 'C5R3.txt', 'C5R4.txt', 'C5R5.txt'];
    let fileNamesC6R = ['C6R1.txt', 'C6R2.txt', 'C6R3.txt', 'C6R4.txt', 'C6R5.txt'];
    let promisesC = fileNamesC.map(fileName => fetch(fileName).then(response => response.text()));
    let promisesR = fileNamesR.map(fileName => fetch(fileName).then(response => response.text()));
    let promisesC0R = fileNamesC0R.map(fileName => fetch(fileName).then(response => response.text()));
    let promisesC1R = fileNamesC1R.map(fileName => fetch(fileName).then(response => response.text()));
    let promisesC2R = fileNamesC2R.map(fileName => fetch(fileName).then(response => response.text()));
    let promisesC3R = fileNamesC3R.map(fileName => fetch(fileName).then(response => response.text()));
    let promisesC4R = fileNamesC4R.map(fileName => fetch(fileName).then(response => response.text()));
    let promisesC5R = fileNamesC5R.map(fileName => fetch(fileName).then(response => response.text()));
    let promisesC6R = fileNamesC6R.map(fileName => fetch(fileName).then(response => response.text()));
    Promise.all(promisesC.concat(promisesR, promisesC0R, promisesC1R, promisesC2R, promisesC3R, promisesC4R, promisesC5R, promisesC6R))
        .then(files => {
            let filesC = files.slice(0, fileNamesC.length);
            let filesR = files.slice(fileNamesC.length, fileNamesC.length + fileNamesR.length);
            let filesC0R = files.slice(fileNamesC.length + fileNamesR.length, fileNamesC.length + fileNamesR.length + fileNamesC0R.length);
            let filesC1R = files.slice(fileNamesC.length + fileNamesR.length + fileNamesC0R.length, fileNamesC.length + fileNamesR.length + fileNamesC0R.length + fileNamesC1R.length);
            let filesC2R = files.slice(fileNamesC.length + fileNamesR.length + fileNamesC0R.length + fileNamesC1R.length, fileNamesC.length + fileNamesR.length + fileNamesC0R.length + fileNamesC1R.length + fileNamesC2R.length);
            let filesC3R = files.slice(fileNamesC.length + fileNamesR.length + fileNamesC0R.length + fileNamesC1R.length + fileNamesC2R.length, fileNamesC.length + fileNamesR.length + fileNamesC0R.length + fileNamesC1R.length + fileNamesC2R.length + fileNamesC3R.length);
            let filesC4R = files.slice(fileNamesC.length + fileNamesR.length + fileNamesC0R.length + fileNamesC1R.length + fileNamesC2R.length + fileNamesC3R.length, fileNamesC.length + fileNamesR.length + fileNamesC0R.length + fileNamesC1R.length + fileNamesC2R.length + fileNamesC3R.length + fileNamesC4R.length);
            let filesC5R = files.slice(fileNamesC.length + fileNamesR.length + fileNamesC0R.length + fileNamesC1R.length + fileNamesC2R.length + fileNamesC3R.length + fileNamesC4R.length, fileNamesC.length + fileNamesR.length + fileNamesC0R.length + fileNamesC1R.length + fileNamesC2R.length + fileNamesC3R.length + fileNamesC4R.length + fileNamesC5R.length);
            let filesC6R = files.slice(fileNamesC.length + fileNamesR.length + fileNamesC0R.length + fileNamesC1R.length + fileNamesC2R.length + fileNamesC3R.length + fileNamesC4R.length + fileNamesC5R.length, fileNamesC.length + fileNamesR.length + fileNamesC0R.length + fileNamesC1R.length + fileNamesC2R.length + fileNamesC3R.length + fileNamesC4R.length + fileNamesC5R.length + fileNamesC6R.length);
            let linesC = getLines(filesC, fileNamesC, inputValue);
            let linesR = getLines(filesR, fileNamesR, inputValue);
            let linesC0R = getLines(filesC0R, fileNamesC0R, inputValue);
            let linesC1R = getLines(filesC1R, fileNamesC1R, inputValue);
            let linesC2R = getLines(filesC2R, fileNamesC2R, inputValue);
            let linesC3R = getLines(filesC3R, fileNamesC3R, inputValue);
            let linesC4R = getLines(filesC4R, fileNamesC4R, inputValue);
            let linesC5R = getLines(filesC5R, fileNamesC5R, inputValue);
            let linesC6R = getLines(filesC6R, fileNamesC6R, inputValue);
            document.getElementById('outputTextC').innerHTML = linesC.join('<br>');
            document.getElementById('outputTextR').innerHTML = linesR.join('<br>');
            document.getElementById('outputTextC0R').innerHTML = linesC0R.join('<br>');
            document.getElementById('outputTextC1R').innerHTML = linesC1R.join('<br>');
            document.getElementById('outputTextC2R').innerHTML = linesC2R.join('<br>');
            document.getElementById('outputTextC3R').innerHTML = linesC3R.join('<br>');
            document.getElementById('outputTextC4R').innerHTML = linesC4R.join('<br>');
            document.getElementById('outputTextC5R').innerHTML = linesC5R.join('<br>');
            document.getElementById('outputTextC6R').innerHTML = linesC6R.join('<br>');
        });
});

function getLines(files, fileNames, inputValue) {
    return files.map((file, i) => {
        let fileNameWithoutExtension = fileNames[i].split('.')[0];
        let line = file.split('\n')[inputValue];
        let output = line !== undefined ? line.split(':')[1].trim() : '100.0%'; // Split the line at the colon and take the second part
        return fileNameWithoutExtension + ': ' + output;
    });
}