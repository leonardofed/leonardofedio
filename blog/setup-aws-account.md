---
title: Proper setup of a new AWS account
date: 2015-07-28
description:
    Kielbasa tenderloin boudin bacon cupim, pastrami strip steak rump picanha meatloaf venison meatball ribeye. Burgdoggen t-bone jowl venison biltong andouille. Turducken shankle tongue landjaeger drumstick, pancetta porchetta. Brisket ham turkey andouille picanha. Pancetta chuck shank ham.
---

# Proper setup of a new AWS account

Getting started with AWS account is something tricky especially when you're moving your first steps in the Cloud and you're so impatient to play (exactly as I did when I put this blog up on AWS) with all kinds of these amazing services. That's why having a solid checklist is something extremely important. Nice things about it? It won't take too much and a couple of extra mins now will save you hours later on.


TL;TR 1. Create a root-account first and use IAM users for everything else. 2. IAM - take care of pwd-policies and set in place a good aws account hierarchy 3. Monitor since day-1


If you don't have an AWS account yet and you want to get started immediately in a real AWS Management Console. You can create a Cloud Academy account and start get started with some of our Hands-on labs: 

+ Create Your First Amazon S3 Bucket
+ Introduction to IAM
+ Serve your files using the CloudFront CDN

### 1. Signing up - root-account

When you sign up for AWS, your account is automatically signed up for all services in Amazon Web Services. And here's your first smart move: no matter if you're creating a new AWS account for a company or a personal project, make sure you use an email alias (e.g. aws-root@acme.com) instead of an actual person's email address. Keep in mind: there is only one root credential for each AWS account and it has full admin privileges that cannot be revoked. This your root credential should not be used for day-to-day administration. From now on, you should use your AWS root account only for these three main reasons: 

1. You have to set up a new account;
2. You have to update billing information
3. All your IAM Users lost access to the account (e.g. if an IAM policy change accidentally and blocks all users from signing in to the account).
4. Point of contact for security related events 5. For changing the support levels (e.g., basic to developer/business/enterprise)


### 2. IAM Users - Pwd policies

Once you've locked away your root-account it's time for IAM users. That's what you'll use to access your AWS Management Console for day-to-day administration. And first thing you want to care about for new IAM users is: password-policy. Having in place a solid password policy is something that will ensure you don't do anything that will need to be fixed later. The IAM console will give Secutiry Status - Full size imageyou a big help as they already support policies that include minimum length and complexity requirements. The AWS documentation here is great. 
And after you complete each of these tasks from your root-account, a green check box will light up.

Once you settled in your pwd policy, you'll go straight to separation of duty. Best practice of balacing responsibility among multiple users so that no one person has full control of everything.


### 3. IAM Users - distributing roles

Disclaimer: I found this post very comprensive on this part. So I'll report a valuable piece of that. Another comprensive guide here comes from directly from the AWS Blog by Matt Ramsay. 

Before you even touch any service, AWS Mgm Dashboard - Full size imagesecure your root account! Log in, go to Security Credentials (top right part of the screen) and add a multi-factor authentication device for the root user. Then create another user for yourself:

