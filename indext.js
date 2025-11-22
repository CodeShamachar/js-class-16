let allList = document.querySelectorAll('.list');
let rightBox = document.getElementById('right');
let leftBox = document.getElementById('left');

for (const listItem of allList) {
    listItem.addEventListener('dragstart', (e)=>{
        let selecItem = e.target;
        
        rightBox.addEventListener('dragover', (e)=>{
            e.preventDefault();
        })
        

        rightBox.addEventListener('drop', (e)=>{
            rightBox.appendChild(selecItem);
            selecItem = null;
        })


        leftBox.addEventListener('dragover', (e)=>{
            e.preventDefault();
        })
        

        leftBox.addEventListener('drop', (e)=>{
            leftBox.appendChild(selecItem);
            selecItem = null;
        })
    })
}