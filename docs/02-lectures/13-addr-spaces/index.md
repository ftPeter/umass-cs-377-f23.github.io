# L13 Address Spaces

Address spaces are an essential concept in operating systems. An address space is a set of addresses that a process can use to access memory locations. It provides a logical view of how a process can access memory, while the operating system is responsible for mapping these logical addresses to the physical memory locations. Address spaces help in ensuring that the memory is used efficiently, and programs can run without interfering with each other.

Dynamic relocation is an essential aspect of address spaces. It allows programs to be loaded into memory at different locations, so that they do not interfere with other programs. Dynamic relocation requires hardware support from the processor, which includes a Memory Management Unit (MMU) and Virtual Memory.

The advantages of dynamic relocation are that it enables the operating system to load multiple programs into memory, ensuring that they do not interfere with each other. This feature allows programs to be written and tested independently, reducing the risk of bugs and errors in the code. Additionally, it provides a level of security by preventing processes from accessing memory outside of their address space.

Base and bounds are two techniques used in implementing address spaces. The base register contains the starting address of the process's memory, while the bounds register specifies the range of memory that the process can access. Base and bounds can be used to ensure that a process can only access memory within its address space.

Internal and external fragmentation are two issues that can arise when managing address spaces. Internal fragmentation occurs when a process allocates memory that is larger than what it needs, leading to wasted space. External fragmentation, on the other hand, occurs when there is free memory, but it is not contiguous, leading to the inability to allocate large blocks of memory.

To summarize, address spaces are an essential concept in operating systems, allowing processes to access memory locations. Dynamic relocation, base and bounds, and memory management hardware are all essential features of address spaces. While fragmentation can be a problem, proper management of address spaces can ensure that memory is used efficiently and processes can run without interfering with each other.

## Reading

- [Chapter 13: The Abstraction: Address Spaces](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-intro.pdf)

### Reference

- [Chapter 14: Interlude: Memory API](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-api.pdf)

You may find it helpful to clone the book's [code repository](https://github.com/remzi-arpacidusseau/ostep-code). This will allow you to quickly review the code associated with each chapter.

```bash
git clone https://github.com/remzi-arpacidusseau/ostep-code.git
```

The code associated with this lecture:

- [ostep-code/vm-intro at master · remzi-arpacidusseau/ostep-code](https://github.com/remzi-arpacidusseau/ostep-code/tree/master/vm-intro)

## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRoobDH33I_6E_l8NVvdHmfHMQ-_bBdieZlo3zQtyNGBZ8DJ6fUE6yBLsApkONEvDiTD4Z9Rxcj2Wqo/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

The slide deck can be found [here](https://docs.google.com/presentation/d/1DhmpWGnBfUEEbTCo4AkUCWXNpeA_qpIdUuvnSVZESbE/edit?usp=sharing).

The Jamboard can be found [here](https://jamboard.google.com/d/1WHm2G3cswRUaEZYRW2TF1Lobm7B0-YbTgvVHkGD9gOQ/edit?usp=share_link).

## C/C++ Resources

Some useful resources in case you are a little rusty.

- [The C Programming Language, 2nd Edition](pathname:///resources/the-c-programming-language.pdf)
- [Essential C](pathname:///resources/essential-c.pdf)
- [The C Book](https://publications.gbdirect.co.uk//c_book)
- [A Tour of C++, 2nd Edition](pathname:///resources/a-tour-of-c++-2nd.pdf)

## Additional Resources

- [GDB Basics (VSCode)](https://youtu.be/u6iXfpBDU3w). This is a video tutorial on how to use GDB inside of a VSCode terminal. This doesn't integrate with the VSCode debugger system, but it is helpful.
- [GDB Cheatsheet](https://darkdust.net/files/GDB%20Cheat%20Sheet.pdf). This is a cheatsheet for GDB commands.