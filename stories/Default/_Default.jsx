import { DemoTab } from 'react-demo-tab';

import Demo from './Default.demozap';

const code = `const Default = () => <h3>DemoZap ⚡</h3>;

export default Default;
`;

export const _Default = () => (
  <DemoTab code={code} codeExt="jsx">
    <Demo />
  </DemoTab>
);
