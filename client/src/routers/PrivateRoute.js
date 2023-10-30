import { Navigate, Route } from "react-router-dom";

export default function PrivateRoute(props) {

    const user = {id:1, role: 'regular'};

    if(!user) return <Navigate  to ="/login"/>

  return (
    <Route {...props}/>
  )
}
