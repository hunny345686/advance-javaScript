// Fetch API + Filtering the top Univercity
// https://jsonmock.hackerrank.com/api/universities

async function getUnivercitys(country = "") {
  let page = 1;
  let totalpage = 1;
  let univercity = [];

  while (page <= totalpage) {
    const responce = await fetch(
      `https://jsonmock.hackerrank.com/api/universities/?page=${page}`,
    );
    const resut = await responce.json();

    totalpage = resut.total_pages;
    page++;
    univercity.push(...resut.data);
  }
  const filterUnivercity = univercity.filter((u) => {
    return u.location.country === country;
  });

  return filterUnivercity ? filterUnivercity[0] : "NA";
}

(async () => {
  console.log(await getUnivercitys("India"));
  console.log(await getUnivercitys("United Kingdom"));
})();
