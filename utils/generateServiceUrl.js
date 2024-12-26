const generateServiceUrl = (baseUrl, query) => {
  let url = baseUrl;

  if (query) {
    if (query.constructor !== Object) return url + query;

    const queryStrings = [];

    for (const [key, value] of Object.entries(query)) {
      if (value !== undefined && value !== null && value !== "") {
        queryStrings.push(
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
        );
      }
    }

    if (queryStrings.length > 0) {
      url += `?${queryStrings.join("&")}`;
    }
  }

  return url;
};

export default generateServiceUrl;
