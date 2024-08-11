# Customize Site

There is a folder called `/config`. Inside which there is a `site.yaml` file. You can modify this file to have your own branding.

```yaml
title: "Kener"
home: "/"
logo: "/logo.svg"
github:
    owner: "rajnandan1"
    repo: "kener"
    incidentSince: 72
metaTags:
    description: "Your description"
    keywords: "keyword1, keyword2"
nav:
    - name: "Documentation"
      url: "/docs"
hero:
    title: Kener is a Open-Source Status Page System
    subtitle: Let your users know what's going on.
```

## title

This translates to

```html
<title>Your Title</title>
```

## theme

It can be set using theme in site.yaml

### Dark Theme

```yaml
theme: dark
```

### Light theme

```yaml
theme: light
```

Can be `light` or `dark`. Defaults to `light`

## home

Location when someone clicks on the your brand in the top nav bar

```yaml
...
home: "https://www.example.com
...
```

## logo

URL of the logo that will be shown in the nav bar. You can also add your logo in the `static` folder

```yaml
...
logo: "https://www.example.com/logo.png
...
```

## favicon

It can be set by modifying the `<head>` tag in `src/app.html` file.
Example add a png called `logo.png` file in `static/` and then

```html
...
<link rel="icon" href="/logo.png" />
...
```

## github

For incident kener uses github comments. Create an empty [github](https://github.com) repo and add them to `site.yaml`

```yaml
github:
    owner: "username"
    repo: "repository"
    incidentSince: 72
```

`incidentSince` is in hours. It means if an issue is created before 72 hours then kener would not honor it. Default is 24

## metaTags

Meta tags are nothing but html `<meta>`. You can use them for SEO purposes

```yaml
metaTags:
    description: "Your description"
    keywords: "keyword1, keyword2"
    og:image: "https://example.com/og.png"
```

will become

```html
<head>
    <meta name="description" content="Your description" />
    <meta name="keywords" content="keyword1, keyword2" />
    <meta name="og:image" content="https://example.com/og.png" />
</head>
```

## siteURL

You can set this to generate SiteMaps

```yaml
siteURL: https://kener.ing
```

Sitemaps urls will be `https://kener.ing/sitemap.xml`

## hero

Use hero to add a banner to your kener page

```yaml
hero:
    title: Kener is a Open-Source Status Page System
    subtitle: Let your users know what's going on.
```

## nav

You can add more links to your navbar.

```yaml
nav:
    - name: "Home"
      url: "/home"
```

## categories

You can define categories for your monitors. Each category can have a description. The monitors can be grouped by categories.
`name=home` will be shown in the home page. Categories are shown in the order they are defined in the yaml file. A dropdown will appear in the nav bar to select the category.

```yaml
categories:
    - name: API
      description: "Kener provides a simple API for you to use to update your status page."
    - name: home
      description: "loroem ipsum lorem ipsum"
```

## Base Path

To set the base path of your kener instance you can set the `KENER_BASE_PATH` environment variable. This will be used to prefix all the routes in the application. The env variable should not have a trailing slash and should start with `/`

It should be present during both build and run time. If you are using docker you will have to do your own build and set this env variable during `docker build`

Please also adjust files in static folder by prefixing them with the base path. For example if you set `KENER_BASE_PATH=/status` then the logo should be `/status/logo.png`

## Custom Scripts

You can include any script in the `app.html` file like google analytics etc

## Custom CSS

You can add custom css in `static/kener.css`
