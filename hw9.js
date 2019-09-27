// ************************* REQUIRED ******************************
function typeMessage  (message, velocity) {
    container=required.appendChild(document.createElement('p'))
    container.style = `color: magenta;`
    container.id = 'symbolOutputString'
    var step = 0
    message.split('').reduce((prev,cur,index)=>{
        prev+=cur;
        if ((index+1)%velocity==0) {
            console.log(index, prev)
            setTimeout(()=>container.innerText=prev,500+step)
            step+=500}
            console.log(index, prev)
        return prev;
    },'')
}
typeSymb.onclick = (event)=>{
    
    outputStr.value==''? alert('Введите строку для посимвольного вывода!!!') :typeMessage(outputStr.value,1)
    outputStr.value = ''
}
outputStr.onkeypress = (event)=>symbolOutputString.innerText=''

// ******************* ADDITIONAL #2 *******************************************

findStyle.onclick = (event)=>{
    alert('Ща найду!!!')
}