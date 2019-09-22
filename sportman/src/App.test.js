import React from 'react';
import ReactDOM from 'react-dom';
import App, {Routing} from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe(" Routing between pages", () => {

  it('should be by default on the home page', () => {
    const result = document.createElement('div');
    ReactDOM.render(<Routing currentPage={"Home Page"} setCurrentPage={() => {}} />, result)
    const homePage = result.querySelector('[data-testid="home-page"]')
    expect(homePage).not.toEqual(undefined)
  });

  it('should be on exercice page when current page is exerice 1', () => {
    const result = document.createElement('div');
    ReactDOM.render(<Routing currentPage={"EXERCISE 1"} setCurrentPage={() => {}} />, result)
    const exercisePage = result.querySelector('[data-testid="exercice-page"]')
    expect(exercisePage).not.toEqual(undefined)
  });
})
