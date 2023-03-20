# Pr3: Scheduling

The purpose of this project is to gain experience working with CPU
scheduling policies. This project requires you to implement/simulate
four different scheduling policies given a process workload.

## Learning Objectives

1. Apply your understanding of the First-In, First-Out (FIFO) CPU scheduling policy.
2. Apply your understanding of the Shortest Job First (SJF) CPU scheduling policy.
3. Apply your understanding of the Shortest Time to Completion First (STCF) CPU scheduling policy.
4. Apply your understanding of the Round Robin (RR) CPU scheduling policy.

## Getting Started

To get started, follow these steps:

1. Download the [starter code](pathname:///projects/zips/project-3.zip).
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

* `scheduling_app`: this is the main executable allowing you to run the
  program that you must complete successfully.
* `scheduling_test`: this is the test executable that will run tests on the
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

The goal of this part of the assignment is to implement four different
scheduling algorithms in a scheduling simulator. In particular, you
are to implement:

* Firt-In, First-Out (FIFO)
* Shortest Job First (SJF)
* Shortest Time to Completion First (STCF)
* Round Robin (RR)

If you need to brush up on these algorithms before starting you should
review the chapter in the book that discusses [CPU
scheduling](http://pages.cs.wisc.edu/~remzi/OSTEP/cpu-sched.pdf)
and/or review the slides covering this material from class.

You are given some starter code that defines the interface to the
scheduling simulator and some basic data structures to get you
going. You cannot change the interface or the data structures. If you
do the automated tests may fail and you will be heavily penalized. The
files for this part of the lab include:

* `include/scheduling.h`
* `src/scheduling.cpp`
* `src/main_scheduling.cpp`

You need not touch `scheduling.h` or `main_scheduling.cpp`. All the
work that you need to do can be found inside `scheduling.cpp`.

### Scheduling Notes

* The files inside the `workloads` directory describe a workload of
  processes and their start time and execution duration. The
  definition is two integers per line:

    ```
    0 100
    10 10
    10 10
    ```

  The first integer is the start time and the second integer is how
  long the process needs to run (the duration).

* The **`Process`** struct records all the information you need to know
  about a process before and after it runs through a scheduling
  algorithm. Only the `arrival` time and `duration` are known before a
  process executes. The `first_run` field is updated to indicate when
  a process first begins executing and `completion` is the time a
  process completes executing.

* The **`ArrivalComparator`** and **`DurationComparator`** are two
  classes that define an ordering on processes. The former is used to
  order processes by their arrival time. The later is used to order
  processes by their duration. We break ties based on the arrival time
  in the case of ordering on duration and the duration in the case of
  arrival times. These classes are used as part of the definition of
  priority queues that are used to manage processes.

* To make it easier to define priority queues we define two new types
  using typedef: **`pqueue_arrival`** and **`pqueue_duration`**. The
  former is used to define priority queues that order processes by
  arrival time and the later is used to define priority queues that
  order processes by duration (how long they have left to execute).

* You are to implement a function to read in a workload file and
  return a priority queue ordered by arrival time:

    ```c++
    pqueue_arrival read_workload(string filename)
    ```

* You are to implement 4 CPU scheduling algorithms:

  ```c++
  list<Process> fifo(pqueue_arrival workload);
  list<Process> sjf(pqueue_arrival workload);
  list<Process> stcf(pqueue_arrival workload);
  list<Process> rr(pqueue_arrival workload);
  ```

  Each CPU scheduling function takes a priority queue of processes
  ordered by their arrival time and returns a list of processes
  ordered by their completion time. In addition, the processes that
  are returned have their `first_run` and `completion` fields filled
  in. You can assume a time slice of 1 time unit for the round robin
  scheduler and all processes are added to the end of the process
  queue upon arrival.

  TIP: you are likely to need both a queue containing the entire
  workload and another queue for processes that have already arrived
  for most of the above algorithms.

* You are to implement two metric producing functions:

    ```c++
    float avg_turnaround(list<Process> processes)
    float avg_response(list<Process> processes)
    ```

  The first returns the average turnaround time given a list of
  processes. The second returns the average response time given a list
  of processes.

* You are free to choose how you implement each of the above
  functions. However, our recommendation is to not use references and
  pointers. Our implementation did not use any references or pointers
  which made it easier to reason about what we were doing. If you need
  to modify anything, it is simply easier to make a copy of it. See
  the `show_workload` and `show_processes` for examples on how we
  copied priority queues. Could you avoid using copies? Yes, and it
  would make the simulator faster - however, we recommend that you go
  for simplicity before choosing to optimize.

* We discussed several assumptions about scheduling in order to better
  understand how these scheduling algorithms work. For all of the
  scheduling algorithms you are to implement, we are not making all of
  these assumptions. In particular, you are to **not assume** that all
  jobs run for the same amount of time, all jobs arrive at the same
  time, each job runs to completion (unless the algorithm dictates
  that), and the run-time of each job is known (even though it is
  indicated). You **can assume** that all jobs only use the CPU.

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