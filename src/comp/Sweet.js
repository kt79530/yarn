import React, {Component} from "react";
import { Button } from "react-bootstrap";
import Swal from 'sweetalert2';

class Sweet extends Component{

    //포지션이 수정되면 수정됐다고 체크
    saveAlert = (flag, positonflag, e) => {
        Swal.fire({
            position:positonflag,
            icon: 'success',
            title: flag+'No Thanks',
            showConfirmButton: false,
            timer:1500
        })
    }

   
    //동기 요청과 결과가 동시에
        componentDidMount(){
            Swal.fire('1.sweetAlert').then(result =>
            {alert('2. result.value :' + result.value);}
            );
        }
         
    render(){
        return(
            <>
            <h1>sweetalert2</h1>
            <Button onClick={e => this.saveAlert('save', 'center')}></Button>
            <Button onClick={e => this.saveAlert('save', 'center')}></Button>
            </>
        )

    }
}

export default Sweet;