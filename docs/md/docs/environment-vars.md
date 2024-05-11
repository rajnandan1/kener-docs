# Environment Variables

Kener needs some environment variables to be set to run properly. Here are the list of environment variables that you need to set.

## PUBLIC_KENER_FOLDER (Required)

```shell
export PUBLIC_KENER_FOLDER=/path/to/a/directory
```

## PORT

Defaults to 3000 if not specified

```shell
export PORT=4242
```

## GH_TOKEN

A github token to read issues and create labels

```shell
export GH_TOKEN=your-github-token
```

## API_TOKEN

To talk to kener apis you will need to set up a token. It uses Bearer Authorization

```shell
export API_TOKEN=sometoken
```

## API_IP

While using API you can set this variable to accept request from a specific IP

```shell
export API_IP=127.0.0.1
```

## MONITOR_YAML_PATH

```shell
export MONITOR_YAML_PATH=/your/path/monitors.yaml
```

## SITE_YAML_PATH

```shell
export SITE_YAML_PATH=/your/path/site.yaml
```

If you do not specify MONITOR_YAML_PATH or SITE_YAML_PATH it will take the values from /config/site.yaml and /config/monitor.yaml respectively

## KENER_BASE_PATH

By default kener runs on `/` but you can change it to `/status` or any other path.

-   Important: The base path should not have a trailing slash and should start with `/`
-   Important: This env variable should be present during both build and run time
-   If you are using docker you will have to do your own build and set this env variable during `docker build`

```shell
export KENER_BASE_PATH=/status
```

