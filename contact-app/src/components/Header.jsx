import styles from "./modulesCss/headerStyle.module.css"
function Header() {
  return (
    <header className={styles.header}>
        <h1>برنامه مدیریت مخاطبین </h1>
        <div className={styles.container}>
            <div className={styles.inputsContainer}>
                <input type="text" placeholder="نام و نام خانوادگی ..." minLength={7} />
                <input type="text" placeholder="شماره تماس ..." minLength={11} maxLength={11} />
                <input type="email" placeholder="ایمیل ..." minLength={7} />
            </div>
            <button>افزودن مخاطب </button>
        </div>
    </header>
  )
}

export default Header