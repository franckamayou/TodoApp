namespace TodoApp.components
{
	import Todo = TodoApp.Todo;
	import DynamicComponent = weavejs.ui.DynamicComponent;
	import LinkableWatcher = weavejs.core.LinkableWatcher;
	import WeaveReactUtils = weavejs.util.WeaveReactUtils;

	export interface TodoItemProps
	{
		todo:Todo;
		onDestroyClick?: () => void;
	}

	export interface TodoItemState
	{
		isEditing: boolean;
	}

	export class TodoItem extends React.Component<TodoItemProps, TodoItemState>
	{
		private get todo()
		{
			return this.props.todo;
		}
		/**
		 * Copyright (c) 2014-2015, Facebook, Inc.
		 * All rights reserved.
		 *
		 * This source code is licensed under the BSD-style license found in the
		 * LICENSE file in the root directory of this source tree. An additional grant
		 * of patent rights can be found in the PATENTS file in the same directory.
		 */

		constructor(props:TodoItemProps)
		{
			super(props);
			DynamicComponent.setDependencies(this, [props.todo]);
			this.state = {
				isEditing: false
			};
		}

		private onToggleComplete=()=>
		{
			this.todo.complete.value  = !this.todo.complete.value;
		}

		private onDoubleClick=()=>
		{
			this.setState({isEditing: true});
		}

		/**
		 * Event handler called within TodoTextInput.
		 * Defining this here allows TodoTextInput to be used in multiple places
		 * in different ways.
		 * @param  {string} text
		 */
		private onSave=(text:string)=>
		{
			this.todo.text.value = text;
			this.setState({isEditing: false});
		}

		/**
		 * @return {object}
		 */
		render() {
			var input:JSX.Element;
			if (this.state.isEditing) {
				input =
					<TodoTextInput
						className="edit"
						onSave={this.onSave}
						value={this.todo.text.value}
					/>;
			}

			// List items should get the class 'editing' when editing
			// and 'completed' when marked as completed.
			// Note that 'completed' is a classification while 'complete' is a state.
			// This differentiation between classification and state becomes important
			// in the naming of view actions toggleComplete() vs. destroyCompleted().
			return (
				<li
					className={classNames({
					'completed': this.todo.complete.value,
					'editing': this.state.isEditing
					})}
				>
					<div className="view">
						<input
							className="toggle"
							type="checkbox"
							checked={this.todo.complete.value}
							onChange={this.onToggleComplete}
						/>
						<label onDoubleClick={this.onDoubleClick}>
							{this.todo.text.value}
						</label>
						<button className="destroy" onClick={this.props.onDestroyClick}/>
					</div>
					{input}
				</li>
			);
		}
	}
	Weave.registerClass(Todo, "weavejs.app.TodoApp.Todo", null, "Todo");
}

