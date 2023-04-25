# Pr6: File System
## Overview

The goal of this lab is to write a simple UNIX-like file system based on the topics covered in class. Although you will implement a toy file system, you will learn about many concepts used in real file system implementations. 

## Learning Objectives

1. Apply file system concepts to a file system implementation.
2. Implement a basic file system using the C/C++ programming language.
3. Use serialization/de-serialization techniques to read/write binary structures in a file.
4. Implement data structures and algorithms for a basic, but realistic file system.

## Getting Started

To get started, follow these steps:

1. Download the [starter code](pathname:///projects/zips/project-6.zip).
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
* **obj**: This folder is used for [object files](t.ly/LiKq) that are
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

The `make` command will run the C++ compiler to build a program [executable](http://t.ly/hdB2) and a test [executable](http://t.ly/hdB2). These are often referred to as program *binaries* in Unix/Linux terminology.

In addition, the `make` command will produce a `submission.zip` every time you run it. The `submission.zip` file is what you upload to Gradescope to submit your solution. See submission instructions below.

### Compiling This Project

This project will produce a couple of executables including:

* `fs_app`: this is the main executable allowing you to run the
  program that you must complete successfully.
* `fs_test`: this is the test executable that will run tests on the
  code your write for this exercise.
* `create_fs`: a provided program for creating and formatting a new file system.
  
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

The file system you will write makes the following simplifying assumptions:

- The file system resides on a disk that is 128 KB in size.
- There is only one root directory. No subdirectories are allowed.
- The file system supports a maximum of 16 files.
- The maximum size of a file is 8 blocks; each block is 1 KB in size.
- Each file has a unique name, the file name can be no longer than 8 characters.

The layout of your 128 KB disk is as follows:

- The first 1KB block is called the super block. It stores the free block list and index nodes(inode) for each file.
- The remaining 127 1KB blocks store data blocks of the files on your file system.
- The exact structure of the super block is as follows.
  - The first 128 bytes stores the free block list. Each entry in this list indicates whether the corresponding block is free or in use (if the i-th byte is 0, it indicates that the block is free, else it is in use). Initially all blocks except the super block are free.
  - Immediately following the free block list are the 16 index nodes, one for each file that is allowed in the file system.

Initially, all inodes are free. Each inode stores the following information:

![Inode Info](./projects/pics/project-6/Inode-info.png "Inode Info")

Note that each inode is 48 bytes in size, since a char has size 1 and an int has size 4. Together, all 16 inodes take up 768 bytes. Combining this with the free block list gives us a total size of 896 bytes for the super block. The super block may not fill the 1 KB, but start writing file blocks after 1 KB into the disk.

You need to implement the following operations for your file system:

```c++
int​​ myFileSystem::create_file​(​char​ name[​8​], ​int​ size)
```
- Create a new file with this name and with these many blocks. (For simplicity, we shall assume that the file size is specified at file creation time and the file does not grow or shrink from this point on). This method returns 1 on success and -1 on failure.
<br></br>

```c++
int​​ myFileSystem::delete_file​(​char​ name[​8​])
```
- Delete the file with the given ​name​. This method returns 1 on success and -1 on failure.
<br></br>

```c++
int ​​myFileSystem::read​(​char​ name[​8​], ​int​ blockNum, ​char​ buf[​1024​])
```
- Read the specified block from this file into the specified buffer; ​blockNum​ can range from 0 to 7. This method returns 1 on success and -1 on failure.
<br></br>

```c++
int ​​myFileSystem::write​(​char​ name[​8​], ​int​ blockNum, ​char​ buf[​1024​]
```
- Write the data in the buffer to the specified block in the file. This method returns 1 on success and -1 on failure.
<br></br>

```c++
int ​​myFileSystem::ls​()
```
- List the names of all files in the file system and their sizes. This method returns 1 on success and 0 on failure.
<br></br>

```c++
int​​myFileSystem::close_disk​()
```
- Close the disk. This method returns 1 on success and 0 on failure.
<br></br>

### Getting Started

We will use a 128KB file to act as the "disk" for your file system. We have provided a program to create this file for you and format it. Run this program by typing the command:

![create_fs disk0](pathname:///projects/pics/project-6/create-fs.png "create_fs disk0")

This will create a file with the name ​*disk0*​ in your current directory. The program also "formats" your file system - this is done by initializing all blocks in the super block to be free and marking all 16 inodes to be free.

The file `create_fs.c​` in the starter code allows you to create an empty file system.

The starter code also includes a file ​`fs.cpp​` that includes the template code for your file system. We have provided copious comments for each method so that you know how to implement each function.

Remember that your file system must be **​persistent**​. If you shutdown your program and then restart it at a later time, all files on your file system must be intact.

### Input File

Your program should take input from an input file and perform actions specified in the file, while printing out the result of each action. The format of the input file is as follows.

![Input Format](./pics/input-format.png "Input Format")

A sample input file looks like this:

![Sample Input](./pics/input-sample.png "Sample Input")

A sample input file is also provided in the starter code test directory (`test/sample.txt`).

Be sure to print out what your program does after reading each line from this file.  It is also helpful if you print out the disk addresses of any block that you allocate, deallocate, read or write.

The test directory contains some simple tests for your filesystem implementation.  You should write your own tests for each function you implement: read, write, create, ls, delete.

The tests can use the Google Test Framework but they don't need to. You can use specific input files to test your code (for example, trying to create an existing file should give you an error, or trying to delete a non-existent file should be an error, or listing files after deleting a file should no longer list the file etc).

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

The autograder is used to test your code more deeply. If you follow the specifications of this exercise exactly then you should be able to pass all of the tests that you are provided and all of the tests the autograder is using to check your solution.

To run the autograder on your solution you must upload your `submission.zip` file (generated by running `make`) to Gradescope. More information about how to do this is provided below.

## General Information and Project Policies

* Read this entire document. If, after a careful reading, something
  seems ambiguous or unclear to you, then communicate to the course staff immediately. Start this assignment as soon as possible. Do not wait until the night before the assignment is due to tell us you don’t understand something, as our ability to help you will be minimal.
* For some assignments, it will be useful for you to write additional C++ files. Any C++ file you write that is used by your solution MUST be in the provided `src` directory.
* The course staff are here to help you figure out errors, but not solve them for you. When you submit your solution, be sure to remove all compilation errors from your project. Any compilation errors in your project will cause the autograder to fail, and you will receive a zero for your submission. No Exceptions!
* You are welcome to work with other students and submit as a group. Please see the [collaboration policy](/docs/information/syllabus/#collaboration-policy) in syllabus for more details.


## Gradescope

We use Gradescope to run our autograding software and record your grade for these assignments. You may submit this assignment as many times as possible up to the due date. If you encounter a problem with the autograder you should contact the course staff immediately. 

## Submission

You must submit the generated `submission.zip` file that is created by running the `make` command to Gradescope. To do this you will need to download the `submission.zip` file from the EdLab environment to your local machine then upload `submission.zip` to Gradescope. Gradescope will run your submission in our autograder environment and give you a report of what tests passed and which did not. Again, you are welcome to submit as many times as you would like.
