# L07 MLFQ

Are you tired of waiting in long queues for your turn to use the computer? Do you want a system that prioritizes your needs and efficiently allocates resources? Look no further than the multi-level feedback queue algorithm!

The multi-level feedback queue algorithm is a scheduling algorithm that aims to provide a balanced allocation of resources while also taking into account the varying priorities of different processes. This algorithm operates by dividing processes into different queues based on their characteristics, such as their priority level and CPU usage. Processes that require more resources and have a higher priority are placed in higher-level queues, while processes with lower priority are placed in lower-level queues.

But what sets this algorithm apart is its ability to dynamically adjust the priority level of a process based on its behavior. For example, if a process has been waiting in a lower-level queue for a long time, it may be elevated to a higher-level queue to receive more attention and resources. Conversely, if a process has been using the CPU extensively, it may be demoted to a lower-level queue to allow other processes to have a chance at utilizing the CPU.

This dynamic adjustment of priority levels ensures that all processes receive fair access to resources and that high-priority processes do not monopolize the system. It also allows for efficient use of resources, as processes that require less attention and resources can be scheduled in lower-level queues and not take up unnecessary resources.

The multi-level feedback queue algorithm is a testament to the power of dynamic and adaptive systems. By continuously monitoring and adjusting priorities, it provides an efficient and fair allocation of resources that maximizes system performance. So, the next time you're waiting in a queue for your turn to use the computer, remember that there's a powerful algorithm working behind the scenes to make sure your needs are met efficiently and fairly.

> In this chapter, we’ll tackle the problem of developing one of the most well-known approaches to scheduling, known as the Multi-level Feedback Queue (MLFQ). The Multi-level Feedback Queue (MLFQ) scheduler was first described by Corbato et al. in 1962 in a system known as the Compatible Time-Sharing System (CTSS), and this work, along with later work on Multics, led the ACM to award Corbato its highest honor, the Turing Award. The scheduler has subsequently been refined throughout the years to the implementations you will encounter in some modern systems.
--OSTEP

:::note

**THE CRUX: HOW TO SCHEDULE WITHOUT PERFECT KNOWLEDGE?**

How can we design a scheduler that both minimizes response time for
interactive jobs while also minimizing turnaround time without a priori
knowledge of job length?

:::

## Reading

- [Chapter 8: Scheduling: The Multi-Level Feedback Queue](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched-mlfq.pdf)

You may find it helpful to clone the book's [code repository](https://github.com/remzi-arpacidusseau/ostep-code). This will allow you to quickly review the code associated with each chapter.

```bash
git clone https://github.com/remzi-arpacidusseau/ostep-code.git
```

## Slides

import { PowerPoint } from '@site/src/components/PowerPoint'

<PowerPoint lec_src={require('./07-mlfq.pptx').default}/>

## C/C++ Resources

Some useful resources in case you are a little rusty.

- [The C Programming Language, 2nd Edition](pathname:///resources/the-c-programming-language.pdf)
- [Essential C](pathname:///resources/essential-c.pdf)
- [The C Book](https://publications.gbdirect.co.uk//c_book)
- [A Tour of C++, 2nd Edition](pathname:///resources/a-tour-of-c++-2nd.pdf)

## Additional Resources

- [GDB Basics (VSCode)](https://youtu.be/u6iXfpBDU3w). This is a video tutorial on how to use GDB inside of a VSCode terminal. This doesn't integrate with the VSCode debugger system, but it is helpful.