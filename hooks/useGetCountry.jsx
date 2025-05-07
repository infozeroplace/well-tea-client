import { useEffect, useState } from "react";

const useGetCountry = async () => {
  const [defaultCountry, setDefaultCountry] = useState("");

  const detectCountry = async () => {
    // Try Geolocation API first
    if ("geolocation" in navigator) {
      return new Promise((resolve) => {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            resolve(data.address?.country || null);
          },
        );
      });
    }
  };

  // Usage in React (e.g., useEffect)
  useEffect(() => {
    detectCountry().then((country) => {
      if (country) {
        setDefaultCountry(country.toLowerCase());
      }
    });
  }, []);
  
  
  return { defaultCountry: "ok" };
};

export default useGetCountry;
