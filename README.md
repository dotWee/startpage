# startpage

_a very ugly, distrating and irritating startpage for your web surfer. just bad enough to make you surf the interweb as soon ass possible._

![deadly_screenshot.png](./_art/deadly_screenshot.png)

## setup

1. install a full [ruby development environment](https://jekyllrb.com/docs/installation/)
2. install [jekyll](https://jekyllrb.com/) and [bundler](https://jekyllrb.com/docs/ruby-101/#bundler) [gems](https://jekyllrb.com/docs/ruby-101/#gems):

    ```bash
    $ gem install jekyll bundler
    ```

3. clone git repository and change into repo directory:

    ```bash
    $ git clone https://github.com/dotWee/startpage.git startpage && cd startpage
    ```

## usage

### run site locally using [jekyll](https://jekyllrb.com/)

1. install required dependencies:

    ```bash
    $ bundle install
    ```

2. build the site and make it available on a local server:

    ```bash
    $ bundle exec jekyll serve
    ```

3. now browse to [localhost:4000](http://localhost:4000)

### run site using [docker](https://www.docker.com/)

```bash
$ docker run --rm \
    -p 4000:4000 \
    --volume="$PWD:/srv/jekyll" \
    -it jekyll/jekyll:latest \
    jekyll serve --force_polling --livereload
```

### update [ruby gems](https://rubygems.org/) dependencies

```bash
$ bundle update
```

### cleanup binaries

```bash
$ bundle exec jekyll clean
```

## customize

set your own categories with links by changing the [categories.json](./_data/categories.json) inside the [__data_](./_data)-folder.

just make sure it follows this scheme:

```json
[
    {
        "name": "social",
        "links": [
            ["facebook", "https://www.facebook.com"],
            ["twitter", "https://www.twitter"],
            ["xing", "https://www.xing.com"],
            ["linkedin", "https://www.linkedin.com"]
        ]
    },
    {
        "name": "docs",
        "links": [
            ["swift", "http://swift.org"],
            ["stackoverflow", "https://stackoverflow.com"],
            ["devdocs", "https://devdocs.io"],
            ["stackexchange", "https://stackexchange.com"]
        ]
    }
]
```
