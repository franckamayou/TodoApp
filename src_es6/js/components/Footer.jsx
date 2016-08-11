import * as React from "react";
import TodoActions from "../actions/TodoActions";
export default class Footer extends React.Component {
    constructor(props) {
        super(props);
        /**
         * Event handler to delete all completed TODOs
         */
        this._onClearCompletedClick = () => {
            TodoActions.destroyCompleted();
        };
    }
    render() {
        var total = this.props.allTodos.length;
        if (total === 0) {
            return null;
        }
        var completed = 0;
        this.props.allTodos.forEach((todo) => {
            if (todo.complete)
                completed++;
        });
        var itemsLeft = total - completed;
        var itemsLeftPhrase = itemsLeft === 1 ? ' item ' : ' items ';
        itemsLeftPhrase += 'left';
        // Undefined and thus not rendered if no completed items are left.
        var clearCompletedButton;
        if (completed) {
            clearCompletedButton =
                <button id="clear-completed" onClick={this._onClearCompletedClick}>
					Clear completed ({completed})
				</button>;
        }
        return (<footer id="footer">
				<span id="todo-count">
					<strong>
						{itemsLeft}
					</strong>
						{itemsLeftPhrase}
				</span>
				{clearCompletedButton}
			</footer>);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9vdGVyLmpzeCIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyY190cy9qcy9jb21wb25lbnRzL0Zvb3Rlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQU8sS0FBSyxLQUFLLE1BQU0sT0FBTztPQUN2QixXQUFXLE1BQU0sd0JBQXdCO0FBYWhELG9DQUFvQyxLQUFLLENBQUMsU0FBUztJQUVsRCxZQUFZLEtBQWlCO1FBRTVCLE1BQU0sS0FBSyxDQUFDLENBQUM7UUFHZDs7V0FFRztRQUNILDJCQUFzQixHQUFDO1lBRXRCLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ2hDLENBQUMsQ0FBQTtJQVJELENBQUM7SUFVRCxNQUFNO1FBRUwsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBRXZDLEVBQUUsQ0FBQyxDQUFDLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDYixDQUFDO1FBRUQsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRWxCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQWM7WUFDMUMsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDaEIsU0FBUyxFQUFFLENBQUM7UUFDZCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksU0FBUyxHQUFHLEtBQUssR0FBRyxTQUFTLENBQUM7UUFDbEMsSUFBSSxlQUFlLEdBQUcsU0FBUyxLQUFLLENBQUMsR0FBRyxRQUFRLEdBQUcsU0FBUyxDQUFDO1FBQzdELGVBQWUsSUFBSSxNQUFNLENBQUM7UUFFMUIsa0VBQWtFO1FBQ2xFLElBQUksb0JBQWdDLENBQUM7UUFDckMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNmLG9CQUFvQjtnQkFDbkIsQ0FBQyxNQUFNLENBQ04sRUFBRSxDQUFDLGlCQUFpQixDQUNwQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FDckM7c0JBQWlCLENBQUMsU0FBUyxDQUFDO0lBQzdCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDWixDQUFDO1FBRUQsTUFBTSxDQUFDLENBQ04sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FDbEI7SUFBQSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUNwQjtLQUFBLENBQUMsTUFBTSxDQUNOO01BQUEsQ0FBQyxTQUFTLENBQ1g7S0FBQSxFQUFFLE1BQU0sQ0FDUDtNQUFBLENBQUMsZUFBZSxDQUNsQjtJQUFBLEVBQUUsSUFBSSxDQUNOO0lBQUEsQ0FBQyxvQkFBb0IsQ0FDdEI7R0FBQSxFQUFFLE1BQU0sQ0FBQyxDQUNULENBQUM7SUFDSCxDQUFDO0FBQ0YsQ0FBQztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVG9kb0FjdGlvbnMgZnJvbSBcIi4uL2FjdGlvbnMvVG9kb0FjdGlvbnNcIjtcbmltcG9ydCB7VG9kb1N0YXRlfSBmcm9tIFwiLi9Ub2RvQXBwXCI7XG5cbmludGVyZmFjZSBGb290ZXJQcm9wc1xue1xuXHRhbGxUb2RvczpUb2RvU3RhdGVbXTtcbn1cblxuaW50ZXJmYWNlIEZvb3RlclN0YXRlXG57XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PEZvb3RlclByb3BzLCBGb290ZXJTdGF0ZT5cbntcblx0Y29uc3RydWN0b3IocHJvcHM6Rm9vdGVyUHJvcHMpXG5cdHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdH1cblxuXHQvKipcblx0ICogRXZlbnQgaGFuZGxlciB0byBkZWxldGUgYWxsIGNvbXBsZXRlZCBUT0RPc1xuXHQgKi9cblx0X29uQ2xlYXJDb21wbGV0ZWRDbGljaz0oKT0+XG5cdHtcblx0XHRUb2RvQWN0aW9ucy5kZXN0cm95Q29tcGxldGVkKCk7XG5cdH1cblxuXHRyZW5kZXIoKVxuXHR7XG5cdFx0dmFyIHRvdGFsID0gdGhpcy5wcm9wcy5hbGxUb2Rvcy5sZW5ndGg7XG5cblx0XHRpZiAodG90YWwgPT09IDApIHtcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblxuXHRcdHZhciBjb21wbGV0ZWQgPSAwO1xuXG5cdFx0dGhpcy5wcm9wcy5hbGxUb2Rvcy5mb3JFYWNoKCh0b2RvOlRvZG9TdGF0ZSkgPT4ge1xuXHRcdFx0aWYodG9kby5jb21wbGV0ZSlcblx0XHRcdFx0Y29tcGxldGVkKys7XG5cdFx0fSk7XG5cblx0XHR2YXIgaXRlbXNMZWZ0ID0gdG90YWwgLSBjb21wbGV0ZWQ7XG5cdFx0dmFyIGl0ZW1zTGVmdFBocmFzZSA9IGl0ZW1zTGVmdCA9PT0gMSA/ICcgaXRlbSAnIDogJyBpdGVtcyAnO1xuXHRcdGl0ZW1zTGVmdFBocmFzZSArPSAnbGVmdCc7XG5cblx0XHQvLyBVbmRlZmluZWQgYW5kIHRodXMgbm90IHJlbmRlcmVkIGlmIG5vIGNvbXBsZXRlZCBpdGVtcyBhcmUgbGVmdC5cblx0XHR2YXIgY2xlYXJDb21wbGV0ZWRCdXR0b246SlNYLkVsZW1lbnQ7XG5cdFx0aWYgKGNvbXBsZXRlZCkge1xuXHRcdFx0Y2xlYXJDb21wbGV0ZWRCdXR0b24gPVxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0aWQ9XCJjbGVhci1jb21wbGV0ZWRcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RoaXMuX29uQ2xlYXJDb21wbGV0ZWRDbGlja30+XG5cdFx0XHRcdFx0Q2xlYXIgY29tcGxldGVkICh7Y29tcGxldGVkfSlcblx0XHRcdFx0PC9idXR0b24+O1xuXHRcdH1cblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8Zm9vdGVyIGlkPVwiZm9vdGVyXCI+XG5cdFx0XHRcdDxzcGFuIGlkPVwidG9kby1jb3VudFwiPlxuXHRcdFx0XHRcdDxzdHJvbmc+XG5cdFx0XHRcdFx0XHR7aXRlbXNMZWZ0fVxuXHRcdFx0XHRcdDwvc3Ryb25nPlxuXHRcdFx0XHRcdFx0e2l0ZW1zTGVmdFBocmFzZX1cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHR7Y2xlYXJDb21wbGV0ZWRCdXR0b259XG5cdFx0XHQ8L2Zvb3Rlcj5cblx0XHQpO1xuXHR9XG59Il19