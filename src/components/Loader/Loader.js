import React from 'react'
import { LoaderWrapper, LoaderDiv } from './LoaderStyles'
import ReactDOM from 'react-dom'
import loaderImg from "../../assets/loader.gif"

const Loader = () => {
  return ReactDOM.createPortal(
    <LoaderWrapper>
        <LoaderDiv>
            <img src={loaderImg} alt="loading..." />
        </LoaderDiv>
    </LoaderWrapper>,
    document.getElementById("loader")

  )
}

export default Loader