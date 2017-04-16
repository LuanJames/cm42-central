import jasmineEnzyme from 'jasmine-enzyme';
import React from 'react';
import { shallow } from 'enzyme';

import StoryLink from 'components/stories/StoryLink';
import Icon from 'components/shared/Icon';

import Story from 'models/story.js';

const story = {
  id: 2,
  title: 'Story 2',
  created_at: sinon.stub(),
  get: sinon.stub(),
  humanAttributeName: sinon.stub().returns('Description'),
  escape: sinon.stub().returns('description'),
  hasNotes: sinon.stub().returns(false)
};

story.get.withArgs('requested_by_name').returns('Test');
story.get.withArgs('state').returns('unscheduled');
story.get.withArgs('story_type').returns('feature');

describe('<StoryLink />', function() {

  beforeEach(function() {
    jasmineEnzyme();
    I18n = {t: sinon.stub()};
    window.md = {makeHtml: sinon.stub()};
  });

  it("should have his id as content", function() {
    const wrapper = shallow( <StoryLink story={story} /> );
    expect(wrapper.find('.story-link')).toHaveText('#2');
  });

  describe(".story-link-icon", function() {

    it("should not exist when story's state is unscheduled", function() {
      const wrapper = shallow( <StoryLink story={story} /> );
      expect(wrapper.find(Icon).length).toBe(0);
    });

    it("should have two icons when state is delivered", function() {
      story.get.withArgs('state').returns('delivered');
      const wrapper = shallow( <StoryLink story={story} /> );
      expect(wrapper.find(Icon).length).toBe(2);
    });

    it("should have a material icon when state is accepted", function() {
      story.get.withArgs('state').returns('accepted');
      const wrapper = shallow( <StoryLink story={story} /> );
      expect(wrapper.find(Icon)).toHaveProp('material', 'check_circle');
    });

  });

});
