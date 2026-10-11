# Learning the Shell: Core Concepts & Operations

## 💻 1. The Shell & Terminal
* **The Shell:** A program that takes commands from the keyboard and passes them to the operating system to perform.
* **The Terminal:** The command-line interface window where you interact with the shell environment.
* **Standard Prompt (`$`):** Indicates you are operating as a standard user with normal file privileges.
* **Root Prompt (`#`):** Indicates administrative or superuser privileges. Use caution here to avoid accidental file deletions.
---

## 🗺️ 2. File System Navigation
Linux and Unix-like environments organise everything into a single directory tree structure, starting at the root directory `/`.

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
* `type`: Explains how the shell will interpret a specific command name.
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

During my Week 3 labs, I tested the following behaviours directly inside my GitBash environment:

* **Special Character Restrictions:** Standard shells treat parentheses `()` as subshell syntax operators. Pasting literal branch markers like `(main)` into a command directly causes a `bash: syntax error near unexpected token`.
* **Path Expansion:** Navigating deep structures via the absolute path shortcut `~/OneDrive/Desktop/...` works reliably to move across separated course project roots.
* **Documentation Inspection:** Running `type cd` verified that it operates as a shell built-in function, while `which ls` exposed its binary utility location within the system binaries folder.

## 📋 4. Web Forms
- Today’s lesson covered web forms and how they are used to collect information from users. 
- The lesson included creating forms using HTML and working with different form elements.

### What was challenging
- Challenging areas included remembering the different form elements and input types, knowing when to use radio buttons versus checkboxes, and structuring the form correctly in HTML.

### 📝 HTML Form Elements

| Element | Purpose |
|---------|---------|
| `<form>` | Creates a form |
| `<label>` | Describes an input |
| `<input>` | Collects user information |
| `<textarea>` | Collects longer text |
| `<select>` | Creates a dropdown |
| `<option>` | Adds an option to a dropdown |
| `<button>` | Creates a clickable button |

### Practical example
```bash
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Heaven Hospital Registration Form</title>
        <style>
            *{background-color: #f6f8fa;}}
        </style>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
    <section>
        <header>
            <h1>Heaven Hospital Registration Form</h1>
            <p>Please fill out the form below to register at our hospital.</p>
            <p>Note: All fields marked with an asterisk (*) are required.</p>
            <p>We value your privacy and will keep your information confidential.</p>
            <p>For any inquiries, please contact our support team at <a href="mailto:heavensupport@hospital.com">heavensupport@hospital.com</a>.</p>
        </header>
    </section>
    <form action="submit_form.php" method="POST">
        <label for="Name">First Name*:</label>
        <input type="text" id="Name" name="Name" required><br><br>

        <label for="lastName">Last Name*:</label>
        <input type="text" id="lastName" name="lastName" required><br><br>

        <label for="email">Email*:</label>
        <input type="email" id="email" name="email" required><br><br>

        <label for="phone">Phone Number*:</label>
        <input type="tel" id="phone" name="phone" required><br><br>

        <label for="dob">Date of Birth*:</label>
        <input type="date" id="dob" name="dob" required><br><br>

        <label for="gender">Gender*:</label>
        <select id="gender" name="gender" required>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select><br><br>

        <label for="address">Address*:</label>
        <textarea id="address" name="address" rows="2" cols="30" required></textarea><br><br>

        <input type="submit" value="Register">
    </body>
</html>
```
