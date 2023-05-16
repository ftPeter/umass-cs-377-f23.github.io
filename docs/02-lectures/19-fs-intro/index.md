# L19 File System Introduction

File systems are a crucial part of any operating system, providing the necessary tools to manage and store data in a structured way. Here, we'll provide an introduction to file systems, covering the basic concepts of files and folders, inodes, and the origins of file systems.

## Files and Folders

At a high level, a file is simply a collection of data that is stored on a computer. Files can contain anything from text to images to video and are often organized into folders, which provide a way to group related files together.

Folders, also known as directories, are simply containers that hold files and other folders. Folders can be nested inside each other to create a hierarchical structure, with the top-level folder being the root directory. This hierarchical structure makes it easy to organize files and folders in a logical way, which in turn makes it easier to locate and access the data we need.

## Inodes

When a file is created, the file system assigns it a unique identifier, called an inode. Inodes contain metadata about the file, such as its size, location, and ownership. Inodes also store information about the file's permissions, which determine who can access and modify the file.

Because inodes are used to manage file metadata, they play a critical role in the overall file system performance. For example, if the file system has too many files and folders, it can become slow and inefficient due to the increased number of inodes that need to be managed.

## Origin of File Systems

File systems have been around since the early days of computing, but they have evolved significantly over the years. One of the first file systems was developed by IBM for its System/360 mainframe computer in the 1960s. This file system, called OS/360, introduced the concept of hierarchical directories and paved the way for modern file systems.

As personal computers became more common in the 1980s and 1990s, file systems evolved to meet the needs of these new devices. One of the most popular file systems for PCs is the File Allocation Table (FAT) system, which was developed by Microsoft in the early 1980s. FAT is still used today, although newer file systems like NTFS and exFAT have become more popular in recent years.

## Conclusion

In summary, file systems are an essential part of any operating system, providing the tools needed to manage and store data in a structured way. Files and folders are used to organize data, while inodes are used to manage metadata about each file. File systems have come a long way since their early days, with modern file systems offering advanced features like journaling and encryption to keep our data safe and secure.

## Example

Let's say we want to create a new directory called "my_folder" and then create a new file called "my_file.txt" inside that directory.

We would start by opening up the terminal and navigating to the directory where we want to create the new folder. For example, if we want to create the new folder in our home directory, we would type:

```bash
cd ~
```

Next, we would use the "mkdir" command to create the new directory:

```bash
mkdir my_folder
```

Now that we have created the new directory, we can navigate into it using the "cd" command:

```bash
cd my_folder
```

Finally, we can use the "touch" command to create a new file called "my_file.txt" inside the "my_folder" directory:

```bash
touch my_file.txt
```

And that's it! We have now created a new directory and a new file inside that directory using the file system in bash.

## how does this relate to inodes?

Great question! When we create a new file in a file system, the file system assigns an inode to that file. The inode contains metadata about the file, such as its permissions, ownership, timestamps, and a pointer to the location on the disk where the file's data is stored.

In the bash example I provided earlier, when we use the "touch" command to create a new file called "my_file.txt", the file system assigns an inode to that file behind the scenes. This inode will contain all of the metadata associated with the file, such as its size, location on the disk, and other attributes.

The inode is critical to the file system's ability to manage files efficiently. When we want to access or modify a file, the file system uses the inode to locate the file's data on the disk. Without the inode, the file system would have no way of knowing where the file's data is stored or what attributes it has.

So in short, every file in a file system has an associated inode that contains important metadata about the file. In the bash example I provided, the "touch" command implicitly created an inode for the new file "my_file.txt" when it was created.

## Reading

- [Chapter 39: Interlude: Files and Directories](https://pages.cs.wisc.edu/~remzi/OSTEP/file-intro.pdf)

## Reference

You may find it helpful to clone the book's [code repository](https://github.com/remzi-arpacidusseau/ostep-code). This will allow you to quickly review the code associated with each chapter.

```bash
git clone https://github.com/remzi-arpacidusseau/ostep-code.git
```

## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vS4ZCxBpckd1QH066qQ6r8xsGxeH9xAP_lkK2dl6dZYE8MjJF_kFe4nLAbfTaG3KvRbXDx7W5hJ5Fx0/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

# Jamboard

Jamboards are used for a place to organically write/draw during class.

[19 Introduction to File Systems - Google Jamboard](https://jamboard.google.com/d/1Z4YGeDRpg8auIASB41ZHkxFmrUjFM4XgeycwJmU_bNE/edit?usp=sharing)

## C/C++ Resources

Some useful resources in case you are a little rusty.

- [The C Programming Language, 2nd Edition](https://umass-cs-377.github.io/resources/the-c-programming-language.pdf)
- [Essential C](https://umass-cs-377.github.io/resources/essential-c.pdf)
- [The C Book](https://publications.gbdirect.co.uk//c_book)
- [A Tour of C++, 2nd Edition](https://umass-cs-377.github.io/resources/a-tour-of-c++-2nd.pdf)

## Additional Resources

- [GDB Basics (VSCode)](https://youtu.be/u6iXfpBDU3w). This is a video tutorial on how to use GDB inside of a VSCode terminal. This doesn't integrate with the VSCode debugger system, but it is helpful.
- [GDB Cheatsheet](https://darkdust.net/files/GDB%20Cheat%20Sheet.pdf). This is a cheatsheet for GDB commands.