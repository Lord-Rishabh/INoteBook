

export default function Alert(props) {
  return (

      <div style={{height:'45px'}}>   
      {/* we are using 'props.alert &&' because at start props.alert is empty,so if it is
      empty then browser will give error. To resolve this error we will only return alert
      if it is not empty. */}
      { props.alert && 
          <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
              <strong>{props.alert.type === 'danger' ? 'Error' : 'Success'}</strong> : {props.alert.msg}
          </div> }
      </div>
  ) 
}
