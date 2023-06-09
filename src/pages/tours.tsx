import React, { useEffect, useState } from "react";
import TourList from "@/cmps/tour-list";
import { tourService } from "@/services/tourService";

function Tours() {
  const [shownCount, setShownCount] = useState(3);
  const [tour, setTour] = useState([]);

  useEffect(() => {
    async function loadTour() {
      try {
        const allTours = await tourService.getAllTours();
        const filteredTours = allTours.slice(0, shownCount);
        setTour(filteredTours);
      } catch (err) {
        console.log("err:", err);
      }
    }

    loadTour();
  }, [shownCount]);

  function onSetShownCount() {
    setShownCount((prevCount) => {
      if (prevCount >= 12) return 3;
      return prevCount + 3;
    });
  }

  return (
    <div className="package">
      <div className="heading">
        <h1>Tours</h1>
      </div>
      <TourList tours={tour} onSetShownCount={onSetShownCount} />
    </div>
  );
}

export default Tours;
