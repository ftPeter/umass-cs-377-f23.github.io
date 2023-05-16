# L20 File System Implementation

A file system is a critical component of any operating system, providing a way for users to store and organize their data on a computer's hard drive. File system implementation involves the design and construction of the software that manages the file system and provides access to its files.

There are many different approaches to file system implementation, but most modern file systems use some variant of the hierarchical directory structure, where files are organized into directories and subdirectories. Some file systems also support additional features, such as file permissions, compression, and encryption.

One of the key challenges in file system implementation is managing the allocation of disk space. The file system must keep track of which sectors on the disk are in use and which are available, and it must allocate new sectors to files as they are created or grow. One common technique for managing disk space is the use of file allocation tables (FAT), which keep track of which clusters on the disk are allocated to which files.

Another challenge in file system implementation is ensuring data integrity. This involves protecting against data loss and corruption in the event of hardware failures or software errors. To achieve this, file systems typically use techniques such as journaling or checksumming, which provide a way to detect and correct errors that may occur during disk writes.

File system implementation also involves optimizing file access for performance. This may involve techniques such as caching frequently accessed files in memory or using indexing structures to speed up searches for files in large directories.

There are many different file systems in use today, each with its own strengths and weaknesses. Some popular file systems include NTFS and FAT32 on Windows, HFS+ on macOS, and ext4 on Linux. Newer file systems, such as Btrfs and ZFS, offer advanced features like data deduplication and snapshotting.

File system implementation is a complex and challenging task that requires careful design and optimization to ensure that users can efficiently store and access their data. As computing technology continues to evolve, we can expect to see further advances in file system design and implementation, with new features and techniques aimed at meeting the changing needs of users and applications.

## Reading

- [Chapter 40: File System Implementation](https://pages.cs.wisc.edu/~remzi/OSTEP/file-implementation.pdf)

## Reference

You may find it helpful to clone the book's [code repository](https://github.com/remzi-arpacidusseau/ostep-code). This will allow you to quickly review the code associated with each chapter.

```bash
git clone https://github.com/remzi-arpacidusseau/ostep-code.git
```

## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRV2ZilvmJIxztixhPL2jEfWiLG4fURtrNhaMMRinqJ4zXjD8gimq_oBmTu9OTq3DrR1wfBSWZQXWAd/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

# Jamboard

Jamboards are used for a place to organically write/draw during class.

[20 File System Implementation - Google Jamboard](https://jamboard.google.com/d/17-FK9IzIl6wGftBEjZWwOrAQAf7A8rzbcIJOOlB6C9E/edit?usp=share_link)

## C/C++ Resources

Some useful resources in case you are a little rusty.

- [The C Programming Language, 2nd Edition](https://umass-cs-377.github.io/resources/the-c-programming-language.pdf)
- [Essential C](https://umass-cs-377.github.io/resources/essential-c.pdf)
- [The C Book](https://publications.gbdirect.co.uk//c_book)
- [A Tour of C++, 2nd Edition](https://umass-cs-377.github.io/resources/a-tour-of-c++-2nd.pdf)

## Additional Resources

- [GDB Basics (VSCode)](https://youtu.be/u6iXfpBDU3w). This is a video tutorial on how to use GDB inside of a VSCode terminal. This doesn't integrate with the VSCode debugger system, but it is helpful.
- [GDB Cheatsheet](https://darkdust.net/files/GDB%20Cheat%20Sheet.pdf). This is a cheatsheet for GDB commands.