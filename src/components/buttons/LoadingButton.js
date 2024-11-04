import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const LoadingButton = ({
  disabled,
  type,
  label,
  variant = 'primary',
  isLoading,
}) => (
  <Button variant={variant} disabled={disabled} type={type}>
    {isLoading && (
      <Spinner
        className='mx-2'
        as='span'
        animation='grow'
        size='sm'
        role='status'
        aria-hidden='true'
      />
    )}
    {label}
  </Button>
);

export default LoadingButton;
