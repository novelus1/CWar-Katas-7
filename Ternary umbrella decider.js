function takeUmbrella(weather, chance) {
  return (weather === "sunny" && chance <= 0.5) ||
    (weather === "cloudy" && chance <= 0.2)
    ? false
    : true;
}
