import React from "react";
import * as S from "./style";

interface Props {
  count: number,
  onhandler: (number: number) => void,
  currentPage: number
};

const Pagination: React.FC<Props> = (props: Props) => {

  const numberPages = Array.from({length: props.count}, (_, index) => index + 1);

  return(
    <S.PaginationContainer>
      <S.List>
        {numberPages.map(number => {
          if(number === props.currentPage) {
            return(<li key={number}>
                    <S.LinkActivePag to={`/page_${number}`} onClick={() => {props.onhandler(number)}}>{number}</S.LinkActivePag>
                  </li>);
          } else {
            return(<li key={number}>
                    <S.LinkPag to={`/page_${number}`} onClick={() => {props.onhandler(number)}}>{number}</S.LinkPag>
                  </li>);
          }
        })}
      </S.List>
    </S.PaginationContainer>
  );
}

export default Pagination;
