import styles from "./styles/modal.module.css";

export default function Modal({ setShowModal, fn }) {
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <span>آیا مطمئن هستید که می‌خواهید حذف کنید؟</span>

        <div className={styles.modalActions}>
          <button
            className={styles.cancelBtn}
            onClick={() => setShowModal(false)}
          >
            نه
          </button>

          <button className={styles.confirmBtn} onClick={fn}>
            بله، حذف کن
          </button>
        </div>
      </div>
    </div>
  );
}
