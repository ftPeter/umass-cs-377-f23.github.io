# L04 Process API

> UNIX presents one of the most intriguing ways to create a new
> process with a pair of system calls: fork() and exec(). A third
> routine, wait(), can be used by a process wishing to wait for a
> process it has created to complete.
-- OSTEP

Unix's fork and exec system calls are two of the most powerful and versatile features of the Unix operating system. Together, they allow for the creation of new processes and the execution of new programs, enabling a wide range of functionality from simple shell scripts to complex multi-process applications.

Forking is the process of creating a new process by duplicating an existing one. When a fork system call is made, the operating system creates a new process, identical to the parent process, with its own copy of the parent's address space, including all code, data, and stack segments. The new process, called the child process, is an exact replica of the parent process, except for a few details.

One of the most important details that differ between the parent and child processes is the process ID (PID). The child process is assigned a new PID, while the parent process retains its original PID. This allows the parent and child processes to communicate with each other and with other processes in the system.

Once the fork system call has been made, the child process is typically used to run a different program than the parent process. This is where the exec system call comes in. The exec system call replaces the current process image with a new process image, typically a new executable program.

When the exec system call is made, the operating system replaces the current process's address space with a new program. This new program can be any valid executable file, including binary executables, shell scripts, and even interpreted programs like Python scripts. The new program is loaded into the child process's address space, and its entry point is called, starting the program's execution.

The magic of the fork and exec system calls is that they allow for the creation of complex multi-process applications. By forking multiple child processes, each with its own copy of the parent's address space, a parent process can spawn a group of child processes to perform different tasks in parallel. By using the exec system call to load different programs into each child process, the parent process can orchestrate the execution of a complex workflow, with each child process performing a different function.

In addition, the fork and exec system calls are at the heart of the Unix shell. When a user enters a command into the shell, the shell forks a new process to execute the command. This child process then calls the exec system call to load the requested program and execute it. When the program finishes, the child process exits, and the shell resumes control.

The magic of Unix's fork and exec system calls lies in their ability to create new processes and execute new programs, enabling the creation of complex multi-process applications and providing the foundation for the Unix shell. These system calls are an essential part of the Unix operating system, and their versatility and power have contributed to Unix's long-standing reputation as a powerful and flexible platform for computing.

Here is an example of the use of `fork` and `exec`:

```c
#include <stdio.h>
#include <unistd.h>
#include <sys/wait.h>

int main() {
    int pid = fork();

    if (pid == -1) {
        perror("fork");
        return 1;
    } else if (pid == 0) {
        // child process
        printf("I am the child process!\n");
        char *args[] = {"ls", "-l", NULL};
        execvp("ls", args);
        perror("execvp");
        return 1;
    } else {
        // parent process
        printf("I am the parent process, my child process has PID %d\n", pid);
        wait(NULL);
        printf("Child process finished\n");
        return 0;
    }
}
```

:::info

In this example, we first call the `fork()` function to create a new child process. The return value of `fork()` is stored in pid. If pid is -1, an error occurred, so we print an error message and exit with a non-zero status code. If pid is 0, we're in the child process, so we print a message and call `execvp()` to execute the ls command with the -l option. `execvp()` replaces the child process with the ls program, so if it returns, an error must have occurred, in which case we print an error message and exit with a non-zero status code. If pid is positive, we're in the parent process, so we print a message with the child process's PID, call `wait()` to wait for the child process to finish, and print a message indicating that the child process has finished. Finally, we return 0 to indicate success.

:::

## Reading

- [Chapter 5 Interlude: Process API](https://pages.cs.wisc.edu/~remzi/OSTEP/cpu-api.pdf). ([code](https://github.com/remzi-arpacidusseau/ostep-code/tree/master/cpu-api))

You may find it helpful to clone the book's [code repository](https://github.com/remzi-arpacidusseau/ostep-code). This will allow you to quickly review the code associated with each chapter.

```bash
git clone https://github.com/remzi-arpacidusseau/ostep-code.git
```

## Slides

import { PowerPoint } from '@site/src/components/PowerPoint'

<PowerPoint lec_src={require('./04-process-api.pptx').default}/>

## Code

- [cpu-api](https://github.com/remzi-arpacidusseau/ostep-code/tree/master/cpu-api)

## C/C++ Resources

Some useful resources in case you are a little rusty.

- [The C Programming Language, 2nd Edition](pathname:///resources/the-c-programming-language.pdf)
- [Essential C](pathname:///resources/essential-c.pdf)
- [The C Book](https://publications.gbdirect.co.uk//c_book)
- [A Tour of C++, 2nd Edition](pathname:///resources/a-tour-of-c++-2nd.pdf)

## Additional Resources

- [GDB Basics (VSCode)](https://youtu.be/u6iXfpBDU3w). This is a video tutorial on how to use GDB inside of a VSCode terminal. This doesn't integrate with the VSCode debugger system, but it is helpful.
