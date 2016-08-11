import * as React from "react";
import TodoItem from "./TodoItem";
import TodoActions from "../actions/TodoActions";
export default class MainSection extends React.Component {
    constructor(props) {
        super(props);
        this.onToggleCompleteAll = () => {
            TodoActions.toggleCompleteAll();
        };
        this.onDestroyClick = (id) => {
            TodoActions.destroy(id);
        };
    }
    get allTodos() {
        return this.props.allTodos;
    }
    render() {
        var todos = this.props.allTodos.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} onDestroyClick={() => this.onDestroyClick(todo.id)}/>;
        });
        return (<section id="main">
				<input id="toggle-all" type="checkbox" onChange={this.onToggleCompleteAll} checked={this.props.areAllComplete}/>
				<label htmlFor="toggle-all">Mark all as complete</label>
				<ul id="todo-list">{todos}</ul>
			</section>);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpblNlY3Rpb24uanN4Iiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjX3RzL2pzL2NvbXBvbmVudHMvTWFpblNlY3Rpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJPQUFPLEtBQUssS0FBSyxNQUFNLE9BQU87T0FDdkIsUUFBUSxNQUFNLFlBQVk7T0FDMUIsV0FBVyxNQUFNLHdCQUF3QjtBQWNoRCx5Q0FBeUMsS0FBSyxDQUFDLFNBQVM7SUFPdkQsWUFBWSxLQUFzQjtRQUVqQyxNQUFNLEtBQUssQ0FBQyxDQUFDO1FBR04sd0JBQW1CLEdBQUM7WUFFM0IsV0FBVyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDakMsQ0FBQyxDQUFBO1FBRU8sbUJBQWMsR0FBQyxDQUFDLEVBQVM7WUFFaEMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6QixDQUFDLENBQUE7SUFWRCxDQUFDO0lBUkQsSUFBWSxRQUFRO1FBRW5CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztJQUM1QixDQUFDO0lBaUJELE1BQU07UUFFTCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFjO1lBQ2xELE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbEcsQ0FBQyxDQUFDLENBQUM7UUFFSCxNQUFNLENBQUMsQ0FDTixDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUNqQjtJQUFBLENBQUMsS0FBSyxDQUNMLEVBQUUsQ0FBQyxZQUFZLENBQ2YsSUFBSSxDQUFDLFVBQVUsQ0FDZixRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FDbkMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsRUFFcEM7SUFBQSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLG9CQUFvQixFQUFFLEtBQUssQ0FDdkQ7SUFBQSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsRUFBRSxDQUMvQjtHQUFBLEVBQUUsT0FBTyxDQUFDLENBQ1YsQ0FBQztJQUNILENBQUM7QUFDRixDQUFDO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUb2RvSXRlbSBmcm9tIFwiLi9Ub2RvSXRlbVwiO1xuaW1wb3J0IFRvZG9BY3Rpb25zIGZyb20gXCIuLi9hY3Rpb25zL1RvZG9BY3Rpb25zXCI7XG5pbXBvcnQge1RvZG9TdGF0ZX0gZnJvbSBcIi4vVG9kb0FwcFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1haW5TZWN0aW9uUHJvcHNcbntcblx0YWxsVG9kb3M6VG9kb1N0YXRlW107XG5cdGFyZUFsbENvbXBsZXRlOmJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWFpblNlY3Rpb25TdGF0ZVxue1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5TZWN0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PE1haW5TZWN0aW9uUHJvcHMsIE1haW5TZWN0aW9uU3RhdGU+XG57XG5cdHByaXZhdGUgZ2V0IGFsbFRvZG9zKClcblx0e1xuXHRcdHJldHVybiB0aGlzLnByb3BzLmFsbFRvZG9zO1xuXHR9XG5cblx0Y29uc3RydWN0b3IocHJvcHM6TWFpblNlY3Rpb25Qcm9wcylcblx0e1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXG5cdHByaXZhdGUgb25Ub2dnbGVDb21wbGV0ZUFsbD0oKT0+XG5cdHtcblx0XHRUb2RvQWN0aW9ucy50b2dnbGVDb21wbGV0ZUFsbCgpO1xuXHR9XG5cblx0cHJpdmF0ZSBvbkRlc3Ryb3lDbGljaz0oaWQ6c3RyaW5nKT0+XG5cdHtcblx0XHRUb2RvQWN0aW9ucy5kZXN0cm95KGlkKTtcblx0fVxuXG5cdHJlbmRlcigpXG5cdHtcblx0XHR2YXIgdG9kb3MgPSB0aGlzLnByb3BzLmFsbFRvZG9zLm1hcCgodG9kbzpUb2RvU3RhdGUpID0+IHtcblx0XHRcdHJldHVybiA8VG9kb0l0ZW0ga2V5PXt0b2RvLmlkfSB0b2RvPXt0b2RvfSBvbkRlc3Ryb3lDbGljaz17KCkgPT4gdGhpcy5vbkRlc3Ryb3lDbGljayh0b2RvLmlkKX0vPjtcblx0XHR9KTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8c2VjdGlvbiBpZD1cIm1haW5cIj5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0aWQ9XCJ0b2dnbGUtYWxsXCJcblx0XHRcdFx0XHR0eXBlPVwiY2hlY2tib3hcIlxuXHRcdFx0XHRcdG9uQ2hhbmdlPXt0aGlzLm9uVG9nZ2xlQ29tcGxldGVBbGx9XG5cdFx0XHRcdFx0Y2hlY2tlZD17dGhpcy5wcm9wcy5hcmVBbGxDb21wbGV0ZX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGxhYmVsIGh0bWxGb3I9XCJ0b2dnbGUtYWxsXCI+TWFyayBhbGwgYXMgY29tcGxldGU8L2xhYmVsPlxuXHRcdFx0XHQ8dWwgaWQ9XCJ0b2RvLWxpc3RcIj57dG9kb3N9PC91bD5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQpO1xuXHR9XG59Il19