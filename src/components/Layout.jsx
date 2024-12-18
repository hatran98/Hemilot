import Header from './Header';
import Footer from './Footer';
import LiveChat from './LiveChat';
const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <LiveChat />
      <Footer />
    </div>
  );
};

export default Layout;
