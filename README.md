## Using Submodules
When you first clone a repo with submodules, it doesn't 
download the submodule content automatically. You need to 
initialize the config using `git submodule init` then call 
`git submodule update`.

To update the submodules, use `git submodule update --remote`.

See https://git-scm.com/book/en/v2/Git-Tools-Submodules
