# Build a static website and host it almost free on AWS

* You can host anything you want, in my case, i wanted to share my CV to recruiter in a Devops fashion.
* I created this github repo ( so, others can also learn from it ) and put all the code, cloudformation/SAM templates here.
* I am using AWS free tier account, so, it is almost free ( very small fee for using route53 hosted zone and depends on no of GET requests to your webpage you will incurr some fee too)
* Most of the cost for me is for registering a website domain ( ~ 5-15$ per year, Depends on the domain name you choose it varies )


# AWS DevOps using AWS code*

* AWS cloud9 for development using IDE and even test locally changes using SAM ( Serverless Application Model )
* When you commit the code in codeCommit (or github in my case), a CI (codeBuild) is triggered by codePipeline.
* You can use mix and match, use linear action groups or parallel actions within stages.
* Build, test, deploy stages could be run in pipeline.
* Finally CD the artifcats to S3 bucket for production.

![AWS Devops](images/devops-cicd-approach.png)


# Requirements

* Github account( to share publicly for non-AWS users) or AWS codeCommit
* AWS free tier account  ( https://aws.amazon.com/free/ )
* IDE with git for development ( or Cloud9 on AWS )
* Register a domain and configure hostedzone in Route53 ( hostedzone is created automatically if registered also using Route53 )
* create two buckets for example 'www.sample.com' , 'sample.com' ( with full DNS name of your website) and allow public access.
* create ALIAS recordset in Route53 to point to your S3 bucket.


# Completed Features

* A simple HTML Website to show case my resume
* Static S3 Hosted Website
* DynamoDB and Lambda based serverless visitor counter
* Both Cloudformation and AWS SAM templates 
* codePipeline with stages 
   1. Take source from github 
   2. Delpoy code on S3
   3. launch cloudformation template to build DynamoDB, lambda & Apigateway using cloudformation (used this) 
          (or)
      launch codeBuild with buildspec using SAM CLI to deploy SAM templates to achieve the same.( you can take this approach too)

# Features in pipeline

* Cloudfront Distribution 
* ACM Cert for SSL


# Some features of my resume sharing website.

* You allow to download a PDF copy of the resume with a button.
* Share your badges public url to verify ( all the certifications done )
* share your linkedin profile link.
* Click on email to launch your email editor to send an email to you.
* In the footer, you can see how many people visited your website.

# AWS architecture used
![Architecture](images/aws-architecture.png)



# Source courtesy : AlanTuringResume - this is the source repo i inspired from

Repository for my blog article: [How to build a free static resume site with AWS S3, Cloudfront, and Route 53](https://seanjziegler.com/how-to-build-a-free-static-resume-site-with-aws-s3-cloudfront-and-route-53/)

### License

MIT (C) 2020


