import React from 'react';
import { Alert } from "reactstrap"

const ErrorPreviewer = ({ errors }) => {
  return (<div>
    {errors && errors.length > 0 && errors.map(e =>
    (<Alert key={e.msg} color="danger" role="alert">
      {e.msg}
    </Alert>))
    }
  </div>);
}

export default ErrorPreviewer;
