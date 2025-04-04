# Richard Henning's Résumé

## Contact

**Richard Henning**  
1307 Marlborough St.  
Philadelphia, PA 19125

<tel:+16107375134>  
<mailto:rphenning@pm.me>  
linkedin:<https://linkedin.com/in/rphenning>  
github:<https://github.com/rhenning>  

## Professional Experience

**Warner Bros. Discovery** – Philadelphia, US  
Principal Engineer, [**_Max_**](max.com)  
2022–2024

I am a Software & Platform Engineer-Architect working closely with tech leaders
from across the newly-combined WBD organization. Our _Cloud Engineering &
Automation_ group partners with service engineering teams in order to promote,
integrate with, and steer design and implementation of multi-tenant cloud
infrastructure, compute, delivery, data, messaging, observability, and
networking tools. These platform tools lay the foundation for successful
delivery of WBD's flagship entertainment products – such as **_Max_** – at
global scale.

* Advocate for platform-as-product north star, inner-source, collective
  platform ownership, and software stewardship; I serve as a de facto
  product owner, elevating the asks of our internal customer-colleagues
  during design and planning sessions.
* Leader of collaborative programming, code review, and architecture sessions
  with cross-organization engineering directors, leads, and architects.
* Collaborator and advisor across a number of specialty teams within
  our organization, including Infrastructure Engineering, Cluster Engineering,
  Site Reliability Engineering, Database Engineering, Release & Delivery
  Engineering, Boundary Services, and Asynchronous Messaging Services.
* Liaison between numerous business stakeholders & partners, facilitating
  communication and visual aid needed to solve thorny cross-provider issues.
* Long-term focus on building a global, multi-tenant, security & privacy
  compliant asynchronous messaging platform and provisioning DSL. This
  platform pillar supports buffered & reliable cross-service communications,
  including event-based microservices & observability tools. The tech stack
  contains components of Apache Kafka, AWS MSK, Confluent, Kubernetes,
  Terraform, AWS Transit Gateway & Private Link, Prometheus, Grafana, and
  Protocol Buffers, with bindings and tools authored in Go and Python.
* Proud to play as part of a team empowering:
  * World-class entertainment enjoyed by hundreds of millions of loyal
    customers around the globe.
  * Cloud services used by thousands of Software, Site Reliability, and Data
    Engineers.
  * Hosting for hundreds of unique & diverse business-critical services.
  * Operations & Observability Tools used by 70+ teams of stakeholders across
    Engineering, Operations, and Finance.
  * Resilient Architecture and Traffic Management across 10+ discrete zones.
  * Reach into 3+ global markets – N. America fast-followed by LATAM & EMEA.
  * One of the largest entertainment firms in the world.

**WarnerMedia** – Philadelphia, US  
Principal Software Engineer, [**_HBO Max_**](hbomax.com)  
2021–2022

As a member of the _Strategic Global Infrastructure_ group, I was responsible
for ensuring that day-to-day changes and improvements applied to live cloud
accounts, security policy, networking, infrastructure, compute clusters, and
CI/CD tools were delivered without customer impact and in accordance with
industry best practices.

* Reduced technical debt and fragility by refactoring shared Terraform modules
  and integrations used by teams across the organization. Favoring module
  injection to nesting, and data structures with connascence of name over
  position, we relaxed couplings to platform foundations with a large blast
  radius, such as AWS Control Tower, IAM, Transit Gateways, VPCs, Route
  Tables, ACLs, TLS, DNS, and Global Accelerator endpoints. To build confidence
  in these changes, I wrote `tfmgen` – an automated Terraform plan analyzer and
  state migration generator that de-risked ambiguous `plan` and `apply` actions,
  by transforming them into clear no-ops.
* Led a tiger team that planned and executed the build-out of HBO Max's cloud
  network and compute footprint in Europe.
* Migrated live workloads into new public-cloud accounts and Kubernetes clusters
  in order to take advantage of improved pricing negotiations.
* Automated acceptance testing of new cloud POPs with tools based on Terratest,
  AWS Lambda, and `infratest`, contributing to success in the previous two
  initiatives by eliminating iterative rework associated with provisioning and
  configuring foundational IAM, network, and compute elements when deploying
  into new cloud accounts, regions, and clusters.
* Daily code reviews, pair programming, analysis of Terraform and Kubernetes
  plans, and architectural design sessions with colleagues from Service
  Engineering teams.
* Participated in production on-call rotation shared with SRE, Root Cause
  Analysis, and After Action Review of incidents affecting _HBO Max_. After 20+
  years building and operating business-critical systems, I am adamant about
  limiting stress, toil, disruption, cognitive load, alert fatigue, tribal
  knowledge, and heroics commonly associated with on-call.
* Spearheaded grassroots meetup of the _Better Delivery_ guild, where colleagues
  from across the organization were invited to share their experiences and
  vision of how testing, infrastructure, and service delivery workflows could
  be improved.

