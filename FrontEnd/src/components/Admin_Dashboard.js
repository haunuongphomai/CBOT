import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../public/css/adform.css";
export default function GetDashboard() {
  const url = `http://localhost:8080/home/dashboard/getAll`;
  const [dashboard, setDashboard] = useState(null);
  let content = [];

  useEffect(() => {
    Axios.get(url).then((res) => {
      setDashboard(res.data);
    });
  }, [url]);

  if (dashboard) {
    content = (
      <div className="data">
        {dashboard.data.map((item) => {
          return (
            <div>
              <div>
                <h1>ID: {item.id} </h1>
              </div>
              <div>
                <h1>Name: {item.name} </h1>
              </div>
              <div>
                <h1>Theory</h1>
                <div className="font-css-admin">
                  {item.theory
                    .replaceAll("\\n", "\n")
                    .replaceAll("\\t", "       ")}
                </div>
              </div>
              <div>
                <h1>Declare</h1>
                <div className="font-css-admin">
                  {item.declare.replaceAll("\\n", "\n").replaceAll("\\t", "\t")}
                </div>
              </div>
              <div>
                <h1>Example</h1>
                <div className="font-css-admin">
                  {item.example.replaceAll("\\n", "\n").replaceAll("\\t", "\t")}
                </div>
              </div>
              <hr className="aline"></hr>
              <br></br>
              <br></br>
            </div>
          );
        })}
      </div>
    );
  }
  return <div>{content}</div>;
}
