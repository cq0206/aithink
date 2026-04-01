# You Want Modules, Not Microservices

Source URL: <https://blogs.newardassociates.com/blog/2023/you-want-modules-not-microservices.html>
Date: 2023-01-02
Author: Ted Neward

## Subtitle

Dissecting why everybody keeps talking about microservices.

## Source text

tl;dr Architecture is hard sometimes—people keep offering up some new idea that quickly becomes the mainstream "way to do it" without any context or nuance, and the industry, desperate to find ways to improve their architecture, snaps it up without hesitation. Microservices was the latest in the trend, and it's time we dissected the idea and got to the real root of what's going on.

## At the heart of microservices, we're told we'll find...

... Lots of Good Things (TM)!

- "Scalability": "Code can be broken into smaller parts that can be developed, tested, deployed, and updated independently."
- "Focus": "... developer focuses on solving business problems and business logic."
- "Availability": "back-end data must always be available for a wide range of devices... ."
- "Simplicity": "provides simplified development of large scale enterprise level application."
- "Responsiveness": "... enables distributed applications to scale is response to changing transaction loads... ."
- "Reliability": "Ensures no single point of failure by providing replicated server groups that can continue when something breaks. Restores the running application to good condition after failures occur."

These all sound relatively familiar, I'd imagine, but the fun part about those six quotes is that two were taken from microservices literature (blog posts, papers, etc), two from twenty-years-ago EJB literature, and two from Oracle Tuxedo, which is forty-plus-years-ago technology. Can you spot which went to which?

We have a tendency in this industry to re-use our hype points over and over again.

With respect to the microservices hype, one company's blog post offers 10 reasons to charge into microservices:

1. They promote big data best practices.
2. They are relatively easy to build and maintain.
3. They enable higher-quality code.
4. They simplify cross-team co-ordination.
5. They enable real-time processing.
6. They facilitate rapid growth.
7. They enable more outputs.
8. Easier to assess updates in the application life cycle.
9. They enable scale.
10. Many popular tools are available.

Let's take a second and examine each of those, but this time in light of prior art:

1. Pipes-and-filters architectures have existed since the 70s, and Unix already pushed "make each program do one thing well".
2. Small, maintainable pieces also align with Unix philosophy.
3. Better quality through focus is also not new.
4. The claim that SOA is inherently heavyweight is historically shallow; microservices can still use heavyweight protocols, and some even use gRPC, which resembles older distributed systems ideas.
5. Real-time processing predates microservices by decades.
6. Reuse has been a selling point of countless technologies.
7. Multiple output formats sound like standard reporting systems.
8. The machine-learning-testing pitch feels like buzzword stacking.
9. Scale was also promised by EJB, Tuxedo, and mainframes.
10. Tools are always available once a hype cycle matures.

The common thread beneath many of these claims is the idea of small, independent chunks of code and data, versioned apart, with common inputs and outputs.

## At the heart of microservices, we find...

... modules.

The humble module has been at the heart of most programming languages since the 1970s. Call them assemblies on the CLR, JARs or packages on the JVM, or dynamic libraries on operating systems—they are all modules at a conceptual level.

Each serves the same purpose: an independently built, managed, versioned, and deployed unit of code that can be reused.

The article quotes David Parnas' 1971 paper "On the Criteria To Be Used in Decomposing Systems into Modules" to argue that many of the supposed benefits of microservices are just the well-understood benefits of modularity.

## At the heart of microservices, we should find...

... organizational clarity.

Amazon and similar companies were not primarily promoting a new architectural style; they were pushing for independent development teams with fewer blockers. Instead of waiting on DBA teams, QA teams, infrastructure teams, or UX teams, the team would aggregate ownership of all the dependencies that often blocked delivery.

This means teams either need broader combined skill sets or individuals with full-stack breadth. It also means teams own production outages and on-call responsibilities. But when done well, teams can build their artifact independently of one another.

## At the heart of microservices, we often find...

... the Fallacies of Distributed Computing.

Distributed systems are hard. Passing data across in-memory module boundaries is cheap; passing data over network boundaries introduces orders of magnitude more latency. That is not something you can simply scale away.

Running microservices on the same machine in containers may reduce some network distance, but still adds virtualization and network-stack complexity while preserving reliability tradeoffs.

And once we start wrestling with distributed-systems fallacies, we often run into a second family of problems: the Fallacies of Enterprise Computing.

## At the heart of microservices, we need...

... to start rethinking what we really need.

If you need to decompose a problem into independent entities, there are many ways to do that: standalone processes in containers, standalone modules in an application server with a standard API convention, and more. This is not a technical problem that requires abandoning everything built in the last twenty years.

The key is to establish a common architectural backplane with well-understood integration and communication conventions.

If you need to reduce the dependencies blocking your development team, start by identifying those dependencies and working with partners to bring more of them into the team's wheelhouse.

If the organization does not want to change a skill-centric org chart, then create at least a dotted-line or matrix structure so people from database, infrastructure, QA, and other groups are effectively embedded with a single team.

Most importantly, make sure the team has a crystal-clear vision of what it is trying to build, and can explain the heart of its service, microservice, or module clearly to anyone.

The core message boils down to two separate concerns:

1. Modular decomposition of the software.
2. Organizational autonomy for the team.

Those two concerns are related, but they are not the same thing.
