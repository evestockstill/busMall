import { userPicksArray } from '../src/app.js';
import { productDataArray } from './product-data.js';

function convertArray(array) {
    const returnArray = [];
    array.forEach(element => {

        returnArray.push(element.timesClicked);
    });
    return returnArray;
}
const ctx = document.getElementById('chart').getContext('2d');

const data = convertArray(userPicksArray);
const labelColors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];




document.getElementById('clicker').addEventListener('click', () => {
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labelColors,
            datasets: [{
                label: '# of Votes',
                data: convertArray(userPicksArray),
                backgroundColor: labelColors
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});