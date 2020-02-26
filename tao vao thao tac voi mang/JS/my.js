let x = 0;
let array = [];

function add() {
    array[x] = document.getElementById('txtValue').value;
    alert('Gia tri: ' + array[x] + 'duoc gan vao chi so ' + x + ' cua mang');
    x++;
    document.getElementById('txtValue').value = '';
}

function display_array() {
    let e = '<hr>';
    for (let i = 0; i < array.length; i++) {
        e += 'Phan tu thu ' + i + 'la: ' + array[i] + '<br>';
    }
    document.getElementById('result').innerHTML = e;
}