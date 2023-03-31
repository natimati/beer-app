import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { useSearchParams } from "react-router-dom";
import { Container, CurrentPage, IconContainer } from "./style";

function Pagination() {
  // const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
  const [search, setSearch] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(Number(search.get('page')));

  const iconSize = 20;

  const onNextPageClick = (): void => {
    const newValue = currentPage + 1
    setCurrentPage(newValue)
    setSearch({ page: String(newValue)})
  };

  const onPreviousPageClick = (): void => {
    const newValue = currentPage - 1
    setCurrentPage(newValue);
    setSearch({ page: String(newValue) });
  };

  return (
    <Container>
      <IconContainer isOnTheFirstPage={false}>
        <FaChevronLeft size={iconSize} onClick={onPreviousPageClick} />
      </IconContainer>
      <CurrentPage>
        <p>{currentPage}</p>
      </CurrentPage>
      <FaChevronRight size={iconSize} onClick={onNextPageClick} />
    </Container>
  )
}

export default Pagination;