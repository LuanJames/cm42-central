import React from 'react';
import ReactDOM from 'react-dom';
import User from 'models/user';
import ColorPick from 'components/tag_groups/ColorPick';
import ProjectCollection from 'collections/project_collection';

export default () => {
  const bgColor = $('.panel-body').data('current_color') || "#F17013";

  ReactDOM.render(<ColorPick color = { bgColor }/>, document.getElementById('tag_group_color'));
}
