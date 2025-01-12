import variables from '../../assets/scss/Footer.module.scss';

export function Footer(){
    return(
        <footer className = {variables.Footer}>
            <section className={variables.innerFooter}>
                <p>Made by: Norbert István Nové</p>
            </section>
        </footer>
    )
}