import React from 'react'

function Alerts(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + (lower.slice(1));
  }
  return (
    <div style={{height:'50px'}}>
    {/* here props.alert && defines 'first props.alert evaluates if it is null or false the upcoming one will not evaluate and vice versa. It happens because all JSX will converts to javascript calls.*/}
    {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">      
        <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
    </div>}
    </div>
  )
}

export default Alerts 