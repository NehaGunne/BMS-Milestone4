import {useEffect,useState} from 'react';
import {Route,Redirect} from 'react-router-dom';
interface Routeprops{
    component:React.FC,
    path:any
}
let isAuth=false
const ProtectedRoute:React.FC<Routeprops>=({component:Component,...rest})=>{
    //const [isAuth,setAuthorization]=useState(false)  
    let val:any=document.cookie;
    console.log(val);
    if(val){
        isAuth=true
     //setAuthorization(true)
    }else{
        isAuth=false;
        //setAuthorization(false)
    }


    console.log('protected',isAuth);
    
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