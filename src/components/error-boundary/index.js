import React from 'react';
import { Alert } from 'react-bootstrap';

const ErrorBoundary = ({ error }) => {
  return (
    <Alert variant='danger'>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      {error.error && <p>{error.error}</p>}
    </Alert>
  );
};

export default ErrorBoundary;
