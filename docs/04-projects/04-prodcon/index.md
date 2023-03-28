# Pr4: Producer/Consumer

## Overview

The purpose of this project is to gain experience working with threads and locks within C/C++. This project will help you to understand the subtleties of integrating mutual exclusion and potential bugs that could arise if one does not pay close attention to the implementation. 


## Learning Objectives

1. Create multiple working threads. 
2. Initialize locks the proper way and destroy them when done.
3. Understand how to keep critical sections as small as possible.
4. Prevent deadlocks. 

## Getting Started

To get started, follow these steps:

1. Download the [starter code](pathname:///projects/zips/project-4.zip).
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

* `bank_app`: this is the main executable allowing you to run the
  program that you must complete successfully.
* `bank_test`: this is the test executable that will run tests on the
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

The goal of this part of the assignment is to implement a simple banking application. As in real banking, each account has a balance (with one caveat, the balance could not go negative). We can deposit, withdraw, or transfer money between accounts.

You are given some starter code that defines the interface to the banking app. You cannot change the interface or the data structures. If you do, the automated tests may fail, and you will be heavily penalized. The files for this part of the project include:

- `include/bank.h`
- `include/ledger.h`
- `src/bank.cpp`
- `src/ledger.cpp`
- `src/main.cpp`

You should not modify `bank.h`, `ledger.h`, or `main.cpp`. All the work should be done in `ledger.cpp` and `bank.cpp`. 

### Bank Inputs

To run the program, you need to execute 
```bash
./bank_app <num_workers> <ledger_file>
```
from the command line. Here, `<num_workers>` tells the app how many worker threads will operate on the bank concurrently, and `<ledger_file>` is a `.txt` file with instructions on what operations to run on each account.

The structure of `ledger.txt` is as follows. Each line is defined by 4 integers where the value indicates the following: 
```
FROM_ID TO_ID AMOUNT MODE
```
`FROM_ID` is the account ID we would like to act on. `TO_ID` is only used on transfers and is the account ID to transfer money to. `AMOUNT` is the amount to deposit, withdraw, or transfer. Finally, `MODE` is the action where:

```
0 => Deposit
1 => Withdraw
2 => Transfer
```

For instance, consider the following line in `ledger.txt`:
```
...
4 3 400 2
...
```
this line says take $400 out of `Account[4]` and add it to `Account[3]`.

We ran our solution with `./bank_app 5 ledger.txt ` and got the following output (the output may vary on each run, think about why this is true):

```
ID# 0 | 0
ID# 1 | 0
ID# 2 | 0
ID# 3 | 0
ID# 4 | 0
ID# 5 | 0
ID# 6 | 0
ID# 7 | 0
ID# 8 | 0
ID# 9 | 0
Success: 0 Fails: 0
Worker 0 completed ledger 0: deposit 38 into account 8
Worker 1 failed to complete ledger 1: transfer 237 from account 8 to account 9
Worker 2 completed ledger 2: deposit 9 into account 1
Worker 0 failed to complete ledger 3: withdraw 95 from account 3
Worker 0 failed to complete ledger 5: transfer 233 from account 0 to account 7
Worker 0 completed ledger 6: deposit 334 into account 3
Worker 3 failed to complete ledger 4: withdraw 29 from account 2
Worker 1 failed to complete ledger 8: transfer 280 from account 5 to account 8
Worker 4 completed ledger 9: deposit 110 into account 4
Worker 0 failed to complete ledger 7: withdraw 54 from account 2
ID# 0 | 0
ID# 1 | 9
ID# 2 | 0
ID# 3 | 334
ID# 4 | 110
ID# 5 | 0
ID# 6 | 0
ID# 7 | 0
ID# 8 | 38
ID# 9 | 0
Success: 4 Fails: 6
```

## Implementation Requirements and Hints

### Ledger
- The function `InitBank()` is the entry to the Bank. Your job is to initialize the `Bank` object with `10` accounts. Next, it should call `load_ledger()` to parse the file given by `filename`, and then create the working threads. 

- The function `load_ledger()` takes a file name as an input and parses each line of the file into `struct ledger` objects and appends it to the list `list<struct Ledger> ledger`. Note: you will need to keep track of the line number, and use it as the `Ledger ID`.

- The function `worker` should be executed by `num_workers` threads given as the parameter in `InitBank()`. Each worker thread should remove one entry from the `ledger list` and run the function indicated by `mode` in `struct ledger`. Note: be careful how you remove an item from the `ledger list` by making sure there are no race conditions and that the function does not become single-threaded.

### Bank 

We provided you with three helper functions: `print_account()`, `recordFail()`, and `recordSucc()`. Look at the implementation to make sure you understand it.  Your job is to implement the rest.

- Bank constructor: As a part of the constructor, you must create a new account array of size N and initialize each account properly. Remember to initialize all members and locks. Otherwise, your code may fail. 

- Bank destructor: make sure to free all memory and destroy all locks. We will test your code for memory leaks. Failure to free all memory will result in a loss of points. 

- Deposit: This function should increase the balance by the `amount` of the account given by `accountID`. On success, you should log the message:
`Worker [worker_id] completed ledger [ledger_id]: deposit [amount] into account [accountID]`

- Withdraw: This function should decrease the balance by the `amount` of the account given by `accountID`. On success, you should log the message:
`Worker [worker_id] completed ledger [ledger_id]: withdraw [amount] into account [accountID]`
On failure, you should log the message:
`Worker [worker_id] failed to complete ledger [ledger_id]: withdraw [amount] into account [accountID]`

- Withdraw: This function transfers money from one account `srcID` to another account `destID` of `amount`. You need to be careful how you take locks to avoid deadlocks. 
On success, you should log:
`Worker [worker_id] completed ledger [ledger_id]: transfer [amount] into account [accountID]`. 
One failure you should log:
`Worker [worker_id] failed to complete ledger [ledger_id]: transfer [amount] into account [accountID]`.

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