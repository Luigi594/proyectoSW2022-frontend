export interface IPagingProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}
const Paging = ({
  currentPage,
  totalPages,
  onPageChange = () => {},
}: IPagingProps) => {
  const pages = [];

  const pagin_page = `flex inline-flex items-center justify-center mx-2 border-2 border-sky-500 rounded-md 
  w-10 h-10 text-base cursor-pointer bg-sky-900 text-gray-200 transition-all ease-in-out hover:bg-sky-600 `;

  const cursorDefault = "cursor-default";

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      if (i === currentPage) {
        pages.push(
          <span className={`${pagin_page} ${cursorDefault}`} key={i}>
            {i}
          </span>
        );
      } else {
        pages.push(
          <span
            className={`${pagin_page}`}
            role="button"
            key={i}
            onClick={() => onPageChange(i)}>
            {i}
          </span>
        );
      }
    }
  } else {
    if (currentPage <= 3) {
      for (let i = 1; i <= 5; i++) {
        if (i === currentPage) {
          pages.push(
            <span className={`${pagin_page} ${cursorDefault}`} key={i}>
              {i}
            </span>
          );
        } else {
          pages.push(
            <span
              className={`${pagin_page}`}
              role="button"
              key={i}
              onClick={() => onPageChange(i)}>
              {i}
            </span>
          );
        }
      }
      pages.push(
        <span className={`${pagin_page} ${cursorDefault}`} key="sep2">
          ...
        </span>
      );
      pages.push(
        <span
          role="button"
          className={`${pagin_page}`}
          key={totalPages}
          onClick={() => onPageChange(totalPages)}>
          {totalPages}
        </span>
      );
    } else if (currentPage > totalPages - 2) {
      pages.push(
        <span
          role="button"
          className={`${pagin_page}`}
          key={1}
          onClick={() => onPageChange(1)}>
          {1}
        </span>
      );
      pages.push(
        <span className={`${pagin_page} ${cursorDefault}`} key="sep1">
          ...
        </span>
      );
      for (let i = totalPages - 4; i <= totalPages; i++) {
        if (i === currentPage) {
          pages.push(
            <span className={`${pagin_page} ${cursorDefault}`} key={i}>
              {i}
            </span>
          );
        } else {
          pages.push(
            <span
              role="button"
              className={`${pagin_page}`}
              key={i}
              onClick={() => onPageChange(i)}>
              {i}
            </span>
          );
        }
      }
    } else {
      pages.push(
        <span
          className={`${pagin_page}`}
          key={1}
          role="button"
          onClick={() => onPageChange(1)}>
          {1}
        </span>
      );
      pages.push(
        <span className={`${pagin_page} ${cursorDefault}`} key="sep1">
          ...
        </span>
      );
      pages.push(
        <span
          className={`${pagin_page}`}
          key={currentPage - 1}
          role="button"
          onClick={() => onPageChange(currentPage - 1)}>
          {currentPage - 1}
        </span>
      );
      pages.push(
        <span className={`${pagin_page} ${cursorDefault}`} key={currentPage}>
          {currentPage}
        </span>
      );
      pages.push(
        <span
          className={`${pagin_page}`}
          key={currentPage + 1}
          role="button"
          onClick={() => onPageChange(currentPage + 1)}>
          {currentPage + 1}
        </span>
      );
      pages.push(
        <span className={`${pagin_page} ${cursorDefault}`} key="sep2">
          ...
        </span>
      );
      pages.push(
        <span
          className={`${pagin_page}`}
          key={totalPages}
          role="button"
          onClick={() => onPageChange(totalPages)}>
          {totalPages}
        </span>
      );
    }
  }
  return (
    <div className="flex items-center justify-between mt-3 mx-4">
      <div className="">{pages}</div>
    </div>
  );
};

export default Paging;
