# nyco-rss-2-json

An AWS Lambda function that parses RSS into JSON for self-hosting.

## To Deploy:

Clone the latest and create a `zip` folder to be uploaded to AWS Lambda.

    zip -r deploy.zip .

Or, [download an archive of the latest release](https://github.com/CityOfNewYork/nyco-rss-2-json/releases) and extract the `deploy.zip` from the archive.

Create a new AWS Lambda function and upload `deploy.zip` file via the function code section in AWS Lambda service UI.

## Parameters

When making a call to the endpoint make sure to pass the RSS feed to the parameter `rssFeed`.

#### Example

    rssFeed=https://example.com/feed

---

![The Mayor's Office for Economic Opportunity](NYCMOEO_SecondaryBlue256px.png)

[The Mayor's Office for Economic Opportunity](http://nyc.gov/opportunity) (NYC Opportunity) is committed to sharing open source software that we use in our products. Feel free to ask questions and share feedback. **Interested in contributing?** See our open positions on [buildwithnyc.github.io](http://buildwithnyc.github.io/). Follow our team on [Github](https://github.com/orgs/CityOfNewYork/teams/nycopportunity) (if you are part of the [@cityofnewyork](https://github.com/CityOfNewYork/) organization) or [browse our work on Github](https://github.com/search?q=nycopportunity).
