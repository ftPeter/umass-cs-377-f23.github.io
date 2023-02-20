# VSCode

## Remote Setup

Coming soon...

## Debugging C/C++ in VSCode

For a remote SSH debugging session on VSCode, you can do this:

- Ensure you have the C/C++ VSCode extension on the remote installed
- Create a folder in your project directory called `.vscode`
- Put the following two files in the `.vscode` folder:
  - [launch.json](/guides/vscode/launch.json)
  - [tasks.json](/guides/vscode/tasks.json)
- Change line Line 11 of launch.json to: `"program": "${workspaceFolder}/<executable_name>,"`, Example: `"program": "${workspaceFolder}/inverter_app",`
- You can also specify command line arguments by changing line 12 of `launch.json` to something similar: `"args": ["inputs.txt"]`
- Now you should be able to use the VSCode Run and Debug section as you normally do
