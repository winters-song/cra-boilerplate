# CRA boilerplate

Include:
- LESS
- Redux
- Route
- Ant Design


使用模板：
1. git clone下载后，修改当前远程仓库名，将origin改成其他。
2. 新建仓库，使用git remote add添加新的远程仓库，默认叫origin
3. 设置默认远程仓库并上传: git push -u [远程仓库] [分支]
```
cd your-cloned-project
git remote rename origin old-origin # 重命名原远程仓库为old-origin
git remote add origin https://github.com/your-username/your-new-repository.git # 添加你的新仓库作为origin
git push -u origin master
```