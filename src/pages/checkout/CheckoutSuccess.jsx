
import Link from "../../components/UtilsComponents/Link/Link";
import { ButtonCheckoutSuccess, CheckoutSuccessContainer, CheckoutSuccessSection } from "./CheckoutSuccessStyled";

const CheckoutSuccess = () => {
  return (
    <CheckoutSuccessSection>
      <CheckoutSuccessContainer>
        <h2>¡Felicitaciones!</h2>
        <p>Su pedido se realizado correctamente</p>
        <ButtonCheckoutSuccess>
          <Link to="/my-orders"></Link>
        </ButtonCheckoutSuccess>
      </CheckoutSuccessContainer>
    </CheckoutSuccessSection>
  );
};

export default CheckoutSuccess;