![alt Mgm Dashboard](http://i.imgur.com/OZfOJz7.png)

+ __Go to Groups__

Create a super admin group with the policy
AdministratorAccess (this gives IAM users access to almost everything). 

+ __Go to Users__

Create a user for yourself, adding it to the group 
you created earlier. 
You can also generate an API key here - make note of it because 
the secret is not shown again and make sure you never,
ever, post it to GitHub (lots of people do that and it's really bad)

+ __Go to Dashboard__ 

Set a sign-in URL for IAM users (bookmark this) and check that all boxes are green which means you did everything correctly.

![alt Mgm Dashboard](http://i.imgur.com/DXDvqsH.png)

Finally, go to My Account (again, top right of the screen) and set the correct Contact, Currency and Security Challenges settings. Also, enable IAM User Access to Billing Information. Now logout of the root account and only use the IAM user you created earlier from now on. 

Once correctly setup, your AWS account hierarchy will look something like this. 

'Admin-Area' + 'Dev-Area' are new IAM groups. The first user of 'Admin-Area' is root-account+1 
(who is also a root user).

![alt Mgm Dashboard](http://i.imgur.com/pE2BqQn.png)

Email services like gmail allow your email addresses to end in +1, +2, +11, +22 etc.. and you can use that to create unique AWS accounts, yet have the emails delivered to same email address. You decide every level of permission for each IAM group. 

A common best practice is revoke any 'DELETE' privileges from any of the IAM groups (including admin group). 

```
//revoke any 'DELETE' privileges


{
 "Version": "2012-10-17",
 "Statement": [
	{
		"Sid": "Stmt",
		"Effect": "Deny",
		"Action": [
			"iam:DeactivateMFADevice",
			"iam:DeleteAccessKey",
			"iam:DeleteAccountPasswordPolicy",
			"iam:DeleteGroup",
			"iam:DeleteGroupPolicy",
			"iam:DeleteInstanceProfile",
			"iam:DeleteLoginProfile",
			"iam:DeleteRole",
			"iam:DeleteRolePolicy",
			"iam:DeleteSigningCertificate",
			"iam:DeleteUser",
			"iam:DeleteUserPolicy"
		],
		"Resource": [
			"*"
		]
	}
	]
}
```


Recap - here the General Best Practices that AWS stongly recommendas mandatory to create a secure system:

Create a strategy to control privilege at the user level.
Monitor and audit your users, and regularly review privileges.
Identify which individuals should interact with the service
provider regarding billing, security, and operations matters, and 
grant authorization accordingly.
Ensure continuous communication with the service provider,
even if individuals change roles or leave the company.


3. IAM - Access Key

You'll face with IAM access keys when will need to sign in your AWS management console thru the API. Usually three main scenarios:
First; you have an application or AWS CLI scripts running on an Amazon EC2 instance
Second; you need to grant cross-account access with limited permissions to access the trusted account. Great tutorial here. 

The best way to keep your access keys secure over time is to rotate them often. AWS allows each user to have two sets of keys to make key rotation easy. And the most of the times, you don't even need a long-term access key that never expires (as you have with an IAM user). So be really careful.

4. IAM - Two Factor for every new account

This has turned out to be an essential tool. As shown in above diagrams, enable TFA on Root account and every IAM user account. Enforcing of this policy can be done at the IAM Group level by simply attaching a custom policy. Here is a sample policy that enables TFA for all IAM accounts in that group. 
It will take 2 seconds more.

```
//enables TFA for all IAM accounts


{
  "Version": "2012-10-17",
  "Statement": [
	{
	  "Sid": "Stmt",
	  "Effect": "Allow",
	  "Action": [
		"*"
	  ],
	  "Condition": {
		"Null": {
		  "aws:MultiFactorAuthAge": "false"
		}
	  },
	  "Resource": [
		"*"
	  ]
	}
  ]
}	     
```

5. Monitoring

Monitoring since day 1 is extremely important and AWS provides several different tools to help customers monitor their account activities.

+ You can create a security email distribution list to receive 
security-related notifications
+ Create an Amazon Simple Notification Service (SNS)
topic for security notifications and subscribe the security email 
distribution list to the topic. It's pretty good to have fully-customized alerts.
+ The AWS documentation says "Configure AWS usage and billing reports". 
Good luck. Fortunately this tool will make things a whole lot easier.
+ Keep in mind to enable CloudTrail in all regions
+ CloudTrail integration with CloudWatch Logs and launch
the provided AWS CloudFormation template to create CloudWatch 
alarms for
+ Enable AWS Config. Use the predefined rules CLOUD_TRAIL_ENABLED
and RESTRICTED_INCOMING_TRAFFIC to notify the security 
SNS topic if
+ CloudTrail is disabled for the account or if someone creates 
insecure security group rules.
+ Create an S3 bucket for storing monitoring data and configure
the bucket policy to allow the appropriate services 
(CloudTrail or AWS Config are perfect)
to store


If you really want to deepen your knowledge of Amazon Web Services, I strongly recommend to check out Cloud Academy. You can use the Cloud Academy Hands-on Labs to do exactly all the stuff that I explained in this post and much more.