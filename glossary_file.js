
const title = "SIT722 DevOps Glossary";
const introduce = "Welcome to Tao's website showing a collection of DevOps terms and their brief descriptions";
const titleList = ["ID", "Term", "Description", "References"];
const termsList = [
    {
        "ID": 1, 
        "Term": "Culture (company culture)",
        "Definition": "The shared values, beliefs, and behaviors within an organization. Adopting DevOps requires transforming culture by promoting collaboration over silos.",
        "Source": "Atlassian (2022) What is DevOps? Available at: ",
        "url": "https://www.atlassian.com/devops/what-is-devops"
    },
    {
        "ID": 2,
        "Term": "Buy-in",
        "Definition": "Securing understanding and commitment from stakeholders. Leadership buy-in is essential for successful DevOps adoption.",
        "Source": "Roberts, D. (2021) How to get buy-in for DevOps in your organization. TechBeacon. Available at: ",
        "url": "https://techbeacon.com/app-dev-testing/how-get-buy-devops-your-organization"
    },
    {
        "ID": 3,
        "Term": "Silos",
        "Definition": "Isolated teams or departments that do not share information. Breaking down silos is a key part of DevOps culture change.",
        "Source": "BMC Software (2022) DevOps culture Part 2: Breaking down silos. BMC Blogs. Available at: ",
        "url": "https://www.bmc.com/blogs/devops-culture-part-2-breaking-down-silos/" 
    },
    {
        "ID": 4,
        "Term": "Pilot projects",
        "Definition": "Smaller scale trial implementations used to test new processes before broad roll out. Good way to start DevOps adoption.",
        "Source": "Whatis.com (2022) How to kick off your DevOps pilots with success. TechTarget. Available at: ",
        "url": "https://www.techtarget.com/searchitoperations/tip/How-to-kick-off-your-DevOps-pilots-with-success"
    },
    {
        "ID": 5,
        "Term": "Incremental",
        "Definition": "Making gradual changes in smaller steps vs. all at once. Incremental approach recommended for DevOps adoption.",
        "Source": "Mulesoft (2021) How to transition to DevOps incrementally. TechBeacon. Available at: ",
        "url": "https://techbeacon.com/app-dev-testing/how-transition-devops-incrementally"
    },
    {  
        "ID": 6,
        "Term": "Stakeholders",
        "Definition": "People impacted by or interested in a project. Getting stakeholder buy-in helps DevOps adoption.",
        "Source": "SolutionsIQ (2022) Getting Stakeholder Buy-in for DevOps Transformation. SolutionsIQ. Available at: ",
        "url": "https://www.solutionsiq.com/resource/blog-post/getting-stakeholder-buy-for-devops-transformation/"
    },
    {
        "ID": 7,
        "Term": "Coaching",
        "Definition": "Personalized training and mentoring. Important for helping teams learn DevOps practices.",
        "Source": "Mulesoft (2019) How to coach a DevOps culture on your team. TechBeacon. Available at: ",
        "url": "https://techbeacon.com/app-dev-testing/how-coach-devops-culture-your-team"
    },
    {
        "ID": 8,
        "Term": "Metrics",
        "Definition": "Quantitative measurements and data. Vital for tracking improvements from DevOps.",
        "Source": "Atlassian (2022) DevOps metrics. Atlassian. Available at: ",
        "url": "https://www.atlassian.com/devops/devops-tools/metrics"
    },
    {
        "ID": 9,
        "Term": "Lead time",  
        "Definition": "Elapsed time from initiating a task to completion. Useful DevOps metric.",
        "Source": "Atlassian (2022) Lead Time. Atlassian. Available at: ",
        "url": "https://www.atlassian.com/continuous-delivery/principles/measure-expand-optimize/lead-time"
    },
    {
        "ID": 10,
        "Term": "Persistence",
        "Definition": "Continued effort over a long period. Needed to fully transform culture and processes for DevOps.",
        "Source": "Mulesoft (2017) How to persuade your boss to invest in DevOps. TechBeacon. Available at: ",
        "url": "https://techbeacon.com/app-dev-testing/how-persuade-boss-invest-devops-and-why-it-s-worth-it"
    },
    {
        "ID": 11,
        "Term": "Continuous Delivery (CD)",  
        "Definition": "The practice of automating the entire software release process, from code changes to deployment to production, enabling rapid and reliable delivery of software.",
        "Source": "Red Hat. (n.d.). What is CI/CD? Red Hat. Retrieved February 27, 2023,",
        "url": "https://www.redhat.com/en/topics/devops/what-is-ci-cd"
    },
    {
        "ID": 12,
        "Term": "Deployment Pipeline",
        "Definition": "An automated implementation of the software delivery process, allowing code changes to flow sequentially through build, test, and deploy stages. Enables fast, reliable releases.",
        "Source": "Atlassian. (n.d.). Continuous Delivery. Atlassian. Retrieved February 27, 2023,",
        "url": "https://www.atlassian.com/continuous-delivery"
    },
    {
        "ID": 13,
        "Term": "Trunk-Based Development",
        "Definition": "A source code management practice where developers collaborate by merging code frequently into a single shared branch (trunk) rather than maintaining isolated branches.",
        "Source": "Atlassian. (n.d.). Trunk Based Development. Atlassian. Retrieved February 27, 2023,",
        "url": "https://www.atlassian.com/continuous-delivery/continuous-integration/trunk-based-development"
    },
    {
        "ID": 14,
        "Term": "Infrastructure as Code (IaC)",
        "Definition": "Managing and provisioning infrastructure like servers, networks, and configurations through machine-readable definition files rather than manual processes. Enables consistency and automation.",
        "Source": "Red Hat. (n.d.). What is Infrastructure as Code. Red Hat. Retrieved February 27, 2023,",
        "url": "https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac"
    },
    {
        "ID": 15,
        "Term": "Configuration Drift",
        "Definition": "When infrastructure or system configurations change or \"drift\" from their original settings over time, leading to inconsistencies and issues. IaC helps prevent this.",
        "Source": "Red Hat. (n.d.). What is Configuration Drift. Red Hat. Retrieved February 27, 2023,",
        "url": "https://www.redhat.com/en/topics/automation/what-is-configuration-drift"
    },
    {
        "ID": 16, 
        "Term": "Value Stream",
        "Definition": "The set of activities, from concept to customer, required to deliver a product or service. Identifying and optimizing value streams is key in DevOps.",
        "Source": "Atlassian. (n.d.). Value Stream Mapping. Atlassian. Retrieved February 27, 2023,",
        "url": "https://www.atlassian.com/team-playbook/plays/value-stream-mapping"
    },
    {
        "ID": 17,
        "Term": "Feedback Loops",
        "Definition": "Building mechanisms to get fast feedback on software changes. Tight feedback loops (e.g. CI/CD) enable continuous improvement.",
        "Source": "Amazon Web Services. (n.d.). Implement Feedback Loops. Amazon Web Services. Retrieved February 27, 2023,",
        "url": "https://docs.aws.amazon.com/whitepapers/latest/organizational-excellence/feedback-loops.html"
    },
    {
        "ID": 18,
        "Term": "Postmortems",
        "Definition": "Retrospective analysis done after an incident, outage, or failure to identify root causes and improve processes. Key DevOps practice.",
        "Source": "Atlassian. (n.d.). Blameless Postmortems. Atlassian. Retrieved February 27, 2023,", 
        "url": "https://www.atlassian.com/incident-management/postmortem/blameless"
    },
    {
        "ID": 19,
        "Term": "Technical Debt",
        "Definition": "Problems in code or architecture that accumulate over time as teams take shortcuts. Must be addressed for quality and velocity.",
        "Source": "Atlassian. (n.d.). Technical Debt. Atlassian. Retrieved February 27, 2023,",
        "url": "https://www.atlassian.com/continuous-delivery/principles/technical-debt"
    },
    {
        "ID": 20,
        "Term": "Velocity",
        "Definition": "A measure of a team's rate of development, often measured in story points completed per sprint. Improves with DevOps.",
        "Source": "Atlassian. (n.d.). Velocity. Atlassian. Retrieved February 27, 2023,",
        "url": "https://www.atlassian.com/agile/project-management/velocity"
    },
    {
        "ID": 21,
        "Term": "Organizational Alignment",
        "Definition": "The process of coordinating goals, objectives, and activities across all levels and departments in an organization. Critical for reducing resistance and enabling transformation.",
        "Source": "What is Organizational Alignment? Definition, Model & Tips. Cleverism. (2022). Retrieved from", 
        "url": "https://www.cleverism.com/skills-and-career/organizational-alignment/"
    },
    {
        "ID": 22,
        "Term": "Resistance to Change",
        "Definition": "The tendency for people to resist or avoid making changes, even if they would benefit from them. Managing this is key for transformation success.",
        "Source": "Resistance to Change - Meaning, Causes and How to Overcome. Cleverism. (2021). Retrieved from",
        "url": "https://www.cleverism.com/skills-and-career/resistance-to-change/"
    },
    {
        "ID": 23,
        "Term": "Incremental Change",
        "Definition": "Making gradual changes in smaller steps versus all at once. Recommended approach for DevOps adoption to reduce risk and resistance.",
        "Source": "Incremental vs Radical Change: 15 Key Differences. Indeed. (2022). Retrieved from",
        "url": "https://www.indeed.com/career-advice/career-development/incremental-vs-radical-change"
    },
    {
        "ID": 24,
        "Term": "Organizational Silos",
        "Definition": "Isolated teams or departments that do not communicate or collaborate effectively. Breaking these down is critical for DevOps culture.",
        "Source": "What are Organizational Silos? Insights. (2022). Retrieved from",
        "url": "https://www.insightsquared.com/2013/10/what-are-organizational-silos/"
    },
    {
        "ID": 25,
        "Term": "Scaling",
        "Definition": "Growing a company's operations, processes, or systems to handle increased business. presents challenges like preserving culture and quality.",
        "Source": "What is Scaling? Definition & Challenges of Scaling a Business. Feedough. (2019). Retrieved from",
        "url": "https://www.feedough.com/scaling-definition-challenges-business/"
    },
    {
        "ID": 26,
        "Term": "Automation",
        "Definition": "Using technology to perform tasks automatically that previously required human effort. Must be applied judiciously in DevOps.",
        "Source": "What is Automation? Definition, Types, Uses and More. Indeed. (2022). Retrieved from",
        "url": "https://www.indeed.com/career-advice/career-development/what-is-automation"
    },
    {
        "ID": 27,
        "Term": "Technical Debt",
        "Definition": "Problems in systems that accumulate over time as teams take shortcuts or do suboptimal work. Must be addressed.",
        "Source": "Technical Debt Definition. TechTarget. (2022). Retrieved from",
        "url": "https://www.techtarget.com/whatis/definition/technical-debt"
    },
    {
        "ID": 28,
        "Term": "Legacy Systems",
        "Definition": "Older computer systems or applications that remain critical to a business but pose challenges like lack of flexibility.",
        "Source": "Legacy system. TechTarget. (2005). Retrieved from",
        "url": "https://searchdatamanagement.techtarget.com/definition/legacy-system"
    },
    {
        "ID": 29,
        "Term": "Modernization",
        "Definition": "Upgrading legacy systems and moving to more modern platforms, technologies, and practices like cloud and microservices.",
        "Source": "Legacy Application Modernization | Modernize Aging Software. Appian. (n.d.). Retrieved from",
        "url": "https://www.appian.com/platform/application-modernization/"
    },
    {
        "ID": 30,
        "Term": "Transformational Change",
        "Definition": "Fundamental, substantial changes in strategies, processes, technology, or culture. DevOps requires this type of broad, enterprise-level change.",
        "Source": "What is transformational change? Definition and meaning. Market Business News. (2021). Retrieved from",
        "url": "https://marketbusinessnews.com/financial-glossary/transformational-change/"
    }
];

module.exports = {title, introduce, titleList, termsList};