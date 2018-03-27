export default class TaskListController {
  constructor(model, TodoService, PaginationService) {
    this.todo = model;
    this.showComplete = false;
    this.todoService = TodoService;
    this.paginationService = PaginationService;
  }

  $onInit() {
    this.pager = {};
    this.initController();
  }

  initController() {
    // initialize to page 1
    this.setPage(1);
  }

  setPage(page) {
    if (page < 1 || page > this.pager.totalPages) return;
    // get pager object from service
    this.pager = this.paginationService.getPagination(this.todo.items.length, page);
    // get current page of items
    this.items = this.dummyItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
}
