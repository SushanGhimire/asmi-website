import PageHeader from "../../common/PageHeader";
import TeamMembers from "./integrate/TeamMembers";

function About() {
  return (
    <div>
      <PageHeader
        title="We are a team of passionate builders."
        des="We are avid fans of our customers."
        des_two="We create what will make a better future."
        des_three="We are ASMI"
      />
      <TeamMembers />
    </div>
  );
}

export default About;