**Comcast** – Philadelphia, US  
Principal Software Engineer, X1 Video Platform & Xfinity Stream  
2016–2021

I was embedded as a cloud and infrastructure-as-code specialist within a
cross-functional team of software engineers. Our team was responsible for
end-to-end development, infrastructure, delivery, operations, and support of the
XVP and Xfinity Stream APIs and supporting services. These APIs power video
discovery and playback experiences for tens of millions of customers and
business partners with Smart TVs, mobile devices, web browsers, and integrated
products such as Roku, Xumo, and Sky Glass.

* Led the iterative migration of live production APIs at scale – from on-premise
  managed hardware to hybrid-cloud to all-AWS public cloud – over an extended
  time period of continuous customer growth.
* Co-designed, implemented, and operated a global software load balancer, API
  gateway, and QoS system. It virtually eliminated high-severity incidents due
  to data center, app server, and load-balancer failure and allowed the team to
  run live capacity planning exercises. I authored acceptance test tools and a
  control plane API in Go, as well as Terraform modules for managing cloud
  infrastructure and integrating change delivery with Concourse CI.
* Advisor on topics such as resilient Hybrid Cloud Architecture, Cloud
  Networking and Security, Operations, Continuous Delivery, Infrastructure as
  Code, Infrastructure Testing, Capacity Planning, Auto-Scaling, and Global
  Server Load Balancing.
* Lead Engineer, Solutions Architect, and Project Manager for Platform Team
  properties including Global Load Balancer, API Gateway, Continuous Delivery,
  and Cloud Hosting platforms.
* Participated in daily code reviews, pair programming, hands-on collaboration
  and mentoring of junior colleagues.
* Met with Finance for quarterly cloud budget reviews and forecasting.  
* Organization-wide co-facilitator of DevSecOps Guild and Security Liaison.

**Weblinc Commerce** – Philadelphia, US  
Operations Engineer, Information Technology  
2014–2016

* Lead Engineer on a team of 7, responsible for IT Operations, Infrastructure,
  Site Reliability, Security, Compliance, and Delivery for 15+ e-commerce project
  development teams serving 50+ clients.
* Worked closely with CTO and IT Manager to create mentorship opportunities,
  design and implement tools and processes to scale the Ops team from a single
  infrastructure code committer to 6 teammates.
* Wrote infrastructure-as-code to provision PCI-compliant cloud infrastructure
  for clients and project teams. A largely manual, tribal-knowledge process that
  took up to two weeks was converted to code that ran in about an hour. This
  work directly contributed to a 400% increase in the number of client launches.
* Designed & developed a “TLS as a service” API to secure up to 10,000 domains
  for a client’s multi-store installation. We securely integrated SSL certificate
  and key management into each member’s store, at a cost and scale that would
  have been impossible using standard cloud-based approaches to TLS. Tech
  included Rails-API, HashiCorp Vault & Consul, PostgreSQL, Opscode Chef,
  HAProxy and Nginx.
* Implemented CI/CD tests for infrastructure and configuration management code.
* Pair programming, code reviews, and mentoring of junior colleagues; close
  collaboration with team leads and project managers of implementation teams.
* Designed and implemented federated authentication, authorization, and auditing
  across 3 data centers, 30+ AWS accounts, and ~500 systems.
* 1-on-1 billable consulting and professional services with clients as needed.

**The Neat Company** – Philadelphia, US  
Operations Engineer, DevOps Lead  
2012–2014

* Member of a geographically diverse team of full-stack developers, QA and Ops
  engineers managing development, CI, hosting, and operations across several
  service stacks. Tech included AWS, Rails, Travis CI, GitHub, Chef, MongoDB,
  PostgreSQL, Memcached, Redis, and Elasticsearch.
* Worked with developers to implement automated provisioning and autoscaling
  using AWS CloudFormation and Chef. This work improved developer productivity
  and system reliability by reducing provisioning time and errors, making the
  evolution of infrastructure over time visible, and empowering any engineer to
  provision their own complete development stack.
