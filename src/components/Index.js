import React from 'react'
import axios from 'axios'
//引入组件
//引入的带三方的组件
import {Carousel, WingBlank} from 'antd-mobile';
import {NavLink} from 'react-router-dom'

class Index extends React.Component {
    state = {
        data: [],
        imgHeight: 176,
        stories: [],
        time: '',
        comd: []
    };
    getweek(time)
    {
        var week = new Date(time).getDay();
        if (week == 0) {
            week = "星期日";
        } else if (week == 1) {
            week = "星期一";
        } else if (week == 2) {
            week = "星期二";
        } else if (week == 3) {
            week = "星期三";
        } else if (week == 4) {
            week = "星期四";
        } else if (week == 5) {
            week = "星期五";
        } else if (week == 6) {
            week = "星期六";
        }
        return week
    }
    render() {
        return (
            <div className='navbox'>
                <div className='nav'>
                    <div className='navLeft'>
                        <ul>
                            <li onClick={this.myName.bind(this)}><a href="#"><img src={require('../assest/nav01.jpg')}
                                                                                  alt=""/></a></li>
                            <li><a href="#"><img src={require('../assest/nav02.jpg')} alt=""/></a></li>
                        </ul>
                    </div>
                    <div className='navRight'>
                        <ul>
                            <li><a href="#"><img src={require('../assest/nav03.jpg')} alt=""/></a></li>
                            <li><a href="#"><img src={require('../assest/nav04.jpg')} alt=""/></a></li>
                        </ul>
                    </div>
                </div>
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite

                    >
                        {this.state.data.map(val => (
                            <a onClick={this.theTo.bind(this, val.id)}
                               className='theA'
                               key={val}
                               style={{display: 'inline-block', width: '100%', height: this.state.imgHeight}}
                            >
                                <p className='po'>{val.title}</p>
                                <img
                                    src={val.image}
                                    alt=""
                                    style={{width: '100%', verticalAlign: 'top'}}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({imgHeight: 250 + 'px'});
                                    }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>
                <div className='main'>
                    <h2>今日新闻</h2>
                    <ul>
                        {
                            this.state.stories.map((val, i) => {
                                return <li key={i} onClick={this.play.bind(this, val.id)}>
                                    <NavLink to='/detail'>
                                        <p>{val.title}</p>
                                        <img key={i} src={val.images[0]} alt=""/>
                                    </NavLink>
                                </li>
                            })
                        }
                    </ul>
                </div>
                {
                    this.state.comd.map((val, i) => {
                        return <div className='main' key={i}>
                                <h2 key={i}>
                                {val.date.substr(4, 2)}月{val.date.substr(6, 2)}日{this.getweek(val.date.
                                substr(0, 4) + '-' + val.date.substr(4, 2) + '-' + val.date.substr(6, 2))}
                                </h2>
                            <ul> {
                                val.stories.map((value, index) => {
                                    return <li key={index} onClick={this.play.bind(this, value.id)}>
                                        <NavLink to='/detail'>
                                            <p>{value.title}</p>
                                            <img key={index} src={value.images[0]} alt=""/>
                                        </NavLink>
                                    </li>
                                })
                            }
                            </ul>
                        </div>
                    })
                }
                {/*<div className='main'>*/}
                {/*    <h2>今日新闻</h2>*/}
                {/*    <ul>*/}
                {/*        {*/}
                {/*            this.state.comd.map((val,i) =>{*/}
                {/*              return  val.stories.map((value,index)=>{*/}
                {/*                    return   <li key={index} onClick={this.play.bind(this,value.id)}>*/}
                {/*                        <NavLink to='/detail'>*/}
                {/*                            <p>{value.title}</p>*/}
                {/*                            <img key={index} src={value.images[0]} alt=""/>*/}
                {/*                        </NavLink>*/}
                {/*                    </li>*/}
                {/*                })*/}
                {/*            })*/}
                {/*        }*/}
                {/*    </ul>*/}
                {/*</div>*/}
                <div onClick={this.close.bind(this)} ref='div' className='cli'></div>
                <div ref='thediv' className='myLeft'>
                    <div className='indexNav'>
                        <div className='navTop'>
                            <img src={require('../assest/name.jpg')} alt=""/>
                            <span>张俊昌</span>
                        </div>
                        <div className='navBot'>
                            <ul>
                                <li onClick={this.collect.bind(this)}><a href="#"><img
                                    src={require('../assest/navleft01.jpg')} alt=""/></a></li>
                                <li><a href="#"><img src={require('../assest/navleft02.jpg')} alt=""/></a></li>
                            </ul>
                        </div>
                    </div>
                    <h1><a href="#" onClick={this.myClose.bind(this)}><img src={require('../assest/index_03.jpg')}
                                                                           alt=""/>首页</a></h1>
                </div>

            </div>
        )
    };

    componentWillMount() {
        axios.get('/api/4/news/latest').then((res) => {
            console.log(res);
            this.setState({
                data: res.data.top_stories,
                stories: res.data.stories
            })
        });

        var date = new Date()
        var y = date.getFullYear();
        var m = (date.getMonth() + 1).toString().padStart(2, '0');
        var d = date.getDate().toString().padStart(2, '0');
        var time = y.toString() + m + d;
        this.state.time = time;
        //监听滚动事件
        var _this = this;
        window.addEventListener("scroll", function () {
            // console.log(document.documentElement.scrollTop,'被卷去的高度');
            // console.log(window.screen.height);
            // console.log(document.documentElement.scrollTop);
            //document.body.scrollHeight  ——浏览器滚动部分高度
            if (document.body.scrollHeight <= window.screen.height + document.documentElement.scrollTop) {
                console.log('进来了，走这段代码了');
                setTimeout(() => {
                    axios.get('/api/4/news/before/' + _this.state.time).then((res) => {
                        console.log(res)
                        _this.setState({
                            time: res.data.date,
                            comd: _this.state.comd.concat(res.data)
                        })
                    })
                }, 100)
            }
        })
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({
                data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
            });
        }, 100);
    };

    myClose() {
        this.refs.div.style.display = 'none';
        this.refs.thediv.style.display = 'none'
    }

    close() {
        this.refs.div.style.display = 'none';
        this.refs.thediv.style.display = 'none'
    }

    myName() {
        this.refs.div.style.display = 'block';
        this.refs.thediv.style.display = 'block'
    }

    collect() {
        this.props.history.push({
            pathname: '/collect'
        })
    }

    play(x) {
        this.props.history.push({
            pathname: '/detail',
            state: {
                sid: x
            }
        })
    };

    theTo(x) {
        this.props.history.push({
            pathname: '/detail',
            state: {
                sid: x
            }
        })
    }
};
export default Index