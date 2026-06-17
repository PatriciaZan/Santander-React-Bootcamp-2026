import styles from "../styles/color.module.css";

interface Props {
  value: string;
}

export default function Color({ value }: Props) {
  return <div className={styles.color} style={{ backgroundColor: value }} />;
}
