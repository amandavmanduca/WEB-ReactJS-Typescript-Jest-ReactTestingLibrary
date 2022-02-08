import styles from "./index.module.css"

const Text = ({ children, type }: any) => {
    return (
        <>
            {type === "h1" && (
                <p className={styles.h1}>{children}</p>
            )}
            {type === "h2" && (
                <p className={styles.h2}>{children}</p>
            )}
            {type === "h3" && (
                <p className={styles.h3}>{children}</p>
            )}
            {type === "h4" && (
                <p className={styles.h4}>{children}</p>
            )}
            {type === "h5" && (
                <p className={styles.h5}>{children}</p>
            )}
            {type === "p" && (
                <p className={styles.p}>{children}</p>
            )}
            {type === "buttonText" && (
                <p className={styles.buttonText}>{children}</p>
            )}
            {type === "secondaryButtonText" && (
                <p className={styles.secondaryButtonText}>{children}</p>
            )}
        </>
    )
}

export default Text