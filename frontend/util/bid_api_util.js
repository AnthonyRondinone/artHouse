

export const sendBid = (bid) => {
  return $.ajax({
    method: 'POST',
    url: 'api/bids',
    data: bid
  });
};
