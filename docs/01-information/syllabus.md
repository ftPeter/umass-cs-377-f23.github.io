---
sidebar_position: 1
---

# Syllabus

In this course we examine the important problems in operating system design and implementation. The operating system provides a well-known, convenient, and efficient interface between user programs and the bare hardware of the computer on which they run. The operating system is responsible for allowing resources (e.g., disks, networks, and processors) to be shared, providing common services needed by many different programs (e.g., file service, the ability to start or stop processes, and access to the printer), and protecting individual programs from one another. The course will start with a brief historical perspective of the evolution of operating systems over the last fifty years, and then cover the major components of most operating systems. This discussion will cover the tradeoffs that can be made between performance and functionality during the design and implementation of an operating system. Particular emphasis will be given to three major OS subsystems: process management (processes, threads, CPU scheduling, synchronization, and deadlock), memory management (segmentation, paging, swapping), file systems, and operating system support for distributed systems. This course counts as a CS Elective toward the CS Major. Prerequisites: COMPSCI 230. 4 credits.

## Statement of Inclusivity

The staff for this course support the UMass commitment to diversity, and welcome individuals regardless of age, background, citizenship, disability, sex, education, ethnicity, family status, gender, gender identity, geographical origin, language, military experience, political views, race, religion, sexual orientation, socioeconomic status, and work experience. In this course, each voice in the classroom has something of value to contribute. Please take care to respect the different experiences, beliefs and values expressed by students and staff involved in this course.

## Course Objectives

- The objectives of this course are to learn and understand operating system concepts including:
- Processes and Process API
- System Calls
- Direct Execution
- CPU Scheduling
- Concurrency and Threads
- Locks and Event-based Concurrency
- Condition Variables, Semaphores, and Monitors
- I/O Devices, Disks, Files and Directories, and File System Implementation
- Address Spaces and the Memory API
- Address Translation and Segmentation
- Free Space Management and Paging
- Translation Lookaside Buffers and Page Tables

## Course Format

- **Lecture** will provide an overview of the topics concerned with operating systems. Typical classes will follow a lecture-style presentation of the material with interaction from students based on examples covered. Occasionally, there may be an in-class activity that is graded. You are expected to attend lectures regularly. Lectures will also be available live on zoom and recorded for viewing after class. We provide this flexibility for your busy lives, but please do not abuse it. We do expect you to attend class on a regular basis.

- **Lab** will have an associated exercise that you are required to complete. You are expected to begin these exercises during the discussion working with others taking the course. Course staff will be available to answer questions and help guide you through the assignment. You are expected to attend the labs. Labs will not be recorded.

## How to Succeed

Your success in this class is important to us. We all learn differently and bring different strengths and needs to the class. If there are aspects of the course that prevent you from learning or make you feel excluded, please let us know as soon as possible. Together we’ll develop strategies to meet both your needs and the requirements of the course. There are also a range of resources on campus, including:

