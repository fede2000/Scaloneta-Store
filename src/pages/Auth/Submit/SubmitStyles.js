import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ButtonSubmitStyled = styled(motion.button)`
  padding: 1rem 1.5rem;
  outline: none;
  border: none;
  border-radius: 10px;
  background: rgb(117,170,219);
  color: white;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  margin: 0rem 0 2rem 0;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;
