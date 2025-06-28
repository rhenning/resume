# CI/CD

```mermaid
flowchart TD
  github.com:rhenning/resume --branch--> main --branch--> dev

  main --branch---> feature/*
  topic/* <---merge-- main
  topic/* <---merge-- dev

  actions-lint --> yamllint
  actions:lint --> jsonlint
  actions:lint --> markdownlint
  github-actions:lint --> misspell
  github-actions:lint --> biome

  github-actions:build --> pandoc
  pandoc --> latex --> pdf
  pandoc ---> html
  pandoc ---> docx
  pandoc ---> gfm

```
