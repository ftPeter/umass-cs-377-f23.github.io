# L08 Introduction to Concurrency

Concurrency and threads are important concepts in operating systems that are crucial to achieving efficient and parallel processing. Concurrency refers to the ability of a computer system to run multiple programs or processes simultaneously, while threads refer to the smallest unit of processing that can be scheduled by an operating system.

Threads are often used in concurrency because they allow multiple operations to take place within a single program or process. By dividing a program into multiple threads, each thread can work on a different task concurrently, resulting in faster and more efficient processing. For example, a web server can handle multiple requests at the same time by using multiple threads to process each request separately.

There are two main types of threads: user-level threads and kernel-level threads. User-level threads are managed by the application itself and do not require intervention from the operating system, while kernel-level threads are managed by the operating system and can take advantage of features like preemption and scheduling.

One of the challenges of concurrency and thread management is ensuring that multiple threads do not interfere with each other. This is known as synchronization, and it involves using techniques such as locks, semaphores, and monitors to ensure that only one thread can access a shared resource at a time.

In addition to synchronization, thread management also involves scheduling, which determines which thread should run at any given time. Operating systems use various scheduling algorithms to determine the order in which threads are executed, including round-robin, priority-based, and fair-share scheduling.

Overall, concurrency and thread management are important concepts for operating systems, allowing multiple operations to take place simultaneously and improving overall system efficiency. Understanding how threads work and how to manage them is crucial for developers working on complex systems where efficient parallel processing is critical.

> Thus far, we have seen the development of the basic abstractions that the OS performs. We have seen how to take a single physical CPU and turn it into multiple virtual CPUs, thus enabling the illusion of multiple programs running at the same time. We have also seen how to create the illusion of a large, private virtual memory for each process; this abstraction of the address space enables each program to behave as if it has its own memory when indeed the OS is secretly multiplexing address spaces across physical memory (and sometimes, disk).
>
> In this note, we introduce a new abstraction for a single running process: that of a thread. Instead of our classic view of a single point of execution within a program (i.e., a single PC where instructions are being fetched from and executed), a multi-threaded program has more than one point of execution (i.e., multiple PCs, each of which is being fetched and executed from). Perhaps another way to think of this is that each thread is very much like a separate process, except for one difference: they share the same address space and thus can access the same data. 
--OSTEP

:::note

**THE CRUX: HOW TO SUPPORT SYNCHRONIZATION**

What support do we need from the hardware in order to build useful synchronization primitives? What support do we need from the OS? How can we build these primitives correctly and efficiently? How can programs use them to get the desired results?

:::

## Reading

- [Chapter 26: Concurrency: An Introduction](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-intro.pdf)

### Reference

- [Chapter 27: Interlude: Thread API](https://pages.cs.wisc.edu/~remzi/OSTEP/threads-api.pdf)

You may find it helpful to clone the book's [code repository](https://github.com/remzi-arpacidusseau/ostep-code). This will allow you to quickly review the code associated with each chapter.
```bash
git clone https://github.com/remzi-arpacidusseau/ostep-code.git
```

## Slides

import { PowerPoint } from '@site/src/components/PowerPoint'

<PowerPoint lec_src={require('./08-intro-conc.pptx').default}/>

## C/C++ Resources

Some useful resources in case you are a little rusty.

- [The C Programming Language, 2nd Edition](pathname:///resources/the-c-programming-language.pdf)
- [Essential C](pathname:///resources/essential-c.pdf)
- [The C Book](https://publications.gbdirect.co.uk//c_book)
- [A Tour of C++, 2nd Edition](pathname:///resources/a-tour-of-c++-2nd.pdf)

## Additional Resources

- [GDB Basics (VSCode)](https://youtu.be/u6iXfpBDU3w). This is a video tutorial on how to use GDB inside of a VSCode terminal. This doesn't integrate with the VSCode debugger system, but it is helpful.