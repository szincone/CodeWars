int solution(int number)
{
  int num_copy, total;
  num_copy = number;
  total = 0;
  for (int i = 0; i < number; i++)
  {
    if ((i % 3 == 0) || (i % 5 == 0))
    {
      total += i;
    }
  }
  return total;
}
