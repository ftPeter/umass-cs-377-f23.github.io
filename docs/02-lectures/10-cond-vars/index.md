# L10 Condition Variables

In multi-threaded programs, it is common for threads to communicate with each other and coordinate their actions based on certain conditions. For example, a thread may need to wait for some data to become available before proceeding with its task. The traditional approach of using busy-waiting to wait for a condition can be inefficient and wasteful of system resources. To solve this problem, operating systems and programming languages provide a synchronization mechanism called condition variables.

A condition variable allows a thread to suspend its execution until a certain condition is met. It does this by providing two main operations: `wait` and `signal`. The `wait` operation causes the thread to suspend its execution until another thread signals that the condition has been met. The `signal` operation wakes up one or more waiting threads, allowing them to resume execution.

In C programming language, condition variables are typically implemented using the `pthread` library. Here is an example of how to use condition variables in C:

```cpp
#include <pthread.h>

pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
pthread_cond_t cond = PTHREAD_COND_INITIALIZER;
int data = 0;
int ready = 0;

void* producer(void* arg) {
    // Produce some data
    data = 42;

    // Signal that the data is ready
    pthread_mutex_lock(&mutex);
    ready = 1;
    pthread_cond_signal(&cond);
    pthread_mutex_unlock(&mutex);

    return NULL;
}

void* consumer(void* arg) {
    // Wait for the data to become available
    pthread_mutex_lock(&mutex);
    while (!ready) {
        pthread_cond_wait(&cond, &mutex);
    }

    // Consume the data
    printf("Data = %d\n", data);

    pthread_mutex_unlock(&mutex);

    return NULL;
}

int main() {
    pthread_t tid1, tid2;
    pthread_create(&tid1, NULL, producer, NULL);
    pthread_create(&tid2, NULL, consumer, NULL);
    pthread_join(tid1, NULL);
    pthread_join(tid2, NULL);
    return 0;
}
```

In this example, we have a producer thread that produces some data and signals the consumer thread that the data is ready. The consumer thread waits for the data to become available using the `pthread_cond_wait` function, which suspends the thread until another thread signals the condition. When the data is available, the consumer thread consumes it and prints it to the console.

Overall, using condition variables can greatly improve the performance and efficiency of multi-threaded programs by avoiding busy-waiting and allowing threads to synchronize their actions based on conditions.

## Reading

- [Chapter 30: Condition Variables](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-cv.pdf)


## Reference

You may find it helpful to clone the book's [code repository](https://github.com/remzi-arpacidusseau/ostep-code). This will allow you to quickly review the code associated with each chapter.
```bash
git clone https://github.com/remzi-arpacidusseau/ostep-code.git
```

## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS0K399AATzwiuGqasbPtD4_F5CF0flwc60krTxuwpJCEULGwGAqWt0mrm4Kch56x2zk8220u9KBkKT/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

The slide deck can be found [here](https://docs.google.com/presentation/d/1uOaxr3rJqNQPwFhleMDWKf89e6wbCnHG4qhGtUlEX9Y/edit?usp=sharing).

## C/C++ Resources

Some useful resources in case you are a little rusty.

- [The C Programming Language, 2nd Edition](pathname:///resources/the-c-programming-language.pdf)
- [Essential C](pathname:///resources/essential-c.pdf)
- [The C Book](https://publications.gbdirect.co.uk//c_book)
- [A Tour of C++, 2nd Edition](pathname:///resources/a-tour-of-c++-2nd.pdf)

## Additional Resources

- [GDB Basics (VSCode)](https://youtu.be/u6iXfpBDU3w). This is a video tutorial on how to use GDB inside of a VSCode terminal. This doesn't integrate with the VSCode debugger system, but it is helpful.