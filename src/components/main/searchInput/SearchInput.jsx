import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchDepartment } from "../../../store/departmentSlice";
import { useSelector } from "react-redux";
import {
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  Pagination,
  Select,
  TextField,
  MenuItem,
} from "@mui/material";
import styles from "./searchInput.module.css";
import { REGEX } from "../../../constants/const";
import CityCard from "./cityCard/CityCard";

function SearchInput() {
  const [cityTitle, setCityTitle] = useState("");
  const [page, setPage] = useState(1);
  const [departmentsQty] = useState(10);
  const [pageQty, setPageQty] = useState(1);
  const [filterType, setFilterType] = useState("");

  const dispatch = useDispatch();

  const { departments, countOfDepartments, status, error } = useSelector(
    (state) => state.departments
  );

  const pages = Math.ceil(countOfDepartments / departmentsQty);

  useEffect(() => {
    if (cityTitle) {
      dispatch(
        fetchDepartment({ cityTitle, page, departmentsQty, filterType })
      );
    }
    setPageQty(pages);
  }, [page, pages]);

  const handleClick = () => {
    dispatch(
      fetchDepartment({
        cityTitle,
        page,
        departmentsQty,
        filterType,
      })
    );
    setPageQty(pages);
    setPage(1);
  };

  const displayDepartments = () => {
    return (
      <>
        {error ? (
          <h2 className={styles.error}>{error}</h2>
        ) : (
          <div>
            <div className={styles.cityCards}>
              {departments.flat().map((el) => {
                return (
                  <CityCard
                    key={el.SiteKey}
                    cityDescription={el.CityDescription}
                    description={el.Description}
                    lat={el.Latitude}
                    lng={el.Longitude}
                    schedule={el.Schedule}
                  />
                );
              })}
              <div className={styles.pagination}>
                {
                  <Pagination
                    sx={{ mt: 2 }}
                    color="primary"
                    count={pageQty}
                    page={page}
                    onChange={(_, num) => setPage(num)}
                    showFirstButton
                    showLastButton
                  />
                }
              </div>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div className={styles.main}>
      <div className={styles.inputs}>
        <TextField
          sx={{ mb: 2, mr: 1, width: "300px" }}
          label="Enter a city name"
          value={cityTitle}
          onChange={(e) => setCityTitle(e.target.value)}
          error={!REGEX.test(cityTitle) && cityTitle.length !== 0}
        />
        <Button
          variant="contained"
          sx={{ mb: 2, mr: 1, height: "56px", width: "15%" }}
          onClick={handleClick}
        >
          Find
        </Button>
        <FormControl sx={{ width: "200px" }}>
          <InputLabel id="filter-type">Filter</InputLabel>
          <Select
            labelId="filter-type"
            label="filter"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <MenuItem value={""}>None</MenuItem>
            <MenuItem value={"postomat"}>Postomat</MenuItem>
            <MenuItem value={"department"}>Cargo department</MenuItem>
            <MenuItem value={"departmentkg"}>Post department</MenuItem>
          </Select>
        </FormControl>
      </div>
      {status === "loading" ? (
        <div className={styles.circular}>
          <CircularProgress />
        </div>
      ) : (
        displayDepartments()
      )}
    </div>
  );
}

export default SearchInput;
