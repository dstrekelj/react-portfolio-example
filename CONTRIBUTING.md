# Contributing

## Style guides

### Git commit messages

Commits must adhere to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standards.

Use the following template to get started:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Summary:

-   Use **fix** type if the commit correlates to a PATCH in semantic versioning (e.g. bugfix).
-   Use **feat** type if the commit correlates to a MINOR in semantic versioning (e.g. new feature).
-   Append **!** to the type if the commit correlates to a MAJOR in semantic versioning (e.g. breaking API change).
-   Other types are allowed, check the commit history for ideas.
-   Use the present tense when writing the description and body.
-   Use the imperative mood when writing the description and body.
-   Limit the description to 50 characters or less if possible.
-   Wrap the body at 72 characters.
-   When committing changes that address reported issues, reference those issues in the body.
-   Capitalisation is not important, but try and keep it consistent.

Example:

```
feat!: add fuzzy search

Replace old algorithm with fuzzy search. Add new API methods. Remove
references to old API.

See #123, #125, #130
```

### Changelog

Changelog changes must adhere to [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) standards.

For more information see the [changelog](./CHANGELOG.md).

### JavaScript

JavaScript code style is maintained by EditorConfig, Prettier, and ESLint.

For more information see [.editorconfig](./.editorconfig), [.prettierrc](./.prettierrc), and [.eslintrc](./.eslintrc).
