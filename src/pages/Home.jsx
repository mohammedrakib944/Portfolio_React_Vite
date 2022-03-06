import React, { useEffect, useState } from "react";

export default function Home() {
  const [count, setCount] = useState(109);

  useEffect(() => {
    console.log("Running.");
  }, []);

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 bg-primary center-block">
            <h2>4</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
