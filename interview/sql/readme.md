## 字节难度的sql知识
<!-- 关系型数据库 行列 -->
写一条MySQL sql 创建一个表 avatar 用户头像
    <!-- 索引 要建 为了查询 但是也不能乱建 --> 
    <!-- 思考以后的查询需求 先写出select语句 -->
        <!-- 主键索引 Primary Key  查询速度最快-->
        <!-- 普通索引 KEY 为了查询 首页文章列表/个人主页都要根据用户id查询头像 -->
        <!-- 唯一索引 UNIQUE KEY 为了查询 但是不能重复  -->
        <!-- 联合索引 多个字段的索引 -->
    CREATE TABLE `user` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
        `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
        PRIMARY KEY (`id`),
        UNIQUE KEY `name` (`name`)
    ) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    CREATE TABLE `avatar` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `minitype` varchar(255) DEFAULT NULL,
        `filename` varchar(255) DEFAULT NULL,
        `size` int(11) DEFAULT NULL,
        `userId` int(11) DEFAULT NULL,
        PRIMARY KEY (`id`), // 主键
        KEY `userId` (`userId`) // 一般索引
        CONSTRAINT `avatar_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) // 外键约束
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

    CREATE TABLE `post` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
        `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
        `userId` int(11) DEFAULT NULL,
        PRIMARY KEY (`id`),
        KEY `userId` (`userId`),
        CONSTRAINT `post_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
    ) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

    CREATE TABLE `comment` (
        `id` int(11) NOT NULL AUTO_INCREMENT,
        `content` longtext NOT NULL,
        `postId` int(11) NOT NULL,
        `userId` int(11) NOT NULL,
        `parentId` int(11) DEFAULT NULL,
        PRIMARY KEY (`id`),
        KEY `userId` (`userId`),
        KEY `postId` (`postId`),
        KEY `parentId` (`parentId`),
        CONSTRAINT `comment_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
    )

    CREATE TABLE `file` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `originalname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mimetype` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `filename` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `size` int(11) NOT NULL,
  `postId` int(11) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `width` smallint(6) NOT NULL,
  `height` smallint(6) NOT NULL,
  `metadata` json DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `postId` (`postId`),
  KEY `userId` (`userId`),
  CONSTRAINT `file_ibfk_1` FOREIGN KEY (`postId`) REFERENCES `post` (`id`),
  CONSTRAINT `file_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE `user_like_post` (
  `userId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  PRIMARY KEY (`userId`,`postId`),// 联合索引
  KEY `postId` (`postId`),
  CONSTRAINT `user_like_post_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user` (`id`),
  CONSTRAINT `user_like_post_ibfk_2` FOREIGN KEY (`postId`) REFERENCES `post` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

- 部署
    - 本地部署
        测试数据和服务端代码 blog.sql 
    - 远程部署
        阿里云服务器 blog.sql 
    - 分布式部署
        blog.sql MySQL 运行一下