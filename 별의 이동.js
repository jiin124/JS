﻿{
    document.addEventListener('DOMContentLoaded',()=>{


        // 별의 초기 설정
        const star=document.querySelector('h1')
        star.style.position='absolute'

        //별의 이동을 출력하는 기능
        let [x,y]=[0,0]
        const block=20
        const print=()=>{
            star.style.left=`${x*block}px`
            star.style.top=`${y*block}px`
        }
        print()

        //별을 이동하는 기능
        const [left,up,right,down]=[37,38,39,40]//방향키를 쉽게 사용하게, 변수를 사용해 이름 붙임
        document.body.addEventListener('keydown',(event)=>{
            switch (event.keyCode){
                case left:
                    x-=1
                    break
                case up:
                    y-=1
                    break
                case down:
                    y+=1
                    break
                case right:
                    x+=1
                    break
            }
            print()
            
        })

    })
    
}
