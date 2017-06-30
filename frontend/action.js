const fetchGem = (name) => {
  return $.ajax({
    method: 'GET',
    url: `/gem/${name}`
  });
};
