import React, { useEffect, useState } from 'react';
import countriesAndDirectories from '../../data/countries_and_directories.json';
import directoryLogos from '../../data/directory_logos.json';
import countryNames from '../../data/country_names.json';
import { Spinner } from 'react-bootstrap';
import { isValidUrl } from '../../utilies/validateURL';

const ReportResult = ({ reportResult, isLoading }) => {
  const [directories, setDirectories] = useState([]);
  const { searchData, alreadyManaged } = reportResult || {};

  useEffect(() => {
    if (searchData) {
      const countryDirectories =
        countriesAndDirectories[searchData.country] || [];
      const directoryData = countryDirectories.map((directory) => ({
        name: directory,
        logo: directoryLogos[directory],
      }));
      setDirectories(directoryData);
    }
  }, [searchData]);

  if (isLoading) {
    return (
      <div className='d-flex align-items-center justify-content-center my-5'>
        <Spinner animation='border' variant='primary' />
      </div>
    );
  }

  return (
    <div className='d-flex align-items-center justify-content-center p-3'>
      {reportResult ? (
        <div>
          <hr />
          <h2>Business Status Report for {searchData.name}</h2>
          <p>
            Address: {searchData.streetAndNo}, {searchData.city},{' '}
            {countryNames[searchData.country]}
          </p>
          <p>Status: {alreadyManaged ? 'Already Managed' : 'Not Managed'}</p>
          {searchData.shortUrl && (
            <a
              href={isValidUrl(searchData.shortUrl)}
              target='_blank'
              rel='noopener noreferrer'
            >
              View Full Report
            </a>
          )}
          <h3 className='my-3'>Directories:</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', margin: 'auto' }}>
            {directories.map(({ name, logo }) => (
              <div key={name} style={{ margin: '10px auto', width: '30%' }}>
                <img src={logo} alt={`${name} logo`} width='50' height='50' />
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className='text-secondary text-center mb-0'>
          Your search result will displayed here
        </p>
      )}
    </div>
  );
};

export default ReportResult;
