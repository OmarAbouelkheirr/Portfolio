export interface CourseItem {
  id: string
  title: string
  lessonsCount: string
  category: string
  summary: string
  tags: string[]
  playlistUrl: string
}

export const coursesCatalog: CourseItem[] = [
  {
    id: 'deep-learning',
    title: 'Neural Networks & Deep Learning',
    lessonsCount: '8 Lessons',
    category: 'AI & Deep Learning',
    summary: 'Structured computer science course covering neural network foundations, Perceptrons, backpropagation algorithms, and Autoencoders.',
    tags: ['Neural Networks', 'Backpropagation', 'Perceptron', 'Autoencoders', 'Python'],
    playlistUrl: 'https://www.youtube.com/playlist?list=PLAooZ0tC0m8QOUBWNjZnjjfmuldCVa4U1',
  },
  {
    id: 'big-data',
    title: 'Big Data — Indexing & Retrieval',
    lessonsCount: '6 Lessons',
    category: 'Computer Science',
    summary: 'Computer science course on big data architecture, storage indexing, multi-level indexes, and large-scale data retrieval.',
    tags: ['Big Data', 'Indexing & Retrieval', 'Database Systems', 'CS Course'],
    playlistUrl: 'https://www.youtube.com/playlist?list=PLAooZ0tC0m8SCSXfv7d4NJPJG6tCTWnn9',
  },
  {
    id: 'file-processing',
    title: 'File Processing & Organization',
    lessonsCount: '5 Lessons',
    category: 'Computer Science',
    summary: 'Core CS concepts covering physical file structures, primary and multi-level indexing, and storage optimization.',
    tags: ['File Systems', 'Primary Indexing', 'Multi-level Index', 'Storage'],
    playlistUrl: 'https://www.youtube.com/playlist?list=PLAooZ0tC0m8TBniehppTtfPN7aY4ztB0M',
  },
  {
    id: 'pyrogram-bots',
    title: 'Telegram Bot Development with Pyrogram',
    lessonsCount: '8 Lessons',
    category: 'Python & Automation',
    summary: 'Full practical course on building asynchronous Telegram bots, custom command handlers, and Telegram API integrations using Python.',
    tags: ['Python', 'Pyrogram', 'Async', 'Telegram API', 'Automation'],
    playlistUrl: 'https://www.youtube.com/playlist?list=PLAooZ0tC0m8SluDtX4zBiTm8dZQYSj2Q_',
  },
  {
    id: 'assembly-x86',
    title: 'Assembly Language x86 (8086)',
    lessonsCount: 'Low-Level Systems',
    category: 'Systems Programming',
    summary: 'Low-level system concepts explaining x86 CPU registers, memory layout, and assembly instructions for beginners.',
    tags: ['Assembly x86', '8086', 'CPU Registers', 'Low-Level'],
    playlistUrl: 'https://www.youtube.com/playlist?list=PLAooZ0tC0m8QCnAYdqW1JGKNdPfp55hkj',
  },
]

