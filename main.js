container = document.querySelector('#container');



function createBoxs(row) {
    for(let j = 1; j <= row; j ++){
        for (let i = 1 ; i <= row; i++){
            const div = document.createElement('div');
            div.classList.add('boxs');
            // div.textContent = [i]; 
            container.appendChild(div); 
            div.addEventListener('mouseover', () => {
                div.classList.add('color');
            });
        }  
    }
}

createBoxs(16);


