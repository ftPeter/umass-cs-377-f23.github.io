# L06 Introduction to Scheduling

> By now low-level mechanisms of running processes (e.g., context switching)
> should be clear; if they are not, go back a chapter or two, and read the
> description of how that stuff works again. However, we have yet to understand
> the high-level policies that an OS scheduler employs. We will
> now do just that, presenting a series of scheduling policies (sometimes
> called disciplines) that various smart and hard-working people have developed
> over the years.
> The origins of scheduling, in fact, predate computer systems; early
> approaches were taken from the field of operations management and applied to
> computers. This reality should be no surprise: assembly lines
> and many other human endeavors also require scheduling, and many of
> the same concerns exist therein, including a laser-like desire for efficiency.
-- OSTEP

:::note

**THE CRUX: HOW TO DEVELOP SCHEDULING POLICY**

How should we develop a basic framework for thinking about scheduling policies? What are the key assumptions? What metrics are important? What basic approaches have been used in the earliest of computer systems?

:::

## Reading

- [Chapter 7 Scheduling Introduction](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched.pdf).

You may find it helpful to clone the book's [code repository](https://github.com/remzi-arpacidusseau/ostep-code). This will allow you to quickly review the code associated with each chapter.

```bash
git clone https://github.com/remzi-arpacidusseau/ostep-code.git
```

## Slides

import { PowerPoint } from '@site/src/components/PowerPoint'

<PowerPoint lec_src={require('./06-intro-cpu-sched.pptx').default}/>

## C/C++ Resources

Some useful resources in case you are a little rusty.

- [The C Programming Language, 2nd Edition](pathname:///resources/the-c-programming-language.pdf)
- [Essential C](pathname:///resources/essential-c.pdf)
- [The C Book](https://publications.gbdirect.co.uk//c_book)
- [A Tour of C++, 2nd Edition](pathname:///resources/a-tour-of-c++-2nd.pdf)

## Additional Resources

- [GDB Basics (VSCode)](https://youtu.be/u6iXfpBDU3w). This is a video tutorial on how to use GDB inside of a VSCode terminal. This doesn't integrate with the VSCode debugger system, but it is helpful.