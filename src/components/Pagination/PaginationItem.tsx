/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  useSearchParams,
  createSearchParams,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

const PaginationItem = ({ children }: any) => {
  const [params] = useSearchParams();
  const { category } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const handlePagination = () => {
    let param = [];
    for (let i of params.entries()) {
      param.push(i);
    }
    const queries :  { [key: string]: any }  = {};
    for (let i of param) {
      queries[i[0]] = i[1];
    }
    if (Number(children)) {
      queries.page = children;
    }
    navigate({
      pathname:
        category !== undefined ? `/products/${category}` : location.pathname,
      search: createSearchParams(queries).toString(),
    });
    console.log(queries);
  };
  return (
    <button
      className="p-4 w-10 h-10 cursor-pointer flex justify-center items-center hover:rounded-full hover:bg-gray-300"
      onClick={handlePagination}
      disabled={!Number(children)}
    >
      {children}
    </button>
  );
};

export default PaginationItem;
