import React, { useState } from "react";
import useTranslate from "../../../hooks/use-translate";
import * as S from "./style";

export const InputName: React.FC = () => {
  const {t} = useTranslate();
  const [ name, setName ] = useState('');
  const [ classInput, setClassInput ] = useState('');

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement> ) => setName(e.target.value);

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
        placeholder={t("input.name")}
        value={name}
        onChange={onNameChange}
        onBlur={onBlurInput}
        required
      />
  </S.WrapInput>
  );
};

export const InputMail: React.FC = () => {
  const {t} = useTranslate();
  const [ mail, setMail ] = useState('');
  const [ classInput, setClassInput ] = useState('');

  const onMailChange = (e: React.ChangeEvent<HTMLInputElement> ) => setMail(e.target.value);

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
        placeholder={t("input.eMail")}
        value={mail}
        onChange={onMailChange}
        onBlur={onBlurInput}
        required
      />
  </S.WrapInput>
  );
};

export const InputTel: React.FC = () => {
  const {t} = useTranslate();
  const [ tel, setTel ] = useState("");
  const [ classInput, setClassInput ] = useState("");

  const onTelChange = (e: React.ChangeEvent<HTMLInputElement> ) => setTel(e.target.value);

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
        placeholder={t("input.numberPattern")}
        value={tel}
        onChange={onTelChange}
        onBlur={onBlurInput}
        required />
    </S.WrapInput>
  );
};

export const InputContry: React.FC = () => {
  const {t} = useTranslate();
  const [ country, setCountry ] = useState("");
  const [ classInput, setClassInput ] = useState("");

  const onCountryChange = (e: React.ChangeEvent<HTMLInputElement> ) => setCountry(e.target.value);

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
        placeholder={t("input.country")}
        value={country}
        onChange={onCountryChange}
        onBlur={onBlurInput}
        required />
    </S.WrapInput>
  );
};

export const InputCity: React.FC = () => {
  const {t} = useTranslate();
  const [ city, setCity ] = useState("");
  const [ classInput, setClassInput ] = useState("");

  const onCityChange = (e: React.ChangeEvent<HTMLInputElement> ) => setCity(e.target.value);

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
        placeholder={t("input.city")}
        value={city}
        onChange={onCityChange}
        onBlur={onBlurInput}
        required />
    </S.WrapInput>
  );
};

export const InputStreet: React.FC = () => {
  const {t} = useTranslate();
  const [ street, setStreet ] = useState("");
  const [ classInput, setClassInput ] = useState("");

  const onStreetChange = (e: React.ChangeEvent<HTMLInputElement> ) => setStreet(e.target.value);

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
        placeholder={t("input.street")}
        value={street}
        onChange={onStreetChange}
        onBlur={onBlurInput}
        required />
    </S.WrapInput>
  );
};

export const InputHouse: React.FC = () => {
  const {t} = useTranslate();
  const [ house, setHouse ] = useState("");
  const [ classInput, setClassInput ] = useState("");

  const onHouseChange = (e: React.ChangeEvent<HTMLInputElement> ) => setHouse(e.target.value);

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
        placeholder={t("input.house")}
        value={house}
        onChange={onHouseChange}
        onBlur={onBlurInput}
        required />
    </S.WrapInput>
  );
};

export const InputApartment: React.FC = () => {
  const {t} = useTranslate();
  const [ apartment, setApartment ] = useState("");
  const [ classInput, setClassInput ] = useState("");

  const onApartmentChange = (e: React.ChangeEvent<HTMLInputElement> ) => setApartment(e.target.value);

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
        placeholder={t("input.apartment")}
        value={apartment}
        onChange={onApartmentChange}
        onBlur={onBlurInput} />
    </S.WrapInput>
  );
};
