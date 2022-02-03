export function fetchAPIResponse(uri, addError) {
  const url = "http://localhost/assessment/web/api/" + uri;
  return fetch(url, {
    method: "GET",
    cache: "no-cache",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then(async (response) => {
      const data = await response.json();
      // console.log(data);
      if (response.ok) {
        return data;
      } else if (Array.isArray(data)) {
        addError(
          data.map((item) => `${item.status} : ${item.message} \r\n`).join("")
        );
      } else {
        addError(`${data[0].status} : ${data[0].message}`);
      }
    })
    .catch((error) => {
      addError(
        "APP_ERROR - There seems to be an issue in connecting to the server, Please try later."
      );
      // console.error("There was an error!", error);
    });
}
