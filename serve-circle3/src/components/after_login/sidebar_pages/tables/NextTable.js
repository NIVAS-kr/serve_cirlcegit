import React from 'react';
import './NextTable.css';

const NextTable = () => {
  return (
    <div className="next-table-container">
      <div className="next-table-service">
        <h2>Service</h2>
        <div className="next-table-row">
          <div>
            <label>Job Sheet Number:</label>
            <span>1J52</span>
          </div>
          <div>
            <label>Job Sheet Created Date:</label>
            <span>25-Aug-2024</span>
          </div>
          <div>
            <label>Job Sheet Created Time:</label>
            <span>02:05pm</span>
          </div>
        </div>
      </div>

      <div className="next-table-section">
        <h3>Customer Information</h3>
        <div className="next-table-row">
          <div>
            <label>First Name:</label>
            <span>Abhishek</span>
          </div>
          <div>
            <label>Last Name:</label>
            <span>Singh</span>
          </div>
          <div>
            <label>Email ID:</label>
            <span></span>
          </div>
        </div>
        <div className="next-table-row">
          <div>
            <label>Mobile Number:</label>
            <span>9876543210</span>
          </div>
          <div>
            <label>Alternate Mobile Number:</label>
            <span></span>
          </div>
          <div>
            <label>Address:</label>
            <span></span>
          </div>
        </div>
      </div>

      <div className="next-table-section">
        <h3>Product Information</h3>
        <div className="next-table-row">
          <div>
            <label>Product Type:</label>
            <span>Laptop</span>
          </div>
          <div>
            <label>Brand:</label>
            <span>Asus</span>
          </div>
          <div>
            <label>Model:</label>
            <span></span>
          </div>
        </div>
        <div className="next-table-row">
          <div>
            <label>Colour of the product:</label>
            <span></span>
          </div>
          <div>
            <label>Product Configuration:</label>
            <span>8GB RAM, 256GB ROM</span>
          </div>
          <div>
            <label>Password/Passcode/Pattern Lock:</label>
            <span></span>
          </div>
        </div>
        <div className="next-table-row">
          <div>
            <label>Sl No.:</label>
            <span>2</span>
          </div>
          <div>
            <label>Product Status:</label>
            <span>WARRANTY</span>
          </div>
          <div>
            <label>Advance Paid(Rs.):</label>
            <span>0</span>
          </div>
        </div>
        <div className="next-table-row">
          <div>
            <label>Front Desk Executive:</label>
            <span></span>
          </div>
          <div>
            <label>Estimated Cost(Rs.):</label>
            <span></span>
          </div>
          <div>
            <label>Expected Delivery Date:</label>
            <span>30-Aug-2024</span>
          </div>
          <div>
            <label>Expected Delivery Time:</label>
            <span>05:00pm</span>
          </div>
        </div>
      </div>

      <div className="next-table-section">
        <h3>Initial Check Information</h3>
        <div className="next-table-row">
          <div>
            <label>Date:</label>
            <input type="date" value="2024-08-25" />
          </div>
          <div>
            <label>Revised Estimate:</label>
            <input type="text" />
          </div>
          <div>
            <label>Problem Diagnosed:</label>
            <input type="text" />
          </div>
        </div>
        <div className="next-table-row">
          <label>Move to</label>
          <div className="next-table-radio-group">
            <label><input type="radio" name="moveTo" /> Return Without Repair</label>
            <label><input type="radio" name="moveTo" /> Pending</label>
            <label><input type="radio" name="moveTo" /> Parts Pending</label>
            <label><input type="radio" name="moveTo" /> Escalate</label>
            <label><input type="radio" name="moveTo" defaultChecked /> Service</label>
            <label><input type="radio" name="moveTo" /> Save and Exit</label>
          </div>
        </div>
      </div>

      <div className="next-table-section">
        <h3>Service Information</h3>
        <div className="next-table-row">
          <div>
            <label>Service Date:</label>
            <input type="date" value="2024-08-25" />
          </div>
          <div>
            <label>Service Remarks (Internal):</label>
            <input type="text" />
          </div>
          <div>
            <label>Service Remarks for Customer:</label>
            <input type="text" />
          </div>
        </div>
        <div className="next-table-row next-table-actions">
          <label><input type="checkbox" /> Don't send SMS and Email alerts to the customer</label>
        </div>
      </div>

      <div className="next-table-footer">
        <button className="next-table-button">Update</button>
        <button className="next-table-button next-table-cancel">Cancel</button>
      </div>
    </div>
  );
};

export default NextTable;
