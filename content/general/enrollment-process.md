---
title: "Enrollment process"
description: "Manage vehicle enrollment status into various Toyota Data services."
date: 2021-04-01
---

# See how vehicle enrollment process works, step-by-step.

A vehicle must be enrolled into a service before you can access any data for that VIN. There are different types of [Data Solutions available](https://toyotadatasolutions.com/products). Not every vehicle is capable of using them all. Here is a description of what happens behind the scenes with the enrollment process. This guide is a high-level overview to help you understand how to build a successful integration with your systems to begin using Toyota Data Solutions.

## 1. Request VIN enrollement

Subscriber initiates the enrollment process by submitting a list of VINs through our [Vehicle Enrollment API](/api-catalog/vehicle-enrollment) or through [Enrollment Console](https://admin.toyotadatasolutions.com/).

## 2. Verifying request

We start by verifying the request by checking the requester’s subscriber ID, VIN format, and validating the requester is authorized for the requested subscriptions.

<div class="notice">
We will not attempt to process any VINs that use an incorrect format.
</div>

Once the request is verified, the status for each vehicle will change to Pending. From here, the enrollment process becomes asynchronous. It can take up to a few minutes to complete.

## 3. Ownership checks

For most Subscribers we confirm the Subscriber is authorized by the vehicle owner to enroll it in services. In advance of enrollment Subscribers will provide their Toyota Business Contact with ownership information associated with vehicles they want to enroll. Fleed IDs and Dealer Codes will be associated with the Subscriber.

Ownership check confirms the vehicles are associated with the appropriate Fleet IDs/Dealer Codes at the time of enrollment. Vehicle enrollment cannot proceed until ownership has been verified.

<div class="notice">
Any vehicles that fail this check will return an Ownership Error via Enrollment Status API as well as in the Enrollment Console.
</div>

## 4. Vehicle capability check

Each vehicle a Subscriber wishes to enroll has to be capable of transmitting data for the requested data services.

### 4.1. Data communication

We attempt to check whether enrolling vehicle is able to send telematics data to Toyota systems. We confirm whether vehicle is physically capable of sending data. See general vehicle compatibility page for reference.

<div class="notice">
The enrollment process will be aborted for individual vehicles that fail this check. Vehicle that fail do not have on-board capabilities to communicate with data services. Enrollment Status may provide additional information.
</div>

### 4.2. Service-specific requirements

Some data services require a vehicle to have specific software capabilities or be of a certain Dispatch Model. Our enrollment services confirm whether vehicles enrolling in services with these specific requirements are compatible.

For example, the Service Warning requires a vehicle be Service Connect capable and Collision Notification uses algorithms written for specific Dispatch Models.

<div class="notice">
If a vehicle fails any of the specialized services checks, the enrollment process will continue but affected services will be denoted in Enrollment Status checks as an error.
</div>

## 5. Enrollment complete

Once vehicle capabilities have been verified, the vehicle will change status from Pending to Enrolled. Completion of the enrollment process can trigger an optional Enrollment Status Callback to notify the subscriber using a webhook.

Data will now be available for all services a vehicle has been successfully enrolled in.

<div class="notice">
<p>Vehicle status can be obtained upon request either programmatically via Enrollment Status API or via Enrollment Console.</p>
<p>Subscribers may also choose to integrate with the Enrollment Status Callback] service to receive near real time status updates when enrollments requests complete.</p>
</div>
