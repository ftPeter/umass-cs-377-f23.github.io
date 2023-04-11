# Pr5: Allocator

## Overview

In this assignment you will implement a basic malloc/free allocator. This lab
needs to be completed in C using the provided skeleton framework. You must also
make sure your code compiles and works under the programming environment we have
specified for this course. The overall goal is to expose you to C programming at
some of the very lowest levels and very near to the machine and to solidify your
understanding of how memory allocators work.

Before you begin you should read or re-read
[Chapter 17 Free Space Management](http://pages.cs.wisc.edu/~remzi/OSTEP/vm-freespace.pdf)
and keep this open as you complete this lab. This lab follows exactly their
description of an allocator and will be crucial in your understanding of
allocators as well as how to implement one!

## Getting Started

To get started, follow these steps:

1. Download the [starter code](pathname:///projects/zips/project-5.zip).
2. Unzip the `project.zip` with the following command `unzip -d
   PROJECT project.zip`. This will create a new directory called
   `PROJECT`. You can replace `PROJECT` with a directory name of your
   choice.
3. `cd` into the `PROJECT` directory and investigate the project. 

If you follow the above steps correctly, you should have the following
folder structure after unzipping (assuming the project name is
"PROJECT"):

```
PROJECT/
  include/
  lib/
  obj/
  src/
  test/
  Makefile
```

After you have the code extracted you should go ahead and
investigate. You can run `make` from the *command line* and your
project will *build* and produce *potential* error results. See more
information below.

## Code Structure

This exercise contains the following important folders:

* **include**: This is where we keep [C/C++ header
  files](https://flaviocopes.com/c-header-files/). Header files are
  used in C/C++ to share definitions across many C/C++ source files.
* **lib**: This is where we keep any libraries that we might use. It
  will often be empty.
* **obj**: This folder is used for [object files](http://t.ly/LiKq) that are
  generated from the C compilation process. This folder is
  initially empty until you compile your code.
* **src**: This is the source folder where all code you are submitting
  must go. You can change anything you want in this folder (unless
  otherwise specified in the problem description and in the code we
  provide), you can add new files, etc.
* **test**: This is the test folder where you can find all of the
  public unit tests - if any are given.
* **Makefile** - this is a "build" file. This file is used to compile
  your code.

## Compiling The Code

To compile the code in this assignment you must run the following
command:

```bash
$ make
```

The `make` command will run the C++ compiler to build a program
[executable](http://t.ly/hdB2) and a test [executable](http://t.ly/hdB2). These are
often referred to as program *binaries* in Unix/Linux terminology.

In addition, the `make` command will produce a `submission.zip` every
time you run it. The `submission.zip` file is what you upload to
Gradescope to submit your solution. See submission instructions below.

### Compiling This Project

This project will produce a couple of executables including:

* `allocator_app`: this is the main executable allowing you to run the
  program that you must complete successfully.
* `allocator_test`: this is the test executable that will run tests on the
  code your write for this exercise.
  
### Testing The Code

After you have successfully compiled the code using `make` you can run
the test executable. Here is an example of what it looks like to run a
test executable:

```bash
$ ./hello_test
[==========] Running 2 tests from 1 test suite.
[----------] Global test environment set-up.
[----------] 2 tests from sum_test
[ RUN      ] sum_test.test_sum_positive
[       OK ] sum_test.test_sum_positive (0 ms)
[ RUN      ] sum_test.test_sum_negative
[       OK ] sum_test.test_sum_negative (0 ms)
[----------] 2 tests from sum_test (0 ms total)

[----------] Global test environment tear-down
[==========] 2 tests from 1 test suite ran. (2 ms total)
[  PASSED  ] 2 tests.
```

The tests that are provided are a *subset* of the tests that the
autograder will run. However, it gives you a good idea if you are on
the right track.

## Instructions

There are five functions in the allocator that you must implement: `find_free`,
`split`, `my_malloc`, `coalesce`, and `my_free`. We will discuss each of these
functions below. Before we discuss the functions that you need to implement let
us first introduce you to the important definitions that you will need before
starting.

### Definitions

- **`header_t`**: This structure is used as the header for allocated blocks of
  memory returned by the call to `my_malloc`. As described in the
  [Chapter 17 Free Space Management](http://pages.cs.wisc.edu/~remzi/OSTEP/vm-freespace.pdf),
  we use this structure to store information about an allocated block. In
  particular, the size of the block of memory allocated to the calling program
  (not including the number of bytes for this struct) and a magic number we can
  use to ensure that on a call to `my_free` we can reasonably be sure that we
  are given a pointer to a block of memory that was allocated by `my_malloc`. 
  You will notice that we have provided a value for this magic (`0xDEADBEEF`) 
  that you will use to assign the value of magic.

- **`node_t`**: This structure is used as the header for blocks of memory on our
  free list. The free list (as described in the book) is a linked list of memory
  blocks that are available to allocate to the calling program. It contains a
  field for the size of the available memory (not including the number of bytes
  for this struct) and a next pointer to the next free node in the free list.
  You will use this structure for managing the free list.

Other important definitions include helper functions used to implement
`my_malloc` and `my_free` (we expose these for testing purposes), functions for
debugging (e.g., `print_free_list`), functions for getting information about
your implementation (e.g., `number_of_free_nodes`), and a definition for the
maximum size of the heap (e.g., `HEAP_SIZE`).

### Details and Support Functions

We have provided definitions that you will not need to implement. In particular,
we have defined at the very top of the `my_malloc.cpp` a global pointer to the
heap called `head`. The head pointer points to the first node on the free list.
You will use this in your implementation of the free list.

- **`heap()`**: We also provide the `heap()` function that is used to allocate a
  large block of memory of size `HEAP_SIZE` from the operating system using the
  system call mmap. This function will allocate this large block of memory if
  one hasn't been allocated previously. It will also initialize that large block
  to be the first node on the free list. Note how we overlay our `node_t`
  structure on top of this large block of memory and set the size and next
  pointer appropriately. This function returns a pointer to the start of the
  free list.

- **`reset_heap()`**: This function is used to reallocate the heap. You will not
  need to use this function as it is used by the testing code to free the
  previous heap to the operating system and reallocate a new one. It may be
  useful if you define your own tests.

- **`free_list()`**: This function returns a pointer to the start of the free
  list.

- **`available_memory()`**: This function returns the total amount of free
  memory available for allocation.

- **`number_of_free_nodes()`**: This function returns the number of nodes on the
  free list.

- **`print_free_list()`**: This function prints the free list to standard
  output - helpful to see what your free list looks like.

You should study these functions first to give you some understanding of how we
work with the free list. In particular, you should study the implementation of
`heap()` to understand how to overlay/embed a C structure on a block of memory
(it is as easy as a cast). Next, we talk about the functions you need to
implement and some basic hints to get you started.

### Functions You Need to Implement

You will implement a basic malloc/free allocator that uses the first-fit
allocation scheme. That is, `my_malloc` will attempt to find the first node on
the free list that has enough space to satisfy the call to `my_malloc` or return
`NULL` to indicate that not enough memory is available. Your allocator will only
work with a heap of size `HEAP_SIZE` and not attempt to allocate additional
blocks of memory from the operating system. Although this limits the allocator
in the amount of memory it can allocate, it is sufficient to give you an idea of
the core functionality. Once you complete this lab it will be useful for you to
think about how you might extend it to support more memory.

#### `find_free`

```c++
find_free(size_t size, node_t **found, node_t **previous)
```

The first function you should implement is the `find_free` function. This
function makes use of double pointers to allow it to manipulate what the
provided pointers point to so it can return to the caller **(by assigning these to
these pointers, i.e., `*found` and `*previous`)**. The goal of the function is
given a size of bytes to allocate it will find a node on the free list that can
"fit" the requested number of bytes as well as the previous node. We will need a
pointer to the previous node in order to perform the "splitting" discussed next.

The basic idea is to iterate over the free list to find a block that
will fit the requested size number of bytes. It is important to note
that you must consider the size of the block with respect to the size
of the `node_t` struct that takes up space and the `header_t` struct
that also takes up space. That is, the actual size of the block on the
free list is the size field of the `node_t` struct (the number of
bytes available to allocated from the free block) and the size of the
`node_t` struct itself which must be enough to accommodate `size` in
bytes (provided as a parameter, the number of bytes to allocate) plus
the size of `header_t`.

That is, we are looking for a node on the free list that has a least
the number of bytes requested (`size` parameter) available to allocate:

```
+--------+---------------------------------------------+
| node_t | # of bytes >= actual size                   |
+--------+---------------------------------------------+
```

Once a node on the free list has been found, a pointer to it must be
returned using found (second parameter) and the previous node (if any)
must be returned using previous (third parameter). In particular, the
format of the allocated block looks like this with a pointer to the
start of the allocated bytes returned in `*found`:

```
+--------+---------------------------------------------+
| node_t | # of bytes >= actual size                   |
+--------+---------------------------------------------+
^
|
+-------- *found
```


#### `split`

```c+
void split(size_t size, node_t **previous, node_t **free_block, header_t **allocated)
```

This function has two goals: to split a free node if it has more space than is
required by the allocation request and to return a pointer to the allocated
block. We use double pointers here as well to allow us to return multiple
values. The `size` parameter is the number of bytes we are allocating, the
`previous` parameter is the previous node on the free list to the one we are
allocating from, the `free_block` parameter is the node of the free list we are
going to allocate into, and `allocated` is the block we are allocating and
eventually returning back to the caller of `my_malloc`.

The basic approach is this:

1. Adjust the free block pointer by the number of bytes we need to allocate. You
   must not forget that you must also accommodate the size of the `header_t`
   struct when doing this. Note, you will need a pointer to where the free block
   was originally before to assign allocated properly. After you adjust the free
   block pointer forward you will need to update its size (which will be the
   original size minus the sum of the size of the requested number of bytes and the "size
   of" `header_t`).

2. Adjust the previous pointer to point to the new location of the free block -
   this means you need to assign to the next pointer of the previous node to the
   new location of the free block. You need to pay attention to if previous is
   `NULL`. If it is, it means we are allocating from the first node in the free
   list which means we need to assign `head` (the pointer to the start of the
   free list) to the new free block.

3. Lastly, using the pointer you saved to the original free block in step 1 you
   must overlay/embed a `header_t` to the start of this piece of memory. This is
   easy, you simply assign to `*allocated` the pointer to the start of the
   original free block (performing the proper cast). After you do that, update
   the `size` field which will be the `size` requested in the parameter and
   assign the magic number.

_Hints_: remember, when you are getting the size of "things" in C you should use
the `sizeof` operation. Also remember that sizeof returns the number of bytes.
Because you are adjusting pointers by some number of bytes you must make sure to
cast a pointer to a `node_t` to a `char*` to make sure you are adding bytes and
not adding by `node_t` size. For example, here is how we adjusted the pointer to
the free block:

```c++
size_t actual_size = size + sizeof(header_t);
*free_block = (node_t *)(((char *)*free_block) + actual_size);
```

#### `my_malloc`

```c++
void *my_malloc(size_t size)
```

The goal of this function is relatively straightforward since it primarily
relies on the two helper functions `find_free` and `split`. First, you should
define some local pointers to pass to these functions. We called them `found`
and `previous` which are both `node_t*` types and allocated which is a
`header_t*` type. Next, you need to make the call to `find_free` passing in the
size and the `found` and `previous` pointers. After this call make sure you
check to see if you found a free node. If not, you need to return `NULL`. After
this you should call split passing in the appropriate arguments. Lastly, return
a pointer to the allocated block. Note, you do not want to return the address to
the start of the allocated block - you must adjust this pointer to be just after
the allocated block's header (`header_t`). This will require a little pointer
arithmetic.

#### `coalesce`

```c++
void coalesce(node_t *free_block)
```

The goal of this function is to perform coalescing between adjacent
nodes on the free list. This function will be called by `my_free`
after freeing memory. The basic idea is to try to coalesce the block
of memory we are freeing with the next node on the free list if they
are adjacent in memory. You will repeat the coalescing process on the
newly coalesced node until you can't find a next node on the free list
that is adjacent in memory or if there is only a single free node.

To do this you will need to compare the value of the current free
block's next pointer to the address of the next adjacent block to see
if they are the same. If they are the same then they can be coalesced.
You will need to figure out how to merge two adjacent free blocks into
one. This is as easy as adjusting pointers like you would do in any
linked list implementation. Note, do make sure you update the size of
the merged node to reflect the merged number of bytes and the size of
the `node_t` at the start of the free block.

_Hints_: When checking the addresses, make sure you remember to include the
`node_t` size as part of the block size of the free node. If not, you will be
off by `sizeof(node_t)` bytes which means you will never identify adjacent
blocks. Here is what we did:

```c++
size_t block_size = p->size + sizeof(node_t);
...
if (((char *)curr_address) + block_size == next_address) { … }
```

#### `my_free`

```c++
void my_free(void *allocated)
```

This function is relatively easy with the help of the `coalesce` function above.
First, cast the allocated parameter to a `header_t*` type. Remember, you need to
adjust the pointer that is given by `sizeof(header_t)` to point to the actual
start of the allocated block. After you do that you should use assert to ensure
that the magic field is indeed equal to `MAGIC`. Next, you simply need to cast
the `header_t*` to a `node_t*` and set the size to the size of bytes we are
freeing. Lastly, link in the freed node into the free list by making this newly
freed node the start of the heap - don't forget to assign its next pointer to
the previous head!


## Debugging Help

It is important that you use the `gdb` debugger to debug your code when you encounter problems. You can easily start the `gdb` debugger from the command line:

```bash
$ gdb PROGRAM
```

Where `PROGRAM` is the program you compiled. You should look at the provided `gdb` cheatsheet to see some of the commands you can execute. If you need additional help you can take a look at [this tutorial](https://www.cs.cmu.edu/~gilpin/tutorial/).

You will inevitably encounter cases when your code fails a test or worse, the test program exits with a segmentation violation (segfault). To debug the code in a test requires you to understand how the google test framework generates C++ code and how the C++ compiler
generates method signatures. In short, this is what you want to do:

```bash
$ gdb TEST_PROGRAM
(gdb) b TestSuite_TestName_Test::TestBody()
```

The `SuiteName` and `TestName` correspond to how you write a test using the google test framework. In particular, this is the basic
structure of a test:

```C++
TEST(SuiteName, TestName) {
  // the test body
}
```

You should also know that the `b` (break) command provides tab completion. So, you can type in the following:

```bash
(gdb) b TestSuite[TAB][TAB]
```

The `[TAB]` is hitting the `tab` key on your keyboard. You can hit it twice in rapid succession to see all the possible completions.


## Autograder

The autograder is used to test your code more deeply. If you follow
the specifications of this exercise exactly then you should be able to
pass all of the tests that you are provided and all of the tests the
autograder is using to check your solution.

To run the autograder on your solution you must upload your
`submission.zip` file (generated by running `make`) to
Gradescope. More information about how to do this is provided below.

## General Information and Project Policies

* Read this entire document. If, after a careful reading, something
  seems ambiguous or unclear to you, then communicate to the course
  staff immediately. Start this assignment as soon as possible. Do not
  wait until the night before the assignment is due to tell us you
  don’t understand something, as our ability to help you will be
  minimal.
* For some assignments, it will be useful for you to write additional
  C++ files. Any C++ file you write that is used by your solution
  MUST be in the provided `src` directory.
* The course staff are here to help you figure out errors, but not
  solve them for you. When you submit your solution, be sure to remove
  all compilation errors from your project. Any compilation errors in
  your project will cause the autograder to fail, and you will receive
  a zero for your submission. No Exceptions!
* You are welcome to work with other students and submit as a group. Please see the [collaboration policy](/docs/information/syllabus/#collaboration-policy) in syllabus for more details.


## Gradescope

We use Gradescope to run our autograding software and record your
grade for these assignments. You may submit this assignment as many
times as possible up to the due date. If you encounter a problem with
the autograder you should contact the course staff immediately. 

## Submission

You must submit the generated `submission.zip` file that is created by
running the `make` command to Gradescope. To do this you will need to
download the `submission.zip` file from the EdLab environment to your
local machine then upload `submission.zip` to Gradescope. Gradescope
will run your submission in our autograder environment and give you a
report of what tests passed and which did not. Again, you are welcome
to submit as many times as you would like.