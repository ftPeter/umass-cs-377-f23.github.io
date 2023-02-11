# Pr1: Inverted Index

This project will give you experience writing a simple C++ program and submitting to the autograder. For this assignment, you will write a program in C++ that generates an "inverted index" of all the words in a list of text files. (See http://en.wikipedia.org/wiki/Inverted_index for more details.) The goal of this assignment is to ensure that you are sufficiently up to speed in C++ to handle the rest of the course. We will also use this program in subsequent assignments.

## Learning Objectives

1. Become acquainted with the programming environment.
2. Get familiar with the C++ programming language.
3. Understand how to upload a project to Gradescope.
4. Become oriented to the structure of a project.

## Getting Started

To get started, follow these steps:

1. Download the [starter code](pathname://projects/zips/project-1.zip).
2. Unzip the `project.zip` with the following command `unzip -d
   PROJECT project.zip`. This will create a new directory called
   `PROJECT`. You can replace `PROJECT` with a directory name of your
   choice.
3. `cd` into the `PROJECT` directory and investigate the project.

If you follow the above steps correctly, you should have the following
folder structure after unzipping (assuming the project name is
"PROJECT"):

```bash
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
* **obj**: This folder is used for [object files](https://stackoverflow.com/questions/7718299/whats-an-object-file-in-c/7718363#:~:text=An%20object%20file%20is%20the,objects%2C%20functions%2C%20etc.)) that are
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
[executable](http://www.linfo.org/executable.html#:~:text=An%20executable%20file%2C%20also%20called,executable)%20form%20of%20a%20program.&text=Executable%20files%20are%20usually%20stored,%2Fusr%2Flocal%2Fbin.) and a test executable. These are
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

### Inverter Inputs

Your inverter will take exactly one argument: a file that contains a
list of filenames.  Each filename will appear on a separate line.

Each of the files described in the first file will contain text that
you will build your index from. For example:

#### inputs.txt

```
foo1.txt
foo2.txt
```

#### foo1.txt

```
this is a test. cool.
```

#### foo2.txt

```
this is also a test.
boring.
```

### Output

Your inverter should output a string of all of the words from all of the inputs, in "alphabetical" order, followed by the document numbers in which they appear, in order. For example (note: your program must
produce exactly this output):

```
a: 0 1
also: 1
boring: 1
cool: 0
is: 0 1
test: 0 1
this: 0 1
```

Alphabetical is defined as the order according to ascii. So "The" and "the" are separate words, and "The" comes first. Only certain words should be indexed. Words are anything that is made up of only alpha
characters, and not numbers, spaces, etc. "Th3e" is two words, "Th" and "e".

Files are incrementally numbered, starting with 0.  Only valid, openable files should be included in the count. (is_open comes in handy here)

Your program should absolutely not produce any other output. Extraneous output, or output formatted incorrectly (extra spaces etc.) will make the autograder mark your solution as incorrect. Please
leave yourself extra days to work these problems out.

## Implementation Hints

Implement the data structure using the C++ Standard Template Library (STL) as a map of sets, as in:

```c++
map<string, set<int>> invertedIndex;
```

Use C++ strings

```c++
#include <string>
```

and file streams:

```c++
#include <fstream>
```

Remember, your program needs to be robust to errors.  Files may be empty, etc. Please handle these cases gracefully (silently) and with no extra
output.

The noskipws operator may be useful in parsing the input:

```c++
input >> noskipws >> c;
```

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

## C++ Resources

This assignment touches on a variety of C++ language concepts and
libraries that are useful to understand before you get started. The
following links should help you in your work on this assignment. You
should take the time to review these resources before and during the
assignment to help you complete your work. Indeed, this assignment is
more than just programming - it is to help you become acquainted with
a language that is similar to C, but different in many respects. We
expect you to review the links below.

* [C++ Language Tutorials](http://www.cplusplus.com/doc/tutorial/)
* [Basic I/O](http://www.cplusplus.com/doc/tutorial/basic_io/)
* [Namespaces](http://www.cplusplus.com/doc/oldtutorial/namespaces/)
* [Strings](http://www.cplusplus.com/reference/string/string/)
* [Map](http://www.cplusplus.com/reference/map/map/)
* [Set](http://www.cplusplus.com/reference/set/set/)
* [Queue](http://www.cplusplus.com/reference/queue/queue/)

We can't state this enough, spend some time studying up on these C++
basics. The best way to do this is to write out the examples and
compile them to see how they work. Spending a little time to prepare
will go a long way in successfully implementing this assignment.

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
