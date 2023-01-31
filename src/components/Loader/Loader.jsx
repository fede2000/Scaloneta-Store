import React from 'react'
import { LoaderWrapper } from './LoaderStyles'
import { ReactDOM } from 'react-dom'

const Loader = () => {
  return ReactDOM.createPortal(
    <LoaderWrapper>
        <Loader>
            <img src="" alt="" />
        </Loader>
    </LoaderWrapper>,
    document.createElementById("loader")

  )
}

export default Loader