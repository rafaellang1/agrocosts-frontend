import styled from 'styled-components';

export const ReportContainer = styled.div`
  padding: 20px;
`;

export const Header = styled.header`
  font-size: 22px;
  font-weight: bold;
  padding: 20px;
  border-bottom: 2px solid #ddd9;


  span {
    color: #00920E;
  }
`;

export const FarmReport = styled.div`
  margin-bottom: 30px;
  background: #f3f1ef;
  padding: 35px;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px; */

  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  color: #1c474d;
  h3 {
    font-weight: 500;
  }

  span {
    color: #00920E;
    font-weight: 600;
  }

  p {
    padding-top: 3px;
    border-bottom: 2px dashed #ddd9;
  }

  i {
    font-style: normal;
    font-weight: 900;
    text-decoration: underline;

    font-size: 18px;

  }
`;

export const HighCostReport = styled.div`
  width: 100%;
  margin-bottom: 100px;
  background: red;
  padding: 40px;

  margin-bottom: 40px;
  background: #f3f1ef;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
  color: #1c474d;

  h2{
    font-size: 16px;
    margin-bottom: 5px;
    color: #CC2501;
    text-transform: uppercase;
  }
  h3 {
    font-weight: 500;
    margin-top: 25px;
  }

  h4 {
    text-align: center;
    font-size: 14px;
    color: #6c7a89;
  }

  span {
    color: #00920E;
    font-weight: 600;
  }

  p {
    padding-top: 5px;
    margin-bottom: 7px;
    border-bottom: 2px dashed #ddd9;

  }

  i {
    font-style: normal;
    font-weight: 900;
    text-decoration: underline;

    font-size: 18px;

  }
`;
