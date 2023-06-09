# CSE 110 SP23 Group 9 Repository

[The Wizarding World of Fortune Telling](https://the132debuggers.github.io/cse110-sp23-the132Debuggers/source/)

## Team Members

- Designer: Kiyoshi
- Developers: Edwin, Frank, Grace, Leica, Nathaniel, William, Pascal
- Planner: Helena
- Team Leaders: Kiyoshi, Shreya

## Team Page 

[the132Debuggers team page](./admin/team.md)

[Onboarding](./docs/onboard.md)

## Important Links

[Figma](https://www.figma.com/file/zfSDto1UGzXm4tzKI93PNn/CSE-110?type=design&node-id=0%3A1&t=vlmWkIqrb74kL6z8-1)

[Documentation](https://the132debuggers.github.io/documentation/index.html)

## Development Guides

### Code Style and Formatting

The repository has enforced code style and format checks, any pull request can only be merged once all checks are passed.

Run checks locally:

```bash
# change npm to pnpm/yarn/... accordingly
npm run lint
```

Fix format issues:

```bash
npm run fix
```

**Note:** there might be issues that cannot be addressed using this command, please read the error log and look up from documentation. `ESLint` and `Prettier` are good extensions on VSCode that may help you **a lot**.

### Pull Requests

There is currently no restriction on commit messages, that being said, your commits on your branch will be squashed to one commit with your PR title as the commit message.

However, to make sure we have a linear, simple-to-track commit history, the repository has employed checks for PR titles.

PR titles have to follow [this convention](https://www.conventionalcommits.org/en/v1.0.0/#summary).
Also, the `main` branch is never a place you want to `push` directly, and it is thereby _protected_. If you try to push to the `main`, your push will prompt an error. Please checkout to your own branch in order to contribute.

A recommended way of naming your branch is:

```
<email-prefix-brief_description>
```

For example:

```
x6guo-updated_readme
```

### Some Useful `git` Commands

Checkout to a new branch based on the current branch:

```bash
git checkout -b <new_branch_name>
```

"Catch up" with the main branch (when the main branch has something new merged, but it is not yet in your working branch):

```bash
git fetch
git rebase origin/main
```

If you do not want to create another new commit while some changes needed to be made:

```bash
git commit --amend
```

This command can also include a `--no-edit` option to ignore the commit message (meaning you have no intention of modifying the commit message).
If you want to revert some commits:

```bash
# if you still want your changes
git reset --soft <target_commit>

# if you do not want your changes
git reset --hard <target_commit>
```

There are two recommended ways to specify `target_commit`:

- Relative
  - Definition: relative to the current commit, how many commits do you want to go back to?
  - Syntax: `HEAD~<number_of_commits>`
  - Example: `git reset --hard HEAD~1` (I want to go back one commit without preserving changes made in the current commit)
- Absolute
  - Definition: which commit in the commit history do you want to go to?
  - Syntax: `<some_hash_value>`
    Example: `git reset --soft 589b7a4` (I want to go back to commit with hash value `589b7a4` with all my changes preserved)
