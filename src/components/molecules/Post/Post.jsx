import React from 'react';
import Card from '../Card/Card';
import Button from '../../atoms/Button/Button';
import styles from './Post.module.css';

const Post = ({ id, author, avatar, content, date, likes }) => {
  return (
    <div className={styles.postWrapper}>
      <Card>
        <div className={styles.header}>
          <img src={avatar} alt={author} className={styles.avatar} />
          <div className={styles.meta}>
            <h3 className={styles.author}>{author}</h3>
            <span className={styles.date}>{date}</span>
          </div>
        </div>
        <p className={styles.content}>{content}</p>
        <div className={styles.footer}>
          <span className={styles.likes}>Лайки: {likes}</span>
          <div className={styles.actions}>
            <Button variant="primary">Лайк</Button>
            <Button variant="secondary">Коментувати</Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Post;
