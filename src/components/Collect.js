import React  from 'react'
var myArr=[];
class Collect extends React.Component{
    componentWillMount() {
        for(var i=0;i<localStorage.length;i++){
               if(myArr.indexOf(this.props.location.state.id)===-1){
                   myArr.push(JSON.parse(localStorage.getItem(localStorage.key(i))))
                   console.log(myArr,11111)
               }
            }
    }
    render() {
        console.log(this.props)
        return (
        <div className='collectBox'>
            <div className='collect'>
                <ul>
                    <li onClick={this.myIndex.bind(this)}><a href="#"><img src={require('../assest/nav01.jpg')} alt=""/></a></li>
                    <li><a href="#"><img src={require('../assest/images/collect_03.jpg')} alt=""/></a></li>
                </ul>
            </div>
            <div className='collectMain'>
                <ul>
                    {
                        myArr.map((val,index)=>{
                            return <li key={index} onClick={this.myCollect.bind(this)}>
                                <p>{val.title}</p>
                                <img src={val.image} alt=""/>
                            </li>
                        })
                    }
                    {/*<li>*/}
                    {/*    <p>卡机打卡机脚手架搭建撒娇拉升可乐的</p>*/}
                    {/*    <img src="http://img1.imgtn.bdimg.com/it/u=2174909441,2495215020&fm=26&gp=0.jpg" alt=""/>*/}
                    {/*</li>*/}
                </ul>
            </div>
            <div onClick={this.close.bind(this)} ref='div' className='cli'></div>
            <div ref='thediv' className='myLeft'>
                <div className='indexNav'>
                    <div className='navTop'>
                        <img src={require('../assest/name.jpg')} alt=""/>
                        <span>张俊昌</span>
                    </div>
                    <div className='navBot'>
                        <ul>
                            <li><a href="#"><img src={require('../assest/navleft01.jpg')} alt=""/></a></li>
                            <li><a href="#"><img src={require('../assest/navleft02.jpg')} alt=""/></a></li>
                        </ul>
                    </div>
                </div>
                <h1><a href="#" onClick={this.myClose.bind(this)}><img src={require('../assest/index_03.jpg')} alt=""/>首页</a></h1>
            </div>
        </div>
    )
    };
    myIndex(){
        this.refs.div.style.display='block'
        this.refs.thediv.style.display='block'
    };
    close(){
        this.refs.div.style.display='none'
        this.refs.thediv.style.display='none'

    };
    myClose(){
        this.refs.div.style.display='none'
        this.props.history.push({
            pathname :'/index',
        })
    };
    myCollect(){
        this.props.history.push({
            pathname:'/detail',
            state:{
                sid:this.props.location.state.id
            }
        })
    }
};
export default  Collect