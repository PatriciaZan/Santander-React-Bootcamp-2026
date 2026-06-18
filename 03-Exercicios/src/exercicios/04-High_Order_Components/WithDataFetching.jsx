import React, { useEffect, useState } from "react";

export default function WithDataFetching(title, WrapperComponent, endpoint) {
  return () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await `${url}${endpoint}`;

          if (!response.ok) {
            throw new Error("Error occured");
          }

          const data = await response.json();
          setData(data);
          setIsLoading(false);
        } catch (err) {
          setError("An error occured");
          setIsLoading(false);
        }
      };

      fetchData();
    }, [endpoint]);

    if (isLoading) {
      return (
        <div>
          <h2>{title}</h2>
          <p>Loading data....</p>
        </div>
      );
    }
    if (error) {
      return (
        <div>
          <h2>{title}</h2>
          <p>Error {error}</p>
        </div>
      );
    }

    if (data.length === 0) {
      return (
        <div>
          <h2>{title}</h2>
          <p>No data found</p>
        </div>
      );
    }

    return <WrapperComponent data={data} />;
  };
}
