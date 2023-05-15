# Decision to Disable Prettier on Markdown

## Context

As part of our project, we have been using Prettier, an opinionated code formatter, to ensure consistent code styling across different programming languages. However, we noticed that applying Prettier's formatting rules to Markdown files was causing unexpected and undesirable results, leading to inconsistencies in the rendered output.

## Decision

After careful consideration, we decided to disable Prettier for Markdown files and use a different approach for maintaining consistent formatting within our Markdown content.

## Rationale

The following factors influenced our decision to disable Prettier for Markdown:

1. **Markdown-Specific Formatting**: Markdown has its own set of formatting rules and conventions that are different from traditional code styling. Prettier's opinionated rules for code formatting may conflict with or alter the intended formatting of Markdown content, leading to inconsistencies or rendering issues in the final output.

2. **Markdown Complexity**: Markdown files often contain various elements like headings, lists, tables, and code blocks, which require specific indentation and formatting to maintain readability and rendering accuracy. Prettier's automatic formatting may not always handle these complex Markdown structures correctly, potentially introducing errors or undesired transformations.

3. **Manual Control**: Disabling Prettier for Markdown allows us to have more manual control over the formatting of our Markdown content. It enables us to apply appropriate formatting based on the specific needs of the content, ensuring better readability and a more accurate representation of the intended structure and design.

## Alternatives

We considered modifying Prettier configuration to customize its behavior for Markdown files. However, due to the complexity and diversity of Markdown content, it would be challenging to create a universally applicable configuration that meets all requirements without sacrificing rendering accuracy or introducing unintended side effects.

## Implications

The decision to disable Prettier for Markdown files has the following implications:

- Developers will be responsible for manually formatting Markdown files according to the established Markdown conventions and style guidelines.
- Team members should be familiar with Markdown formatting rules to ensure consistent and accurate rendering of the content.
- Code reviews and documentation should include guidelines and best practices for Markdown formatting to maintain consistency across the project.

## Related ADRs

None

## Status

Accepted

## Decision Outcome

We have updated our configuration to exclude Markdown files from Prettier's formatting process. Developers are now responsible for manually formatting Markdown content, following the established Markdown conventions and guidelines. Code reviews and documentation will include specific instructions for Markdown formatting to maintain consistency and improve rendering accuracy.

## References

- Prettier: [https://prettier.io/](https://prettier.io/)
