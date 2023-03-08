# L09 Locks

From the introduction to concurrency, we saw one of the fundamental problems in concurrent programming: we would like to execute a series of instructions atomically, but due to the presence of interrupts on a single processor (or multiple threads executing on multiple processors concurrently), we couldn’t. In this chapter, we thus attack this problem directly, with the introduction of something referred to as a lock. Programmers annotate source code with locks, putting them around critical sections, and thus ensure that any such critical section executes as if it were a single atomic instruction.

Locks are a basic synchronization mechanism that can be used to ensure that only one thread at a time can access a shared resource. In C, locks are typically implemented using mutexes. A mutex is a variable that is used to protect access to a shared resource. It is a binary semaphore that is used to control access to a critical section of code.

Condition variables are used to signal between threads that a particular condition has been met. They are typically used in conjunction with mutexes to ensure that the signal is only sent when the condition has been met. In C, condition variables are typically implemented using the `pthread_cond_t` type.

Here's an example of each in C:

```c
#include <pthread.h>
#include <stdio.h>

pthread_mutex_t mutex;
pthread_cond_t cond;
int count = 0;

void *thread1(void *arg) {
    pthread_mutex_lock(&mutex);
    while (count < 10) {
        pthread_cond_wait(&cond, &mutex);
    }
    pthread_mutex_unlock(&mutex);
    printf("Thread 1: done\\n");
    return NULL;
}

void *thread2(void *arg) {
    pthread_mutex_lock(&mutex);
    count = 10;
    pthread_cond_signal(&cond);
    pthread_mutex_unlock(&mutex);
    printf("Thread 2: done\\n");
    return NULL;
}

int main() {
    pthread_t t1, t2;
    pthread_mutex_init(&mutex, NULL);
    pthread_cond_init(&cond, NULL);
    pthread_create(&t1, NULL, thread1, NULL);
    pthread_create(&t2, NULL, thread2, NULL);
    pthread_join(t1, NULL);
    pthread_join(t2, NULL);
    pthread_mutex_destroy(&mutex);
    pthread_cond_destroy(&cond);
    return 0;
}
```

This program creates two threads, one of which waits for a condition to be signaled by the other thread. The mutex is used to protect access to the shared variable `count`. The condition variable is used to signal that the condition has been met.

Semaphores are used to control access to a shared resource. They are similar to mutexes in that they can be used to ensure that only one thread at a time can access a shared resource. However, they are more flexible than mutexes in that they can be used to control access to a shared resource by multiple threads at the same time.

Here's an example of how semaphores can be used in C to control access to a shared resource:

```c
#include <pthread.h>
#include <stdio.h>
#include <semaphore.h>

sem_t sem;
int count = 0;

void *thread1(void *arg) {
    sem_wait(&sem);
    count++;
    sem_post(&sem);
    printf("Thread 1: count = %d\\n", count);
    return NULL;
}

void *thread2(void *arg) {
    sem_wait(&sem);
    count++;
    sem_post(&sem);
    printf("Thread 2: count = %d\\n", count);
    return NULL;
}

int main() {
    pthread_t t1, t2;
    sem_init(&sem, 0, 1);
    pthread_create(&t1, NULL, thread1, NULL);
    pthread_create(&t2, NULL, thread2, NULL);
    pthread_join(t1, NULL);
    pthread_join(t2, NULL);
    sem_destroy(&sem);
    return 0;
}
```

In this example, the two threads increment a shared variable `count` using a semaphore to control access to it. The semaphore is initialized with a value of 1, so only one thread can access the shared variable at a time.

In summary, locks, mutexes, condition variables, and semaphores are all synchronization mechanisms that can be used to control access to shared resources in concurrent programs. Each has its own strengths and weaknesses, and the choice of which one to use depends on the specific requirements of the program.

## Reading

- [Chapter 28: Locks](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks.pdf)

### Reference

- [Chapter 29: Lock-based Concurrent Data Structures](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-locks-usage.pdf)

You may find it helpful to clone the book's [code repository](https://github.com/remzi-arpacidusseau/ostep-code). This will allow you to quickly review the code associated with each chapter.
```bash
git clone https://github.com/remzi-arpacidusseau/ostep-code.git
```

## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ20SixBw9aOPaWDMGJkrx8art8XNjyaMN3MBZvaZ54DpHoonZWLr0ELBruWjJmNcpFNauXaLyUNrhz/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

The slide deck can be found [here](https://docs.google.com/presentation/d/1X8Mj0Llah1YrW8g6sB59RE9L4Z9XfkOpm_N_LkeKYes/edit#slide=id.p).

## C/C++ Resources

Some useful resources in case you are a little rusty.

- [The C Programming Language, 2nd Edition](pathname:///resources/the-c-programming-language.pdf)
- [Essential C](pathname:///resources/essential-c.pdf)
- [The C Book](https://publications.gbdirect.co.uk//c_book)
- [A Tour of C++, 2nd Edition](pathname:///resources/a-tour-of-c++-2nd.pdf)

## Additional Resources

- [GDB Basics (VSCode)](https://youtu.be/u6iXfpBDU3w). This is a video tutorial on how to use GDB inside of a VSCode terminal. This doesn't integrate with the VSCode debugger system, but it is helpful.
