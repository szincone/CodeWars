let countRedBeads = (n) => {
    //your code here
    // if n less than 2, we return 0
    if (n < 2) {
        return 0;
    }
    // since blue gems are bookends, 
    // subtract last bookend for total num of gems
    else {
      return (n * 2) - 2
    }
}
