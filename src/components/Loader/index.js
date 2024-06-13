import PropTypes from 'prop-types';

import ClipLoader from 'react-spinners/ClipLoader';

import { Overlay } from './styles';

export default function Loader({ isLoading }) {
  return (
    <Overlay>
      <ClipLoader
        color="#00920E"
        loading={isLoading}
        size={50}
      />
    </Overlay>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
