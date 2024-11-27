let time = 100;
const movement = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\n'];
for (let character of movement) {
  setTimeout(() => {
    process.stdout.write(character)
  }, time);
  time += 200;
};
