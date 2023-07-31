var express = require('express');
var router = express.Router();

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
    }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('terms', { title, introduce, titleList, termsList });
});

module.exports = router;
