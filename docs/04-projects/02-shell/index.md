# Pr2: Shell

The purpose of this lab is to gain experience working with system calls and
process management. In particular, you are to implement a basic shell in C/C++
using the `fork`, `exec`, and `wait` system calls.

## Learning Objectives

1. Apply your understanding of process management.
2. Use the `fork`, `exec`, and `wait` system calls.
3. Extend your knowledge of C/C++.

## Getting Started

To get started, follow these steps:

1. Download the [starter code](pathname:///projects/zips/project-2.zip).
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

* `inverter_app`: this is the main executable allowing you to run the
  program that you must complete successfully.
* `inverter_test`: this is the test executable that will run tests on the
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

### A Trivial Shell

The goal of this lab is to implement a simple shell in C++. This
requires you to use system calls directly in your code. In class, we
touched upon how a few system calls, (notably `fork` and `exec`) can be
used to implement a command shell. In this exercise, you will
implement `tsh` (trivial shell), a basic shell.

Like a real shell, `tsh` will take as input the name of a program. The program
can be the name of any executable accessible in your environments `PATH`
variable. The shell should run the specified program with the arguments before
prompting for a new user command.

The command "quit" should terminate your shell.

Here is a simple example:

```
$ ./tsh
tsh> ls
foo.txt
tsh> quit
$
```

Do not change any file names or function names that are provided to you. Simply
implement the process logic.

### Shell Notes

* Useful functions and system calls include
  [fork](http://linux.die.net/man/3/fork),
  [exec](http://linux.die.net/man/3/execvp) (specifically the `execvp`
  variant, in conjunction with the `cmdTokens` variable),
  [sleep](http://linux.die.net/man/3/sleep),
  [waitpid](http://linux.die.net/man/3/waitpid).

* If you're trying to use
  [waitpid](https://linux.die.net/man/3/waitpid) and get a warning
  like "warning: implicit declaration of function 'waitpid'", you
  probably need to include an additional system header file. Add the
  line:

    ```c++
    #include <sys/wait.h>
    ```
    
  to the top of your file alongside the other `#include`
  statements.

* Be careful when adding calls to `fork` -- if you write an infinite
  loop with a fork in it, a [fork
  bomb](http://en.wikipedia.org/wiki/Fork_bomb) will result. If in
  doubt, you can add a sleep(1); before each fork during debugging,
  which will slow the rate of process creation.

* `tsh` can execute a program with arguments, but cannot execute
  multiple programs using Bash constructs (e.g., 'sleep 3 && echo
  hello' to sleep for 3 seconds, then print hello). However, you can
  accomplish the same by making a new Bash file (e.g., 'sleephello')
  and calling that from within tsh (e.g., './sleephello'). If you do
  this, make sure the script you are trying to call is executable
  ('chmod +x sleephello').

### Debugging Help

It is important that you use the `gdb` debugger to debug your code when you encounter problems. You can easily start the `gdb` debugger from the command line:

```bash
$ gdb PROGRAM
```

Where `PROGRAM` is the program you compiled. You should look at the provided `gdb` cheatsheet to see some of the commands you can execute. If you need additional help you can take a look at [this tutorial](https://www.cs.cmu.edu/~gilpin/tutorial/).

You will inevitably encounter cases when your code fails a test or worse, the
test program exits with a segmentation violation (segfault). To debug the code
in a test requires you to understand how the google test framework generates C++
code and how the C++ compiler generates method signatures. In short, this is
what you want to do:

```bash
$ gdb TEST_PROGRAM
(gdb) b TestSuite_TestName_Test::TestBody()
```

The `SuiteName` and `TestName` correspond to how you write a test using the
google test framework. In particular, this is the basic structure of a test:

```C++
TEST(SuiteName, TestName) {
  // the test body
}
```

You should also know that the `b` (break) command provides tab completion. So you can type in the following:

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