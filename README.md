# Flyte-Wingman

This is the repository for the Flyte-Wingman vs-code extension.

## Running the extension

When running this extension you'll also need a few other softwares.

- Docker
- flytectl
- python >= 3.8
- venv module for python

With these software installed the extension should work correctly.

Running it in development mode you can open the extension source folder in visual studio code and press fn + f5 and select the option for VS Code Extension Development.

## Building the extension

To build and install the extension take the following steps:

1. Ensure `vsce` is installed; this can be done with `npm install -g vsce`
2. From the `Flyte-Wingman` directory run `npm install` then `vsce package`
3. From visual studio code go to the extension side bar and click the ellipsis (...) and click install from VSIX. Browse to the Flyte-Wingman-0.0.1.vsix file and click Install
4. Utilize the visual studio command palette to access the wingman functionality with the commands `Configure Wingman`, `Initialize Workflow`, and `Register Workflow`
