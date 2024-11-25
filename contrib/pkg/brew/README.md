# Local development on Macs with Homebrew

While [GitHub Actions](https://docs.github.com/en/actions) is needed to exercise
the delivery pipeline's end-to-end workflow, faster feedback loops can be had by
installing a handful of local development tools.

## Pre-flight check

Please ensure that:

1. [Docker Desktop](https://docs.docker.com/desktop/setup/install/mac-install/) has been installed.
1. the Docker daemon has been started and is running.
1. [Homebrew has been installed](https://docs.brew.sh/Installation).
1. the `brew` CLI tool is installed to a location within your system's
   search `PATH` environment variable.
1. `brew` is executable from within a Terminal emulator session of your choosing.
