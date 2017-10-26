import React from 'react'

export default (props) =>{
    return(
        <div className="form-group">
            <labe>
                {props.label}
            </labe>
            <input {...props} className="form-control"/>
        </div>
    )
}