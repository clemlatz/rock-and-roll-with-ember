import Route from '@ember/routing/route';

export default class StoriesRoute extends Route {
  resetController(controller) {
    controller.newStoryTitle = '';
    controller.newStoryYear = '';
    controller.isAddStoryFormDisplayed = false;
  }
}
