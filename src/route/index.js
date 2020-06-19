import { BrowserRouter as Router,HashRouter,Route,Link} from 'react-router-dom';
import React from 'react'
import Test from '../component/test';
import Home from '../component/home';
import Todo from '../component/todoList';
import Antd from '../component/antd';
 class Baokuo extends React.Component{
     render(){
         return (
            <Router>
             <Route exact path="/" component={Antd}/>
             <Route exact path="/Test" component={Test}/>
            </Router>
         );
     }
 }
 export default Baokuo;