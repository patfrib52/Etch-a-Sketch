const container = document.querySelector('#container');
const br = document.createElement('br');
const div2 = document.createElement('div');

function createBoxs(row) {
    for(let j = 1; j <= row; j ++){
        for (let i = 1 ; i <= row; i++){
            const div = document.createElement('div');
            div.classList.add('boxs')
            div2.classList.add('space')
            div.textContent = [i];
            container.appendChild(div); 
        }  
}
    }
    
createBoxs(16);


