

export const sendBid = (bid) => {
  debugger
  return $.ajax({
    method: 'POST',
    url: 'api/bids',
    data: bid
  });
};
