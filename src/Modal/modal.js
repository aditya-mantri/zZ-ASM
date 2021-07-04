import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:2;
`;
   
const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    height: auto;
    width: auto;
    display: block;
  }

  @media screen and (max-width: 480px) {
    height: auto;
    width: auto;
    display: block;
  }
`;

const ModalImg = styled.img`
  width: 100%;
  height: inherit;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  p {
    margin-bottom: 1rem;
    padding: 5px 20px;
    }
  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
  a {
    padding: 10px 24px;
    color: #fff;
    background: #141414;
  }


  @media screen and (max-width: 768px) {
    p {
      padding: 24px;
      line-height: 1.2;
    }
  }

  @media screen and (max-width: 480px) {
    p {
      padding: 24px;
      line-height: 1.2;
    }
  }

`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

export const Modal = ({authokay, abouturl , aboutdata, showModal, setShowModal }) => {

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={abouturl} alt='camera' />
              <ModalContent>
                {!authokay&& <h1>Are you ready?</h1>}
                {authokay && <h1>ERROR 404</h1>}
                <p>{aboutdata}</p>
                {authokay && <Link to='/signin' >SIGN IN</Link> }
                {!authokay && <button  onClick={() => setShowModal(prev => !prev)}>GOT IT</button>}
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};