
import React from 'react';

const ensureTrailingSlash = (path: string) => (path.endsWith('/') ? path : `${path}/`);
const basePath = ensureTrailingSlash(__BASE_PATH__);
const contactUrl = `${basePath}contact`;
const homeSectionLink = (hash: string) => `${basePath}${hash}`;

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm relative z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-10">
              <a href={basePath} className="cursor-pointer" aria-label="Supportia ホーム">
                <h1 className="text-3xl font-bold text-blue-600" style={{ fontFamily: '"Pacifico", serif' }}>
                  <span className="inline-flex items-center text-3xl text-blue-600 drop-shadow-sm tracking-wide">
                    Supportia
                  </span>
                </h1>
              </a>
              <nav className="hidden lg:flex space-x-8">
                <a href={homeSectionLink('#services')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer flex items-center">
                  <i className="ri-briefcase-3-line text-lg mr-2"></i>
                  事業内容
                </a>
                <a href={homeSectionLink('#about')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer flex items-center">
                  <i className="ri-team-line text-lg mr-2"></i>
                  Supportiaについて
                </a>
                <a href={homeSectionLink('#news')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer flex items-center">
                  <i className="ri-notification-3-line text-lg mr-2"></i>
                  新着情報
                </a>
                <a href={homeSectionLink('#blog')} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer flex items-center">
                  <i className="ri-book-open-line text-lg mr-2"></i>
                  ブログ
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-3 pr-4 mr-4 border-r border-slate-200">
                <a
                  href="https://www.instagram.com/kaneda_nurse_supportia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:border-rose-400 hover:text-rose-500 transition-colors cursor-pointer"
                  aria-label="Instagram"
                >
                  <i className="ri-instagram-line text-base"></i>
                </a>
                <a
                  href="https://lin.ee/4UoSWJa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:border-emerald-400 hover:text-emerald-500 transition-colors cursor-pointer"
                  aria-label="LINE"
                >
                  <i className="ri-line-fill text-base"></i>
                </a>
                <a
                  href="https://www.facebook.com/nao18zero/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:border-blue-400 hover:text-blue-500 transition-colors cursor-pointer"
                  aria-label="Facebook"
                >
                  <i className="ri-facebook-fill text-base"></i>
                </a>
              </div>
              <a href={contactUrl} className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer flex items-center">
                <i className="ri-phone-line text-lg mr-1"></i>
                お問い合わせ
              </a>
              <button className="lg:hidden p-2">
                <i className="ri-menu-line text-2xl text-gray-700"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ページヘッダー */}
      <section 
        className="relative py-24 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20healthcare%20contact%20center%2C%20modern%20medical%20facility%20reception%20area%2C%20clean%20white%20and%20blue%20interior%20design%2C%20customer%20service%20desk%2C%20welcoming%20medical%20environment%2C%20professional%20consultation%20space&width=1920&height=600&seq=contact-header&orientation=landscape')`
        }}
      >
        <div className="absolute inset-0 bg-blue-900 bg-opacity-40"></div>
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">お問い合わせ</h1>
            <p className="text-xl opacity-90">Contact Us</p>
          </div>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="py-16 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-gray-600">
                ご相談は、メール・公式LINEから承っております。ご希望の方法でお気軽にご連絡ください。
              </p>
            </div>

            <div className="mb-12 space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">連絡先情報</h3>
              <div className="grid gap-6">
                <div className="bg-cyan-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-mail-line text-2xl text-cyan-600"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">メールでのお問い合わせ</h3>
                      <p className="text-lg text-cyan-600">n.kaneda@supportia-nurse.com</p>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 rounded-lg p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <i className="ri-line-fill text-2xl text-emerald-600"></i>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">LINEでのお問い合わせ</h3>
                      <a
                        href="https://lin.ee/4UoSWJa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-emerald-500 text-white rounded-full text-sm font-semibold hover:bg-emerald-600 transition-colors"
                      >
                        公式LINEを開く
                        <i className="ri-external-link-line ml-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">SNSでつながる</h3>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com/kaneda_nurse_supportia/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border text-slate-500 border-slate-200 hover:border-rose-400 hover:text-rose-500 transition-colors"
                  aria-label="Instagram"
                >
                  <i className="ri-instagram-line text-xl"></i>
                </a>
                <a
                  href="https://www.facebook.com/nao18zero/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-full border text-slate-500 border-slate-200 hover:border-blue-400 hover:text-blue-500 transition-colors"
                  aria-label="Facebook"
                >
                  <i className="ri-facebook-fill text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* フッター */}
      <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <a href={basePath} className="inline-flex items-center justify-center mb-8" style={{ fontFamily: '"Pacifico", serif' }}>
              <span className="text-3xl text-blue-200">Supportia</span>
            </a>
            <div className="flex justify-center gap-6 mb-8 text-white">
              <a
                href="https://www.instagram.com/kaneda_nurse_supportia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full transition-colors cursor-pointer text-white hover:bg-rose-500/20 hover:text-rose-200"
                aria-label="Instagram"
              >
                <i className="ri-instagram-line text-xl"></i>
              </a>
              <a
                href="https://lin.ee/4UoSWJa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full transition-colors cursor-pointer text-white hover:bg-emerald-500/20 hover:text-emerald-200"
                aria-label="LINE"
              >
                <i className="ri-line-fill text-xl"></i>
              </a>
              <a
                href="https://www.facebook.com/nao18zero/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-full transition-colors cursor-pointer text-white hover:bg-blue-500/20 hover:text-blue-200"
                aria-label="Facebook"
              >
                <i className="ri-facebook-fill text-xl"></i>
              </a>
            </div>
            <p className="text-blue-200 text-sm">© {new Date().getFullYear()} Supportia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;
