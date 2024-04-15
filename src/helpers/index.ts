const greetings = {
  morning: 'Günaydın',
  noon: 'Tünaydın',
  afternoon: 'İyi akşamlar',
  evening: 'İyi akşamlar',
  night: 'İyi geceler',
};

const getGreeting = () => {
  const date = new Date();
  const hours = date.getHours();

  if (hours >= 6 && hours < 12) {
    return greetings.morning;
  } else if (hours >= 12 && hours < 18) {
    return greetings.noon;
  } else if (hours >= 18 && hours < 22) {
    return greetings.afternoon;
  } else {
    return greetings.night;
  }
};

export { getGreeting };
