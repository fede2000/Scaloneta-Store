import styled from "styled-components";

export const MenuMobileContainer = styled.div`
  display: none;
  height: 50%;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 992px) {
    display: flex;
  }

`
export const Menu = styled.div`
  display: none;
  color: #fff;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  font-size: 45px;

  @media (max-width: 992px) {
    display: flex;
  }

`