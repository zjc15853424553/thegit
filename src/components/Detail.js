import React from 'react'
import axios from 'axios'
import '../assest/css/mypublic.css'
import {NavLink} from 'react-router-dom'
class Detail extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            id:'',
            divArr:[],
            obj:'',
        }
    };
    componentWillMount() {
        // console.log(this.props.location.state.sid);
        axios.get(
            '/api/4/news/'+this.props.location.state.sid
        ).then((res)=>{
            // console.log(res)
            // console.log(res.data)
            // this.divArr=res.data,
            this.setState(
                {
                    id:res.data.id,
                    divArr:res.data,
                    image:res.data.image,
                    title:res.data.title,
                    obj:res.data
                })
        })
    }
    render() {
        // console.log(this.props)
        // console.log(this.state.id)
        return(
            <div>
                <div className='myNav'>
                    <div className='theLeft'><a href="#" onClick={this.play.bind(this)}><i className="iconfont icon-xia"></i></a></div>
                    <ul className='ul'>
                        <li onClick={this.open.bind(this)}><a href="#"><i className="iconfont icon-fenxiang"></i></a></li>
                        <li onClick={this.collect.bind(this,this.state.id)}>
                            <NavLink to='/collect'><i className="iconfont icon-xingzhuang60kaobei2"></i></NavLink></li>
                        <li onClick={this.comment.bind(this,this.state.id)}><NavLink to='/comment'><i className="iconfont icon-xinxi">6</i></NavLink></li>
                        <li><a href="#"><i className="iconfont icon-good_active-copy">25</i></a></li>
                    </ul>
                </div>
                <div className='myPic'>
                    <img src={this.state.obj.image} alt=""/>
                    <p>{this.state.obj.title}</p>
                </div>

                <div dangerouslySetInnerHTML = {{ __html: this.state.divArr.body}}/>
                <div onClick={this.close.bind(this)} ref='div' className='cli'></div>
                <div ref='thediv' className='Detafiex'>
                    <h1>分享</h1>
                    <ul>
                        <li><a href="#"><img src={require('../assest/images/xinlang.jpg')} alt=""/></a></li>
                        <li><a href="#"><img src={require('../assest/images/weixin.jpg')} alt=""/></a></li>
                        <li><a href="#"><img src={require('../assest/images/pengyouquan.jpg')} alt=""/></a></li>
                    </ul>
                    <ul>
                        <li><a href="#"><img src={require('../assest/images/xinlang.jpg')} alt=""/></a></li>
                        <li><a href="#"><img src={require('../assest/images/xinlang.jpg')} alt=""/></a></li>
                        <li><a href="#"><img src={require('../assest/images/xinlang.jpg')} alt=""/></a></li>
                    </ul>
                    <ul>
                        <li><a href="#"><img src={require('../assest/images/gengduo.jpg')} alt=""/></a></li>
                    </ul>
                </div>
            </div>
        )
    };
    collect(x){
        localStorage.setItem(Number(this.state.id),JSON.stringify(this.state.obj));
        this.props.history.push({
            pathname:'/collect',
            state:{
                id:x
            }
        })
    }
    open(){
        this.refs.div.style.display = 'block'
        this.refs.thediv.style.display = 'block'
    }
    close(){
        this.refs.div.style.display = 'none'
        this.refs.thediv.style.display = 'none'
    };
    play(){
        this.props.history.go(-1)
    };
    comment(x){
        this.props.history.push({
            pathname:'/comment',
            state:{
                id:x
            }
        })
    }
};
export default Detail