import React from 'react';

import withToggle from '../hocs/withToggle';

function AccordianMenu(props) {
  let { toggle } = props

  return (
    <div>
      <div style={{border: '1px solid black', padding: 20}} onClick={toggle.handleChange}>{props.title}</div>
      { toggle.value && <div>{props.children}</div> }
    </div>
  )
}

export default withToggle(AccordianMenu)