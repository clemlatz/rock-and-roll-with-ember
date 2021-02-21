import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { Story } from 'rock-and-roll-with-ember/routes/authors';

export default class AuthorsAuthorStoriesController extends Controller {
  @tracked isAddStoryFormDisplayed = false;
  @tracked newStoryTitle = '';
  @tracked newStoryYear = '';

  @action
  updateNewStoryTitle(event) {
    this.newStoryTitle = event.target.value;
  }

  @action
  updateNewStoryYear(event) {
    this.newStoryYear = event.target.value;
  }

  @action
  createStory() {
    const story = new Story({
      title: this.newStoryTitle,
      year: this.newStoryYear,
      author: this.model,
    });
    this.model.stories = [...this.model.stories, story];
    this._resetForm();
    this.isAddStoryFormDisplayed = false;
  }

  @action
  cancelStoryCreation() {
    this._resetForm();
    this.isAddStoryFormDisplayed = false;
  }

  _resetForm() {
    this.newStoryTitle = '';
    this.newStoryYear = '';
  }
}
