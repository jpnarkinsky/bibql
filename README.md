# BibQL

Pronounce it Bibe-Q-L, cause "BibleQL" is too hard to say and "Bib-Q-L" doesn't rhyme.

## What is this

This is a nascent project to create a GraphQL API for accessing content from religious texts.
It could also be used for other, similar projects.

## How do I run it

```
If you're using yarn (recommended):

yarn nodemon

If you're using npm:

npm run nodemon
```

## Okay, it's running, now what

Go to [http://localhost:4000](http://localhost:4000).  Try this query to get a list of 
books:

```
query {
  books
}
```
