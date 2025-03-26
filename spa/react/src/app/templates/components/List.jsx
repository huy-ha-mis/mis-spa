import {
  ComponentHelper,
  EditableArea,
  EditableComponent,
} from '@magnolia/react-editor';
import PropTypes from 'prop-types';

const List = ({ title, theme, items }) => {
  const getComponents = () => {
    return (
      items?.['@nodes']?.map((nodeName) => {
        return items[nodeName];
      }) || []
    );
  };
  return (
    <div
      className={ComponentHelper.classnames([
        'px-8',
        'py-6',
        { 'bg-dark-teal': theme === 'dark' },
      ])}
    >
      <p
        className={ComponentHelper.classnames([
          'pb-4',
          {
            'text-light-green': theme === 'dark',
            'text-dark-teal': theme === 'light',
          },
        ])}
      >
        {title}
      </p>
      {items && (
        <EditableArea content={items} elementType='ul' className='space-y-2'>
          {getComponents().map((component) => {
            return (
              <li key={component['@name']}>
                <EditableComponent content={component} />
              </li>
            );
          })}
        </EditableArea>
      )}
    </div>
  );
};

List.propTypes = {
  title: PropTypes.string,
  theme: PropTypes.string,
  items: PropTypes.object,
};

export default List;
