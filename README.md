# Dummy Project

This is a dummy project explicitly created for testing the professional Git workflow.

## Overview
This repository currently contains basic HTML, CSS, and JS files. It serves as a playground for team members to practice creating branches, making commits, pushing to GitHub, and creating Pull Requests as per the team's standard operating procedure.

## Team Workflow Guide

A technical client will immediately look at your branch names and commit messages.

### 1. Branch Names
Use category prefixes followed by a short description separated by hyphens.
- **Instead of:** `noor-branch` or `my-code`
- **Use:** `feature/user-login`, `bugfix/cart-error`, or `task/database-setup`.
- *(If you really want to track who is doing what in the name, use `feature/noor-user-login`).*

### 2. Commit Messages
Start with a verb in the imperative mood (as if giving a command).
- **Instead of:** `fixed the bug` or `my updates`
- **Use:** `Fix header alignment on mobile` or `Add database connection string`.

### 3. Step-by-Step Professional Workflow

**Step 1: Always start from an updated main branch**
```bash
git checkout main
git pull origin main
```

**Step 2: Create your task branch**
```bash
git checkout -b feature/your-specific-task
```

**Step 3: Write code and commit logically**
```bash
git add .
git commit -m "Implement user authentication logic"
```

**Step 4: Push the branch to GitHub**
```bash
git push origin feature/your-specific-task
```

**Step 5: Create a Pull Request (PR)**
Go to GitHub, click "Compare & pull request", fill out the description, and assign reviewers.

**Step 6: Merge and Clean Up**
Merge on GitHub upon approval, delete the remote branch.

**Step 7: Update Local Environments**
```bash
git checkout main
git pull origin main
```
