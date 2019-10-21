import React from 'react'
//引入路由核心
import {Route,Switch,Redirect} from 'react-router-dom'

const Router =(props)=>{
    return(
        <div>
            <Switch>
                {
                    props.routes.map((val,ind)=>{
                        if(val.path==='*'){
                            return <Redirect  key={ind} to={val.redirect}></Redirect>
                        }else{
                            return <Route key={ind} path={val.path} component={val.component}></Route>
                        }
                    })
                }
            </Switch>
        </div>
    )
};
export default Router