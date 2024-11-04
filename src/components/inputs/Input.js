import React from 'react';
import { Form } from 'react-bootstrap';

const Input = ({
  id,
  label,
  name,
  value,
  onChange,
  placeholder,
  required,
  type = 'text',
}) => (
  <Form.Group controlId={id}>
    <Form.Label>{label}</Form.Label>
    <Form.Control
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  </Form.Group>
);

export default Input;
