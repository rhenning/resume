# `rhenning/resume`

<!-- markdownlint-disable MD033 -->

[<img src="https://flat.badgen.net/github/release/rhenning/resume/stable?cache=780&scale=2&icon=git&label=latest"
  alt="get the latest version" />][latest-release]
&nbsp;
[<img src="https://flat.badgen.net/github/checks/rhenning/resume?cache=780&scale=2&icon=github&label=pipeline"
      alt="pipeline build and release status" />][actions-main]
&nbsp;

<!-- markdownlint-restore -->

> [!TIP]
> Here for the latest copy and want to skip the pleasantries? Just click on the _latest_ badge above and grab the PDF!

## FAQ

### Who are you?

_**Hi.**_ :wave:

My name is Richard Henning—"Rich" to most—a technologist, software engineer,
and creative hailing from Philadelphia, _City of Brotherly Love_ and birthplace of the
United States, where I live with my partner, kids, and a lovable mutt.

I'm a tech industry veteran with more than twenty years of experience, helping
companies design, implement, provision, sustainably operate, and continuously
deliver change to always-on web systems, cloud, and on-prem infrastructure at
scale.

Some of the amazing products and teams I've had the pleasure of working with:

* [**Max**][max.com] @ _Warner Bros. Discovery_
* [**HBO Max**][hbomax-wiki] @ _WarnerMedia_
* [**Xfinity Stream**][xfinity.com/get-stream] and the **X1 Video Platform** @ _Comcast/Xfinity_
* the [**Workarea Commerce Platform**][workarea] @ _Weblinc Commerce_
* [**NeatCloud**][neat.com] @ _The Neat Company_
* [**Jux**][jux-tnw], **LimeDomains**, **LimeBits** & **LimeExchange** @ _The Lime Group_ —
  immersive visual blogging, website design, domain registry, hosting,
  and marketplace platforms for freelancers.
* Managed Internet services @ _Fastnet_ & _NetAxs_ — popular ISP/MSPs of
  the Greater Philadelphia area, specializing in business and residential
  Internet, web server hosting, colocation, carrier & business networking,
  email, DNS, newsgroups, observability, disaster recovery, managed data
  centers, and professional consulting services.

### Where can I see your résumé?

Please visit this project's **[latest release assets][latest-release]** where you
can download documents suitable for viewing. I recommend PDF for humans,
but other formats are available for convenience. PDF, Markdown, HTML, and
DOCX (Microsoft Office Open XML) are available at the time of writing.

### What's all this "Releases and Assets" jargon?

My résumé is stored and maintained _as code_ in this GitHub repository, leveraging
development, test, build, and delivery practices common to many modern software
engineering projects.

The document's text and layout instructions for the various output formats are
maintained as source code, subject to revision control. Modifications are made
in topic branches—enforced by security settings on the repository—where an
associated [GitHub Actions pipeline][pipeline] picks up changes, subjects them to a bit of
static analysis, and attempts to convert the proposed copy and layout to the
desired output formats.

_If all goes well,_ the rendered documents are archived for review, and will be
published for public download upon merge of a topic branch into the `main`
branch.

_If not,_ any failed steps are flagged as such, and suggestions may be made to
resolve failures as comments on associated pull requests. Topic branches are
blocked from being merged until such issues have been resolved by follow-up
commits.

I've glossed over a good bit of fine detail above, but in spirit of that old adage
_A Picture is Worth a Thousand Words_, some are included below.

#### Branch/Merge Strategy

