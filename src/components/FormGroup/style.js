import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 16px;
  }

  small {
    color: #ff0000;
    font-size: 12px;
    display: block;
    margin-top: 8px;
    margin-left: 3px;
  }

  .form-item {
    position: relative;

    .loader {
      position: absolute;
      top: 18px;
      right: 16px;
    }
  }

`;
