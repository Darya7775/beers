import React, {useState, useCallback, useLayoutEffect} from "react";
import debounce from "lodash.debounce";
import * as S from "./style";

interface Props {
  value: string,
  onChange: (value: string) => void,
  text: string,
  type: string
};

const InputLogin: React.FC<Props> = (props: Props) => {
  // Внутренний стейт для быстрого отображения ввода
  const [value, setValue] = useState(props.value);

  const onChangeDebounce = useCallback(
    debounce(value => props.onChange(value), 600),
    [props.onChange]
  );

  // Обработчик изменений в поле
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChangeDebounce(e.target.value);
  };

  // Обновление стейта, если передан новый value
  useLayoutEffect(() => setValue(props.value), [props.value]);

  return(
    <S.InputWrapper>
      <input  type={props.type}
              value={value}
              onChange={onChange}
              id={props.text} />
      <label  htmlFor={props.text}>{props.text}</label>
    </S.InputWrapper>
  );
}

export default InputLogin;
