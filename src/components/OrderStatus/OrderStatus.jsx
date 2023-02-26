import React from 'react';

import { BiTime } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlineCheck } from 'react-icons/ai';

import { CheckStyled, PendingStyled, CancelStyled } from './OrderStatusStyles';

const OrderStatus = ({ status }) => {
  return (
    <div>
      {status === 'check' && (
        <CheckStyled>
          <AiOutlineCheck size={20}/>
        </CheckStyled>
      )}
      {status === 'pending' && (
        <PendingStyled>
          <BiTime size={20}/>
        </PendingStyled>
      )}
      {status === 'cancel' && (
        <CancelStyled>
          <MdOutlineCancel size={20}/>
        </CancelStyled>
      )}
    </div>
  );
};

export default OrderStatus;