* Improved DR and scaling of MongoDB by implementing snapshot-based backup and
  restore. This resulted in reliable, fast restores and the ability to pre-seed
  new replicas so we could quickly add capacity. I wrote
  [`bunsen`](https://github.com/rhenning/bunsen) – a cache-warming tool
  to assist with pre-fetching data from backups to improve performance of new
  MongoDB replicas.
* Streamlined Chef development workflow by removing internal forks of community
  cookbooks and implementing cookbook tests with Test Kitchen, Serverspec, and
  minitest.
* Developed provisioning and command-and-control tools centered around Chef
  plugins to automate daily operations tasks.
* Pair programming, daily code reviews, and mentoring of junior colleagues.

**Jux LLC** (formerly part of the Lime Group) – New York City, US  
IT Operations, Systems Engineering, Build/Release Engineering  
2010–2011

* I led a geographically diverse team of system administrators, with
  responsibilities including performance reviews, candidate interviews,
  architecture, administration, security, capacity planning, budgeting,
  monitoring, on-call escalations, vendor relations, inventory, disaster
  recovery and documentation.
* Designed and deployed AAA systems to manage and audit access to workstations,
  servers, routers, firewalls, and source code management tools. Tech included
  MIT Kerberos, OpenLDAP, SSH, TACACS+, RADIUS, SASL, rsyslog and Simple Event
  Correlator (SEC).
* Worked with developers to design and implement virtualization stacks for
  several projects, based on Xen and VMware clustering, iSCSI mass
  storage, and 802.1Q VLAN. Network resource management and build automation
  were streamlined by combining Cobbler/Kickstart with the VMware & Xen
  API tools. A dedicated management network allowed for lights-out management of
  failed systems via IPMI, and also backups.
* Led developers in migrating all physical data center resources to AWS, which
  lowered operating expenses, eliminated sysadmin trips to the data center, and
  greatly reduced turnaround time for new infrastructure – from weeks to under
  an hour in most cases. Cloud automation and resource management were
  implemented with AWS CLI tools and Chef.
* Automated product build/tag/backup/deploy process, virtually eliminating
  downtime associated with production code releases. Tech included Ruby,
  Git, `Net::SSH`, and Opscode Chef.

## Additional Skills

* Early DevSecOps, Infrastructure-as-Code, and SRE advocate
* Operations and on-call experience supporting critical services and
  infrastructure
* Scaling strategy and capacity planning for 24x7 global production applications
* Hybrid Cloud Infrastructure Services, APIs & SDKs (AWS, Kubernetes, OpenStack,
  Cloud Foundry)
* Configuration Management, Provisioning and test tools (Ansible & Molecule, AWS
  CloudFormation, HashiCorp Terraform, Packer, Consul & Vault, Terragrunt &
  Terratest, Docker & Compose, Chef, Test Kitchen, Goss)
* Global Traffic Management, Advanced DNS, Ingress & Edge strategy (AWS
  Global Accelerator & Route 53, Akamai GTM, Anycast, F5, BIND, djbdns, PowerDNS)
* GNU/Linux (Arch, Debian, Ubuntu, Red Hat, CentOS, AL2), Windows Server,
  macOS administration
* Networking (AWS VPC & Transit Gateway, Ethernet, TCP/IP, VLAN, VPN, QoS,
  Linux iptables/iproute2)
* Revision control (Git, GitHub, Bitbucket/Stash, Subversion)
* Golang, Python, Ruby, Rails, TDD, Unix shell scripting.
* Continuous Integration and Delivery (GitHub Actions, Concourse CI, Jenkins,
  Travis CI, Bamboo, TeamCity)
* HAProxy, Nginx, Apache web servers and common modules
* Operational Visibility (Prometheus, Grafana, Graphite, New Relic,
  AWS CloudWatch, Splunk, PagerDuty)
* NoSQL and SQL databases and Elasticsearch
* Electronic Mail Transports
* LDAP schema design, replication strategies, Kerberos integration, Federated AAA
* Mass storage design & network file systems
* Project management & Issue tracking (GitHub, Atlassian Suite)
* Security tools (Keybase, GnuPG, PGP, OpenSSL, TLS, CAs, PKI)
* Network sniffers & protocol analyzers (tcpdump, Wireshark)
* Intrusion Detection & Prevention (Amazon GuardDuty & WAF, Snort)

## Code Samples

* My résumé is generated from source code and templates stored in  
  [a GitHub repository](https://github.com/rhenning/resume). Pull Requests
  are continuously integrated and validated, then released upon merge by a  
  [GitHub Actions pipeline](https://github.com/rhenning/resume/actions).
* [**`terrajux`**](<https://github.com/rhenning/terrajux>) – a CLI tool
  authored in Go, written to help members of my team quickly
  home-in on exactly what code changed between two releases of a Terraform
  root module and all transitive dependencies.
* [**`x509_sleuth`**](<https://github.com/rhenning/x509_sleuth>) – a
  lightweight remote network recon tool for SSL certificates, built to scan
  network ranges, identify TLS-protected endpoints, and extract fields of
  certificates found in a script-friendly format, useful for auditing purposes.
* [**`bunsen`**](<https://github.com/rhenning/bunsen>) – a cache-warming and
  prefetch tool, handy for use in ops on-call automation when scaling or
  recycling nodes in a MongoDB cluster.
* Contributions to Terraform Core, Terraform’s AWS Provider, and other
  open-source projects

## Extracurriculars

* Volunteer and technology board advisor at  
  [Fishtown Playschool](https://www.fishtownplayschool.org/faq)  
  – a 501(c) non-profit preschool cooperative
* Maker and Creative
* Electronic musician, synthesist, and project studio owner
* Synthesizer design, instrument repair, modifications, and electronics rework
* Interests in embedded systems, IoT, amateur radio, and information security
* Audio engineering & high-performance Linux multimedia workstations

---

_Professional references and additional work history available upon request._
