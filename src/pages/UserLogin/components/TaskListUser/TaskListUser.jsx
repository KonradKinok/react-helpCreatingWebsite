import { useSelector } from 'react-redux';
import TasksUser from '../../pages/TasksUser';
import { selectAllTasks } from '../reduxUser/tasksUser/selectorsUser.tasks';
import css from './TaskListUser.module.scss';

export const TaskListUser = () => {
    const tasks = useSelector(selectAllTasks);

    return (
        <ul className={css.list}>
            {tasks.map(({ id, text }) => (
                <li key={id}>
                    <TasksUser id={id} text={text} />
                </li>
            ))}
        </ul>
    );
};
