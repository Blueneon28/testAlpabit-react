export default function Layout({ children }) {
  return (
    <>
      <header className="w-full bg-white dark:bg-black text-black dark:text-white text-center p-4 text-lg font-semibold">
        Contact App
      </header>
      <main className="h-screen w-full bg-white dark:bg-black text-black dark:text-white px-8 py-4">
        {children}
      </main>
    </>
  );
}
