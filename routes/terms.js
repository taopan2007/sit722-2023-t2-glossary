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
    }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.send('respond with a resource');
    res.render('terms', { title, introduce, titleList, termsList });
});

module.exports = router;
