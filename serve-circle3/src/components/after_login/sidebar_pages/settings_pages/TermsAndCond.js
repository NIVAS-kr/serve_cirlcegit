import React, { useState } from 'react';
import './TermsAndCond.css';

const TermsAndCond = () => {
  const [selectedOption, setSelectedOption] = useState('Jobsheet');
  const [terms, setTerms] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleTermsChange = (e) => {
    setTerms(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Option:', selectedOption);
    console.log('Terms and Conditions:', terms);
    // Add your form submission logic here
  };

  return (
    <div className="Terms-container">
      <form onSubmit={handleSubmit}>
        <div className="Terms-form-group">
          <label htmlFor="for-select" className="Terms-form-label">For:</label>
          <select 
            id="for-select" 
            className="Terms-dropdown" 
            value={selectedOption} 
            onChange={handleOptionChange}
          >
            <option value="Jobsheet">Jobsheet</option>
            <option value="Jobsheet Invoice">Jobsheet Invoice</option>
            <option value="Sales Invoice">Sales Invoice</option>
            <option value="Purchase Order">Purchase Order</option>
            <option value="Sale Order">Sale Order</option>
            <option value="Sale Order Bill">Sale Order Bill</option>
            <option value="Shipment">Shipment</option>
            <option value="Quotation">Quotation</option>
          </select>
        </div>
        
        <div className="Terms-form-group">
          <label htmlFor="terms-textarea" className="Terms-form-label">Terms and Conditions:</label>
          <textarea 
            id="terms-textarea" 
            className="Terms-textarea" 
            value={terms} 
            onChange={handleTermsChange}
          ></textarea>
        </div>

        <button type="submit" className="Terms-btn-update">UPDATE</button>
      </form>
    </div>
  );
};

export default TermsAndCond;
