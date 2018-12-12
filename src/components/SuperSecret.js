import React from 'react';

import withAuthentication from '../hocs/withAuthentication';

function SuperSecret(props) {
  return (
    <div>
      <h1>This is top secret!!!!!!!!!!</h1>
      <p>only an authenticated user should be able to see this.</p>
    </div>
  )
}

export default withAuthentication(SuperSecret);
