{
    document.addEventListener('DOMContentLoaded',()=>{

        //문서객체 추출하기
        const output=document.querySelector('#output')
        const radios=document.querySelectorAll('[name=pet]')

        //모든 라디오 버튼에
        radios.forEach((radio)=>{
            //이벤트 연결
            radio.addEventListener('change',(event)=>{
                const current=event.currentTarget
                if(current.checked){
                    output.textContent=`좋아하는 반려동물은 ${current.value}이군요!`
                }
            })
        })


    })
    
}
/*<body>
    <h3># 좋아하는 반려동물을 선택해주세요</h3>
    <input type="radio" name="pet" value="강아지">
    <span>강아지</span>
    <input type="radio" name="pet" value="고양이">
    <span>고양이</span>
    <input type="radio" name="pet" value="햄스터">
    <span>햄스터</span>
    <input type="radio" name="pet" value="기타">
    <span>기타</span>
    <hr>
    <h3 id="output"></h3>

</body>*/