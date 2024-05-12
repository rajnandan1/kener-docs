# Monitor Examples

Here are some exhaustive examples for monitors

## A Simple GET Monitor

```yaml
- name: Google Search
  tag: "google-search"
  api:
  	method: GET
  	url: https://www.google.com/webhp
```

## A Monitor with HTML description

Use tailwind classes to style your description

```yaml
- name: Google Search
  tag: "google-search"
  description: "Hello <b>world</b>"
  api:
  	method: GET
  	url: https://www.google.com/webhp
```

## A GET Monitor with image

google.png is in the static folder

```yaml
- name: Google Search
  tag: "google-search"
  image: "/google.png"
  api:
  	method: GET
  	url: https://www.google.com/webhp
```

## Get Monitor 15 Minute

```yaml
- name: Google Search
  description: Search the world's information, including webpages, images, videos and more.
  tag: "google-search"
  cron: "*/15 * * * *"
  api:
  	method: GET
  	url: https://www.google.com/webhp
```

## POST Monitor With Body

```yaml
- name: Google Search
  description: Google Search
  tag: "google-search-post"
  api:
  	method: POST
  	url: https://www.google.com/webhp
  	headers:
    	Content-Type: application/json
  	body: '{"order_amount":22222.1,"order_currency":"INR"}'
```

## Secrets in Header

You can set ENV variables in your machine and use them in your monitors. Example below has `GH_TOKEN` as an environment variable. It uses process.env.GH_TOKEN.
`export GH_TOKEN=some.token.for.github`

> **_NOTE:_** DO NOT forget the `$` sign in your monitor secret, otherwise it will not be picked up.

```yaml
- name: Github Issues
  description: Github Issues Fetch
  tag: "gh-search-issue"
  api:
  	method: GET
  	url: https://api.github.com/repos/rajnandan1/kener/issues
  	headers:
		Authorization: Bearer $GH_TOKEN
```

## Secrets in Body

Assuming `ORDER_ID` is present in env

```yaml
- name: Github Issues
  description: Github Issues Fetch
  tag: "gh-search-issue"
  api:
  	method: POST
  	url: https://api.github.com/repos/rajnandan1/kener/issues
  	headers:
		Content-Type: application/json
  	body: '{"order_amount":22222.1,"order_currency":"INR", "order_id": "$ORDER_ID"}'
```

## Eval Body

Read more about [eval](https://kener.ing/kener-docs/docs/monitors#eval)

```yaml
- name: Github Issues
  description: Github Issues Fetch
  tag: "gh-search-issue"
  api:
  	method: GET
  	url: https://api.github.com/repos/rajnandan1/kener/issues
  	eval: |
		(function(statusCode, responseTime, responseDataBase64){
		const resp = JSON.parse(atob(responseDataBase64));
		let status = 'DOWN'
		if(statusCode == 200) status = 'UP';
		if(Object.keys(resp).length == 0) status = 'DOWN';
		if(statusCode == 200 && responseTime > 2000) status = 'DEGRADED';
		return {
			status: status,
			latency: responseTime,
		}
		})
```

## With defaultStatus UP

Each minute it will set the status as UP

```yaml
- name: Earth
  description: Our Planent
  tag: "earth"
  defaultStatus: UP
```

## With Category

Add this monitor to the API category instead of the default home category

```yaml
- name: Earth
  description: Our Planent
  tag: "earth"
  category: API
```

## Ping Monitor

This will ping the hosts. It will be up if the ping is successful for all the hosts present in the list of ip4 and ip6.

```yaml
- name: Earth
  description: Our Planent
  tag: "earth"
  ping: 
    hostsV4: 
      - www.frogment.com
      - 52.84.205.24
    hostsV6:
      - ipv6.google.com
```

If both ping and api monitors are present then API data will overwrite ping data

## Custom Thresholds

Add this monitor to the API category instead of the default home category. The below monitor will show degraded if 3 or more degraded status in a day and down if 2 or more down status in a day. It will also include degraded in downtime calculation.

```yaml
- name: Earth
  description: Our blue planet
  tag: "earth"
  defaultStatus: "UP"
  dayDegradedMinimumCount: 3
  dayDownMinimumCount: 2
  includeDegradedInDowntime: true
```
