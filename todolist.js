{
    document.addEventListener('DOMContentLoaded',()=>{
        
        //문서 객체를 가져온다.
        const input=document.querySelector('#todo')
        const todoList=document.querySelector('#todo-list')
        const addButton=document.querySelector('#add-button')

        //변수를 선언합니다.
        let keyCount=0

        //함수를 선언한다
        const addTodo=()=>{
            //입력 양식에 내용이 없으면 추가하지 않는다.
            if(input.value.trim()===''){
                alert('할 일을 입력해주세요')
                return
            }

            //문서 객체를 설정한다.
            const item=document.createElement('div')
            const checkbox=document.createElement('input')
            const text=document.createElement('span')
            const button=document.createElement('button')

            //문서 객체를 식별할 키를 생성한다.
            const key=keyCount
            keyCount+=1//이후에 removeTodo() 함수에서 문서 객체를 쉽게 제거하기 위한 용도로 만든 변수

            //item 객체를 조작하고 추가한다.
            item.setAttribute('data-key',key)
            item.appendChild(checkbox)
            item.appendChild(text)
            item.appendChild(button)
            todoList.appendChild(item)

            //checkbox 객체를 조작하자
            checkbox.type='checkbox'
            checkbox.addEventListener('change',(event)=>{
                item.style.textDecoration=event.target.checked ? 'line-through': ''
            })

            //text 객체를 조작한다.
            text.textContent=input.value

            //button 객체를 조작한다. 
            button.textContent='제거'
            button.addEventListener('click',()=>{
                removeTodo(key)
            })

            //입력 양식의 내용을 비운다.
            input.value=''

        }
        
        const removeTodo=(key)=>{
            //식별키로 문서 객체 제거
            const item=document.querySelector(`[data-key="${key}"]`)
            todoList.removeChild(item)
        }

        //이벤트 연결
        addButton.addEventListener('click',addTodo)
        input.addEventListener('keyup',(event)=>{
            //입력양식에서 enter키를 누르면 바로 addTodo() 함수를 호출
            const ENTER=13
            if(event.keyCode===ENTER){
                addTodo()
            }
        })


    })
    
}
