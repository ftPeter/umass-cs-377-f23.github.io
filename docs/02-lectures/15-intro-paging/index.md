# L15 Introduction to Paging

Paging is a memory management technique used by operating systems to efficiently manage physical memory. In modern computer systems, memory is divided into small fixed-size blocks called pages. These pages are then mapped into the physical memory by the operating system's memory manager.

Paging allows the operating system to allocate memory to processes in a more efficient way. When a process requests memory, the operating system allocates pages of memory to the process. The pages can be allocated from anywhere in the physical memory, and they don't need to be contiguous. This means that the operating system can allocate memory to a process as and when it is required, rather than allocating a large block of memory in advance.

The operating system keeps track of which pages are allocated to which processes in a page table. The page table is a data structure that maps virtual memory addresses to physical memory addresses. When a process accesses a virtual memory address, the operating system uses the page table to translate the virtual address into a physical address. This process is called address translation.

Paging has several advantages over other memory management techniques, such as segmentation. One of the main advantages is that it allows the operating system to allocate memory more efficiently. Paging also allows the operating system to implement virtual memory, which enables processes to use more memory than is physically available.

Virtual memory is a technique that allows a process to use more memory than is physically available by swapping pages of memory between physical memory and disk storage. This allows the operating system to allocate more memory to a process than is physically available, which can be useful for running large applications or multiple applications simultaneously.

In conclusion, paging is a memory management technique used by operating systems to efficiently manage physical memory. It allows the operating system to allocate memory to processes in a more efficient way, and it enables the use of virtual memory. Paging has several advantages over other memory management techniques and is an essential component of modern operating systems.

## Reading

- [Chapter 18: Paging: Introduction](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-paging.pdf)

You may find it helpful to clone the book's [code repository](https://github.com/remzi-arpacidusseau/ostep-code). This will allow you to quickly review the code associated with each chapter.

```bash
git clone https://github.com/remzi-arpacidusseau/ostep-code.git
```

## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRZrcKZMg-BrvgU4hTk3tcHdZZHjrQEJkTMU-hEHUDT0LVBLIvK5KddM7AsbPuVvxi2bIT-Vs9bbZSD/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

The slide deck can be found [here](https://docs.google.com/presentation/d/1JQnlE5kb949dzNZSU0j_WxzDlQCyOY8D7nT0hbRhiGs/edit?usp=sharing).

The Jamboard can be found [here](https://jamboard.google.com/d/12g-bBWaQ1gQsi41QsHmh-Wzwdu3xZZWJnIONSKkvz8c/edit?usp=sharing).

## C/C++ Resources

Some useful resources in case you are a little rusty.

- [The C Programming Language, 2nd Edition](pathname:///resources/the-c-programming-language.pdf)
- [Essential C](pathname:///resources/essential-c.pdf)
- [The C Book](https://publications.gbdirect.co.uk//c_book)
- [A Tour of C++, 2nd Edition](pathname:///resources/a-tour-of-c++-2nd.pdf)

## Additional Resources

- [GDB Basics (VSCode)](https://youtu.be/u6iXfpBDU3w). This is a video tutorial on how to use GDB inside of a VSCode terminal. This doesn't integrate with the VSCode debugger system, but it is helpful.
- [GDB Cheatsheet](https://darkdust.net/files/GDB%20Cheat%20Sheet.pdf). This is a cheatsheet for GDB commands.