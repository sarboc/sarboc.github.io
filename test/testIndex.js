import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

var testsContext = require.context('.', true, /Spec.(js|jsx)$/)
testsContext.keys().forEach(testsContext)
