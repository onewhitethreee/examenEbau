import { shuffle } from '../utils/jsUtils'

export type Friend = {
  title: string
  description?: string
  website: string
  avatar?: any
}

export const Friends: Friend[] = [
  {
    title: '峰华前端工程师',
    description: '致力于帮助你以最直观、最快速的方式学会前端开发',
    website: 'https://zxuqian.cn',
    avatar: require('./avatar/zxuqian.png'),
  },
  {
    title: 'Mas0n',
    description: '梦想是咸鱼',
    website: 'https://blog.shi1011.cn/',
    avatar: require('./avatar/mas0n.png'),
  },
  {
    title: 'Ninjee',
    description: '个人主义的前端篮子',
    website: 'https://ninjee.co',
    avatar: require('./avatar/ninjee.png'),
  },
  {
    title: 'KnIFeR博客站',
    description: 'Web开发学习者，分享编程相关的技术和见闻',
    website: 'http://knifer.fun/',
    avatar: require('./avatar/knifer.png'),
  },
  {
    title: 'Pincman',
    description: '中年老码农,专注于全栈开发与教学',
    website: 'https://pincman.com/',
    avatar: require('./avatar/pincman.png'),
  },
  {
    title: 'ChiroPhy',
    description: '不会写代码的老师不是好二次元',
    website: 'https://chirophy.online/',
    avatar: require('./avatar/shiro.png'),
  },
]

export function sortFriend() {
  let result = Friends

  // shuffle(result)
  return result
}
