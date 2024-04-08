import React from 'react'

function Alert(props) {
    return (
        props.alert &&
        <div className="alert alert-dismissible fade show m-0" role="alert">
            <div className="container">
                <strong>{props.alert.type}</strong>  --  {props.alert.msg}
            </div>
        </div>
    )
}

export default Alert