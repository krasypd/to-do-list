const ipt = document.querySelector('.todo-input');
const btn = document.querySelector('.todo-button');
const ul = document.querySelector('.todo-list');

function addTodo(event) {
	event.preventDefault();
	if (ipt.value) {
		const todoDiv = document.createElement('div');
		const todoli = document.createElement('li');
		const doneBtn = document.createElement('button');
		const removeBtn = document.createElement('button');

		todoDiv.classList.add('todo');
		todoli.classList.add('to-do-item');
		doneBtn.classList.add('complete-btn');
		removeBtn.classList.add('remove-btn');

		todoli.innerHTML = ipt.value;
		removeBtn.innerHTML = 'remove';
		doneBtn.innerHTML = 'done';

		todoDiv.append(todoli, doneBtn, removeBtn);
		ul.prepend(todoDiv);

		ipt.value = '';
	}
}

function enterTodo(event) {
	event.preventDefault();
	if (event.key === 'Enter') {
		// console.log(ipt.value);
		if (ipt.value) {
			const todoDiv = document.createElement('div');
			const todoli = document.createElement('li');
			const doneBtn = document.createElement('button');
			const removeBtn = document.createElement('button');

			todoDiv.classList.add('todo');
			todoli.classList.add('to-do-item');
			doneBtn.classList.add('complete-btn');
			removeBtn.classList.add('remove-btn');

			todoli.innerHTML = ipt.value;
			removeBtn.innerHTML = 'remove';
			doneBtn.innerHTML = 'done';

			todoDiv.append(todoli, doneBtn, removeBtn);
			ul.prepend(todoDiv);

			todoli.addEventListener('click', done);

			ipt.value = '';
		}
	}
}

function removeCheck(event) {
	const item = event.target;
	if (item.classList[0] === 'remove-btn') {
		const todo = item.parentElement;
		todo.classList.add('fall');
		todo.addEventListener('transitionend', function() {
			todo.remove();
		});
	}
	if (item.classList[0] === 'complete-btn') {
		const todo = item.parentElement;
		todo.classList.toggle('completed');
		const dBTN = todo.children[1];
		const rBTN = todo.children[2];
		dBTN.remove();
		rBTN.remove();
	}
	ipt.value = '';
}

ul.addEventListener('click', removeCheck);
btn.addEventListener('click', addTodo);
// ipt.addEventListener('keydown', enterTodo);
