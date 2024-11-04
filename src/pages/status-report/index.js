import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import ReportStatusForm from '../../sections/status-report/Form';
import { useMutation } from 'react-query';
import { search } from '../../api';
import ReportResult from '../report-result';
import ErrorBoundary from '../../components/error-boundary';

const StatusReport = () => {
  const [reportState, setReportState] = useState({
    country: '',
    city: '',
    name: 'Uberall',
    street: 'Hussitenstr 32-33',
    zip: '13355',
    reportResult: null,
    reportError: null,
  });

  const handleValuesChange = (e) =>
    setReportState({
      ...reportState,
      [e.target.name]: e.target.value,
    });

  const mutation = useMutation(search, {
    onSuccess: (data) => {
      setReportState(
        data.status === 'SUCCESS'
          ? {
              ...reportState,
              reportResult: data.response,
              reportError: null,
            }
          : {
              ...reportState,
              reportError: data.response,
              reportResult: null,
            }
      );
    },
    onError: (error) => {
      setReportState({
        ...reportState,
        reportResult: null,
        reportError: error,
      });
    },
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const { country, city, name, street, zip } = reportState;
    const data = {
      country,
      city,
      zip,
      street,
      name,
    };
    await mutation.mutate(data);
  };
  const { isLoading } = mutation;

  return (
    <Container className='p-2 my-5 mx-auto border rounded'>
      <h2 className='text-primary text-center'>Status Report</h2>
      <ReportStatusForm
        values={reportState}
        onValueChange={handleValuesChange}
        onSubmitForm={onSubmit}
        isLoading={isLoading}
      />
      {reportState.reportError ? (
        <ErrorBoundary error={reportState.reportError} />
      ) : (
        <ReportResult
          reportResult={reportState.reportResult}
          isLoading={isLoading}
        />
      )}
    </Container>
  );
};

export default StatusReport;