```mermaid
---
config:
  theme: dark
  themeVariables:
    tagLabelFontSize: "1em"
    commitLabelFontSize: "16px"
    commitLabelColor: "#ffffff"
    commitLabelBackground: "#000000"
  gitGraph:
    showCommitLabel: false
    mainBranchName: main
    parallelCommits: false
---
gitGraph TB:
  commit tag: "r1"

  branch dev

  checkout main
  commit tag: "r2"

  branch feature/A
  commit

  checkout main
  commit tag: "r3"

  branch feature/B
  commit

  checkout feature/A
  commit

  checkout feature/B
  commit

  checkout main
  merge feature/B tag: "r4" type: HIGHLIGHT

  checkout feature/A
  commit
  commit
  merge main

  checkout main

  checkout dev

  branch feature/C
  commit

  checkout feature/C
  commit

  checkout dev
  merge feature/C tag: "draft1"

  branch feature/D
  commit

  checkout main
  merge feature/A tag: "r5" type: HIGHLIGHT

  checkout dev
  merge feature/D tag: "draft2"

  checkout dev
  merge main tag: "draft3"

  checkout main
  merge dev tag: "r6" type: HIGHLIGHT
```

Of note above:

* By and large, I'm practicing _trunk-based development_. This won't accommodate the
  most complex of release workflows, but I wasn't looking to overcomplicate things.
* Merging a pull request (or any branch, for that matter) into `main` automatically
  publishes the build artifacts as a release, available for download by the public.
* Branches named `dev` or matching the pattern `v[0-9]+*` are handled specially.
  * Both can be considered _perennial_ (_i.e._ long-lived, recurring) _children of `main`_.
  * Commits to both trigger _non-public draft pre-releases_ by default, which can
    only be viewed by project participants.
  * `dev` is an _ad hoc_ branch suitable for such purposes.
  * `v[0-9]+*` (_i.e._ the letter `v` and one or more digits, optionally followed by
    additional text) are reserved for major version _release trains_, should I wish
    to perform some major refactor in the future.
* Topic branches are named `feature/*` above, but this is simply convention.
* Commits triggering pre-releases are depicted as a _round node with a **`draft*` tag**_.
* Commits triggering public releases are depicted as a _square node with an **`r*` tag**_.

A [legend with the various node shapes labeled for reference][git-legend] is also available.

#### CI/CD Workflow

