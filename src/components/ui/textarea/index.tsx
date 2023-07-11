import React, { memo, useCallback, useLayoutEffect, useState } from 'react';
import debounce from 'lodash.debounce';
import { TextAreaStyle } from './style.js';

interface Props {
  value: string,
  onChangeText: (value: string) => void,
  class?: string,
  placeholder?: string
};

const Textarea: React.FC<Props> = (props: Props) => {

  // Внутренний стейт для быстрого отображения ввода
  const [value, setValue] = useState(props.value);

  const onChangeDebounce = useCallback(
    debounce(value => props.onChangeText(value), 500),
    [props.onChangeText]
  );

  // Обработчик изменений в поле
  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    onChangeDebounce(event.target.value);
  };

  // Обновление стейта, если передан новый value
  useLayoutEffect(() => setValue(props.value), [props.value]);

  return (
    <TextAreaStyle
      className={`Textarea ${props.class}`}
      value={value}
      placeholder={props.placeholder}
      onChange={onChange}
    ></TextAreaStyle>
  )
}

export default memo(Textarea);
