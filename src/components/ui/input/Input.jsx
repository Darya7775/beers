import React, { useState } from "react";
import * as S from "./style";

export const InputName = () => {
  const [ name, setName ] = useState('');
  const [ classInput, setClassInput ] = useState('');

  const onNameChange = e => setName(e.target.value);

  const onBlurInput = () => {
    if(name.length < 2) {
      setClassInput("inValid");
    } else {
      setClassInput("valid");
    }
  };

  return(
    <S.WrapInput>
      <label htmlFor="name" aria-label="Enter your name"></label>
      <S.InputStyle
        className={classInput}
        type="text"
        id="name"
        name="name"
        placeholder="Name"
        value={name}
        onChange={onNameChange}
        onBlur={onBlurInput}
        required
      />
  </S.WrapInput>
  );
};

export const InputMail = () => {
  const [ mail, setMail ] = useState('');
  const [ classInput, setClassInput ] = useState('');

  const onMailChange = e => setMail(e.target.value);

  const onBlurInput = () => {
    if(mail.length < 2) {
      setClassInput("inValid");
    } else {
      setClassInput("valid");
    }
  };

  return(
    <S.WrapInput>
      <label htmlFor="e-mail" aria-label="Enter your e-mail"></label>
      <S.InputStyle
        className={classInput}
        type="text"
        id="e-mail"
        name="e-mail"
        placeholder="E-mail"
        value={mail}
        onChange={onMailChange}
        onBlur={onBlurInput}
        required
      />
  </S.WrapInput>
  );
};

export const InputTel = () => {
  const [ tel, setTel ] = useState("");
  const [ classInput, setClassInput ] = useState("");

  const onTelChange = e => setTel(e.target.value);

  const onBlurInput = () => {
    if(tel.length < 16) {
      setClassInput("inValid");
    } else {
      setClassInput("valid");
    }
  };

  return(
    <S.WrapInput>
      <label htmlFor="tel" aria-label="Enter your phone"></label>
      <S.InputStyle
        className={classInput}
        type="tel"
        id="tel"
        name="tel"
        placeholder="+7(999)999-99-99"
        value={tel}
        onChange={onTelChange}
        onBlur={onBlurInput}
        required />
    </S.WrapInput>
  );
};

export const InputContry = () => {
  const [ country, setCountry ] = useState("");
  const [ classInput, setClassInput ] = useState("");

  const onCountryChange = e => setCountry(e.target.value);

  const onBlurInput = () => {
    if(country.length < 3) {
      setClassInput("inValid");
    } else {
      setClassInput("valid");
    }
  };

  return(
    <S.WrapInput>
      <label htmlFor="country" aria-label="Enter the name of your country"></label>
      <S.InputStyle
        className={classInput}
        type="text"
        id="country"
        name="country"
        placeholder="Country"
        value={country}
        onChange={onCountryChange}
        onBlur={onBlurInput}
        required />
    </S.WrapInput>
  );
};

export const InputCity = () => {
  const [ city, setCity ] = useState("");
  const [ classInput, setClassInput ] = useState("");

  const onCityChange = e => setCity(e.target.value);

  const onBlurInput = () => {
    if(city.length < 3) {
      setClassInput("inValid");
    } else {
      setClassInput("valid");
    }
  };

  return(
    <S.WrapInput>
      <label htmlFor="city" aria-label="Enter the name of your city"></label>
      <S.InputStyle
        className={classInput}
        type="text"
        id="city"
        name="city"
        placeholder="City"
        value={city}
        onChange={onCityChange}
        onBlur={onBlurInput}
        required />
    </S.WrapInput>
  );
};

export const InputStreet = () => {
  const [ street, setStreet ] = useState("");
  const [ classInput, setClassInput ] = useState("");

  const onStreetChange = e => setStreet(e.target.value);

  const onBlurInput = () => {
    if(street.length < 2) {
      setClassInput("inValid");
    } else {
      setClassInput("valid");
    }
  };

  return(
    <S.WrapInput>
      <label htmlFor="street" aria-label="Enter your street name"></label>
      <S.InputStyle
        className={classInput}
        type="text"
        id="street"
        name="street"
        placeholder="Street"
        value={street}
        onChange={onStreetChange}
        onBlur={onBlurInput}
        required />
    </S.WrapInput>
  );
};

export const InputHouse = () => {
  const [ house, setHouse ] = useState("");
  const [ classInput, setClassInput ] = useState("");

  const onHouseChange = e => setHouse(e.target.value);

  const onBlurInput = () => {
    if(house.length < 2) {
      setClassInput("inValid");
    } else {
      setClassInput("valid");
    }
  };

  return(
    <S.WrapInput>
      <label htmlFor="house" aria-label="Enter your house number"></label>
      <S.InputStyle
        className={classInput}
        type="text"
        id="house"
        name="house"
        placeholder="House"
        value={house}
        onChange={onHouseChange}
        onBlur={onBlurInput}
        required />
    </S.WrapInput>
  );
};

export const InputApartment = () => {
  const [ apartment, setApartment ] = useState("");
  const [ classInput, setClassInput ] = useState("");

  const onApartmentChange = e => setApartment(e.target.value);

  const onBlurInput = () => {
    if(apartment.length < 2) {
      setClassInput("inValid");
    } else {
      setClassInput("valid");
    }
  };

  return(
    <S.WrapInput>
      <label htmlFor="apartment" aria-label="Enter your apartment number"></label>
      <S.InputStyle
        className={classInput}
        type="text"
        id="apartment"
        name="apartment"
        placeholder="Apartment"
        value={apartment}
        onChange={onApartmentChange}
        onBlur={onBlurInput} />
    </S.WrapInput>
  );
};
