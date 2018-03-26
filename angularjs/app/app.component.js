import './styles/main.scss';
import './styles/ng-cloak.scss';

const AppComponent = {
  template: `
    <header-component></header-component>
    <button type="button" class="btn"><a href="#!/">Main page</a></button>
    <button type="button" class="btn"><a href="#!/addTask">Add new Task</a></button>
    <ng-view></ng-view>
  `
};

export default AppComponent;
