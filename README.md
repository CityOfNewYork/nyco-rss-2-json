# nyco-rss-2-json

A JavaScript function that parses RSS into JSON.

## To Deploy:
Create a `zip` folder to be uploaded to AWS Lambda.
```
zip -r deploy.zip .
```
Upload zip file via the function code section in AWS Lambda UI.

## Parameters

When making a call to the endpoint make sure to pass the RSS feed to the parameter `rssFeed`.

#### Example
`rssFeed=https://example.com/feed`

## About NYCO
NYC Opportunity is the New York City Mayor's Office for Economic Opportunity. We are committed to sharing open source software that we use in our products. Feel free to ask questions and share feedback. Follow @nycopportunity on Github, Twitter, Facebook, and Instagram.
