

export const sendBid = (bid) => {
  return $.ajax({
    method: 'POST',
    url: 'api/bids',
    data: { bid }
  });
};

export const fetchUserBids = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/bids'
  });
};
