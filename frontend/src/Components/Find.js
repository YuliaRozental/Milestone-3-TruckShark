import { useEffect, useState } from "react";

function Find(data) {
  const [finds, setFinds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://127.0.0.1:5001/trucks/`)
      const resData = await response.json()
      setFinds(resData)
    }
    fetchData()
  }, [])

  return (
    <div>
      {finds.data?.map(photo => (
        <img src={photo.url} alt={photo.description} key={photo.id} />
      ))}
    </div>
  );
}

export default Find;