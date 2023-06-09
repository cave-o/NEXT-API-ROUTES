import PackageList from "@/cmps/package-list";
import { packageService } from "@/services/package.service";
import { useEffect, useState } from "react";

function Tours() {
  const [shownCount, setShownCount] = useState(3);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    loadPackages();
  }, [shownCount]);

  async function loadPackages() {
    try {
      const filterBy = { amount: shownCount };
      const packages = await packageService.query(filterBy);
      setPackages(packages);
    } catch (err) {
      console.log("err:", err);
    }
  }

  function onSetShownCount() {
    setShownCount((prevCount) => {
      if (prevCount >= 12) return 3;
      return prevCount + 3;
    });
  }

  return (
    <div className="package">
      <div className="heading">
        <h1>Packages</h1>
      </div>
      <PackageList
        packages={packages}
        onSetShownCount={onSetShownCount}
        shownCount={shownCount}
      />
    </div>
  );
}

export default Tours;
