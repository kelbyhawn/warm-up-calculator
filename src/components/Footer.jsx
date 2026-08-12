export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>
        ©{year} • Made by{" "}
        <a href="https://kelbyhawn.com" target="_blank" rel="noreferrer">
          Kelby Hawn
        </a>
      </p>
    </footer>
  );
}
