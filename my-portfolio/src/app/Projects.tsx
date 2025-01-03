import Project from "./Project"
export default function Projects() {
    const foshowArray = ["Java", "HTML", "CSS", "JavaScript", "MySQL", "JDBC", "jQuery", "Tomcat", "Maven", "AWS", "Docker", "Kubernetes", "Apache", "reCAPTCHA"];
    const navigatorArray = ["Python", "Flask", "OpenStreetMap", "FlightAware API", "ClaudeAI API"];
    const searchEngineArray = ["React", "Node", "Python", "Flask", "OpenAI API"];
    const tldrifyArray = ["React", "Next", "Tailwind CSS", "Flask", "Python", "HuggingFace"];
    const portfolioArray = ["React", "Next", "Tailwind CSS", "HTML", "CSS", "TypeScript", "Vercel"];
    const messengerArray = ["Python", "Tkinter"]
    const diabetesClassifierArray = ["Python", "Sci-kit", "K-Nearest-Neighbors", "Logistic Regression", "Neural Network", "Decision Trees"];
    return (
        <div>
            <Project name="Calvin's Portfolio" link="https://github.com/cnguyen03/cnguyen03.github.io" description="My new portfolio website!" stack={portfolioArray} startMonth="December" startYear="2024" endMonth="December" endYear="2024"></Project>
            <Project name="Foshow" link="https://github.com/uci-jherold2-fall24-cs122b/2024-fall-cs-122b-foshow" description="Full-stack architecture of a movie catalog application, supporting ~20 medium features all protected by various security layers" stack={foshowArray} startMonth="September" startYear="2024" endMonth="December" endYear="2024"></Project>
            <Project name="Flight POI Navigator" link="" description="Novel flight navigator at Collins Aerospace 2024 FlightAware Hackathon, generating optimal flight paths and inferring POIs using user-provided airport names and declared locations" stack={navigatorArray} startMonth="November" startYear="2024" endMonth="November" endYear="2024"></Project>
            <Project name="Diabetes Classifier" link="" description="Applied model classifiers trained on the Diabetes 130-US Hospitals dataset" stack={diabetesClassifierArray} startMonth="April" startYear="2024" endMonth="June" endYear="2024"></Project>
            <Project name="TLDRify" link="https://github.com/cnguyen03/tldrify" description="An application that accepts a link from the user and provides a tldr (or summary) of the content present on the given page" stack={tldrifyArray} startMonth="June" startYear="2023" endMonth="July" endYear="2023"></Project>
            <Project name="ICSearch" link="https://github.com/cnguyen03/ICSearch" description="A search engine that scrapes pages from UCI's web domain" stack={searchEngineArray} startMonth="April" startYear="2023" endMonth="June" endYear="2023"></Project>
            <Project name="Class Messenger" link="" description="Messenger system utilizing web sockets and file system" stack={messengerArray} startMonth="January" startYear="2022" endMonth="March" endYear="2022"></Project>
        </div>
    )
}