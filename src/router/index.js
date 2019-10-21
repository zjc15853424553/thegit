import React from 'react'
//引入组件
import Index from '../components/Index'
import Detail from '../components/Detail'
import Collect from "../components/Collect"
import Comment from  '../components/Comment'
const Moud =[
    {
        path:'/index',
        component:Index
    },
    {
        path:'/detail',
        component:Detail
    },
    {
        path:'/collect',
        component:Collect
    },
    {
        path:'/comment',
        component:Comment
    },
    {
        path:'*',
        redirect:'/index',
    }
]
export default Moud