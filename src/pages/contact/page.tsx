
import React, { useState } from 'react';

const navItems = [
  { href: '/#services', label: '事業内容', icon: 'ri-briefcase-3-line' },
  { href: '/#about', label: 'Supportiaについて', icon: 'ri-team-line' },
  { href: '/#news', label: '新着情報', icon: 'ri-notification-3-line' },
  { href: '/#blog', label: 'ブログ', icon: 'ri-book-open-line' },
];

const socialLinks = [
  {
    href: 'https://www.instagram.com/kaneda_nurse_supportia/',
    icon: 'ri-instagram-line',
    aria: 'Instagram',
    hoverColor: 'hover:text-rose-500 hover:border-rose-400',
  },
  {
    href: 'https://lin.ee/4UoSWJa',
    icon: 'ri-line-fill',
    aria: 'LINE',
    hoverColor: 'hover:text-emerald-500 hover:border-emerald-400',
  },
  {
    href: 'https://www.facebook.com/nao18zero/',
    icon: 'ri-facebook-fill',
    aria: 'Facebook',
    hoverColor: 'hover:text-blue-500 hover:border-blue-400',
  },
];

const ContactPage: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm relative z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-10">
              <a href="/" className="cursor-pointer" aria-label="Supportia ホーム">
                <h1 className="text-3xl font-bold text-blue-600" style={{ fontFamily: '"Pacifico", serif' }}>
                  <span className="inline-flex items-center text-3xl text-blue-600 drop-shadow-sm tracking-wide">
                    Supportia
                  </span>
                </h1>
              </a>
              <nav className="hidden lg:flex space-x-8">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer flex items-center"
                  >
                    <i className={`${item.icon} text-lg mr-2`}></i>
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-3 pr-4 mr-4 border-r border-slate-200">
                {socialLinks.map((link) => (
                  <a
                    key={link.aria}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-8 h-8 bg-white border border-slate-200 rounded-full flex items-center justify-center text-slate-500 transition-colors cursor-pointer ${link.hoverColor}`}
                    aria-label={link.aria}
                  >
                    <i className={`${link.icon} text-base`}></i>
                  </a>
                ))}
              </div>
              <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer flex items-center">
                <i className="ri-phone-line text-lg mr-1"></i>
                お問い合わせ
              </a>
              <button
                className="lg:hidden p-2"
                aria-label="メニューを開閉"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              >
                <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl text-gray-700`}></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60]">
          <div className="absolute inset-0 bg-black/30" onClick={() => setIsMobileMenuOpen(false)}></div>
          <div className="relative ml-auto h-full w-72 max-w-[85%] bg-white shadow-2xl flex flex-col p-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-bold text-blue-600" style={{ fontFamily: '"Pacifico", serif' }}>
                Supportia
              </span>
              <button aria-label="メニューを閉じる" onClick={() => setIsMobileMenuOpen(false)}>
                <i className="ri-close-line text-2xl text-gray-700"></i>
              </button>
            </div>
            <nav className="space-y-4 mb-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="flex items-center text-gray-800 font-medium hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <i className={`${item.icon} text-lg mr-3`}></i>
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="/contact"
              className="flex items-center justify-center px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <i className="ri-phone-line text-lg mr-2"></i>
              お問い合わせ
            </a>
            <div className="mt-6 border-t border-slate-200 pt-6">
              <p className="text-sm text-gray-500 mb-4">SNS</p>
              <div className="flex items-center space-x-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.aria}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-11 h-11 border border-slate-200 rounded-full flex items-center justify-center text-slate-500 transition-colors ${link.hoverColor}`}
                    aria-label={link.aria}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <i className={`${link.icon} text-lg`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

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
            <a href="/" className="inline-flex items-center justify-center mb-8" style={{ fontFamily: '"Pacifico", serif' }}>
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
