import React from 'react';

export default function withAuthentication(WrappedComponent) {
  return function(props) {
    return props.isAuthenticated ? <WrappedComponent { ...props }/> : null
  }
}