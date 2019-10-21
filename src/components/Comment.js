import React from 'react'
import axios from 'axios'

class Comment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: [],
            comment: [],
            flag:false
        }
    }
    componentWillMount() {
        axios.get('/api/4/story/' + this.props.location.state.id + '/short-comments').then((res) => {
            console.log(res)
            this.setState({
                arr: res.data.comments
            })
        })
        axios.get('/api/4/story/'+this.props.location.state.id+'/long-comments').then((res)=>{
            console.log(res)
            // console.log(res.data.comments)
            this.setState({
                comment:res.data.comments
            })
        })
    }
    render() {
        console.log(this.props)
        console.log(this.state.arr)
        return (
            <div className='CommentBox'>
                <div className='Comment'>
                    <span onClick={this.shang.bind(this)} className="iconfont icon-xia"></span>
                    <span><em>{this.state.arr.length}</em>条评语</span>
                    <span><img src={require('../assest/images/ipone_03.jpg')} alt=""/></span>
                </div>
                {/*长评*/}
                <div className='comments' ref='comments' onClick={this.tocomment.bind(this)}>
                    <h1>
                        <span>{this.state.comment.length}</span>条长评语
                        <img ref='pico' style={{display: 'block'}} src={require('../assest/images/lengcomments_03.jpg')} alt=""/>
                        <img ref='pict' style={{display: 'none'}} src={require('../assest/images/lengcomments1_03.jpg')} alt=""/>
                    </h1>
                </div>
                <div ref='emp' style={{display:this.state.comment.length>0?'none':'block'}} className='empy'>
                    <div className='kong'>
                        <img src={require('../assest/images/lengthpic_03.jpg')} alt=""/>
                        <p>深度长评虚位以待</p>
                    </div>
                </div>
                <div ref='mycom' style={{display:this.state.comment.length>0?'block':'none'}} className='mycomments'>
                    <ul>
                        {
                            this.state.comment.map((val,index)=>{
                                return <li>
                                    <div className='myPic'>
                                        <img src={val.avatar} alt=""/>
                                        <span>{val.author}</span>
                                        <div><i className='good_active-copy'></i>{val.likes}</div>
                                    </div>
                                    <p>{val.content}</p>
                                    <div className='time'>
                                        {/*{val.time}*/}
                                        01-18 19:05
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
                {/*短评*/}
                <div className='num' onClick={this.tocomments.bind(this)}>
                    <h1><span>{this.state.arr.length}</span>条短语
                        <img ref='numpic' style={{display: 'none'}} src={require('../assest/images/lengcomments_03.jpg')} alt=""/>
                        <img ref='nump' style={{display: 'block'}} src={require('../assest/images/lengcomments1_03.jpg')} alt=""/>
                    </h1>
                </div>
                <div ref='ma' className='comMain' style={{display:'none'}}>
                    <ul>
                        {
                            this.state.arr.map((val, index) => {
                                return <li key={index}>
                                    <div className='myPic'>
                                        <img src={val.avatar} alt=""/>
                                        <span>{val.author}</span>
                                        <div><i className='good_active-copy'></i>{val.likes}</div>
                                    </div>
                                    <p>{val.content}</p>
                                    <div className='time'>
                                        {/*{val.time}*/}
                                        01-18 19:05
                                    </div>
                                </li>
                            })
                        }
                        {/*<li>*/}
                        {/*    <div className='myPic'>*/}
                        {/*        <img src="" alt=""/>*/}
                        {/*        <span>Slkjhksa</span>*/}
                        {/*        <div><i className='good_active-copy'></i>0</div>*/}
                        {/*    </div>*/}
                        {/*    <p>还念以前的分割线，还念以前的分割线，还念以前的分割线。</p>*/}
                        {/*   <div className='time'>*/}
                        {/*       01-18 19:05*/}
                        {/*   </div>*/}
                        {/*</li>*/}
                    </ul>
                </div>
            </div>
        )
    };
    tocomment(){
        this.refs.ma.style.display = 'none';
        this.refs.numpic.style.display = 'none'
        this.refs.nump.style.display = 'block';
        this.refs.pico.style.display  = 'block'
        this.refs.pict.style.display  = 'none';
        this.refs.mycom.style.display = 'block'
    }
    tocomments(){
        if(this.state.flag===false){
            this.refs.ma.style.display = 'block';
            this.refs.numpic.style.display = 'block'
            this.refs.nump.style.display = 'none';
            this.refs.pico.style.display  = 'none'
            this.refs.pict.style.display  = 'block';
            this.refs.mycom.style.display = 'none'
            this.state.flag = true
        }else{
            this.refs.ma.style.display = 'none';
            this.refs.numpic.style.display = 'none'
            this.refs.nump.style.display = 'block';
            this.refs.pico.style.display  = 'block'
            this.refs.pict.style.display  = 'none';
            this.refs.mycom.style.display = 'block'
            this.state.flag = false
        }

    }
    shang() {
        this.props.history.go(-1)
    }
};
export default Comment;