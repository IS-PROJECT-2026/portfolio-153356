# Project Submission Report

## 1. Student Details

- **Full Name:**  Joan Gichana
- **GitHub Username:** jgichana
- **Email:** gichana.joan@gmail.com

---

## 2. Deployed Project Link

- **Live GitHub Pages URL:** (https://is-project-2026.github.io/portfolio-153356/)
  

---

## 3. Reflection — Grounded in Your Git History

> **Rules:** Every answer below **must include a direct link** to the specific commit, PR, issue, or branch in your repository that demonstrates what you are describing. Answers without working links will not be graded. Generic explanations that could apply to any project will receive zero marks.
>
> **Marks:** A (2 marks) · B (1 mark) · C (1 mark) · D (1 mark) = **5 marks total**

### A. Your Best Commit

Paste the URL of the commit in your history that you think best demonstrates clean conventional commit practice (good type tag, clear subject, meaningful body or footer).

- **Commit URL:** https://github.com/IS-PROJECT-2026/portfolio-153356/commit/fd91de2ff4a74c2e7c2d6b1b65183d37cc450670
- **Why this one?** This commit is well structured containing a type tag, a clear description in imperative tense and the footer containing the issue that it closes.

### B. A Mistake or Struggle

Link to a commit, PR, or issue where something went wrong — a bad commit message you had to fix, a branch you had to delete and recreate, a PR that needed rework, or a deployment that broke. 

- **Link to the evidence:** (https://github.com/IS-PROJECT-2026/portfolio-153356/commit/48fc196c7e580a85745efdff4ef0671779b8c5d3)
- **What happened and how did you recover?** The commit message was auto generated but I never confirmed to check if there was a type tag. I had to edit the commit message to include the type tag 'docs'.

### C. A Pull Request You're Proud Of

Paste the URL of the PR that best shows your self-review process — one where the description is clear, the issue linkage is correct, and the diff tells a coherent story.

- **PR URL:** 
- **What did you check before merging?** [1–2 sentences on what you reviewed]

### D. One Thing You Would Do Differently

If you had to restart this project from scratch with everything you know now, name one specific workflow decision you would change (not a code change — a Git/project management decision).

- **What would you change?** At the very beginning of the project I initialized the empty project files in the main branch without creating issues for them. I realised this quite late and since there was no way to undo it, it had to stay that way. In the next project for sure, nothing will be committed to the main branch regardless of whether or not the files have code or not.
- **Link to the evidence of the original decision:** (https://github.com/IS-PROJECT-2026/portfolio-153356/commit/109712f11992c0159077701cc376b06fc61f93d5)

---

## 4. Screenshots of Key GitHub Features

Demonstrate your workflow mechanics by embedding your screenshots below.

> **CRITICAL FOR WORKING IMAGES:** Do not type manual folder paths. Edit this file directly on the GitHub web interface, click on the blank line below each prompt, and **paste (Ctrl+V / Cmd+V)** your screenshot. GitHub will automatically upload the file and generate a permanent, working image link for you.

### A. Milestones and Issues
*Provide a screenshot showing your active milestone(s) and the granular tracking issues linked directly to them.*

<img width="1918" height="977" alt="image" src="https://github.com/user-attachments/assets/8e56948f-4a69-4855-9f88-dc2a2b5ace41" />
<img width="1919" height="977" alt="image" src="https://github.com/user-attachments/assets/73debf07-2a07-43b6-b565-7a0d75527b47" />


* **Caption:** My milestones break down the main tasks I need to do into modules that can be tackled separately. 

### B. Project Board
*Provide a screenshot of your GitHub Project Board with your issues organized dynamically across columns (To Do, In Progress, Done).*

<img width="1919" height="984" alt="image" src="https://github.com/user-attachments/assets/667cf10b-8ae3-432a-960e-8c4506e76775" />

* **Caption:** [Write a brief sentence describing your board state here]

### C. Branching Architecture
*Provide a screenshot showing your local or remote Git branch list, highlighting your use of conventional, issue-linked naming patterns (e.g., `feat/`, `fix/`, `style/`).*

<img width="1919" height="983" alt="image" src="https://github.com/user-attachments/assets/78fe4f00-7934-4067-9828-7e801acbc942" />

* **Caption:** [Write a brief sentence describing your branch list here]

### D. Pull Requests & Traceability
*Provide a screenshot of a completed or open Pull Request (PR) on GitHub that clearly shows it is linked to a related development issue.*

<img width="1919" height="979" alt="image" src="https://github.com/user-attachments/assets/38da88e7-c388-4d50-9bab-b5c9ae746520" />

* **Caption:** The pull request add JavaScript functionality to the portfolio by merging the index.js file into main. It closes the issue number 13 as seen in the 
screenshot below;
<img width="1919" height="977" alt="image" src="https://github.com/user-attachments/assets/a82f8c28-f6ad-49d1-9d13-dff3ab2256b3" />

---

## 5. Merge Conflict Evidence

You must engineer **three merge conflicts**, each triggered by a **different cause** from those covered in the lecture. For Conflict 1, document the full resolution lifecycle. For Conflicts 2 and 3, provide the conflict marker screenshot and identify the cause.

> **Marks:** Conflict 1 full chronology (2 marks) · Conflict 2 (1 mark) · Conflict 3 (1 mark) · All three use distinct causes (1 mark) = **5 marks total**

---

### Conflict 1 — Full Chronology

**What cause did you use?** Modifying the contents of the same file from different branches

#### Step 1: Generating the Clash
*Screenshot showing the merge attempt and the conflict warning.*

<img width="1083" height="306" alt="Screenshot 2026-08-16 154939" src="https://github.com/user-attachments/assets/a3370841-5bb5-4764-a6a7-30ad5299bec6" />

* **Caption:** the main branch and the docs/19-project-README branches conflicted

#### Step 2: Inside the Code Editor (Conflict Markers)
*Screenshot showing the raw, unresolved conflict markers (`<<<<<<< HEAD`, `=======`, `>>>>>>>`) in your editor.*

<img width="1606" height="466" alt="Screenshot 2026-08-16 154737" src="https://github.com/user-attachments/assets/ad556136-6052-4671-a368-29938e9d31b7" />

* **Caption:** [Explain what caused the dispute and your reasoning for the final version]

#### Step 3: Resolution & Clean Merge
*Screenshot of your clean Git history or completed PR showing the conflict was resolved and merged.*

<img width="1083" height="291" alt="Screenshot 2026-08-16 1549" src="https://github.com/user-attachments/assets/2bdf5d25-43f8-43b0-8a45-77928bb6023a" />

* **Caption:** I accepted the incoming change and the result was the corrected contents of README file.

---

### Conflict 2 — Different Cause

**What cause did you use?** [Name the type of conflict cause — must be different from Conflict 1]

**Why does this cause trigger a conflict?** [1–2 sentences explaining the mechanism]

[PASTE SCREENSHOT OF CONFLICT MARKERS FOR CONFLICT 2 HERE]

* **Caption:** [Brief description of the conflicting branches and file]

---

### Conflict 3 — Different Cause

**What cause did you use?** [Name the type of conflict cause — must be different from Conflicts 1 and 2]

**Why does this cause trigger a conflict?** [1–2 sentences explaining the mechanism]

[PASTE SCREENSHOT OF CONFLICT MARKERS FOR CONFLICT 3 HERE]

* **Caption:** [Brief description of the conflicting branches and file]

---
##
## 6. Feedback & Evaluation

To help improve this course for future engineering cohorts, please take 2 minutes to fill out the anonymous feedback form. Your honest review helps shape how this program is taught next semester!
- [ ] **Anonymous Evaluation Form:** [Course & Instructor Evaluation](https://forms.gle/YLybnsyXXErKEg3s9)

---
 
