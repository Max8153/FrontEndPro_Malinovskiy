function pow(num, degree) {
    switch (num) {
        case 0: return 0;
        break;
        case 1: return 1;
    }
    switch (true) {
        case degree === 0: return 1;
        break;
        case degree === 1: return num;
        break;
        case degree > 1: return num*pow(num, --degree);
        break;
        case degree < 1: return 1/num*pow(num, ++degree);
        default: return num;
    }
  }
console.log(pow(2, 5));