{
    document.addEventListener('DOMContentLoaded',()=>{

        const h1=document.querySelector('h1')
        const print=(event)=>{
            let output=''
            output+=`alt: ${event.altKey} <br>`
            output+=`ctrl: ${event.ctrlKey} <br>`
            output+=`shift: ${event.shiftKey} <br>`
            output+=`code: ${typeof(event.code)!=='undefined'?event.code:event.keyCode} <br>`
            h1.innerHTML=output

        }
        document.addEventListener('keydown',print)
        document.addEventListener('keyup',print)


    })
    
}
//키보드를 누르면 화면에 어떤 키를 눌렀는지 출력이 되고 
//shift,ctrl,alt키를 누르면 false에서 true로 바뀐다. 