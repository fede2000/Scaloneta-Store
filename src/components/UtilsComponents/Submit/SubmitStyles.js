import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonSubmitStyled = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: #75aadb;
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  cursor: pointer;
  margin: 1rem auto;
  width: 200px;
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
