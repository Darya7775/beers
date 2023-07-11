import React from "react";
import lang from "../../../assets/language.svg";
import * as S from "./style.js";

interface Props {
  options: {
    value: string,
    title: string,
    flag: string
  }[],
  onChange: (value: string) => void,
  value: string
};

const Select: React.FC<Props> = (props: Props) => {

  const onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };

  return(
    <S.SelectWrap>
      <img src={lang} alt="change the language" width={30} height={30} />
      <S.SelectList>
        {props.options.map((option, index) => (
          <S.SelectItem key={index}>
            <input type="radio" name="lang" id={option.value} value={option.value} onChange={onSelect} checked={option.value === props.value ? true : false}/>
            <label htmlFor={option.value}>
              <img src={option.flag} alt={option.title} width={20} height={20} />
              {option.title}
            </label>
          </S.SelectItem>
        ))}
      </S.SelectList>
    </S.SelectWrap>
  );
}

export default Select;


