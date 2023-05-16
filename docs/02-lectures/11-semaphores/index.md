# L11 Semaphores

In computer science, a semaphore is a variable used to control access to a shared resource, such as a file or a piece of memory. Semaphores are used in multi-process and multi-threaded environments to prevent race conditions and ensure synchronization between threads.

A semaphore has two basic operations: wait and signal. The wait operation, also known as P operation, decrements the value of the semaphore. If the semaphore's value becomes negative, the calling process or thread is blocked until the semaphore's value becomes positive again. The signal operation, also known as V operation, increments the value of the semaphore. If there are any blocked processes or threads waiting for the semaphore, one of them is unblocked.

Here is an example of how semaphores can be used in C programming language:

```cpp
#include <stdio.h>
#include <pthread.h>
#include <semaphore.h>

sem_t semaphore;

void* thread_func(void* arg) {
  printf("Thread %ld is waiting...\n", pthread_self());
  sem_wait(&semaphore);
  printf("Thread %ld has acquired the semaphore!\n", pthread_self());
  // Do some work...
  printf("Thread %ld is releasing the semaphore.\n", pthread_self());
  sem_post(&semaphore);
  return NULL;
}

int main() {
  sem_init(&semaphore, 0, 1); // Initialize the semaphore with a value of 1
  pthread_t t1, t2;
  pthread_create(&t1, NULL, thread_func, NULL);
  pthread_create(&t2, NULL, thread_func, NULL);
  pthread_join(t1, NULL);
  pthread_join(t2, NULL);
  sem_destroy(&semaphore);
  return 0;
}
```

In this example, we create two threads that call the `thread_func` function. Inside the function, each thread waits for the semaphore to become available using `sem_wait`, does some work, and then releases the semaphore using `sem_post`. The `sem_init` function initializes the semaphore with a value of `1`, which means only one thread can acquire the semaphore at a time. The `sem_destroy` function is called at the end of the program to release any resources used by the semaphore.

## Reading

- [Chapter 31: Semaphores](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-sema.pdf)

## Reference

You may find it helpful to clone the book's [code repository](https://github.com/remzi-arpacidusseau/ostep-code). This will allow you to quickly review the code associated with each chapter.

```bash
git clone https://github.com/remzi-arpacidusseau/ostep-code.git
```

## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTUcdH3PCIOg3qt5QcqLKt8tlr6cyBLpfHdElsxL9nZdXAvKLRwdQwJyTgoElhQt8j61OwC8vDIrQKh/embed?start=false&loop=false&delayms=3000" frameborder="0" width="660" height="269" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

The slide deck can be found [here](https://docs.google.com/presentation/d/16u8lOaI2_nvQ7X1Mo3r_zmwNDTmKdRx-F4qbzMMfA5I/edit?usp=sharing).

The Jamboard can be found [here](https://jamboard.google.com/d/1ukm8mhZI6-lCzgVwpP-BEsa0XQCuGOyCSOSOEfSJGoA/edit?usp=sharing).

## C/C++ Resources

Some useful resources in case you are a little rusty.

- [The C Programming Language, 2nd Edition](pathname:///resources/the-c-programming-language.pdf)
- [Essential C](pathname:///resources/essential-c.pdf)
- [The C Book](https://publications.gbdirect.co.uk//c_book)
- [A Tour of C++, 2nd Edition](pathname:///resources/a-tour-of-c++-2nd.pdf)

## Additional Resources

- [GDB Basics (VSCode)](https://youtu.be/u6iXfpBDU3w). This is a video tutorial on how to use GDB inside of a VSCode terminal. This doesn't integrate with the VSCode debugger system, but it is helpful.
