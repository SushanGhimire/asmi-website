import PageHeader from "../../common/PageHeader";
import TeamMembers from "./integrate/TeamMembers";

function About() {
  return (
    <div>
      <PageHeader
        title="That's Us. How about that."
        // des="AI to Transform Video."
      />
      <TeamMembers />
    </div>
  );
}

export default About;
