import React, {Component} from "react";

class Es6 extends Component{

    //생성자 
    constructor(props){
        super(props);
        this.state = {};
    }
    //렌더링 된 후 마운트
    componentDidMount(){
        var jsString1 = '수업외 목적으로'
        var jsString2 = '사용하면 \n police에서 meet'
        console.log(jsString1 + 'What?' + jsString2 + '~');

        var Es6String1 = 'hey man~~'
        var Es6String2 = 'hello'
        console.log(`${Es6String1} 문자열 ${Es6String2} !! ____다음 줄입니다`);

        var LongString = "동해물과 백두산으로 만든 소주"
        console.log('startswith : ' + LongString.startsWith("asdfasdgqwe"));
        console.log('endswith : ' + LongString.endsWith("zxbcasdfjh"));
        console.log('includes : ' + LongString.includes(""));
    }
    render(){
        return(
            <>
            <h2>[asdgasbh]</h2>
            </>
        )
    }
}

export default Es6;