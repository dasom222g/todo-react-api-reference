export const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const header = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};
