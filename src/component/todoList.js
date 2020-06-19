import React, { Component, Fragment } from 'react'
import { Button } from 'antd';
import "antd/dist/antd.css";

class todo extends Component {
    constructor(props){
        super(props)
        this.state={
            value2: '',   // 这里才是数据
            list: []           //这里才是数据2
        }
    }
    handleChange = (e) =>{
        this.setState({
            value2: e.target.value
          })
    }
    tijiao = () => {
        let list2 = [...this.state.list, this.state.value2]
        this.setState({
          list: list2,
          value2: ''
        })
      }
      deleteone(index) {
        let list2 = [...this.state.list]
        list2.splice(index, 1)
        this.setState({
          list: list2
        })
      }
    render(){
        return (
            <Fragment>
                <input value={this.state.value2}  onChange={this.handleChange}/>
                <Button type="primary" onClick={this.tijiao}>提交</Button>
               <ul>
                   {
                       this.state.list.map((item,index)=>{
                           return (
                               <li key={index}
                               onClick={this.deleteone.bind(this, index)}
                               >{item}</li>
                           )
                       })
                   }
               </ul>
           </Fragment>
        )
    }

}
export default todo