

import { IContentLoaderProps } from '..'
import ContentLoader, { Rect } from '../ContentLoader'

const ReactContentLoaderListStyle: React.FC<IContentLoaderProps> = props => (
  <ContentLoader viewBox="0 0 400 110" width={400} height={110} {...props}>
    <Rect x="0" y="0" rx="3" ry="3" width="250" height="10" />
    <Rect x="20" y="20" rx="3" ry="3" width="220" height="10" />
    <Rect x="20" y="40" rx="3" ry="3" width="170" height="10" />
    <Rect x="0" y="60" rx="3" ry="3" width="250" height="10" />
    <Rect x="20" y="80" rx="3" ry="3" width="200" height="10" />
    <Rect x="20" y="100" rx="3" ry="3" width="80" height="10" />
  </ContentLoader>
)

export default ReactContentLoaderListStyle
