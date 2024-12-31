import Label from './Label'
import Text from './Text'
import Experiences from './Experiences'
import Education from './Education'
import Projects from './Projects'

export default function Content() {
    return (
        <div className="flex flex-col justify-center px-40">
            <Label name="about"></Label>
            <Text label="about"></Text>
            <Label name="education"></Label>
            <Education school="University of California, Irvine" image="/UCI_logo.svg" major="Computer Science, B.S." startMonth="September" startYear="2021" endMonth="March" endYear="2025"></Education>
            <Label name="work experience"></Label>
            <Experiences></Experiences>
            <Label name="projects"></Label>
            <Projects></Projects>
            {/* <Projects></Projects> */}
        </div>
    )
}