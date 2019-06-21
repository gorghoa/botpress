"use strict";

function render(data) {
  return [{
    type: 'custom',
    module: 'custom-component',
    component: 'UpperCasedText',
    text: data.text
  }];
}

function renderElement(data, channel) {
  if (channel === 'web' || channel === 'api') {
    return render(data);
  }

  return [];
}

module.exports = {
  id: 'custom_uppercase',
  group: 'Custom Component',
  title: 'Upper Cased Text',
  jsonSchema: {
    description: 'The text will be send all in upper-case letters',
    type: 'object',
    required: ['text'],
    properties: {
      text: {
        type: 'string',
        title: 'Message'
      }
    }
  },
  uiSchema: {},
  computePreviewText: formData => 'Upper Case: ' + formData.text,
  renderElement: renderElement
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVwcGVyLWNhc2UtdGV4dC5qcyJdLCJuYW1lcyI6WyJyZW5kZXIiLCJkYXRhIiwidHlwZSIsIm1vZHVsZSIsImNvbXBvbmVudCIsInRleHQiLCJyZW5kZXJFbGVtZW50IiwiY2hhbm5lbCIsImV4cG9ydHMiLCJpZCIsImdyb3VwIiwidGl0bGUiLCJqc29uU2NoZW1hIiwiZGVzY3JpcHRpb24iLCJyZXF1aXJlZCIsInByb3BlcnRpZXMiLCJ1aVNjaGVtYSIsImNvbXB1dGVQcmV2aWV3VGV4dCIsImZvcm1EYXRhIl0sIm1hcHBpbmdzIjoiOztBQUFBLFNBQVNBLE1BQVQsQ0FBZ0JDLElBQWhCLEVBQXNCO0FBQ3BCLFNBQU8sQ0FDTDtBQUNFQyxJQUFBQSxJQUFJLEVBQUUsUUFEUjtBQUVFQyxJQUFBQSxNQUFNLEVBQUUsa0JBRlY7QUFHRUMsSUFBQUEsU0FBUyxFQUFFLGdCQUhiO0FBSUVDLElBQUFBLElBQUksRUFBRUosSUFBSSxDQUFDSTtBQUpiLEdBREssQ0FBUDtBQVFEOztBQUVELFNBQVNDLGFBQVQsQ0FBdUJMLElBQXZCLEVBQTZCTSxPQUE3QixFQUFzQztBQUNwQyxNQUFJQSxPQUFPLEtBQUssS0FBWixJQUFxQkEsT0FBTyxLQUFLLEtBQXJDLEVBQTRDO0FBQzFDLFdBQU9QLE1BQU0sQ0FBQ0MsSUFBRCxDQUFiO0FBQ0Q7O0FBRUQsU0FBTyxFQUFQO0FBQ0Q7O0FBRURFLE1BQU0sQ0FBQ0ssT0FBUCxHQUFpQjtBQUNmQyxFQUFBQSxFQUFFLEVBQUUsa0JBRFc7QUFFZkMsRUFBQUEsS0FBSyxFQUFFLGtCQUZRO0FBR2ZDLEVBQUFBLEtBQUssRUFBRSxrQkFIUTtBQUlmQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsV0FBVyxFQUFFLGlEQURIO0FBRVZYLElBQUFBLElBQUksRUFBRSxRQUZJO0FBR1ZZLElBQUFBLFFBQVEsRUFBRSxDQUFDLE1BQUQsQ0FIQTtBQUlWQyxJQUFBQSxVQUFVLEVBQUU7QUFDVlYsTUFBQUEsSUFBSSxFQUFFO0FBQ0pILFFBQUFBLElBQUksRUFBRSxRQURGO0FBRUpTLFFBQUFBLEtBQUssRUFBRTtBQUZIO0FBREk7QUFKRixHQUpHO0FBZWZLLEVBQUFBLFFBQVEsRUFBRSxFQWZLO0FBZ0JmQyxFQUFBQSxrQkFBa0IsRUFBRUMsUUFBUSxJQUFJLGlCQUFpQkEsUUFBUSxDQUFDYixJQWhCM0M7QUFpQmZDLEVBQUFBLGFBQWEsRUFBRUE7QUFqQkEsQ0FBakIiLCJzb3VyY2VSb290IjoiL1VzZXJzL3JlbmF1ZC9Db2RlL0JvdHByZXNzL2JvdHByZXNzL21vZHVsZXMvY3VzdG9tLWNvbXBvbmVudC9zcmMvYmFja2VuZCIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHJlbmRlcihkYXRhKSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgdHlwZTogJ2N1c3RvbScsXG4gICAgICBtb2R1bGU6ICdjdXN0b20tY29tcG9uZW50JyxcbiAgICAgIGNvbXBvbmVudDogJ1VwcGVyQ2FzZWRUZXh0JyxcbiAgICAgIHRleHQ6IGRhdGEudGV4dFxuICAgIH1cbiAgXVxufVxuXG5mdW5jdGlvbiByZW5kZXJFbGVtZW50KGRhdGEsIGNoYW5uZWwpIHtcbiAgaWYgKGNoYW5uZWwgPT09ICd3ZWInIHx8IGNoYW5uZWwgPT09ICdhcGknKSB7XG4gICAgcmV0dXJuIHJlbmRlcihkYXRhKVxuICB9XG5cbiAgcmV0dXJuIFtdXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpZDogJ2N1c3RvbV91cHBlcmNhc2UnLFxuICBncm91cDogJ0N1c3RvbSBDb21wb25lbnQnLFxuICB0aXRsZTogJ1VwcGVyIENhc2VkIFRleHQnLFxuICBqc29uU2NoZW1hOiB7XG4gICAgZGVzY3JpcHRpb246ICdUaGUgdGV4dCB3aWxsIGJlIHNlbmQgYWxsIGluIHVwcGVyLWNhc2UgbGV0dGVycycsXG4gICAgdHlwZTogJ29iamVjdCcsXG4gICAgcmVxdWlyZWQ6IFsndGV4dCddLFxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgIHRleHQ6IHtcbiAgICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICAgIHRpdGxlOiAnTWVzc2FnZSdcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHVpU2NoZW1hOiB7fSxcbiAgY29tcHV0ZVByZXZpZXdUZXh0OiBmb3JtRGF0YSA9PiAnVXBwZXIgQ2FzZTogJyArIGZvcm1EYXRhLnRleHQsXG4gIHJlbmRlckVsZW1lbnQ6IHJlbmRlckVsZW1lbnRcbn1cbiJdfQ==