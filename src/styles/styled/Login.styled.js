import styled from 'styled-components';

const Wrapper = styled.section`
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--red-dark);
  }
  
  h3 {
    text-align: center;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }

  .btn-light {
    background: var(--white);
    color: var(--red-dark);
  }

  .btn-light:hover {
    background: var(--grey-50);
    color: var(--black);
  }

  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--red-dark);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
`;
export default Wrapper;