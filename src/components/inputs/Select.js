import React from 'react';
import { Form } from 'react-bootstrap';

const Select = ({
  id,
  label,
  name,
  options,
  value,
  onChange,
  defaultOption,
}) => (
  <Form.Group controlId={id}>
    <Form.Label>{label}</Form.Label>
    <Form.Select name={name} value={value} onChange={onChange}>
      <option value=''>{defaultOption}</option>
      {options.map(([code, name]) => (
        <option key={code} value={code}>
          {name}
        </option>
      ))}
    </Form.Select>
  </Form.Group>
);

export default Select;
