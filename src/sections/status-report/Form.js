import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import LoadingButton from '../../components/buttons/LoadingButton';
import Input from '../../components/inputs/Input';
import Select from '../../components/inputs/Select';
import countryNames from '../../data/country_names.json';

const ReportStatusForm = ({
  values,
  onValueChange,
  onSubmitForm,
  isLoading,
}) => {
  return (
    <Form onSubmit={onSubmitForm} className='d-flex flex-column my-3 pt-3 px-3'>
      <Row className='g-3 mb-2'>
        <Col xs={12}>
          <Select
            id='country'
            label='country'
            name='country'
            defaultOption='Select a Country'
            options={Object.entries(countryNames)}
            value={values.country}
            onChange={onValueChange}
          />
        </Col>
      </Row>

      <Row className='g-3 mb-2'>
        <Col xs={12} md={6}>
          <Input
            id='city'
            label='City'
            name='city'
            value={values.city}
            onChange={onValueChange}
            placeholder={'Enter city'}
          />
        </Col>
        <Col xs={12} md={6}>
          <Input
            id='company'
            label='Company name'
            name='name'
            value={values.name}
            onChange={onValueChange}
            placeholder={'Enter company name'}
            required
          />
        </Col>
      </Row>

      <Row className='g-3 mb-4'>
        <Col xs={12} md={6}>
          <Input
            id='street'
            label='Street'
            name='street'
            value={values.street}
            onChange={onValueChange}
            placeholder={'Enter street'}
            required
          />
        </Col>
        <Col xs={12} md={6}>
          <Input
            id='postcode'
            label='Postcode'
            name='zip'
            value={values.zip}
            onChange={onValueChange}
            placeholder={'Enter postcode'}
            required
          />
        </Col>
      </Row>

      {/* Submit Button */}
      <LoadingButton
        type='submit'
        label='Search'
        disabled={isLoading}
        isLoading={isLoading}
      />
    </Form>
  );
};

export default ReportStatusForm;
