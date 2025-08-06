import React,{Component} from "react";

class Fetch extends Component{
    //자바스크립트가 원하는 방향을 간단하게 말하면 비동기이다
    componentDidMount = async() => {
        const response = await fetch('https://timeapi.io/api/time/current/zone?timeZone=Asia/Seoul',{
        method:'POST',
        headers:{'Content-type':'application/json'},
        body:{a:"react", b:300},
        }) // 1)
        const body = await response.json(); // 2)
        alert(body.date) // 3)
    }
    
    render(){
        return(
            <h1>hello</h1>
        )
    }
}
export default Fetch;


/*
웹에서는 클라이언트와 서버가 http프로토콜을 통해 요청과 응답을 주고 받는다
http에서 사용하는 방식은 여러가지가 있는데
*/