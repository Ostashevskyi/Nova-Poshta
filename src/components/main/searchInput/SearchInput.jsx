import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDepartment } from "../../../store/departmentSlice";
import { useSelector } from "react-redux";
import { Button, CircularProgress, Pagination, TextField } from "@mui/material";

function SearchInput() {
  const [cityTitle, setCityTitle] = useState("");
  const [page, setPage] = useState(1);
  const [departmentsQty] = useState(5);
  const [pageQty, setPageQty] = useState(1);

  const dispatch = useDispatch();

  const { departments, countOfDepartments, status } = useSelector(
    (state) => state.departments
  );

  const pages = Math.ceil(countOfDepartments / departmentsQty);

  useEffect(() => {
    dispatch(fetchDepartment({ cityTitle, page, departmentsQty }));
    setPageQty(pages);
  }, [page, pages]);

  const handleClick = () => {
    dispatch(
      fetchDepartment({
        cityTitle,
        page,
        departmentsQty,
      })
    );
    setPageQty(pages);
    setPage(1);
  };

  const displayDepartments = () => {
    return (
      <div>
        {departments.flat().map((el) => {
          return (
            <div key={el.SiteKey}>
              <p>City Description: {el.CityDescription}</p>
              <p>Street: {el.Description}</p>
              <hr></hr>
            </div>
          );
        })}
        {
          <Pagination
            count={pageQty}
            page={page}
            onChange={(_, num) => setPage(num)}
            showFirstButton
            showLastButton
          />
        }
      </div>
    );
  };

  const changeCityTitle = (e) => {
    setCityTitle(e.target.value);
  };

  return (
    <div>
      <TextField
        fullWidth
        label="Enter a city name"
        value={cityTitle}
        onChange={changeCityTitle}
      />
      <button onClick={handleClick}>FIND</button>
      {status === "loading" && (
        <div>
          <CircularProgress />
        </div>
      )}
      {status === "fulfilled" && displayDepartments()}
    </div>
  );
}

export default SearchInput;
