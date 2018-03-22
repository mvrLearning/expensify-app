//higher order componenet -- A regular component that renders the other componenet
//Reuse code
//render hijacking
//prop manupulation
//abstract state

import React  from "react";
import ReactDOM from 'react-dom';

const Info =  (props)=>(
    <div>
        <h1>Info</h1>
        <p>The info is {props.info}</p>
    </div>
);

const withAdminWarning=(WrappedContent)=>{
    return (props) =>(
        <div>
            {props.isAdmin && <p>This is private Info. Please don't share</p> }
        
        <WrappedContent {...props}/>
        </div>
    );
};

const requireAuthentication =(WrappedContent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated ? (<WrappedContent {...props}/>):(<p>Login to view Info</p>)}
        </div>
    );
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={false} info="this are the details" />, document.getElementById('app'));
// ReactDOM.render(<AuthInfo isAuthenticated={false} info="this are the details" />,document.getElementById('app'));