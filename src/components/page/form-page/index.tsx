import React, { useEffect, useCallback, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useAppSelector from "../../../hooks/use-selector";
import useAppDispatch from "../../../hooks/use-dispatch";
import useTranslate from "../../../hooks/use-translate";
import { deletingAllFromTheBasket } from "../../../features/beers-slice";
import { selectAllBeersBasket, addProducts, clearBasket, selectBeerBasketIds } from "../../../features/basket-slice";
import ListOrder from "../../blocks/list-order";
import Container from "../../ui/container";
import Wrapper from "../../ui/wrapper";
import ButtonSign from "../../ui/button-sign";
import Modal from "../../ui/modal";
import { InputName, InputMail, InputTel, InputContry, InputCity, InputStreet, InputHouse, InputApartment } from "../../ui/input";
import * as S from "./style";

interface Options {
  [key: string]: {
    ibu: number,
    quantity: number
  }
};

interface Beer {
  price: number,
};

const FormPage: React.FC = () => {
  const {t} = useTranslate();
  const [modal, setModal] = useState(false);

  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const select = useAppSelector(state => ({
    beersStore: state.basket.ids,
    authorization: state.session.authorization
  }));
  const beers = useAppSelector(selectAllBeersBasket);

  console.log(beers)

  useEffect(() => {
    let beersBasket = [];
    if(beersBasket.length === beers.length && localStorage.getItem("basket")) {
      // парсим корзину, создаем массив объектов-значений, добавляем каждому цену
      const parse = JSON.parse(localStorage.getItem("basket") as string) as Options;
      beersBasket = Object.values(parse).map<Beer>((beer) => ({...beer, price: beer.ibu * beer.quantity}));
      dispatch(addProducts(beersBasket)); // переделать localstore перенести в redux
      console.log('Effect Form')
    }
  }), [];

  const callbacks = {
    // сохранение ссылки на страницу
    saveLocal: useCallback(() => {
      navigate('/login', {state: { back: location.pathname }})
    }, []),

    onSubmit: useCallback((e: React.SyntheticEvent) => {
      e.preventDefault();
      localStorage.removeItem("basket");
      dispatch(deletingAllFromTheBasket(select.beersStore));
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
      {select.authorization ?
      <>
        <S.FormStyle action="https://echo.htmlacademy.ru" method="post" onSubmit={callbacks.onSubmit}>
          <S.FormContainer>
            <S.FormFieldset>
              <S.FormLegend>{t("formPage.buyerData")}</S.FormLegend>
              <InputName />
              <InputMail />
              <InputTel />
            </S.FormFieldset>
            <S.FormFieldset>
              <S.FormLegend>{t("formPage.addressOfTheRecipient")}</S.FormLegend>
              <InputContry />
              <InputCity />
              <InputStreet />
              <InputHouse />
              <InputApartment />
            </S.FormFieldset>
            <S.FormFieldset>
              <S.FormLegend>{t("formPage.comments")}</S.FormLegend>
              <S.FormTextarea name="messang" cols={10} rows={10}></S.FormTextarea>
            </S.FormFieldset>
            <S.FormFieldset>
              <ListOrder beers={beers} />
            </S.FormFieldset>
            <S.FormFieldset>
              <S.FormLegend>{t("formPage.paymentMethods")}</S.FormLegend>
              <S.FormWrapCheckbox>
                <input type="checkbox" id="cash" name="cash" required defaultChecked />
                <label htmlFor="cash">{t("formPage.cashPayment")}</label>
              </S.FormWrapCheckbox>
              <S.FormWrapCheckbox>
                <input type="checkbox" name="consentToDataProcessing" id="consent" required defaultChecked />
                <label htmlFor="consent">{t("formPage.agreeProcessingPersonalData")}</label>
              </S.FormWrapCheckbox>
            </S.FormFieldset>
            <S.FormButton type="submit" aria-label="Submit an order to the store">{t("formPage.placeAnOrder")}</S.FormButton>
          </S.FormContainer>
        </S.FormStyle>
      {modal === true && <Modal>{t("formPage.orderCompleted")}</Modal>}
      </>
      : <Container>
          <ListOrder beers={beers} />
          <Wrapper><ButtonSign type="button" onClick={callbacks.saveLocal}>{t("formPage.signIn")}</ButtonSign> {t("formPage.placeOrder")}</Wrapper>
        </Container>
      }
    </>
  );
}

export default FormPage;
