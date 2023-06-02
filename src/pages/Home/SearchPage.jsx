import { useCallback, useEffect, useMemo, useState } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Loader from "src/components/Loader";
import { FILTER_TYPE } from "src/utils/constants";
import FilledButton from "src/components/FilledButton";
import { FormControl, InputLabel } from "@mui/material";
import InputTextField from "src/components/InputTextField";
import { fetchDepartment } from "src/store/departmentSlice";
import InputSelectField from "src/components/InputSelectField";
import { DisplayDepartments } from "src/components/DisplayDepartments";

import styles from "./searchPage.module.css";

function SearchPage() {
  const [cityTitle, setCityTitle] = useState("");
  const [filterType, setFilterType] = useState("");

  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const { departments, countOfDepartments, status, error } = useSelector(
    (state) => state.departments
  );

  useEffect(() => {
    dispatch(fetchDepartment({ cityTitle, page, filterType }));
  }, [page]);

  const handleClick = useCallback(() => {
    dispatch(
      fetchDepartment({
        cityTitle,
        page,
        filterType,
      })
    );
    setPage(1);
  }, [cityTitle, filterType]);

  const filledBtn = useMemo(() => {
    return (
      <FilledButton
        onClick={handleClick}
        text={"Find"}
        style={{ mb: 2, height: "56px", width: "15%" }}
      />
    );
  }, [cityTitle, filterType]);

  return (
    <div className={styles.main}>
      <div className={styles.inputs}>
        <InputTextField
          value={cityTitle}
          onChange={(e) => {
            setCityTitle(e.target.value);
          }}
          style={{ mb: 2, mr: 1, width: "300px" }}
          label="Enter a city name"
        />

        <FormControl sx={{ width: "200px", mr: 1 }}>
          <InputLabel id="filter-type">Filter</InputLabel>
          <InputSelectField
            labelId="filter-type"
            label="filter"
            value={filterType}
            onChange={(e) => {
              setFilterType(e.target.value);
            }}
            types={[
              { id: 0, name: "None", ref: "" },
              { id: 1, name: "Postomat", ref: FILTER_TYPE.PostomatRef },
              { id: 2, name: "Post Department", ref: FILTER_TYPE.PostRef },
              { id: 3, name: "Cargo Department", ref: FILTER_TYPE.CargoRef },
            ]}
          />
        </FormControl>
        {filledBtn}
      </div>
      <Loader
        status={status}
        class={styles.circular}
        activeFunc={
          <DisplayDepartments
            error={error}
            countOfDepartments={countOfDepartments}
            departments={departments}
            page={page}
            setPage={setPage}
          />
        }
      />
    </div>
  );
}

export default SearchPage;
