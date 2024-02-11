import { formatCountdown } from "antd/es/statistic/utils";
import React from "react";
import { useSearchParams, useParams } from "react-router-dom";
import Data from "../Data";

const Athlete = () => {
  const Params = useParams();
  const [SearchParams, setSeacrchParams] = useSearchParams();

  console.log(Params.id, "1234122312232");

  const ids = SearchParams.get("ids");
  const coachId = SearchParams.get("coachId");

  const selectedCoach = Data.coachs.filter((item) => item.id === Number(coachId));
  const selectedAthelate = selectedCoach[0].students.filter((item) => item.id === Number(ids));

  return (
    <div className="athletePage">
      <h1>Athlete-{ids}</h1>
      <span>نام: {selectedAthelate[0].name}</span>
      <span>{selectedAthelate[0].history}سال</span>
      <span>سن: {selectedAthelate[0].age}</span>
    </div>
  );
};

export default Athlete;
