function Fizzbuzz() {
  for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      document.write("FizzBuzz", "(", i, ")");
      document.write("<br>");
    } else if (i % 3 == 0) {
      document.write("Fizz", "(", i, ")");
      document.write("<br>");
    } else if (i % 5 == 0) {
      document.write("Buzz", "(", i, ")");
      document.write("<br>");
    } else {
      document.write(i);
      document.write("<br>");
    }
  }
}
