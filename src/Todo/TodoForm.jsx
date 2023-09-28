import React, { memo } from 'react';
import PlusIcon from '../../public/assets/icons/plus.svg';
import { TodoContext } from '../context/todoContext';

function TodoForm() {
  console.log('Form render');
  return (
    <TodoContext.Consumer>
      {({ handleSubmit, ref }) => (
        <section>
          <form className="flex" onSubmit={handleSubmit}>
            <label htmlFor="todoText">
              <span className="sr-only">todo inputbox</span>
              <input
                ref={ref}
                type="text"
                id="todoText"
                className="rounded-l-md w-full bg-transparent"
                placeholder="Todo..."
              />
            </label>

            <button type="submit" className="btn primary rounded-l-none w-max">
              <PlusIcon className="w-5 aspect-square" strokeWidth="2" />
              <span>Add Todo</span>
            </button>
          </form>
        </section>
      )}
    </TodoContext.Consumer>
  );
}

export default memo(TodoForm);
