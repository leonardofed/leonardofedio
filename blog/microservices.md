---
title: Microservices as a Future Approach to Marketing Tech
date: 2017-10-28
description:
    Kielbasa tenderloin boudin bacon cupim, pastrami strip steak rump picanha meatloaf venison meatball ribeye. Burgdoggen t-bone jowl venison biltong andouille. Turducken shankle tongue landjaeger drumstick, pancetta porchetta. Brisket ham turkey andouille picanha. Pancetta chuck shank ham.
---

# Microservices as a Future Approach to Marketing Tech

By now, you’ve probably already seen this image from Scott Brinker.
![brinker](https://cdn-images-1.medium.com/max/1600/1*xbxS2yKzyOPbtoOlr2ytGQ.png)

It gives you a realistic idea of how rapidly the marketing and sales technology landscape has evolved over the last 5 years and how tough the competition has become.

> Every product that is able to affect the customer’s experience is — in some way competing.

However, as marketing technology’s power and ubiquity have grown, its strategic importance has not diminished. Modern marketing teams — more than ever — find their sweet spot on the boundaries between the technology domain populated by algorithms, systems, data, and the human domain populated by creativity, psychology, and brand.

Lately, I’ve been wondering how much of this marketing technology wave are customer ops teams really exploiting? In what proportion do they really use this new abundance of SaaS? And what is the speed of adoption of these new technologies?

While growth in marketing technology follows an exponential curve, organizational changes happen on a logarithmic curve.

This essay is a deep dive into the causes that hinder most companies from fully exploiting today’s technology abundance and the approaches that might solve some of today’s problems.

One of the best examples that I can recall comes from the software world and its evolution over the past several decades.

For years, engineers designed software applications using a monolithic approach. Software was designed to be self-contained. Components were deeply interconnected and interdependent. In order to run and compile the code, each component and its associated components must be present.

Developers used to coordinate their work on a shared pipeline.

![pipeline](https://cdn-images-1.medium.com/max/2000/1*bRlpYw6PQ1AkFflL1_dwrA.png)

As a developer, if you wanted to upgrade an existing library you needed to convince everyone else in the room that the upgrade was necessary and that it wouldn’t break their code.

If you needed to import a fix into a new feature you still had to merge it with everyone else’s process changes and resolve the conflicts that came up. You needed to rebuild the entire app and make sure there were no regression bugs.

For lots of companies, this approach hindered their ability to innovate and raised more difficult challenges over time.

![micro](https://cdn-images-1.medium.com/max/1600/1*3VtdF9u157OKFMU61kztqA.png)

As their monolithic app grew, it:

+ .. was more difficult to scale -> Architecture gets harder to maintain -> Less responsive to dynamic market changes.
+ .. required long build/test/release cycles -> Feature releases took months-> Lack of innovation.
+ .. made dealing with Operations a true nightmare -> Long lead time required to add new features -> Frustrated customers.

That’s why software has strayed from a pure monolithic design approach to a microservice architecture design where different services are available in the cloud and accessible through APIs.

Companies can configure all of these different pieces on-demand to create unique capabilities.

Adrian Cockcroft, VP at Amazon Web Services, defined a Microservice Architecture as a:

Service-oriented architecture composed of loosely coupled elements that have bounded contexts.
In layman’s terms, this means that services communicate with each other over a network. You can update the services independently, you have independent release cycles, and you can innovate at your own pace. The software designed methodology is ‘self-contained.’ It means that you can update the code without knowing anything about the internals of other microservices.

Here’s an example of what a single microservice might look like:


You can start with some EC2 instances where you have your application’s binary code loaded and a data store (AWS NoSQL solutions, DynamoDB) where you can store your data. You can scale your EC2 instances by putting them into an autoscaling group and attach it to a load balancer.

You can then use AWS Beanstalk to easily deploy your new microservice on your EC2 instances.

In this example, I am levering just a few of the services that Amazon Web Services makes available.

Another microservice might be implemented using API Gateway and AWS Lambda if I need a serverless approach.

You can upload your application code, simply written in Java, Javascript, Python, or (only recently) go onto Lambda and set up triggers to run that particular application.

As a result, your final microservice might look like this:


Amazon EC2 was designed to make web-scale cloud computing easier for developers. Applications can scale up and down, and developers are in complete control of their instances.

Whereas a traditional web app needs to implement a server, which is constantly available over the web on an EC2 instance, AWS Lambda removes the need for this by automating the provisioning and release of servers.

AWS Lambda allows you to decouple your application’s code from your server architecture and create a more resilient, lower-cost application while sacrificing some control over the execution environment. Whether this approach makes sense (or not) for your application is a subjective question.

It’s all about finding a tradeoff that works for you. For some use cases, speed of execution is paramount, and the time lost to service marshaling is critical time that you can’t afford to lose.

Over the last decade in marketing, we’ve been witnessing quite an analogous transition.

Instead of thinking about one monolithic marketing app, we are now starting to think of marketing as being served by a constellation of independent services that are extremely optimized for change and that can evolve very quickly along the way.

The extreme variety of services provided by cloud vendors like Amazon Web Services, Google Cloud, or Microsoft Azure is replaced by a diversified ecosystem of SaaS products that can interact with the outside world via APIs and better integrate and cooperate with other products.

From a traditional monolithic approach where everything was built around a huge, all-in-one Marketing cloud solution software, we are now transitioning to a decentralized SaaS ecosystem that acts more like a microservices architecture.

The perfect combinations of products with specific features not only saves on costs, it can ensure higher quality compared to traditional all-in-one solutions.

Here’s how a microservices marketing stack might look:

![stack](https://cdn-images-1.medium.com/max/2000/1*fgpzbGSVHMnymfCqtZUpfg.png)

In the marketing world, a Microservice looks more like a workflow unit. It is actioned when a certain trigger gets activated and it computes a series of customer-related operations that leverage the core capabilities of different SaaS products according to a well-designed logic.

To see what this looks like, here’s a sample workflow unit. The goal is to “wow” our users by providing a personalized onboarding experience to new enterprise customers and to small-to-medium-sized businesses that purchased your product.

Based on a variety of traits (company size or their technology stack) you’ll branch the experience to ensure that there is no overlap and that you have your human resources focused on the top customers who actually need your guidance.

Here is the logic that we will implement:

The process starts when a new user signs up for our product.
Call the Clearbit Enrichment API endpoint to get more information about the company where the new user works.
If the Clearbit call is successful, save the payload response into your data warehouse.
Analyze the Clearbit response for further decision making: For example, if the user works for a company with more than 100 employees, send a Slack alert to your #Sales room so they can follow up with personalized onboarding.
If the user works in a company with less than 100 employees, we’ll call the API of a Technographic Enrichment provider (like Datayze) and save the payload to your data warehouse.
If the user is already using a specific technology (that you’re integrated with) that will make the onboarding process easier, let’s trigger a sequence of 3 emails that will automatically guide them through the process.

In this unit, we are solving the problem by coordinating the output of 5 different SaaS solutions.

We (1) automatically alert our sales team or product specialist team to effectively onboard large enterprises that might require more assistance to go through the process and (2) we provide excellent automatic guidance to new customers using a tailored sequence of onboarding emails.

Instead of working on a monolithic software and providing the average experience to everyone, we are working in connected units that leverage the output of multiple SaaS vendors. That’s average vs. wow.

## A microservices approach will fill the current technology gap in three important ways:

1. Faster response to market changes
The ability to use/test/adopt multiple SaaS applications in such an articulated way is a competitive advantage that still only a handful of marketing departments realize.

![velocity](https://cdn-images-1.medium.com/max/1600/1*uzvKEvtuDKxgZATn6ZMfmw.png)

If AWS has just released a new IaaS product that can potentially save me dozens of hours of engineering time because I don’t have to built it from scratch, and I don’t have to maintain it, and I can pay for it as a service, well, this is more than a plus. It’s a competitive advantage versus companies who are in the process of developing that infrastructure component in house.

At the same time, if a new predictive sales technology comes onto the scene tomorrow, I’d like to be able to add that in my stack as soon as possible.

Having a flexible stack that can evolve independently as quickly as needed and that is extremely optimized for change is what can move the needle forward and allow me to keep up with the speed of innovation.

## Spend only for what you use

Only 9% of software companies fully exploit the tools they are paying for. This often happens with monolithic all-in-one-solution products where the conventional approach is to buy a full feature package where only a portion of the features are relevant to you.

When you’re using extremely vertical SaaS products, you’re paying for the best-in-class product, which gives you the advantage.

You can also save money by using only the software that you need since most SaaS application pricing is based on the number of API calls that you make. By selectively choosing where and when to perform those API calls in your workflow units, you’ll be able to save money and better exploit those services.

## Beating Marketing Fatigue

Every industry, from Human Aesthetics, Spoken Languages, or even Cinema has a certain fatigue threshold. There is no exception for marketing.

Basically, a tactic’s effectiveness fades with time as an audience is exposed to it more often. Andrew Chen explained this as the Law of Shitty Clickthroughs.

A highly adaptable stack allows you to constantly overcome marketing fatigue by continuously innovating the way you design your customer experiences.

## Upcoming challenges

1. Systems orchestration
With such complexity and variety among new SaaS vendors that come into play, orchestration might become an issue. The real challenge will be empowering marketing and sales teams to handle such complexity and advanced capabilities without adding engineering overhead.

System orchestrators able to integrate and coordinate multiple SaaS technologies and handle the information flow between these loosely coupled 3rd-party systems will emerge along the way.

2. Knowledge gaps
The increasing complexity of Amazon Web Services has resulted in the rise of AWS certifications as a way to certify professionals who are capable of building solid and reliable infrastructure on AWS.

In the same way, Marketing Ops will need to deeply wield marketing technology and be able to understand how your stack should act as your product evolves and your target market changes. You’ll also need to address the knowledge gaps that exist in most of today’s Marketing Ops teams.

Having skilled professionals who can use the best MarTech in your operations can tremendously speed up your marketing team’s ability to move quickly.

3. Flow visualization
These are the microservice architectures of Netflix and Amazon, respectively.

![flow](https://cdn-images-1.medium.com/max/1600/1*gEztH-JXgk2vwvovYv4S_w.png)
When you are using thousands of interconnected microservices, your architecture chart could become very complicated. The more workflow units you have and the more SaaS you use in your stack, the tougher it becomes to effectively display your customer journeys.

4. Data integrity
Every time you perform a customer operation or one of your users interacts with one of the products in your stack, you’re generating data. How much data are we talking about? It depends on you how many are the touchpoints between your product and your customers.

Data fragmentation might increase exponentially as the complexity of their stack increases and a shared data context is one of the fundamental prerequisites for a good customer experience.

Your marketing is always as good as your data.

## Conclusion

+ Marketing Cloud will stop being the core piece around which the other marketing pieces gravitate. Instead, it will start to orbit, along with the other components of the marketing stack, around a main system orchestrator.

+ A decentralized stack optimized for rapid change will empower modern companies to create better and more articulate customer experiences that optimize for global maxima.

+ Preventing data fragmentation, dealing with system orchestrators, and being able to effectively display how your stack behaves underneath and how that affects your customer journeys will be some of the major challenges that we’ll have to tackle in the near future.