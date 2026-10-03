# Learning the Shell: Core Concepts & Operations

## 💻 1. The Shell & Terminal
* **The Shell:** A program that takes commands from the keyboard and passes them to the operating system to perform.
* **The Terminal:** The command-line interface window where you interact with the shell environment.
* **Standard Prompt (`$`):** Indicates you are operating as a standard user with normal file privileges.
* **Root Prompt (`#`):** Indicates administrative or superuser privileges. Use caution here to avoid accidental file deletions.

---

## 🗺️ 2. File System Navigation
Linux and Unix-like environments organize everything into a single directory tree structure, starting at the root directory `/`.

### Essential Commands
* `pwd` (Print Working Directory): Displays your exact location in the file system.
* `ls` (List): Displays the contents of the current folder.
* `cd` (Change Directory): Moves your terminal session to a different folder.

### 🛠️ Practical Navigation Examples
```bash
# Verify your current location
pwd

# List contents of your current directory
ls

# Navigate to a specific subfolder (e.g., Documents)
cd Documents

# Move up one level to the parent directory
cd ..

# Jump directly back to your user home directory
cd ~
```

---

## 🔍 3. Working with Commands
Commands generally fall into four categories: compiled programs, shell built-ins, shell functions, or custom aliases.

### Discovery & Documentation Tools
* `type`: Explains how a specific command name will be interpreted by the shell.
* `which`: Locates the absolute executable path of a given program.
* `help`: Displays built-in shell reference guides.
* `man`: Opens the definitive system reference manual for executable utilities.

### 🛠️ Practical Documentation Examples
```bash
# Check if a command is built-in or an external program
type cd

# Locate the actual path of an executable
which ls

# Display quick usage documentation for a shell built-in
help cd

# Open the comprehensive manual page for a program (Press 'q' to exit)
man ls
```

---

## 🛠️ My Practical Observations & Terminal Log

During my Week 3 labs, I tested the following behaviors directly inside my GitBash environment:

* **Special Character Restrictions:** Standard shells treat parentheses `()` as subshell syntax operators. Pasting literal branch markers like `(main)` into a command directly causes a `bash: syntax error near unexpected token`.
* **Path Expansion:** Navigating deep structures via the absolute path shortcut `~/OneDrive/Desktop/...` works reliably to move across separated course project roots.
* **Documentation Inspection:** Running `type cd` verified that it operates as a shell built-in function, while `which ls` exposed its binary utility location within the system binaries folder.
