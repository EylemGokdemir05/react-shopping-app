import React, { useState } from "react";
// import PropTypes from "prop-types";

function Pagination({ itemPerPage, totalItems, paginate }) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="!#" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );

  //   const [pages] = useState(Math.round(data.length / dataLimit));
  //   const [currentPage, setCurrentPage] = useState(1);

  //   function goToNextPage() {
  //     setCurrentPage((page) => page + 1);
  //   }

  //   function goToPreviousPage() {
  //     setCurrentPage((page) => page - 1);
  //   }

  //   function changePage(event) {
  //     console.log("event: ", event);
  //     const pageNum = Number(event.target.textContext);
  //     setCurrentPage(pageNum);
  //   }

  //   const getPaginatedData = () => {
  //     const startIndex = currentPage * dataLimit - dataLimit;
  //     const endIndex = startIndex + dataLimit;
  //     return data.slice(startIndex, endIndex);
  //   };

  //   const getPaginationGroup = () => {
  //     let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
  //     return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  //   };

  //   return (
  //     <div>
  //       <h1>{title}</h1>
  //       <div className="dataContainer">
  //         {getPaginatedData().map((d, idx) => (
  //           <RenderComponent key={idx} data={d} />
  //         ))}
  //       </div>
  //       <div className="pagination">
  //         <button onClick={goToPreviousPage} className={`prev ${currentPage === 1 ? "disabled" : ""}`}></button>
  //         {getPaginationGroup().map((item, index) => (
  //           <button
  //             key={index}
  //             onClick={changePage($event)}
  //             className={`paginationItem ${currentPage === item ? "active" : null}`}
  //           >
  //             <span>{item}</span>
  //           </button>
  //         ))}
  //         <button onClick={goToNextPage} className={`next ${currentPage === pages ? "disabled" : ""}`}></button>
  //       </div>
  //     </div>
  //   );
  // }

  // const Pagination = (props) => {
  //   const { totalRecords = null, pageLimit = 30, pageNeighbours = 0 } = props;
  //   pageLimit = typeof pageLimit === "number" ? pageLimit : 30;
  //   totalRecords = typeof totalRecords === "number" ? totalRecords : 0;

  //   pageNeighbours = typeof pageNeighbours === "number" ? Math.max(0, Math.min(pageNeighbours, 2)) : 0;

  //   totalPages = Math.ceil(totalRecords / pageLimit);

  //   const [currentPage, setCurrentPage] = useState(1);

  //   const range = (from, to, step = 1) => {
  //     let i = from;
  //     const range = [];

  //     while (i <= to) {
  //       range.push(i);
  //       i += step;
  //     }

  //     return range;
  //   };

  //   const fetchPageNumbers = (props) => {
  //     const totalPages = totalPages;
  //     const currentPage = currentPage;
  //     const pageNeighbours = pageNeighbours;

  //     /**
  //      * totalNumbers: the total page numbers to show on the control
  //      * totalBlocks: totalNumbers + 2 to cover for the left(<) and right(>) controls
  //      */
  //     const totalNumbers = this.pageNeighbours * 2 + 3;
  //     const totalBlocks = totalNumbers + 2;

  //     if (totalPages > totalBlocks) {
  //       const startPage = Math.max(2, currentPage - pageNeighbours);
  //       const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
  //       let pages = range(startPage, endPage);

  //       /**
  //        * hasLeftSpill: has hidden pages to the left
  //        * hasRightSpill: has hidden pages to the right
  //        * spillOffset: number of hidden pages either to the left or to the right
  //        */
  //       const hasLeftSpill = startPage > 2;
  //       const hasRightSpill = totalPages - endPage > 1;
  //       const spillOffset = totalNumbers - (pages.length + 1);

  //       switch (true) {
  //         // handle: (1) < {5 6} [7] {8 9} (10)
  //         case hasLeftSpill && !hasRightSpill: {
  //           const extraPages = range(startPage - spillOffset, startPage - 1);
  //           pages = [LEFT_PAGE, ...extraPages, ...pages];
  //           break;
  //         }

  //         // handle: (1) {2 3} [4] {5 6} > (10)
  //         case !hasLeftSpill && hasRightSpill: {
  //           const extraPages = range(endPage + 1, endPage + spillOffset);
  //           pages = [...pages, ...extraPages, RIGHT_PAGE];
  //           break;
  //         }

  //         // handle: (1) < {4 5} [6] {7 8} > (10)
  //         case hasLeftSpill && hasRightSpill:
  //         default: {
  //           pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
  //           break;
  //         }
  //       }

  //       return [1, ...pages, totalPages];
  //     }

  //     return range(1, totalPages);
  //   };
}

// const LEFT_PAGE = "LEFT";
// const RIGHT_PAGE = "RIGHT";

// Pagination.propTypes = {
//   totalRecords: PropTypes.number.isRequired,
//   pageLimit: PropTypes.number,
//   pageNeighbours: PropTypes.number,
//   onPageChanged: PropTypes.func,
// };

export default Pagination;
