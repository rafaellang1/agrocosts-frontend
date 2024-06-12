import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import arrow from '../../assets/images/arrow.svg';

import { Container } from './style';

export default function ContentHeader({ title, link }) {
  return (
    <Container>
      <Link to={link}>
        <img src={arrow} alt="voltar" />
        {/* <span>Voltar</span> */}
      </Link>
      <h1>{title}</h1>
    </Container>
  );
}

ContentHeader.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
