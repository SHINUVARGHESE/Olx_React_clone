import React from 'react';
import './Banner.css';
import { Dropdown } from 'react-bootstrap'
function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <Dropdown>
              <Dropdown.Toggle className='dropdownLink' style={{ color: 'black', boxShadow: 'none', border: 'none', backgroundColor: 'white' }}>
                <span>ALL CATEGORIES</span>
              </Dropdown.Toggle>
                    <Dropdown.Menu >
                      <Dropdown.Item >netsetter</Dropdown.Item>
                      <Dropdown.Item >morning glory</Dropdown.Item>
                    </Dropdown.Menu>
            </Dropdown>

          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcy...</span>
            <span>Mobile Ph...</span>
            <span>For Sale:Houses & Apart...</span>
            <span>Scoot...</span>
            <span>Commercial & Other Ve...</span>
            <span>For Rent: House & Apart...</span>
          </div>
        </div>
        <div className="banner">
          <img
            src="../../../Images/banner copy.png"
            alt=""
          />
        </div>
      </div>

    </div>
  );
}

export default Banner;
