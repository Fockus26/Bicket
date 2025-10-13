function Pagination(props) {
  const {
    itemsPerPage,
    startItem,
    endItem,
    handleItemsToShow,
    dataDashboard,
    actualPage,
  } = props;

  const totalPages = Math.ceil(dataDashboard.length / itemsPerPage);

  const pages = [];
  actualPage > 2 && pages.push(actualPage - 2);
  actualPage > 1 && pages.push(actualPage - 1);
  pages.push(actualPage);
  actualPage < totalPages && pages.push(actualPage + 1);
  actualPage + 1 < totalPages - 1 && pages.push("...");
  !pages.includes(totalPages) && pages.push(totalPages);

  const handlePageDirection = (direction) =>
    (actualPage < totalPages || actualPage > 1) &&
    handleItemsToShow(actualPage + (direction === "prev" ? -1 : 1));

  return (
    <div className="pagination">
      <nav>
        <i
          className={"fa-solid fa-angle-left " + (startItem === 1 && "hide")}
          onClick={() => handlePageDirection("prev")}
        />

        <ul>
          {pages.map((page, index) => (
            <li
              key={index}
              data-active={page === actualPage}
              data-valid={page !== "..."}
              onClick={() => page !== "..." && handleItemsToShow(page)}
            >
              {page}
            </li>
          ))}
        </ul>

        <i
          className={
            "fa-solid fa-angle-right " +
            (endItem === dataDashboard.length && "hide")
          }
          onClick={() => handlePageDirection("next")}
        />
      </nav>

      <span>
        {startItem} - {endItem} from {dataDashboard.length} tickets
      </span>
    </div>
  );
}

export default Pagination;
