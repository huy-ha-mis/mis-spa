import List from './app/templates/components/List';
import ListItem from './app/templates/components/ListItem';
import Text from './app/templates/components/Text';
import TextImage from './app/templates/components/TextImage';

import Headline from './app/templates/components/Headline';
import Dashboard from './app/templates/components/Dashboard/Dashboard';

import Basic from './app/templates/pages/Basic';  
import General from './app/templates/pages/General';  


const config = {
  componentMappings: {
    'uob-lm:pages/basicReact': Basic,
    'uob-lm:pages/generalReact': General,

    'uob-lm:components/text': Text,
    'uob-lm:components/textImage': TextImage,
    'uob-lm:components/list': List,
    'uob-lm:components/listItem': ListItem,
    'uob-lm:components/headline': Headline,
    'uob-lm:components/dashboard': Dashboard
  },
};

export default config;
