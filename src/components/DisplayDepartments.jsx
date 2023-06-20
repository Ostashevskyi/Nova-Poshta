import React from "react";

import { Pagination } from "@mui/material";
import CityCard from "src/pages/Home/CityCard/CityCard";
import styles from "src/pages/Home/searchPage.module.css";

const DisplayDepartments = ({
  error,
  countOfDepartments,
  departments,
  page,
  setPage,
}) => {
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
          </div>
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
                siblingCount={0}
              />
            }
          </div>
        </div>
      )}
    </>
  );
};

export default DisplayDepartments;
