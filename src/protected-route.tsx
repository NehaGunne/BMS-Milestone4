import { useContext } from 'react';
import {Route,Redirect} from 'react-router-dom';
import { bmsContext } from './context/context-provider';
interface Routeprops{
    component:React.FC,
    path:any
}
const ProtectedRoute:React.FC<Routeprops>=({component:Component,...rest})=>{
    let store:any=useContext(bmsContext)
    let isAuth=store.state.isAuth
    return(
        <Route {...rest} render={(props)=>{
            if(isAuth){
                return <Component/>
            }else{
                return <Redirect to={{pathname:'/login',state:{from:props.location}}}/>
            }
        }}/>
    )
}
export default ProtectedRoute;