```mermaid
---
config:
  theme: dark
  look: handDrawn
---
flowchart
  subgraph gh["GitHub: rhenning/resume"]
    featureBranches["`feature/*`"]
    devBranch["`dev`"]
    mainBranch["`main`"]
  end

  subgraph gha[GitHub Actions]
    lintWorkflow@{ shape: process, label: "lint" }
    buildWorkflow@{ shape: process, label: "build" }
    preReleaseWorkflow@{ shape: process, label: "pre-release\n(draft)" }
    releaseWorkflow@{ shape: process, label: "release\n(public)" }
  end

  featureBranches -.-o featurePush@{ shape: event, label: "on: push" } -.-> lintWorkflow
  featurePush -.-> buildWorkflow
  devBranch -.-o devPush@{ shape: event, label: "on: push\nafter: build.success" } -.-> preReleaseWorkflow
  mainBranch -.-o mainPush@{ shape: event, label: "on: push\nafter: build.success" } -.-> releaseWorkflow

  lintWorkflow --- lintFork@{ shape: fork }
  lintFork --> markdownlint
  lintFork --> jsonlint
  lintFork --> yamllint
  lintFork --> spelling

  buildWorkflow --- buildFork@{ shape: fork }
  buildFork --> pandoc@{ shape: process } --> pandocFork@{ shape: fork }
  buildFork -----> buildmeta@{ shape: doc, label: "BUILDMETA.json" }

  pandocFork --> latex@{ shape: subprocess, label: "LaTeX" } --> pdf@{ shape: doc, label: PDF }
  pandocFork ---> markdown@{ shape: doc, label: "GitHub-flavored\nMarkdown" }
  pandocFork ---> html@{ shape: doc, label: HTML }
  pandocFork ---> docx@{ shape: doc, label: DOCX }
```

Some items are omitted from the workflow diagram for clarity's sake. These include:

* Events updating a Pull Request's Status Checks, based on results of the various
  linters, are not shown.
* The process of collecting and uploading artifacts arising as a result of the `build`
  workflow is not shown.
* I've left out step-by-step details of the pre-release and release processes.

### How did you become involved in the tech industry?

I've been fascinated both by making things and taking them apart, in order to
understand what makes them tick, for about as long as I can remember, much to
the dismay of my patient and loving parents at times.

Perhaps that was Dad's motivation for giving the gift of a used Commodore all
along—I might stop taking apart his turntable and guitar pedals.

I got hooked, and spent my formative years getting to know others in the local
BBS scene, exploring the use of MOD trackers and early MIDI synthesizers—some
built by _Ensoniq_, a firm founded by former Commodore engineers—as music
production tools, learning basic microelectronics, and finding my way around the
early Internet with a little help from my friends.

When it was time to choose a career path, it seemed only natural to continue in a
related direction. I began exploring Linux as a primary OS toward the end of high
school and throughout early college, inspired by a friend and mentor who showed
me the ropes of open source and how Linux could breathe new life into "obsolete"
hardware repurposed for server and embedded applications.

Throughout my first "real" technology job after college, I continued to explore the
application of Linux, Unix, and free software to computing problems both at home
and at work—despite it being a "_Windows_ shop"—with zero budget, but keen to
limit the toil and manual process associated with my daily work.

When _Fastnet_—a Philadelphia-area ISP and hosting provider I very much respected—
was seeking out Linux sysadmins, I jumped at the opportunity, had an interview,
and was thrilled to receive an offer letter, which I gratefully accepted.

I learned _so much_ during my time at Fastnet, remaining there for about eight years—
the longest stint of my career—and surviving the dot-com boom, bust, a merger
with _NetAxs_—another well-regarded Philly-area ISP—and two follow-up acquisitions.
It was there I learned to apply the fundamentals of what would later become known
as _DevOps_ and _Pair Programming_, sharing in these prototype cultures before those
terms were in vogue. It wasn't out of deference to any sort of ideology; software
automation and version control enabled us to reliably build, provision, operate and
scale the infrastructure and services needed to support a rapidly-growing business,
with slim budgets and a small staff.

That experience left quite an impression, for which I owe a great debt of gratitude
to my mentors and colleagues, several of whom have become lifelong friends.

Since that time I've been fortunate to work for a number of forward-looking tech
organizations with amazing teams spanning varied domains, including Media and
Entertainment, Public and Private Cloud, E-commerce, Internet and Data Center
Services, Telecommunications, Web and Server Hosting, and Document Intelligence,
Organization, Generation, and Archival.

## Gratitude and Respect

This source code repository, the automation within, and generated artifacts depend
upon software components that have been built, refined, and maintained by members
of the [_Free and Open-Source Software (FOSS)_][FOSS] community from around the globe, many
of whom are _volunteers_ who have donated their labor and expertise to the public
domain of their own free will.

Open-source software stewardship is a necessary, yet often thankless, labor of love,
without which many of the technology products and companies we love would not
exist as they do today.

**Thank You to all open-source contributors for your hard work and generosity.**

[latest-release]: https://github.com/rhenning/resume/releases/latest
[actions-main]: https://github.com/rhenning/resume/actions?query=branch%3Amain
[pipeline]: https://github.com/rhenning/resume/actions
[git-legend]: doc/gitgraph-legend.md
[max.com]: https://max.com
[hbomax-wiki]: https://en.wikipedia.org/wiki/HBO_Max
[xfinity.com/get-stream]: https://www.xfinity.com/get-stream
[workarea]: https://www.workarea.com/pages/platform-tour.html
[neat.com]: https://neat.com
[jux-tnw]: https://thenextweb.com/news/jux-learns-from-the-rest-to-create-the-most-beautiful-blog-platform-yet
[FOSS]: https://en.wikipedia.org/wiki/Free_and_open-source_software
