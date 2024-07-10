import React from 'react';

export default function Alert(props) {
  return (
        props.alert && <div className="alert alert-primary" role="alert">
            {props.alert.msg}
        </div>
  )
}
