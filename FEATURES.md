# 选择困难症救星 - 功能特性

## ✨ 核心功能

### 🎁 盲盒抽奖系统
#git config --global user.name miaoda
git config --global user.name miaoda

1. **神秘盲盒界面**
   - 正面：显示礼物盒图标和"神秘盲盒"文字
   - 渐变背景：橙黄色渐变，营造温暖氛围
   - 提示文字："点击抽取惊喜"

2. **抽奖动画流程**
   ```
   点击按钮 → 盲盒摇晃(600ms) → 卡片翻转(600ms) → 闪光效果(800ms) → 显示结果
   ```

3. **结果展示**
   - 3D 翻转动画揭晓结果
   - 三个闪光特效依次出现
   - 缩放渐入动画展示推荐内容

### 📤 一键分享功能

#### 分享图片生成
- 使用 html2canvas 技术将推荐结果转换为图片
- 图片尺寸：600x400px，适合社交媒体分享
- 高清输出：scale=2，确保图片清晰度

#### 分享卡片设计
```

   选择困难症救星             │
   为你推荐                   │

   [推荐类型标签]             │

   推荐名称                   │
   推荐描述                   │

   扫码体验更多推荐           │

```

#### 操作按钮
- **再抽**：重置状态，继续抽取新的推荐
- **下载**：保存分享图片到本地
- **分享**：生成并下载分享图片

### 🎨 丰富的动画效果

#### 1. 盲盒摇晃动画（shake）
```css
/workspace/app-7jqpf6nxl341 + 轻微旋转
git config --global user.name miaoda600ms
git config --global user.name miaoda
```

#### 2. 3D 卡片翻转（flip）
```css
Y轴旋转 180度
git config --global user.name miaoda800ms
git config --global user.name miaoda
```

#### 3. 闪光庆祝效果（sparkle）
```css
.env .git .gitignore .rules .sync IMPROVEMENTS.md README.md biome.json components.json docs history index.html node_modules package.json pnpm-lock.yaml pnpm-workspace.yaml postcss.config.js public sgconfig.yml src tailwind.config.mjs tsconfig.app.json tsconfig.check.json tsconfig.json tsconfig.node.json vite.config.dev.ts vite.config.ts .env .git .gitignore .rules .sync IMPROVEMENTS.md README.md biome.json components.json docs history index.html node_modules package.json pnpm-lock.yaml pnpm-workspace.yaml postcss.config.js public sgconfig.yml src tailwind.config.mjs tsconfig.app.json tsconfig.check.json tsconfig.json tsconfig.node.json vite.config.dev.ts vite.config.ts 
git config --global user.name miaoda--------央
git config --global user.name miaoda0ms, 200ms, 400ms
```

#### 4. 缩放渐入动画（zoom-in）
```css
 0.8 倍放大到 1 倍
 0 到 1
git config --global user.name miaoda500ms
```

#### 5. 旋转加载动画（spin）
```css
360度持续旋转
git config --global user.name miaoda--------的加载提示
```

## 📱 移动端优化

### 响应式布局
| 元素 | 手机端 | 桌面端 |
|------|--------|--------|
| 标题 | text-3xl | text-6xl |
| 礼物盒图标 | h-20 w-20 | h-24 w-24 |
| 按钮文字 | 仅图标 | 图标+文字 |
| 网格布局 | 1列 | 2列 |
| 间距 | py-8 | py-16 |

### 触摸优化
- **按钮高度**：py-6（手机端 py-5）确保足够的触摸区域
- **图标大小**：h-4 w-4（手机端 h-3 w-3）适配小屏幕
- **文字大小**：使用 max-sm: 前缀自动调整

### 交互优化
- 禁用状态防止重复点击
- 清晰的视觉反馈
- 流畅的动画过渡

## 🎯 四大推荐类型

### 1. 美食推荐 🍽️
- **图标**：餐具（Utensils）
- **颜色**：橙黄色主色调
- **推荐数量**：10种美食类型
- **内容**：火锅、日式料理、川菜、西餐牛排等

### 2. 周末活动 📅
- **图标**：日历（Calendar）
- **颜色**：清新浅蓝色
- **推荐数量**：10种活动建议
- **内容**：户外徒步、看电影、逛博物馆、咖啡馆阅读等

### 3. 影视剧推荐 🎬
- **图标**：电影（Film）
- **颜色**：橙黄渐变
- **推荐数量**：10部经典影视剧
- **内容**：肖申克的救赎、盗梦空间、泰坦尼克号等

### 4. 书籍推荐 📚
- **图标**：书本（BookOpen）
- **颜色**：浅蓝渐变
- **推荐数量**：10本精选书籍
- **内容**：活着、百年孤独、三体、小王子等

## 🎓 使用说明

### 三步操作流程

#### 第一步：选择类型
- 浏览四个推荐卡片
- 选择你感兴趣的类型
- 查看卡片上的图标和标题

#### 第二步：抽取盲盒
1. 点击"抽盲盒"按钮
2. 观看盲盒摇晃动画
3. 等待卡片翻转
4. 欣赏闪光效果
5. 查看推荐结果

#### 第三步：分享结果
- **满意**：点击"分享"或"下载"保存图片
- **不满意**：点击"再抽"继续尝试
- **分享给朋友**：将下载的图片分享到社交媒体

## 💡 使用技巧

### 获得最佳体验
1. **多次尝试**：每次抽取都是随机的，多试几次
2. **保存喜欢的**：遇到喜欢的推荐立即下载保存
3. **分享乐趣**：将有趣的推荐分享给朋友
4. **组合使用**：可以同时抽取多个类型的推荐

### 适用场景
- 🍽️ **饭点纠结**：不知道吃什么时快速决策
- 🎬 **周末无聊**：寻找周末活动灵感
- 📺 **剧荒时刻**：发现新的影视作品
- 📖 **选书困难**：获取阅读推荐

## 🎨 设计亮点

### 视觉设计
- **明快配色**：橙黄色+浅蓝色，营造轻松愉悦氛围
- **大圆角**：20px 圆角，现代化设计风格
- **渐变背景**：柔和的渐变效果，提升视觉层次
- **阴影效果**：卡片阴影增强立体感

### 交互设计
- **即时反馈**：每个操作都有明确的视觉反馈
- **流畅动画**：精心设计的动画时序
- **防误操作**：抽取过程中禁用按钮
- **友好提示**：Toast 通知提供操作结果

### 用户体验
- **零学习成本**：直观的界面，无需说明即可使用
- **趣味性强**：盲盒机制增加期待感
- **社交属性**：一键分享功能促进传播
- **跨平台适配**：手机和桌面都有优秀体验

## 🚀 技术特性

### 性能优化
- **按需渲染**：分享卡片仅在需要时渲染
- **动画优化**：使用 CSS 动画，性能优秀
- **图片生成**：异步处理，不阻塞主线程

### 兼容性
- **现代浏览器**：支持 Chrome、Firefox、Safari、Edge
- **移动设备**：iOS 和 Android 完美适配
- **响应式设计**：自动适配各种屏幕尺寸

### 可维护性
- **组件化设计**：功能模块清晰分离
- **类型安全**：TypeScript 提供类型检查
- **代码规范**：通过 Biome lint 检查
