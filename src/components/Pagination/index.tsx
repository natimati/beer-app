import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { useSearchParams } from "react-router-dom";
import { Container, CurrentPage, IconContainer, MobileContainer } from "./style";

function Pagination() {
  const [search, setSearch] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(Number(search.get('page')) || 1);

  const iconSize = 20;
  const mobileIconSize = 40;
  const isLeftArrowVisible = currentPage !== 1 ? true : false;

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
    <>
    <Container>
      <IconContainer isOnTheFirstPage={!isLeftArrowVisible}>
        <FaChevronLeft size={iconSize} onClick={onPreviousPageClick} />
      </IconContainer>
      <CurrentPage>
        <p>{currentPage}</p>
      </CurrentPage>
      <FaChevronRight size={iconSize} onClick={onNextPageClick} />
      </Container>
      <MobileContainer>
        <IconContainer isOnTheFirstPage={!isLeftArrowVisible}>
          <FaChevronLeft size={mobileIconSize} onClick={onPreviousPageClick} />
        </IconContainer>
        <CurrentPage>
          <p>{currentPage}</p>
        </CurrentPage>
        <FaChevronRight size={mobileIconSize} onClick={onNextPageClick} />
      </MobileContainer>
    </>
  )
}

export default Pagination;