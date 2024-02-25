import CourseCoal from "./CourseCoal";
import { type CourseGoal as CGoal } from "../App.tsx";

type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id:number)=>void
};
function CourseGoalList(props: CourseGoalListProps) {
  return (
    <ul>
      {props.goals.map((goal) => {
        return (
          <li key={goal.id}>
            <CourseCoal id={goal.id} title={goal.title} onDelete={props.onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseCoal>
          </li>
        );
      })}
    </ul>
  );
}

export default CourseGoalList;
