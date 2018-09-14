---
title: The Modern SaaS Stack and the Unexploited Amount of Data
date: 2015-07-28
description:
    The SaaS landscape kept evolving fast. New communications channel, new advertising platforms, new ways to talk to your customers, different ways to get new users. Until the moment where each company department adopted its own stack of SaaS products. With such products fragmentations comes data-fragmentation that leads to a massive amount of unexploited data.
---

# The Modern SaaS Stack and the Unexploited Amount of Data


[Source](https://medium.com/plainflow/the-modern-saas-stack-and-the-unexploited-amount-of-data-6bf2e982b596 "Permalink to The Modern SaaS Stack and the Unexploited Amount of Data")

# The Modern SaaS Stack and the Unexploited Amount of Data

([Hacker News thread][1]_)

SaaS products represent the building blocks of a huge part of today's B2B technologies. The ability to understand the impact of new consumer-facing technologies it's more important than ever. This brings a lot of new challenges also for people who are not directly involved in software. This post is a walkthrough in how startups use Modern SaaS Stack (Marketing/Support/Sales) along with their journeys from day-0. How they adjust their product/marketing strategies based on new technologies. How they measure (or don't measure) the impact of those technologies on their customers' experiences.

## On-Premise Software Era

As stated in the [Evolution of The SaaS Stack][5] back when software was only "on-premise" only huge players was dominating the market landscape. For startups that were getting started, there weren't so many available options. Was more a take it or leave it.

In a few years, the market saw an important shift and the SaaS model started to make sense for IT business. This reflected into a huge proliferation of SaaS startups vertical on specific needs. Those startups with fewer resources were able to build better products and deliver better customer experiences. This is where startups started to adopt other startups' products.

The market landscape kept evolving fast: new communications channel, new advertising platforms, new ways to talk to your customers, different ways to get new users. Until the moment where each company department adopted its own stack of SaaS products. With certain exceptions, this is now the standard.

![][6]

This where products like Segment.com come up to the stage and SaaS hubs started to grow. The main purpose was to bridge the distances between products and external pieces of software with zero-effort by developers and engineers.

![][7]

Let's recap: first, you choose the SaaS products that better suits your needs, second you connect the best products each other, third you're able to offer the best customer experience. So far, so good!

Each SaaS product in your stack that interacts at any level with your customers is producing data. Pure Email Marketing Software, mobile and browser notifications software, Ads platform, customer support and CRM software, etc. Every time your customers interact with one of these channels — powered by a specific SaaS in your stack — you're generating data. How big is that data-hole? It depends on you how many touch-points your customers have when interact with your brand.

![][8]

With such products fragmentations comes data-fragmentation that leads to a massive amount of unexploited data.

To frame and better understand these ideas in a real world use case we'll do a quick thought experiment. Let's suppose you're the founder of a SaaS product. Next month you will finish your public beta and you already have a few customers.

## SaaS Stack at 1st stage — On Product Launch

You only have one product launch. You better be prepared for that. What do you use for support on day 0? No jokes, email is a good idea you only need an alias that sounds like support@$name.com. What about email newsletter updates? MailChimp is probably the best thing you can get a very affordable price. Buffer also sounds a pretty option for $10/mo. For marketing, support and Sales you won't need anything as your main focus is the product.

![][9]

How do you collect data? At this stage, your data collection infrastructure might be very rudimental. An [OLTP][10] system for transactions, [OLAP][11] for analytics processing and a different tool for clickstream data, something like Google Analytics (at its full potential with GTM) or Mixpanel.

### SaaS Stack at 2nd stage — 6 Months after Launch

It's been 6 months now and you did great. You've started as a Single Page Application (SAP), now you're also releasing the first version of a mobile app. You now have 10 new emails/week from customers: you need a more structured tool for support like GrooveHQ. Same for sales, it's time to get a basic CRM (Zoho CRM might fit your needs).

You have been using MailChimp for sending newsletter update emails. Now you will probably need to add something to send transactional email. Postmark or Mandrill are two available alternatives. You will also probably start doing some rudimental experiment on Adwords and Facebook Ads. Plus, you're sending mobile notifications using Firebase.

This is what your Stack might look like in 6 months after launch.

![][12]

Now let's see the data side of the coin! Your data infrastructure is still composed of OLAP, OLTP, and clickstream data (Google Analytics/Mixpanel). You're growing at a good rate and you need start answer questions at a deeper level to take better decisions. After all, you're data-driven right?

What questions you want to answer:

1. _How many pre-sales tickets do you get on AVG? And how many post-sales?_
2. _You know what channel works best for user acquisition but what after that. Do users that you acquired via Adwords (or Facebook Ads) have different behavior from those you've acquired organically?_
3. _Among those who have installed the app, do they prefer being notified via email or via push notifications?_
4. _What users do before they churn? Do they keep the same level of engagement on notifications?_

The reality is much more complex that you think. The following is a common path that your user might have on your product:

![][13]

+ User Interaction #1: Users signs-up to your product  
+ User Interaction #2, #3: He views a bunch of pages  
+ User Interaction #4: He creates a pre-sales Zendesk ticket and leave the site  
+ User Interaction #5: He clicks on an email he receives  
+ User Interaction #6: He visits the site  
+ User Interaction #7: He makes a purchase

Yes, you think you have a perfect connected SaaS stack, but how deep is that connection? And how can you get the answers to those questions? A widely adopted solution: dump data from each integration (5 in this case) in your stack: GrooveHQ, Adwords, Facebook Ads, Firebase, Mailchimp and mashup with your OLAP, OLTP, and clickstream data with some python/R scripts to gains insights.

Yes, you can still manage it but it's getting harder.

## SaaS Stack at 3rd stage — 1 Year after Launch

Things are going well, your company is scaling and so your team's operations. You've dropped MailChimp and switched to a full Marketing Automation platform: HubSpot. Now you have 30 new tickets/day (from customers and not) coming for different reasons: pre-sales questions, post-sales questions, feature requests, bug-fix etc. It's time for you to get Zendesk, Typeform (or SurveyMonkey) for your survey.

Your marketing team started to send stickers to customers (via StickerMule) and added a monitoring software (Mention). You added Adroll as a retargeting platform to your Stack and Urban Airship for browser notifications.

![][14]

Back to the data-side: your data infrastructure is still composed by OLAP, OLTP, and clickstream data (Google Analytics/Mixpanel).

You are probably now storing everything (OLAP and OLTP data plus clickstream data) on BI columnar database like Amazon RedShift.

But when it comes down to pull insights from your SaaS integrations you have still have to have the old checklist:

1. Pull the data out of each single SaaS
2. Mash up with OLTP + OLAP data
3. Script to see patterns
4. Returns results to stakeholders who have to take actions based on those data
5. Create charts on some BI tools

And here's the big big picture:

![][15]

This is where the discrepancy between the volume of data collected and the accuracy of the decisions becomes big. It's really easy to say you're data-driven, it's really hard being so.

![][16]

[1]: https://news.ycombinator.com/item?id=14290501
[2]: https://www.plainflow.com/blog/modern-saas-stack-unexploited-data/
[3]: https://www.plainflow.com/blog/ai-marketing-analytics/
[4]: https://medium.com/@clemnt
[5]: https://medium.com/point-nine-news/the-evolution-of-the-saas-stack-and-what-could-come-next-6a8f58385e57
[6]: https://cdn-images-1.medium.com/max/1600/0*dp0pX4vWvSixZzMc.png
[7]: https://cdn-images-1.medium.com/max/1600/0*YPjP9wwzfmSaqMaZ.png
[8]: https://cdn-images-1.medium.com/max/1200/0*DtoTA34aItOmR6_w.png
[9]: https://cdn-images-1.medium.com/max/1600/0*osvPjP2uhfr14Esb.png
[10]: https://en.wikipedia.org/wiki/Online_transaction_processing
[11]: https://en.wikipedia.org/wiki/Online_analytical_processing
[12]: https://cdn-images-1.medium.com/max/1600/0*X8wligSqsH8Tgb9w.png
[13]: https://cdn-images-1.medium.com/max/1600/0*9nw3pZSMbeqhGeZl.png
[14]: https://cdn-images-1.medium.com/max/1600/0*YI0tY2W7bTzv1Cn5.png
[15]: https://cdn-images-1.medium.com/max/1600/1*dkfUTQ_SikMqkcKxfmGBmw.png
[16]: https://cdn-images-1.medium.com/max/1600/0*h7YJm-lyH8RCkXXe.png

  
