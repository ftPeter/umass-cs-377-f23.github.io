# L17 Paging Smaller Tables

Multi-level page tables are a crucial technique used in operating systems to manage memory virtualization. Virtual memory is an essential mechanism that allows programs to use more memory than is physically available. It does this by dividing the memory into smaller chunks called pages, each of which can be stored in either physical memory or on disk.

The virtual memory is divided into fixed-size chunks called pages, which are mapped to physical memory frames. The page table is a data structure used to map virtual addresses to physical addresses. The multi-level page table consists of multiple levels, with each level translating part of the virtual address to a physical address.

The use of multi-level page tables allows for efficient memory management. By dividing the virtual address space into smaller chunks, it is possible to reduce the amount of memory required to store the page table. This is especially important in systems with large amounts of memory, where a flat page table would be too large to fit in memory.

One of the problems with using multi-level page tables is the overhead involved in translating virtual addresses to physical addresses. Each level of the page table requires a memory access to retrieve the next level of the table. This can result in a significant amount of memory accesses, which can slow down the system. To address this problem, many modern processors include a Translation Lookaside Buffer (TLB).

The TLB is a cache that stores recently accessed translations, allowing for faster access to the page table. By using a TLB, it is possible to reduce the overhead of accessing the page table and improve system performance. When a processor accesses a virtual address, the TLB is checked first before accessing the page table. If the translation is present in the TLB, the page table is not accessed, and the physical address is returned to the processor.

However, if the translation is not present in the TLB, the processor must access the page table to retrieve the physical address. This causes a TLB miss and can slow down the system. The TLB is usually small in size, and when it is full, the least recently used translations are evicted to make room for new translations.

Multi-level page tables are an essential technique used in modern operating systems to manage memory virtualization. By dividing the virtual address space into smaller chunks, it is possible to reduce the amount of memory required to store the page table. While there is overhead involved in accessing the page table, this can be mitigated through the use of a TLB. The TLB is a cache that stores recently accessed translations, allowing for faster access to the page table and better system performance.

## Reading

- [Chapter 20: Paging: Smaller Tables](https://pages.cs.wisc.edu/~remzi/OSTEP/vm-smalltables.pdf)

## Reference

You may find it helpful to clone the book's [code repository](https://github.com/remzi-arpacidusseau/ostep-code). This will allow you to quickly review the code associated with each chapter.

```bash
git clone https://github.com/remzi-arpacidusseau/ostep-code.git
```

## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRQdM51VNQV4RWXe2QnTCYEBihGTBcqFTVQPYJ1Kht1QEiFSwCeUAXNQXg14hO0zqnACOlY9cIhUq43/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

# Jamboard

Jamboards are used for a place to organically write/draw during class.

[17 Paging Smaller Tables - Google Jamboard](https://jamboard.google.com/d/1jbloOmt2PJ33W6EIdZpQ1vUK0scUzHv_j_ff56i4Sc8/edit?usp=share_link)

## C/C++ Resources

Some useful resources in case you are a little rusty.

- [The C Programming Language, 2nd Edition](https://umass-cs-377.github.io/resources/the-c-programming-language.pdf)
- [Essential C](https://umass-cs-377.github.io/resources/essential-c.pdf)
- [The C Book](https://publications.gbdirect.co.uk//c_book)
- [A Tour of C++, 2nd Edition](https://umass-cs-377.github.io/resources/a-tour-of-c++-2nd.pdf)

## Additional Resources

- [GDB Basics (VSCode)](https://youtu.be/u6iXfpBDU3w). This is a video tutorial on how to use GDB inside of a VSCode terminal. This doesn't integrate with the VSCode debugger system, but it is helpful.
- [GDB Cheatsheet](https://darkdust.net/files/GDB%20Cheat%20Sheet.pdf). This is a cheatsheet for GDB commands.

