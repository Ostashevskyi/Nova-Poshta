import { useMemo, useState } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Loader from "src/components/Loader";
import { useInput } from "src/hooks/useInput";
import { FILTER_TYPE } from "src/constants";
import FilledButton from "src/components/FilledButton";
import InputTextField from "src/components/InputTextField";
import InputSelectField from "src/components/InputSelectField";
import { FormControl, InputLabel, Pagination } from "@mui/material";

import CityCard from "./cityCard/CityCard";

import styles from "./searchInput.module.css";

import { fetchDepartment } from "src/store/departmentSlice";

function SearchInput() {
  const setCityTitle = useInput("");
  const cityTitle = setCityTitle.value;

  const setFilterType = useInput("");
  const filterType = setFilterType.value;

  const [page, setPage] = useState(1);

  const screenWidth = window.screen.availWidth;

  const dispatch = useDispatch();

  const { departments, countOfDepartments, status, error } = useSelector(
    (state) => state.departments
  );

  const fetchData = useMemo(() => {
    dispatch(fetchDepartment({ cityTitle, page, filterType }));
  }, [page]);

  const handleClick = () => {
    dispatch(
      fetchDepartment({
        cityTitle,
        page,
        filterType,
      })
    );
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
                    sx={{
                      mt: 2,
                      display: "flex",
                      justifyContent: "center",
                      width: "90%",
                    }}
                    color="primary"
                    count={countOfDepartments}
                    page={page}
                    onChange={(_, num) => setPage(num)}
                    showFirstButton={screenWidth > 320}
                    showLastButton={screenWidth > 320}
                    siblingCount={0}
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
        <InputTextField
          data={cityTitle}
          value={setCityTitle}
          style={{ mb: 2, mr: 1, width: "300px" }}
          label="Enter a city name"
        />
        <FormControl sx={{ width: "200px", mr: 1 }}>
          <InputLabel id="filter-type">Filter</InputLabel>
          <InputSelectField
            labelId="filter-type"
            label="filter"
            filterType={filterType}
            value={setFilterType}
            types={[
              { id: 0, name: "None", ref: "" },
              { id: 1, name: "Postomat", ref: FILTER_TYPE.PostomatRef },
              { id: 2, name: "Post Department", ref: FILTER_TYPE.PostRef },
              { id: 3, name: "Cargo Department", ref: FILTER_TYPE.CargoRef },
            ]}
          />
        </FormControl>
        <FilledButton
          onClick={handleClick}
          text={"Find"}
          style={{ mb: 2, height: "56px", width: "15%" }}
        />
      </div>
      <Loader
        status={status}
        class={styles.circular}
        activeFunc={displayDepartments}
      />
    </div>
  );
}

export default SearchInput;
