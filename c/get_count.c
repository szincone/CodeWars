#include <stddef.h>

size_t get_count(const char *s)
{
  char *vowels;
  vowels = s;
  int vowel_count = 0;
  for (int i = 0; vowels[i] != '\0'; i++)
  {
    if (vowels[i] == 'a' || vowels[i] == 'e' || vowels[i] == 'i' || vowels[i] == 'o' || vowels[i] == 'u')
    {
      vowel_count++;
    }
  }
  return vowel_count;
}

int main(void)
{
  char string1[] = "Don't forget to be awesome";
  char string2[] = "a man a plan a canal panama";

  printf("The string 'Don't forget to be awesome' has %d vowels.\n", get_count(string1));
  printf("The string 'a man a plan a canal panama' has %d vowels.\n", get_count(string2));

  return 0;
}
