# Decision to Use Commitlint for Enforcing Conventional Commit Messages

## Context

As our development team grew and our project became more complex, we recognized the need for a standardized and consistent approach to writing commit messages. Clear and descriptive commit messages improve codebase understanding, facilitate collaboration, and streamline the release process. We sought a tool that could enforce a consistent commit message format across the team.

## Decision

After evaluating different options, we decided to use Commitlint to enforce the Conventional Commit message format for our project's version control system.

## Rationale

The following factors influenced our decision to choose Commitlint:

1. **Consistent Commit Messages**: Commitlint enforces a standardized commit message format, such as the Conventional Commit format. This format ensures that commit messages are consistent, descriptive, and contain relevant information about the changes made. This consistency helps with tracking and understanding the project's history.

2. **Semantic Versioning Support**: The Conventional Commit format supported by Commitlint aligns well with semantic versioning principles. By following this format, we can automatically extract versioning information from commit messages, making it easier to generate release notes, determine version increments, and maintain a reliable changelog.

3. **Customizable Rules**: Commitlint allows us to customize the commit message rules according to our project's specific requirements. We can define additional rules, ignore certain types of commits, or configure specific commit message patterns to adapt to our team's workflow.

4. **Integration with CI/CD Pipelines**: Commitlint can be easily integrated into our continuous integration and deployment (CI/CD) pipelines. We can incorporate it as a pre-commit hook or as part of our automated testing and release processes. This integration ensures that commit message standards are validated before code is merged, reducing the risk of inconsistent or incomplete commit messages.

## Alternatives

We considered manual code reviews and conventions as alternatives to using Commitlint. However, relying solely on manual processes would require more effort and may lead to inconsistencies and oversight. Commitlint automates the validation process and provides immediate feedback, ensuring that commit message standards are upheld consistently.

## Implications

The decision to use Commitlint for enforcing conventional commit messages has the following implications:

- Developers will need to familiarize themselves with the Conventional Commit message format and the specific commit message rules established for the project.
- Commitlint will be integrated into our development workflow, CI/CD pipelines, and version control system to enforce commit message standards.
- Code reviews will include an additional review of commit messages to ensure adherence to the Conventional Commit format.

## Related ADRs

None

## Status

Accepted

## Decision Outcome

Commitlint has been integrated into our development workflow and CI/CD pipelines. Developers are required to follow the Conventional Commit message format when making commits. Commitlint validates commit messages and provides immediate feedback if the format is not followed. This ensures that commit messages are consistent, descriptive, and suitable for generating release notes and maintaining a reliable changelog.

## References

- Commitlint: [https://commitlint.js.org/](https://commitlint.js.org/)
- Conventional Commits: [https://www.conventionalcommits.org/](https://www.conventionalcommits.org/)