- [Academic Calendar](https://www.umass.edu/registrar/calendars/academic-calendar)
- [Learning Resource Center](https://www.umass.edu/lrc/)
- [Center for Counseling and Psychological Health (CCPH)](https://www.umass.edu/counseling/)
- [English as a Second Language (ESL) Program](https://www.umass.edu/esl/)

## Required Materials

- **Textbook**: [Operating Systems: Three Easy Pieces](http://pages.cs.wisc.edu/~remzi/OSTEP), Remzi H. Arpaci-Dusseau and Andrea C. Arpaci-Dussea. This is a free textbook available online. While the entire textbook is available for free from this site, if you so wish, a hard copy may be purchased on Amazon.

- **Laptop Computer**: It is highly recommended that you have a laptop computer for the lab section. If you do not have a portable machine (not Chromebook, not tablet), you should work with another student during the lab section. Please inform the course staff so we can ensure that you are paired up with another student.

## Software Platforms and Tools

### Moodle

We will use the Moodle Learning Management System (LMS) as the point of entry for this course. It will provide links and setup information to the other important platforms that we will be using in this course. Moodle will also be used to provide quizzes on the material.

### Gradescope

We use Gradescope for automatically grading programming projects. Gradescope allows us to provide fast and accurate feedback on your work. Before the deadline you can submit as many times as you need, so submit early and often to ensure you have something in before the deadline. Become familiar with Gradescope and verify that your submission has been properly uploaded before the deadline. Use OneDrive, DropBox, Google Drive, or some other backup software to ensure that your work is not lost in the event of a computer failure. The Gradescope autograder will provide you with some limited feedback on your submissions: does it compile, does it pass automated tests, what your score is, etc. The autograder does not provide detailed feedback. We will help you get familiar with Gradescope as the course progresses.

### Edlab

We will be using the [EdLab](http://www-edlab.cs.umass.edu/) Linux environment for all programming tasks in this course. To access the EdLab you must use [ssh](https://en.wikipedia.org/wiki/Secure_Shell) (secure shell) to remotely login to the EdLab. Your account has already been created by [CSCF](https://www.cics.umass.edu/about/computing-facilities) (Computer Science Computing Facility). We will also be using [sftp](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol) (secure file transfer protocol) to transfer files from and to the EdLab environment - this will be necessary to submit programming assignments to Gradesope.

The course development environment is Linux in the Edlab environment, C/C++, command line, and console-based editors such as emacs, vim, and nano. All assignments are based on this and is what the course and its staff support. In addition to console-based editors, we use the [VSCode](https://code.visualstudio.com/) Development Environment for developing, debugging, and testing programming projects. This is free software and you will be given installation instructions and training in its use.

### Echo360

All lectures will be recorded and posted to the Echo360 platform. Echo360 is a plug-in tool that integrates personal and classroom video capture, student engagement tools, and analytic tools to maximize student participation and engagement for both campus-based and online courses. A link to Echo360 will be available in the course LMS.

### Edlab Login

Your username is generally the same as your UMass username. The initial password for a new account is in the following:

```
ELxxxaaa
```

where `xxx` = last 3 digits of your 8-digit student ID, `aaa` = 1st 3 letters of your username. If you had an account on the EdLab system last year and changed your password, then the password will be whatever you changed it to. You should also take a look at Logging Into the EdLab for the First Time. After you successfully log in to the EdLab environment you will be in your user/home directory. You should also notice a directory named `cs377`. You should use this directory for all your programming work associated with this course.

**Note: if you used the edlab environment in a previous semester and forgot your password or have other account issues please email CICS IT & Facilities (CSCF) at system@cs.umass.edu.** 

## Programming Editors

There are several different programming editors available for you to choose from that allow you to edit your code on the Edlab. The easiest way to do this is logging in to the Edlab and use one of the following available editors from the command line:

- [Emacs](https://www.gnu.org/software/emacs/) - An extensible, customizable, free/libre text editor - and more. At its core is an interpreter for Emacs Lisp, a dialect of the Lisp programming language with extensions to support text editing.
- [Vim](https://www.vim.org/) - A highly configurable text editor built to make creating and changing any kind of text very efficient.
- [Nano](https://www.nano-editor.org/) - A text editor for Unix-like computing systems or operating environments using a command line interface.

Another great option is [VSCode](https://code.visualstudio.com/) that can be used locally to edit code remotely on the Edlab. This is an excellent editor, but it does require some setup to use [Remote Development using ssh](https://code.visualstudio.com/docs/remote/ssh).

There are many short tutorials out there. We recommend that you do a quick search to find an introductory tutorial to become acquainted with at least one of these editors if you are not already familiar with one of them. You will have some guidance in the first lab!

## Communication

- **Email**: Email should not be used. Please post privately to Instructors on Piazza. In the unlikely event that you are unable to post to Piazza, please send an email to the instructor teaching your course section.

- **Piazza**: We will be using Piazza for all other communication. This online discussion forum should be your first choice for asking questions. You should check the discussion forum before asking your question to see if the same question has already been posted. We will not answer questions that have already been answered in the discussion forum. Think before you post. We expect you to do a reasonable amount of thinking to try to solve your problems before posting for help. Make sure you are articulate and clear with your post (i.e., think before you post). You should post questions related to assignments early rather than wait until the last minute. Questions that are posted very near an assignment deadline may not be answered. Course staff are expected to answer questions Monday through Friday. Do not expect prompt answers on Saturday, Sunday, and scheduled holidays and breaks.

  **Please post with respect and kindness. Posts that are disrespectful, crude, inappropriate, or mean will not be tolerated and will be reported and result in your immediate removal from the course and a failure for the course.**

## Course Format

### Lectures

Lectures will be led by the professor and provide a high-level overview of the course material. The presentation format will include a variety of slides, written notes, programming examples, activities, etc. All material will be available through the course learning management system site or website. You are expected to attend every lecture for your section and arrive promptly so you do not disturb others. You may use electronic devices during class, however, its use must pertain to the activity at hand. If your use of an electronic device is distracting to yourself or others, you will be asked to turn the device off.

**What happens if I can’t attend a lecture in person?**

Although we want you to attend the lecture for your section in person, we understand that sometimes that isn’t always possible. For that reason, we provide flexible options that allow you to participate.

- **Remote Synchronous**: attend the lecture remotely on Zoom and ask questions through the chat system.
- **Asynchronous**: watch the recorded lecture at a time that is convenient for you.

### Lab

The Lab section is led by teaching assistants (TAs) for this course. There will also be undergraduate course assistants (UCA) assigned to your lab section. You are expected to attend every lab. Labs are used to begin lab exercises and get help completing those assignments. Missing a lab section does not excuse you from any activities that occur during that time. Do not ask to make up any missed work during lab section time.

**Labs will not be recorded or on Zoom.**

## Rules for Success

### Student Responsibilities

If you follow these rules, your odds of learning the material and achieving a good grade in this course will improve greatly.

- Read the assignment documentation early and carefully.
- Do your work on time, submit your work on time, and make sure you submitted the correct work.
- Communicate with other students in the course, the professor, and other course staff for help.
- Be honest in the work you do and the submissions you make.
- Communicate with me and others in the course with respect and understanding.
- Do not ask to submit assignments after the due date.

### Instructor Responsibilities

You can expect from us:

- Timely release of course assignments.
- Timely release of scores achieved on course assignments.
- To respond to questions in the discussion forums in a reasonable amount of time during the week and normal working hours.
- Be respectful of your ideas and value the diversity you bring to the virtual classroom.
- Be open to dialogue that challenges me.
- Be present during my stated office hours.
- Ensure the proper running of the course in the online format.

## Grading Policy

The anticipated breakdown of course grades is as follows; this is subject to change.

- Project Assignments (40%)
- Weekly Quizzes (20%)
- Lab Exercises (15%)
- Final Project (25%)

### Grading Notes

- The numerical cutoff for final course letter grade assignment will be made after all grading is completed. As a rough guide, expect to require at least a 93 to get an A, a 90 to get an A-, an 87 to get a B+, an 83 to get a B, an 80 to get a B-, etc.
- Individual projects/assignments/labs will not be scaled (curved).
- The instructor may or may not choose to scale final grades.
- Final grades are assigned based on the overall weighted average as defined by the grading policy. Grades will be rounded up. For example, if you achieve an 89.93 then the final letter grade will be (for example) an A-, not a B+.

## Assessment/Work

- **Project Assignments**: There are approximately 6 projects that are hands on with programming as it relates to the material. You will be provided a “starter” project, but will require additions, modifications, or tasks to complete it. Most projects come with some tests (but not all) to guide you. You submit your projects to Gradescope which will run our auto-grader and apply additional private tests.
  
- **Weekly Quizzes**: There will be a weekly quiz that focuses on the material covered prior to the release of each quiz. These quizzes are cumulative. You are able to take the quiz as many times as necessary to achieve a 100%. Quizzes contain multiple choice style questions covering material from lecture, the reading, and possibly labs and assignments.
  
- **Lab Exercises**: A lab exercise is a short activity that will focus on expanding your knowledge in a particular topic area. They are often designed to provide guidance for an upcoming project or to enhance your understanding of the content for that week. They are graded both automatically and manually.

- **Final Project**: Towards the end of the semester you will complete a final project. You will work collaboratively in groups of 4 members to design and implement a programming project. You will come up with your own idea for the project and complete it by the end of the semester.

## Assignment Submission

Assignments will be submitted electronically. You are responsible for submitting your assignments by the assigned due date. The due dates for assignments will be clearly indicated on Moodle and it is your responsibility to update your own calendar so you are aware of due dates.

## Late and Early Submissions

### Lateness General Guidelines

Lateness is defined as any assignment that is outside of the stated due date requirements. We allow assignments to be submitted three days “late” after the posted due date. However, penalties might be applied (see Submission Currency below). After the three days we will not accept a submission from any assessment component. It is your responsibility for maintaining your own schedule and being prompt with your submissions. We expect that you become familiar with the course submission software and verify that your submission has been properly uploaded. We will not accept late submissions due to lack of checking on this. We assume:

- You are an adult and have the ability to check and verify your work has been received properly.
- You are capable of using GitHub, DropBox, Google Drive, or some other backup software to ensure that your work is not lost in the event of a computer failure. If you use GitHub your repository must be private unless otherwise specified.
- You have a back-up plan in place in the event that your computer fails or your internet connection is unavailable. Make sure you have a plan B and C if your computer crashes or your internet is unavailable. This is your responsibility.
- To ensure that you submit assignments on time you should begin them early and not wait until the last minute to submit. You will be able to submit multiple times so submit early and often to ensure you have something in before the deadline.

If there are extenuating circumstances beyond your control that prevent you from completing an assignment by the posted deadline you must contact the instructor immediately using the appropriate communication channel (see Communication below).

### Submission Currency 💵

To add some flexibility to submission deadlines, we will be using a form of “currency” in this course to earn “tokens” for submissions that are made before the day an assignment is due. If you submit an assignment before the deadline you will receive a token. You may then use a token to buy a late day allowing you to submit an assignment past the deadline. If you submit an assignment late and you run out of tokens, you may borrow tokens putting you in the negative. To get out of the hole you will need to submit subsequent assignments early to earn tokens back and pay your debt!

If you complete the course with leftover tokens it will be applied to your final grade and increase your overall grade for the course. If you complete the course with negative tokens it will be applied to your final grade and decrease your overall grade for the course.

**Here are the rules:**

- You start the course with 3 tokens.
- If you submit an assignment any day before or on the day an assignment is due you will receive a token.
- If you submit an assignment any day after the day an assignment is due you will pay a token for each day past the due date.
- You may only use tokens up to three days past the deadline of an assignment. After three days past the deadline you are no longer able to use tokens or submit an assignment late. It will be marked as missing with a 0.
- You can only hold a maximum of 5 tokens. That is, if you have 5 tokens and you hand an assignment early or on time, you still have 5 tokens.
- To use your tokens you must use our token request form available on the course LMS.

**What can tokens be used for?**

Tokens can be used on the following assessments:

- Projects
- Labs

**Examples:**

- At the start of the semester Mia submits the first assignment two days early and receives a token increasing their purse to 4.
- In the middle of the semester Pat is late by 2 days. This uses 2 tokens from their purse. This is not bad since Pat hasn’t missed an assignment. Pat has 1 token remaining.
- At the end of the semester Jorge has 3 tokens and their grade is an 88. The tokens are applied and their final grade is a 91. Jorge is happy. 😃
- At the end of the semester Tanya has -2 tokens and their grade is a 90. The tokens are applied and their final grade is an 88. Tanya is unhappy 😔, but understands.

You are ultimately responsible for maintaining your token count. We will do our best to calculate the number of tokens you have for each assignment. However, it may take a few days to do so.

**Tokens may not be used or gained on quizzes.**

## Course Support

### Office Hours

Office hours are times when we provide real-time access to the instructor, TAs, and UCAs. You do not need an appointment to attend office hours, attendance is optional, and all questions you have about the course are welcome. These sessions will be held at several different times during the week. Office hours will be posted on Moodle.

### Accommodations

The University of Massachusetts Amherst is committed to providing an equal educational opportunity for all students. If you have a documented physical, psychological, or learning disability on file with Disability Services (DS), you may be eligible for reasonable academic accommodations to help you succeed in this course. If you have a documented disability that requires an accommodation, please notify me as soon as possible so that we may make appropriate arrangements. For further information, please visit Disability Services (https://www.umass.edu/disability/).

### Title IX

If you have been the victim of sexual violence, gender discrimination, or sexual harassment, the university can provide you with a variety of [support resources](http://www.umass.edu/titleix/node/448) and accommodations. UMass is committed to providing these resources with minimal impact and costs to survivors on a case-by-case basis. Resources are available to survivors with or without them filing a complaint. No upfront costs are charged to any currently enrolled students for University Health Services or the Center for Counseling and Psychological Health, and no fees exist for services in the Dean of Students Office, the Center for Women and Community, Student Legal Services, or by live-in residential staff.

## Attendance and Participation

You are expected to attend class and labs regularly, read any assigned readings before class, and participate in class discussions and activities. Your participation will be evaluated in a variety of ways. This includes any in class activities or activities that may be given during class or lab sections. You are responsible for maintaining your own schedule and ensuring that you are present during these activities and/or complete them in a timely manner. It is generally not possible to make up missed activities.

## Incompletes

Typically, a course is completed after the last class, final exam, and/or final project or assignment. In rare cases, extenuating circumstances may prevent a student from completing a course by that time. As part of the University Regulations, we may issue an Incomplete (INC) for a course, rather than a course grade, if a student submits a request to the instructor(s). The criteria for granting an INC request are determined by the course instructors. The following is an excerpt from [Section VI D in the Academic Regulations](https://cutt.ly/jm8K1em):

> “Students who are unable to complete course requirements within the allotted time because of severe medical or personal problems may request a grade of Incomplete from the instructor of the course. Normally, incomplete grades are warranted only if a student is passing the course at the time of the request and if the course requirements can be completed by the end of the following semester. Instructors who turn in a grade of "INC" are required to leave a written record of the following information with the departmental office of the academic department under which the course is offered: (1) the percentage of work completed, (2) the grade earned by the student on the completed work, (3) a description of the work that remains to be completed, (4) a description of the method by which the student is to complete the unfinished work, and (5) the date by which the work is to be completed. In the case of an independent study where the entire grade is determined by one paper or project, the instructor should leave with the department information pertaining to the paper or project, which will complete the course. To avoid subsequent misunderstanding, it is recommended that the student also be provided with a copy of this information.”

### Criteria

The incomplete criterion for this course requires that you have:

- At least 60% of the course must be completed with a passing grade.
- A valid reason for requesting an INC that relates to a severe medical or personal problem

### Requests

Towards the end of the semester a notification will be posted about incomplete requests. You will follow the instructions provided to submit an incomplete request. After we review the request, we will make one of the following determinations:

- We **approve** the request upon which you will be notified by email and a separate incomplete agreement document will be sent to you to read through and sign no more than 48 hours after receiving the incomplete agreement document. This document will include what remains to be completed for the course and a deadline. After you sign and return this document, we will open extensions for the missing work. After the course has ended, we do not provide any additional help or support regarding the specifics of the course material. You are expected to complete the work using the material and online platforms that were available to you when the course was active.

- We **deny** the request and submit a grade based on your performance at the end of the course.

## Code of conduct

- The course staff are committed to providing a friendly, safe and welcoming environment for all, regardless of level of experience, gender identity and expression, sexual orientation, disability, personal appearance, body size, shape, race, ethnicity, age, religion, nationality, or other similar characteristics.
- Please be kind and courteous. There’s no need to be mean or rude.
- Respect that people have differences of opinion and that differing approaches to problems in this course may each carry a trade-off and numerous costs. There isn’t always a single right answer to complicated questions.
- Please keep unstructured critique to a minimum. Criticism should be constructive.
- We will informally warn you, once, if you insult, demean or harass anyone. That is not welcome behavior. After that we will report your behavior to the Dean of Students office. We interpret the term “harassment” as including the definition in the [Citizen Code of Conduct](https://github.com/stumpsyn/policies/blob/master/citizen_code_of_conduct.md#4-unacceptable-behavior) under “Unacceptable Behavior”; if you have any lack of clarity about what might be included in that concept, please read their definition and then ask us for clarification. We don’t tolerate behavior that excludes people in socially marginalized groups.
- Private harassment is also unacceptable. No matter who you are, if you feel you have been or are being harassed or made uncomfortable by a member of this class, please contact a member of the course staff immediately (or if you do not feel safe doing so, you should contact the Chair of the Faculty of CICS). Whether you’ve been at UMass for years or are a newcomer, we care about making this course a safe place for you and we’ve got your back.
- Likewise, any spamming, trolling, flaming, baiting or other attention-stealing behavior is not welcome.

## Collaboration Policy

1. **Group Work Encouragement:** Students are encouraged to work in groups to facilitate learning, knowledge sharing, and skill development. Group work will be a regular part of the course and students are expected to actively participate in it. **Group work is allowed on all assignments in this course.** You are allowed to submit an assignment as a group of up to 4 collaborators.
2. **Individual Submissions:** Although group work is encouraged, each student is required to submit their own individual work based on the group collaboration. This is to ensure that each student is held accountable for their own learning and understanding of the course material.
3. **Group Responsibilities:** All group members are expected to contribute equally to the group discussions and work and should be prepared to share their knowledge and skills with their peers. Group members should also be respectful of each other's opinions and work styles.
4. **Conflict Resolution:** In the event of a conflict within the group, students are encouraged to communicate and resolve the issue amongst themselves. If the conflict cannot be resolved, the instructor will mediate.
5. **Credit Allocation:** Credit for group work will be allocated based on each student's individual contribution to the assignment. Students will assess their own contributions to submitted assignments and determine their grades accordingly.
6. **Cheating:** Cheating, including plagiarism, is not tolerated and will result in a failing grade for the assignment. All work submitted must be original and should accurately reflect the student's own understanding of the course material.
7. **Communication:** Regular communication between group members is essential for successful collaboration. Students are encouraged to use online tools, such as email or group chat platforms, to stay in touch and communicate effectively.

By following this collaboration policy, students will be able to work collectively while still being held accountable for their individual learning and understanding of the course material.

## AI Assistants

As students of the Manning College of Information and Computer Sciences, it's important to understand the judicious use of AI technologies like ChatGPT in your homework assignments and projects. While these tools can be a valuable resource in your learning journey, it's essential to use them in a responsible and ethical manner.

In this course, we allow the use of AI technologies like ChatGPT as a means of learning and improving your understanding of the subject matter. However, it's important to remember that the work you submit must be original and created by you, the student. Submitting work that is not your own constitutes academic dishonesty and is a violation of the code of conduct in this course.

The use of AI technologies like ChatGPT should be seen as a tool for assistance, not a substitute for your own efforts. While it's tempting to rely solely on these tools to complete your assignments and projects, doing so will not help you develop the critical thinking and problem-solving skills that are essential for success in computer science.

In conclusion, while we encourage the use of AI technologies like ChatGPT in your learning journey, it's important to use them responsibly and ethically. The work you submit must be original and created by you, and the use of these tools should be seen as a means of assistance, not a substitute for your own efforts. By doing so, you'll be able to make the most of these tools and develop the skills and knowledge you need to succeed in computer science.