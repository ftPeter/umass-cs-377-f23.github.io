# L18 I/O

Input/output (I/O) operations are critical to any modern operating system, as they are responsible for managing the communication between the computer's hardware and software. This involves the transfer of data between input and output devices such as keyboards, printers, disks, and network interfaces. In this lecture, we will discuss the fundamentals of how I/O is handled in an operating system.

I/O operations are managed by the operating system's I/O subsystem. This subsystem consists of several components, including device drivers, interrupt handlers, and the device management system.

Device drivers are software components that enable the operating system to communicate with specific hardware devices. They provide a standardized interface between the hardware and the operating system, allowing applications to access hardware resources without needing to know the low-level details of the device. Device drivers are typically provided by the device manufacturer and are loaded into memory when the device is connected to the system.

Interrupt handlers are another critical component of the I/O subsystem. When a hardware device generates an interrupt, the interrupt handler is responsible for responding to the interrupt and managing the I/O operation. Interrupt handlers are typically small, specialized code fragments (loosely translated to a function) that run at a high priority and perform a specific task, such as reading data from a disk or transmitting data over a network interface.

The device management system is responsible for managing the system's I/O resources, including allocating devices to processes and managing access to shared devices. The device management system maintains a list of all available devices, tracks which devices are currently in use, and ensures that conflicting requests for the same device are properly managed.

I/O operations in an operating system typically involve several steps. First, the application sends a request to the operating system to perform an I/O operation. The operating system then determines which device driver to use based on the type of device being accessed. The device driver is then loaded into memory, and the operating system sets up the I/O operation by configuring the device's hardware and registers.

Once the I/O operation is complete, the device generates an interrupt, which is handled by the interrupt handler. The interrupt handler then notifies the operating system that the I/O operation is complete, and the operating system can then notify the application that the requested operation has been completed.

In conclusion, the management of I/O operations is a critical function of any operating system. The I/O subsystem includes several components, including device drivers, interrupt handlers, and the device management system, all of which work together to enable applications to communicate with hardware devices. By properly managing I/O operations, the operating system can ensure that applications can effectively access the system's resources and provide a reliable and efficient computing experience.

## Reading

- [Chapter 36: I/O Devices](https://pages.cs.wisc.edu/~remzi/OSTEP/file-devices.pdf)

## Reference

You may find it helpful to clone the book's [code repository](https://github.com/remzi-arpacidusseau/ostep-code). This will allow you to quickly review the code associated with each chapter.

```bash
git clone https://github.com/remzi-arpacidusseau/ostep-code.git
```

## Slides

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vTJkPWWcWs7zXksW12YWtsMbMAQEq81SfnUG4EmhhEenrsSycTtnDpDYRX3Vlfpr_30ttXMMULZeppU/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

# Jamboard

Jamboards are used for a place to organically write/draw during class.

[17 Paging Smaller Tables - Google Jamboard](https://jamboard.google.com/d/1Q4zDllOY70rSbKFg-mVatii-rKvMlCvFOk5GUMz0FJg/edit?usp=sharing)

## C/C++ Resources

Some useful resources in case you are a little rusty.

- [The C Programming Language, 2nd Edition](https://umass-cs-377.github.io/resources/the-c-programming-language.pdf)
- [Essential C](https://umass-cs-377.github.io/resources/essential-c.pdf)
- [The C Book](https://publications.gbdirect.co.uk//c_book)
- [A Tour of C++, 2nd Edition](https://umass-cs-377.github.io/resources/a-tour-of-c++-2nd.pdf)

## Additional Resources

- [GDB Basics (VSCode)](https://youtu.be/u6iXfpBDU3w). This is a video tutorial on how to use GDB inside of a VSCode terminal. This doesn't integrate with the VSCode debugger system, but it is helpful.
- [GDB Cheatsheet](https://darkdust.net/files/GDB%20Cheat%20Sheet.pdf). This is a cheatsheet for GDB commands.

