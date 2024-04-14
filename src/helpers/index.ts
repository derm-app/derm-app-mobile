const isMorning = () => {
  const date = new Date();
  const hours = date.getHours();
  return hours >= 6 && hours < 12;
};

export { isMorning };
