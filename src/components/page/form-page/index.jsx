import React, { useEffect, useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletingAllFromTheBasket } from "/src/features/beersSlice";
import { selectAllBeersBasket, addProducts, clearBasket, selectBeerBasketIds } from "/src/features/basketSlice";
import ListOrder from "/src/components/blocks/list-order/";
import Container from "/src/components/ui/container";
import Wrapper from "/src/components/ui/wrapper/";
import ButtonSign from "/src/components/ui/button-sign/";
import Modal from "/src/components/ui/modal";
import { InputName, InputMail, InputTel, InputContry, InputCity, InputStreet, InputHouse, InputApartment } from "/src/components/ui/input";
import * as S from "./style";

function FormPage() {
  const [modal, setModal] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const beersStore = useSelector(selectBeerBasketIds);
  const beers = useSelector(selectAllBeersBasket);
  const authorization = useSelector(state => state.session.authorization);

  useEffect(() => {
    let beersBasket = [];
    if(beersBasket.length === beers.length && localStorage.getItem("basket")) {
      // парсим корзину, создаем массив объектов-значений, добавляем каждому цену
      beersBasket = Object.values(JSON.parse(localStorage.getItem("basket"))).map(beer => ({...beer, price: beer.ibu * beer.quantity}));
      dispatch(addProducts(beersBasket)); // переделать localstore перенести в redux
      console.log('Effect Form')
    }
  }), [];

  const callbacks = {
    // сохранение ссылки на страницу
    saveLocal: useCallback(() => {
      navigate('/login', {state: { back: location.pathname }})
    }, []),

    onSubmit: useCallback((e) => {
      e.preventDefault();
      localStorage.removeItem("basket");
      dispatch(deletingAllFromTheBasket(beersStore));
      dispatch(clearBasket());
      setModal(true);
      setTimeout(() => {
        console.log("Timeout")
        navigate('/');
      }, 2000);
    }, [])
  };

  return(
    <>
      {authorization ?
      <>
        <S.FormStyle action="https://echo.htmlacademy.ru" method="post" onSubmit={callbacks.onSubmit}>
          <S.FormContainer>
            <S.FormFieldset>
              <S.FormLegend>Buyer data</S.FormLegend>
              <InputName />
              <InputMail />
              <InputTel />
            </S.FormFieldset>
            <S.FormFieldset>
              <S.FormLegend>Address of the recipient</S.FormLegend>
              <InputContry />
              <InputCity />
              <InputStreet />
              <InputHouse />
              <InputApartment />
            </S.FormFieldset>
            <S.FormFieldset>
              <S.FormLegend>Comments</S.FormLegend>
              <S.FormTextarea name="messang" cols="10" rows="10"></S.FormTextarea>
            </S.FormFieldset>
            <S.FormFieldset>
              <ListOrder beers={beers} />
            </S.FormFieldset>
            <S.FormFieldset>
              <S.FormLegend>Payment methods</S.FormLegend>
              <S.FormWrapCheckbox>
                <input type="checkbox" id="cash" name="cash" required defaultChecked />
                <label htmlFor="cash">Cash payment</label>
              </S.FormWrapCheckbox>
              <S.FormWrapCheckbox>
                <input type="checkbox" name="consentToDataProcessing" id="consent" required defaultChecked />
                <label htmlFor="consent">I agree to the processing of my personal data</label>
              </S.FormWrapCheckbox>
            </S.FormFieldset>
            <S.FormButton type="submit" aria-label="Submit an order to the store">Place an order</S.FormButton>
          </S.FormContainer>
        </S.FormStyle>
      {modal === true && <Modal>Order completed</Modal>}
      </>
      : <Container>
          <ListOrder beers={beers} />
          <Wrapper><ButtonSign type="button" onClick={callbacks.saveLocal}>Sign in</ButtonSign> to place an order</Wrapper>
        </Container>
      }
    </>
  );
}

export default FormPage;
