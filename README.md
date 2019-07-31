### 项目启动
```bash
npm run start
```

### 使用React Hooks进行状态管理

- 依赖：react-model

- 使用示例
```tsx
import { useStore } from '../models'

const Example = () => {
  const [state, actions] = useStore('Test')
  return (
    <div onClick={() => actions.modify('hhhhh')}>{state.text}</div>
  )
}
```