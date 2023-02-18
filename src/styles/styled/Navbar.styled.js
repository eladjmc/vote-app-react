import styled from "styled-components";

const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  .logo {
    display: flex;
    align-items: center;
    width: 200px;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  background: var(--white);
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
    border: 1.5px solid transparent;
    transition: all 0.2s;
  }
  .btn:hover {
    color: var(--red-dark);
    background-color: white;
    border: 1.5px solid var(--red-dark);
    box-sizing: border-box;
  }
  .dropdown {
    position: absolute;
    bottom: -105px;
    left: calc(50% - 60px);
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 120px;
    text-align: center;
    transform: scaleY(0) scaleX(0);
    transform-origin: top;
    transition: transform 0.2s;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    transform: scaleY(1) scaleX(1);
  }
  .dropdown-btn {
    border-radius: var(--borderRadius);
    box-shadow: var(--shadow-2);
    width: 100%;
    height: 30px;
    background-color: white;
    border-color: transparent;
    color: var(--red-dark);
    letter-spacing: var(--letterSpacing);
    border: var(--red-dark) solid 1px;
    text-transform: capitalize;
    cursor: pointer;
  }

  .dropdown-btn:hover {
    background-color: #f3adb3;
    border: var(--red-dark) solid 1px;
  }
  .logo-text {
    display: none;
    margin: 0;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;
    z-index: 100;

    .nav-center {
      width: 90%;
    }
    .logo-text {
      display: block;
    }
  }

  @media (min-width: 600px) {
    .btn {
      transform: scale(1.5);
    }
    .dropdown {
      top: 45px;
    }
    .show-dropdown {
      transform: scale(1.5);
    }
  }

  background-image: linear-gradient(
    to bottom,
    var(--red-dark),
    #fff,
    #fff,
    #fff,
    #fff,
    #fff,
    #fff,
    #fff,
    #fff,
    #fff,
    var(--red-dark)
  );

  box-shadow: 0px 6px 7px -7px rgba(0, 0, 0, 0.95);
  .not-admin-btn {
    visibility: hidden;
  }
`;
export default Wrapper;
