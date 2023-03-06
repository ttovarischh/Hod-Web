import axios from "axios";
import { useEffect, useState } from "react";

export default function Profile() {
  const [isLoading, setLoading] = useState(true);
  const [effectsData, setEffectsData] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/effects")
      .then(({ data }) => {
        setEffectsData(data);
        console.log(data);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div id="error-page">
      <h1 style={{ color: "white" }}>Oops!</h1>
      <p style={{ color: "white" }}>{JSON.stringify(effectsData)}</p>
    </div>
  );
}
