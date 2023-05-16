# L12 Concurrency Problems

Concurrency is the ability of a computer system to execute multiple tasks or processes concurrently, either in parallel or interleaved. While concurrency offers great performance benefits, it also introduces several challenges, including deadlocks, race conditions, and livelocks. In this post, we'll take a closer look at these common concurrency problems, their causes, and how programmers can prevent them.

**Deadlock:**

Deadlock occurs when two or more threads are waiting for each other to release a resource or lock, resulting in a deadlock or a standstill. For example, Thread A acquires lock 1 and requests lock 2, while Thread B acquires lock 2 and requests lock 1. Neither thread can proceed because they are waiting for each other to release the locks they hold.

Code Example:

```c
#include <stdio.h>
#include <pthread.h>

pthread_mutex_t lock1 = PTHREAD_MUTEX_INITIALIZER;
pthread_mutex_t lock2 = PTHREAD_MUTEX_INITIALIZER;

void *thread1(void *arg)
{
    pthread_mutex_lock(&lock1);
    printf("Thread 1 acquired lock1\n");
    sleep(1);
    pthread_mutex_lock(&lock2);
    printf("Thread 1 acquired lock2\n");
    pthread_mutex_unlock(&lock2);
    pthread_mutex_unlock(&lock1);
    return NULL;
}

void *thread2(void *arg)
{
    pthread_mutex_lock(&lock2);
    printf("Thread 2 acquired lock2\n");
    sleep(1);
    pthread_mutex_lock(&lock1);
    printf("Thread 2 acquired lock1\n");
    pthread_mutex_unlock(&lock1);
    pthread_mutex_unlock(&lock2);
    return NULL;
}

int main()
{
    pthread_t t1, t2;

    pthread_create(&t1, NULL, thread1, NULL);
    pthread_create(&t2, NULL, thread2, NULL);

    pthread_join(t1, NULL);
    pthread_join(t2, NULL);

    return 0;
}
```

To solve this problem, programmers can use several techniques such as avoiding circular waits, enforcing a strict ordering of resource acquisition, or using timeouts.

**Race Condition:**

A race condition occurs when multiple threads access the same shared resource at the same time, and the order in which they access it affects the program's behavior. For example, consider a counter shared by two threads. Both threads read the counter's value, increment it, and write it back. If both threads read the same value and increment it, the counter's final value will be less than the expected value because the increments are overwritten.

Code Example:

```c
#include <stdio.h>
#include <pthread.h>

int counter = 0;

void *increment(void *arg)
{
    int i;
    for (i = 0; i < 1000000; i++) {
        counter++;
    }
    return NULL;
}

int main()
{
    pthread_t t1, t2;

    pthread_create(&t1, NULL, increment, NULL);
    pthread_create(&t2, NULL, increment, NULL);

    pthread_join(t1, NULL);
    pthread_join(t2, NULL);

    printf("Counter value: %d\n", counter);

    return 0;
}
```

To solve this problem, programmers can use synchronization mechanisms such as locks, semaphores, or atomic operations to ensure that only one thread accesses the shared resource at a time.

**Livelock:**

A livelock occurs when two or more threads are blocked, but they keep trying to acquire a resource, so they never make progress. For example, consider two threads trying to pass each other in a narrow hallway. If both threads keep moving to the same side, they will never be able to pass each other

## Reading

- [Chapter 32: Common Concurrency Problems](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-bugs.pdf)

## Reference

You may find it helpful to clone the book's [code repository](https://github.com/remzi-arpacidusseau/ostep-code). This will allow you to quickly review the code associated with each chapter.

```bash
git clone https://github.com/remzi-arpacidusseau/ostep-code.git
```

## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSGHP0l6YTZVO7FWZCINPmA5qezqKDB3O8_7BH6kJ2_x_sdWIEp5vpRDYqoOSqttq4MhL5irjLqcNbE/embed?start=false&loop=false&delayms=3000" frameborder="0" width="480" height="299" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

The slide deck can be found [here](https://docs.google.com/presentation/d/1g-wmdDLiydV1C4-Adic2A0OUYZDD3-N0nW_d0CXuXck/edit?usp=sharing).

The Jamboard can be found [here](https://jamboard.google.com/d/1lu7JvSXDGZHYA87m_myOWTqi4TkU3Nn7dKVRE94wjMM/edit?usp=share_link).

## C/C++ Resources

Some useful resources in case you are a little rusty.

- [The C Programming Language, 2nd Edition](pathname:///resources/the-c-programming-language.pdf)
- [Essential C](pathname:///resources/essential-c.pdf)
- [The C Book](https://publications.gbdirect.co.uk//c_book)
- [A Tour of C++, 2nd Edition](pathname:///resources/a-tour-of-c++-2nd.pdf)

## Additional Resources

- [GDB Basics (VSCode)](https://youtu.be/u6iXfpBDU3w). This is a video tutorial on how to use GDB inside of a VSCode terminal. This doesn't integrate with the VSCode debugger system, but it is helpful.
- [GDB Cheatsheet](https://darkdust.net/files/GDB%20Cheat%20Sheet.pdf). This is a cheatsheet for GDB commands.
