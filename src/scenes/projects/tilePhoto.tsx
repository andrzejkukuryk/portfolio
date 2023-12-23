import React from "react";
import styles from "./tilePhoto.module.scss";

interface TilePhotoProps {
  imgPrev: string;
  title: string;
}

export function TilePhoto({ imgPrev, title }: TilePhotoProps) {
  return (
    <img src={imgPrev} alt={`${title} preview`} className={styles.photo} />
  );
}
