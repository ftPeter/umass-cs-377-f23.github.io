# L14 Segmentation & Free Space

In computer science, memory segmentation refers to the division of a computer's memory into different segments, each with its own base address and size. This technique is used by operating systems to manage the memory of a system and allocate resources efficiently. Another important aspect of memory management is free space management, which refers to the process of keeping track of the available memory in a system and allocating it to processes as needed.

Memory allocation is a critical component of modern programming languages, and the C programming language is no exception. In C, the two primary functions for memory allocation are `malloc` and `free`. These functions allow a program to allocate and free memory dynamically, at runtime.

`malloc` is used to allocate memory from the heap, which is a region of memory separate from the program's stack. When called, `malloc` takes as input the number of bytes to be allocated and returns a pointer to the allocated memory. The programmer can then use this pointer to access the allocated memory.

`free`, on the other hand, is used to free memory that was previously allocated with `malloc`. This function takes as input a pointer to the memory that needs to be freed, and deallocates that memory. After calling `free`, the pointer should no longer be used, as the memory it points to is no longer valid.

While `malloc` and `free` are simple to use, they can be problematic if not used correctly. One common issue is memory leaks, which occur when memory is allocated but never freed. This can lead to a shortage of memory, which can cause the program to crash or behave unexpectedly. Another issue is accessing memory that has already been freed, which can cause undefined behavior.

To avoid these issues, it's important for programmers to carefully manage memory allocation and deallocation. One common technique is to use memory pools, which are pre-allocated blocks of memory that can be used for allocating and deallocating objects. This approach can help avoid memory fragmentation and improve performance, as it reduces the number of calls to `malloc` and `free`.

Memory segmentation and free space management are essential components of modern operating systems. Memory allocation functions like `malloc` and `free` are critical for dynamic memory allocation in the C programming language. While these functions are simple to use, it's important for programmers to manage memory carefully to avoid issues like memory leaks and undefined behavior.

## Reading

- [Chapter 16: Segmentation](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-segmentation.pdf)
- [Chapter 17: Free-Space Management](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-freespace.pdf)

### Reference

- [Chapter 15: Mechanism: Address Translation](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-mechanism.pdf)

You may find it helpful to clone the book's [code repository](https://github.com/remzi-arpacidusseau/ostep-code). This will allow you to quickly review the code associated with each chapter.

```bash
git clone https://github.com/remzi-arpacidusseau/ostep-code.git
```

## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSoWFXco6YcQgsGOCsPHYAvsIg7fERESdh4KFP2gJGjMQvNK6dYmbbXFrrn1QdZbtQEcP1qZCFXy2dD/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

The slide deck can be found [here](https://docs.google.com/presentation/d/12kJIWD7pSzOvQbtfO1WpxBwvPzw8UJ4y0Gmq7DMyw_g/edit?usp=sharing).

The Jamboard can be found [here](https://jamboard.google.com/d/1xEcYxpuTo7wYKp_OikUig9rBa9vfQDp9B9jSZzrDNaM/edit?usp=sharing).

## C/C++ Resources

Some useful resources in case you are a little rusty.

- [The C Programming Language, 2nd Edition](pathname:///resources/the-c-programming-language.pdf)
- [Essential C](pathname:///resources/essential-c.pdf)
- [The C Book](https://publications.gbdirect.co.uk//c_book)
- [A Tour of C++, 2nd Edition](pathname:///resources/a-tour-of-c++-2nd.pdf)

## Additional Resources

- [GDB Basics (VSCode)](https://youtu.be/u6iXfpBDU3w). This is a video tutorial on how to use GDB inside of a VSCode terminal. This doesn't integrate with the VSCode debugger system, but it is helpful.
- [GDB Cheatsheet](https://darkdust.net/files/GDB%20Cheat%20Sheet.pdf). This is a cheatsheet for GDB commands.
