import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ContainerLinkStyled = styled(motion.div)``;

export const StyledLink = styled(Link)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: ${({ radius }) => `${radius}px`};
  background: #75AADB;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  z-index: 2;

  & span {
    font-weight: 700;
    font-size: 1rem;
    background: blue;
    -webkit-background-clip: text;
    color: white;
  }

  @media (max-width:600px){
    padding: .5rem 1rem;
    span{
      font-size: .8rem
    }
        }
  @media (max-width:400px){
    padding: .5rem 1rem;
    span{
      font-size: .7rem
    }
        }
`;
