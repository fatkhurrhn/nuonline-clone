import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import FooterComponent from "../components/FooterUtama";

function Sample() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const isDesktop = window.innerWidth > 768; // Deteksi desktop
    if (isDesktop) {
      setShowPopup(true);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative bg-zinc-900 text-zinc-400 min-h-screen">
      <div className="mx-auto max-w-[850px] px-4 pb-6 pt-6 text-lg sm:px-12 md:px-16">
        <Navbar />
        <div className="mt-6"> {/* Tambahkan margin atas */}
          {/* Konten utama di sini */}
        </div>
      </div>
      <FooterComponent />
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg max-w-sm text-center">
            <p className="mb-4">Untuk pengalaman terbaik, buka dengan ekstensi ini!</p>
            <a
              href="https://chromewebstore.google.com/detail/ckejmhbmlajgoklhgbapkiccekfoccmk?utm_source=item-share-cp"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Pasang Ekstensi
            </a>
            <button
              className="block mt-4 text-gray-600 hover:text-gray-800"
              onClick={handleClose}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sample;
