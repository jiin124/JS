//inch를 cm로 바꾸는 프로그램
{
    document.addEventListener('DOMContentLoaded',()=>{

        const input=document.querySelector('input')
        const button=document.querySelector('button')
        const p=document.querySelector('p')

        button.addEventListener('click',()=>{

            //입력을 숫자로 변환한다.
            const inch=Number(input.value)

            //숫자가 아니라면 바로 리턴
            if(isNaN(inch)){
                p.textContent='숫자를 입력해주세요'
                return
            }
            //변환해서 출력한다.
            const cm=inch*2.54
            p.textContent=`${cm} cm`
        })
        

    })
    
}
