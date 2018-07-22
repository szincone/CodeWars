const potatoes = (p0, w0, p1) => {
    // find the dry matter percentage by subtracting
    // water percentage from 100, divide to find the constant,
    // multiply by total weight to get final weight
    let total = w0 * ((100 - p0) / (100 - p1));
    // use bitwise double bitwise NOT (~~), floors for positive
    // numbers, ceilings for negative numbers
    total = ~~total;
    return total;
}
