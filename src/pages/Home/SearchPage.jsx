import { useCallback, useEffect, useMemo, useState } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Loader from "src/components/Loader";
import { useTranslation } from "react-i18next";
import { FILTER_TYPE } from "src/utils/constants";
import FilledButton from "src/components/FilledButton";
import { FormControl, InputLabel } from "@mui/material";
import { fetchDepartment } from "src/store/departmentSlice";
import InputSelectField from "src/components/InputSelectField";
import DisplayDepartments from "src/components/DisplayDepartments";

import styles from "./searchPage.module.css";
import useGetLanguage from "src/hooks/useGetLanguage";
import useInputTextField from "src/hooks/useInputTextField";

function SearchPage() {
  const { t } = useTranslation(["home"]);
  const [language] = useGetLanguage();
  const [cityTitle, setCityTitle] = useInputTextField({
    type: "text",
    style: { mb: 2, mr: 1, width: "300px" },
    label: t("input_placeholder"),
  });
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
        style={{ mb: 2, height: "56px", width: "15%" }}
      >
        {t("find")}{" "}
      </FilledButton>
    );
  }, [cityTitle, filterType, language]);

  return (
    <div className={styles.main}>
      <div className={styles.inputs}>
        {setCityTitle}
        <FormControl sx={{ width: "200px", mr: 1 }}>
          <InputLabel id="filter-type">{t("filter")}</InputLabel>
          <InputSelectField
            labelId="filter-type"
            label="filter"
            value={filterType}
            onChange={(e) => {
              setFilterType(e.target.value);
            }}
            types={[
              { id: 0, name: t("filters.0"), ref: "" },
              { id: 1, name: t("filters.1"), ref: FILTER_TYPE.PostomatRef },
              { id: 2, name: t("filters.2"), ref: FILTER_TYPE.PostRef },
              { id: 3, name: t("filters.3"), ref: FILTER_TYPE.CargoRef },
            ]}
          />
        </FormControl>
        {filledBtn}
      </div>
      <Loader status={status} cls={styles.circular}>
        <DisplayDepartments
          error={error}
          countOfDepartments={countOfDepartments}
          departments={departments}
          page={page}
          setPage={setPage}
        />
      </Loader>
    </div>
  );
}

export default SearchPage;
