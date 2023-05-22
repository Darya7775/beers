import React from "react";
import { useSelector } from "react-redux";
import { selectAllBeersBasket } from "/src/features/basketSlice";
import { InputName, InputMail, InputTel, InputContry, InputCity, InputStreet, InputHouse, InputApartment } from "/src/components/ui/input/Input";
import * as S from "./style";

function Form() {
  const beers = useSelector(selectAllBeersBasket);

  let total = 0;
  return(
    <S.FormStyle action="https://echo.htmlacademy.ru" method="post">
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
          <S.FormLegend>Your order</S.FormLegend>
          <S.FormWrapTitle>
            <h4>Beer</h4>
            <h4>Quantity</h4>
            <h4>Price</h4>
          </S.FormWrapTitle>
          <S.FormListBeers>
            {beers.map((beer, index) => {
              total += beer.price;
              return(
                <S.FormItem key={index}>
                  <h3>{beer.name}</h3>
                  <span>{beer.quantity}</span>
                  <span>{beer.price} $</span>
                </S.FormItem>
              );
            })}
          </S.FormListBeers>
          <S.FormWrapPrice>
            <span>Total:</span>
            <span>{total}$</span>
          </S.FormWrapPrice>
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
  );
}

export default Form;
