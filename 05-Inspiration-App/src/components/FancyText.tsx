import styles from "../styles/fancyText.module.css";

interface Props {
  title?: boolean;
  text: string;
  author?: string;
}

export default function FancyText({ title, text, author }: Props) {
  return title ? (
    <h1 className={styles.title}>{text}</h1>
  ) : (
    <>
      <h3 className={styles.cursive}>{text}</h3>
      <p>Author - {author}</p>
    </>
  );
}
