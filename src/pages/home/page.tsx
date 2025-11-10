
import React, { useEffect, useState } from 'react';

const ensureTrailingSlash = (path: string) => (path.endsWith('/') ? path : `${path}/`);
const lp1SupportLink = `${ensureTrailingSlash(__BASE_PATH__)}link/lp1-opening-support.html`;
const lp2SupportLink = `${ensureTrailingSlash(__BASE_PATH__)}link/lp2-gajumaru-nurse.html`;
const basePath = ensureTrailingSlash(__BASE_PATH__);
const heroImages = [
  `${basePath}image/TOPHERO1.png`,
  `${basePath}image/TOPHERO2.png`,
  `${basePath}image/TOPHERO3.png`,
];
const HERO_ROTATION_INTERVAL = 4000; // 4 seconds per hero image

const HomePage: React.FC = () => {
  const [heroImageIndex, setHeroImageIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length < 2) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setHeroImageIndex((prev) => (prev + 1) % heroImages.length);
    }, HERO_ROTATION_INTERVAL);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* ヘッダー */}
      <header className="bg-white shadow-sm relative z-50">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-10">
              <h1 className="text-3xl font-bold text-blue-600" style={{ fontFamily: '"Pacifico", serif' }}>
                <span className="inline-flex items-center text-3xl text-blue-600 drop-shadow-sm tracking-wide">
                  Supportia
                </span>
              </h1>
              <nav className="hidden lg:flex space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer flex items-center">
                <i className="ri-briefcase-3-line text-lg mr-2"></i>
                事業内容
              </a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer flex items-center">
                <i className="ri-team-line text-lg mr-2"></i>
                Supportiaについて
              </a>
              <a href="#news" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer flex items-center">
                <i className="ri-notification-3-line text-lg mr-2"></i>
                新着情報
              </a>
              <a href="#blog" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer flex items-center">
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
              <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer flex items-center">
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

      {/* メインビジュアル */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          {heroImages.map((imageUrl, index) => (
            <div
              key={imageUrl}
              className={`hero-zoom-layer absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out ${
                heroImageIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ backgroundImage: `url('${imageUrl}')` }}
            />
          ))}
          <div className="hero-overlay-soft" />
          <div className="hero-glow hero-glow--blue" />
          <div className="hero-glow hero-glow--emerald" />
          <div className="hero-orbit" />
          <div className="hero-overlay-deep" />
        </div>
        <div className="relative z-50 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="hero-heading-shadow text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight tracking-wide">
            看護師のための<br />とりくみ
          </h1>
          <p className="hero-text-navy text-2xl md:text-3xl mb-6 font-semibold">
            "看護師もできる"を、あなたらしく。
          </p>
          <p className="hero-text-navy text-xl md:text-2xl mb-8 font-semibold">
            Supportiaは、あなたの"これから"に寄り添います。
          </p>
          <p className="hero-text-navy text-xl md:text-2xl mb-12 font-semibold">
            「看護師の未来に、やさしさと強さを。」
          </p>
        </div>
      </section>

      <div className="bg-cyan-50 border-y border-cyan-200">
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4 text-left">
          <div className="flex items-center">
            <i className="ri-error-warning-line text-cyan-600 mr-2"></i>
            <span className="text-cyan-800 font-semibold">お知らせ</span>
          </div>
          <p className="text-cyan-800 mt-1">
            <span className="text-sm">2025.12.01</span>
            <span className="ml-4">公式ホームページを開設しました</span>
          </p>
        </div>
      </div>

      {/* メインコンテンツ */}
      <section
        id="services"
        className="relative py-20 bg-gradient-to-b from-sky-50 via-cyan-50 to-emerald-50/40 overflow-hidden border-y border-cyan-100"
      >
        <div className="absolute -top-24 -right-16 w-64 h-64 bg-emerald-200/50 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="absolute -bottom-24 -left-20 w-72 h-72 bg-sky-200/40 rounded-full blur-3xl" aria-hidden="true"></div>
        <div className="relative w-full px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* 個別相談・人材紹介 */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative h-64">
                <img
                  src="https://readdy.ai/api/search-image?query=Professional%20Japanese%20female%20nurse%20providing%20individual%20consultation%20and%20business%20support%20for%20home%20nursing%20care%20startup%2C%20Japanese%20healthcare%20professional%20woman%20in%20modern%20medical%20office%20setting%2C%20clean%20and%20professional%20environment%2C%20Asian%20female%20medical%20professional%20offering%20guidance%20and%20support&width=400&height=300&seq=consultation-service-female-jp&orientation=landscape"
                  alt="個別相談"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-500 bg-opacity-20"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-user-heart-line text-2xl text-blue-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">訪問看護開業・運営支援</h3>
                    <p className="text-sm text-gray-600">Operational support</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  立ち上げから黒字化・M&Aまで、伴走型でサポートします。
                </p>
                <a
                  href={lp1SupportLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 font-semibold"
                >
                  <span>詳細を見る</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
              </div>
            </div>

            {/* がんばるあなたへ・メンター支援 */}
            <div className="bg-gradient-to-br from-cyan-50 to-emerald-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative h-64">
                <img
                  src="https://readdy.ai/api/search-image?query=Experienced%20senior%20Japanese%20female%20nurse%20mentoring%20younger%20Japanese%20nurse%2C%20supportive%20healthcare%20mentorship%20scene%20in%20Japan%2C%20medical%20facility%20background%2C%20professional%20guidance%20and%20support%20between%20Asian%20healthcare%20professionals%2C%20encouraging%20atmosphere%2C%20medical%20education%20setting%20with%20Japanese%20nurses&width=400&height=300&seq=mentorship-support-jp&orientation=landscape"
                  alt="メンター支援"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-cyan-500 bg-opacity-20"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-graduation-cap-line text-2xl text-cyan-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">キャリア相談・人材紹介</h3>
                    <p className="text-sm text-gray-600">Career counseling &amp; Recruitment</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  「今のままでいいのかな？」そんな迷いに寄り添い、自分らしい働き方を見つけるお手伝いをします.
                </p>
                <a
                  href={lp1SupportLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-cyan-600 font-semibold"
                >
                  <span>詳細を見る</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
              </div>
            </div>

            {/* 新しいキャリアへの挑戦支援 */}
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="relative h-64">
                <img
                  src="https://readdy.ai/api/search-image?query=Japanese%20female%20nurse%20career%20development%20and%20growth%2C%20professional%20advancement%20in%20healthcare%20Japan%2C%20modern%20medical%20training%20facility%2C%20career%20planning%20session%20with%20Japanese%20healthcare%20professionals%2C%20bright%20and%20inspiring%20medical%20environment%2C%20professional%20development%20atmosphere%20with%20Asian%20nurses&width=400&height=300&seq=career-support-jp&orientation=landscape"
                  alt="キャリア支援"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-emerald-500 bg-opacity-20"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <i className="ri-calendar-check-line text-2xl text-emerald-600"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">がじゅまるりんくナース運営</h3>
                    <p className="text-sm text-gray-600">Community management</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  看護師同士でつながり、学び、支え合える場所。月1オンラインcafe会、リアルランチ会など開催中！
                </p>
                <a
                  href={lp2SupportLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-emerald-600 font-semibold"
                >
                  <span>詳細を見る</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </a>
              </div>
            </div>
          </div>

          {/* サブメニュー */}
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-white border border-blue-100 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-stethoscope-line text-blue-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">医療関係者の方へ</h4>
                  <p className="text-sm text-gray-600">For Medical personnel</p>
                </div>
                <i className="ri-arrow-right-line text-gray-400 ml-auto"></i>
              </div>
            </div>

            <div className="bg-white border border-cyan-100 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-cyan-50 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-team-line text-cyan-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">採用について</h4>
                  <p className="text-sm text-gray-600">Careers</p>
                </div>
                <i className="ri-arrow-right-line text-gray-400 ml-auto"></i>
              </div>
            </div>

            <div className="bg-white border border-emerald-100 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-building-line text-emerald-600"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">看護師のための相談室について</h4>
                  <p className="text-sm text-gray-600">About Consultation Room</p>
                </div>
                <i className="ri-arrow-right-line text-gray-400 ml-auto"></i>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ミッション・ビジョン・バリュー */}
      <section id="about" className="py-16 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              <span className="text-gray-800">ミッション・ビジョン・バリュー</span>
              <span className="text-lg text-gray-500 ml-4">Mission / Vision / Value</span>
            </h2>
            <span className="hidden md:inline-flex text-sm text-gray-500">
              支え合い、学び合い、未来を創る。
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-2">
            <div className="bg-white rounded-lg shadow-sm border border-blue-100 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-blue-100/60 hover:border-blue-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-compass-line text-2xl text-blue-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Mission</h3>
                  <p className="text-sm text-gray-500">ミッション</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                看護師一人ひとりが「自分らしいキャリア」を描き、安心して挑戦できる社会を実現します。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-cyan-100 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-100/60 hover:border-cyan-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-cyan-50 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-sparkling-2-line text-2xl text-cyan-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Vision</h3>
                  <p className="text-sm text-gray-500">ビジョン</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                互いを支え合いながら学び続けるコミュニティを広げ、「看護師もできる」を当たり前にします。
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-emerald-100 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-emerald-100/60 hover:border-emerald-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center mr-4">
                  <i className="ri-hand-heart-line text-2xl text-emerald-600"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Value</h3>
                  <p className="text-sm text-gray-500">バリュー</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-gray-700 leading-relaxed">
                <li>共感：心に寄り添い、声に耳を傾ける。</li>
                <li>挑戦：現状に満足せず、新しい可能性を探る。</li>
                <li>信頼：約束を守り、安心を届ける。</li>
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <div className="max-w-5xl mx-auto border-t border-slate-200/70"></div>
          </div>

          <div className="mt-20 max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              <span className="text-gray-800">こんなあなたにぴったりです</span>
              <span className="block text-lg text-gray-500 mt-2">Target audience</span>
            </h3>
            <p className="text-sm text-gray-600">Supportiaと一緒に、あなたの看護キャリアの一歩先へ進みませんか？</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 text-sm text-gray-700">
              <div className="rounded-2xl border border-emerald-100 bg-white/80 px-6 py-6 shadow-sm text-center">
                <p className="text-base font-semibold text-gray-800">訪問看護を立ち上げたい・運営を安定させたい方</p>
              </div>
              <div className="rounded-2xl border border-cyan-100 bg-white/80 px-6 py-6 shadow-sm text-center">
                <p className="text-base font-semibold text-gray-800">現場で頑張る看護師さんを育てたい方</p>
              </div>
              <div className="rounded-2xl border border-sky-100 bg-white/80 px-6 py-6 shadow-sm text-center">
                <p className="text-base font-semibold text-gray-800">今の働き方にモヤモヤしている現役看護師さんたち</p>
              </div>
              <div className="rounded-2xl border border-emerald-100 bg-white/80 px-6 py-6 shadow-sm text-center">
                <p className="text-base font-semibold text-gray-800">新しいキャリアの選択肢を探している方</p>
              </div>
            </div>

            <div className="relative mt-12">
              <div className="absolute inset-0 flex justify-center -z-10">
                <div className="w-full max-w-2xl h-full bg-gradient-to-r from-emerald-200 via-cyan-200 to-sky-200 opacity-40 blur-[100px]"></div>
              </div>
              <div className="relative max-w-2xl mx-auto rounded-[2rem] border border-emerald-100/70 bg-white/95 shadow-xl px-10 py-12 text-center space-y-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-emerald-200/60 hover:border-emerald-200">
                <div className="mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-emerald-300 via-cyan-300 to-sky-300"></div>
                <p className="text-xs font-semibold tracking-[0.35em] uppercase text-emerald-500">まずは、つながるところから。</p>
                <p className="text-2xl font-bold text-slate-800">LINE登録・無料相談はこちら</p>
                <p className="text-base text-slate-600">あなたの一歩を応援します！</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <a
                    href={lp1SupportLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
                  >
                    開業支援について
                  </a>
                  <a
                    href={lp2SupportLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 px-6 py-3 text-sm font-semibold text-emerald-700 transition-colors hover:bg-emerald-100"
                  >
                    がじゅまるりんくナースについて
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 新着情報 */}
      <section id="news" className="py-16 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              <span className="text-gray-800">新着情報</span>
              <span className="text-lg text-gray-500 ml-4">News</span>
            </h2>
            <a href="#" className="text-blue-600 hover:text-blue-700 flex items-center cursor-pointer">
              <span>全ての一覧</span>
              <i className="ri-arrow-right-line ml-1"></i>
            </a>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-blue-100 p-6">
              <div className="flex items-center mb-4">
                <i className="ri-calendar-line text-blue-600 mr-2"></i>
                <h3 className="font-semibold text-gray-800">最新のお知らせ</h3>
                <i className="ri-arrow-right-line text-gray-400 ml-auto"></i>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                こちらのセクションは準備中です。最新情報の公開までしばらくお待ちください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ブログ */}
      <section id="blog" className="py-16 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              <span className="text-gray-800">ブログ</span>
              <span className="text-lg text-gray-500 ml-4">Blog</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group border border-blue-100">
              <img
                src="https://readdy.ai/api/search-image?query=Professional%20nursing%20seminar%20presentation%2C%20healthcare%20education%20event%2C%20medical%20conference%20room%20with%20nurses%20attending%2C%20modern%20medical%20facility%2C%20educational%20atmosphere%2C%20professional%20development%20session&width=400&height=300&seq=nursing-seminar&orientation=landscape"
                alt="看護師セミナー"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <p className="text-sm text-blue-600 mb-2">2025/10/01</p>
                <h3 className="font-semibold text-gray-800 mb-3">仮タイトル</h3>
                <div className="flex items-center text-gray-500">
                  <span className="text-2xl font-bold mr-1">12</span>
                  <span className="text-lg">25</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group border border-cyan-100">
              <img
                src="https://readdy.ai/api/search-image?query=Mentor%20training%20workshop%20for%20nurses%2C%20experienced%20healthcare%20professionals%20in%20training%20session%2C%20medical%20education%20facility%2C%20mentorship%20development%20program%2C%20professional%20guidance%20training&width=400&height=300&seq=mentor-training&orientation=landscape"
                alt="メンター研修"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <p className="text-sm text-cyan-600 mb-2">2025/10/01</p>
                <h3 className="font-semibold text-gray-800 mb-3">仮タイトル</h3>
                <div className="flex items-center text-gray-500">
                  <span className="text-2xl font-bold mr-1">12</span>
                  <span className="text-lg">20</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group border border-emerald-100">
              <img
                src="https://readdy.ai/api/search-image?query=Individual%20career%20consultation%20for%20nurses%2C%20one-on-one%20career%20guidance%20session%2C%20professional%20counseling%20office%2C%20healthcare%20career%20development%20meeting%2C%20supportive%20consultation%20environment&width=400&height=300&seq=career-consultation&orientation=landscape"
                alt="キャリア相談"
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <p className="text-sm text-emerald-600 mb-2">2025/10/01</p>
                <h3 className="font-semibold text-gray-800 mb-3">仮タイトル</h3>
                <div className="flex items-center text-gray-500">
                  <span className="text-2xl font-bold mr-1">12</span>
                  <span className="text-lg">18</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 看護師のための相談室の活動 */}
      <section className="py-16 bg-cyan-50/30">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              <span className="text-gray-800">看護師のための相談室の活動</span>
              <span className="text-lg text-gray-500 ml-4">Activity of consultation room</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow border border-blue-100">
              <img
                src="https://readdy.ai/api/search-image?query=Successful%20nursing%20consultation%20session%20completion%2C%20healthcare%20professionals%20celebrating%20achievement%2C%20medical%20consultation%20room%2C%20positive%20outcome%20meeting%2C%20professional%20healthcare%20environment&width=300&height=200&seq=consultation-success&orientation=landscape"
                alt="活動報告"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="text-xs text-blue-600 mb-2">相談室からのお知らせ</p>
                <h4 className="text-sm font-semibold text-gray-800 mb-2">12月19日(金)個別相談会を実施しました!</h4>
                <div className="flex items-center text-gray-500 text-xs">
                  <span className="text-lg font-bold mr-1">12</span>
                  <span>20</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow border border-cyan-100">
              <img
                src="https://readdy.ai/api/search-image?query=Modern%20healthcare%20website%20launch%2C%20digital%20medical%20platform%20announcement%2C%20computer%20screen%20showing%20nursing%20career%20support%20website%2C%20technology%20in%20healthcare%2C%20professional%20web%20design&width=300&height=200&seq=website-launch&orientation=landscape"
                alt="活動報告"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="text-xs text-cyan-600 mb-2">相談室からのお知らせ</p>
                <h4 className="text-sm font-semibold text-gray-800 mb-2">『看護師キャリアサポート』 Webページ公開のお知らせ</h4>
                <div className="flex items-center text-gray-500 text-xs">
                  <span className="text-lg font-bold mr-1">12</span>
                  <span>18</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow border border-emerald-100">
              <img
                src="https://readdy.ai/api/search-image?query=Healthcare%20press%20conference%20about%20nurse%20mental%20health%20support%2C%20medical%20professionals%20at%20press%20event%2C%20professional%20announcement%20setting%2C%20healthcare%20industry%20news%20conference%2C%20medical%20facility%20background&width=300&height=200&seq=press-conference&orientation=landscape"
                alt="活動報告"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="text-xs text-emerald-600 mb-2">相談室からのお知らせ</p>
                <h4 className="text-sm font-semibold text-gray-800 mb-2">【PRESS RELEASE】看護師のメンタルヘルスサポートの重要性について</h4>
                <div className="flex items-center text-gray-500 text-xs">
                  <span className="text-lg font-bold mr-1">12</span>
                  <span>15</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow border border-teal-100">
              <img
                src="https://readdy.ai/api/search-image?query=Open%20counseling%20event%20for%20nursing%20students%2C%20career%20guidance%20session%20for%20future%20nurses%2C%20medical%20education%20facility%2C%20student%20orientation%20program%2C%20healthcare%20career%20development%20event&width=300&height=200&seq=open-counseling&orientation=landscape"
                alt="活動報告"
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <p className="text-xs text-teal-600 mb-2">相談室からのお知らせ</p>
                <h4 className="text-sm font-semibold text-gray-800 mb-2">看護学生向けキャリア説明会「オープンカウンセリング2024」を開催しました!</h4>
                <div className="flex items-center text-gray-500 text-xs">
                  <span className="text-lg font-bold mr-1">12</span>
                  <span>10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ピックアップ */}
      <section className="py-16 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              <span className="text-gray-800">ピックアップ</span>
              <span className="text-lg text-gray-500 ml-4">Pickup</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow border border-blue-100">
              <div className="flex">
                <img
                  src="https://readdy.ai/api/search-image?query=Modern%20nursing%20career%20center%20facility%2C%20professional%20healthcare%20building%20exterior%2C%20medical%20career%20development%20center%2C%20clean%20architectural%20design%2C%20healthcare%20institution%20building&width=200&height=200&seq=career-center&orientation=squarish"
                  alt="看護師キャリアセンター"
                  className="w-32 h-32 object-cover flex-shrink-0"
                />
                <div className="p-6 flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">看護師キャリアセンター 2024年新設</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    個別相談・メンター支援・キャリア開発のワンストップサービスとして新しく生まれ変わります。
                  </p>
                  <i className="ri-arrow-right-line text-blue-600"></i>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow border border-cyan-100">
              <div className="flex">
                <img
                  src="https://readdy.ai/api/search-image?query=Mental%20health%20support%20for%20healthcare%20workers%2C%20peaceful%20counseling%20environment%2C%20wellness%20and%20mental%20health%20care%20setting%2C%20supportive%20healthcare%20atmosphere%2C%20calming%20medical%20facility%20interior&width=200&height=200&seq=mental-health&orientation=squarish"
                  alt="メンタルヘルスサポート"
                  className="w-32 h-32 object-cover flex-shrink-0"
                />
                <div className="p-6 flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">メンタルヘルスサポート</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    看護師の心の健康をサポートし、働きやすい環境づくりを目指します。
                  </p>
                  <i className="ri-arrow-right-line text-cyan-600"></i>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow border border-emerald-100">
              <div className="flex">
                <img
                  src="https://readdy.ai/api/search-image?query=Healthcare%20career%20evaluation%20and%20certification%2C%20professional%20nursing%20assessment%2C%20medical%20certification%20documents%2C%20career%20achievement%20recognition%2C%20healthcare%20excellence%20awards&width=200&height=200&seq=career-evaluation&orientation=squarish"
                  alt="キャリア評価"
                  className="w-32 h-32 object-cover flex-shrink-0"
                />
                <div className="p-6 flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">キャリア評価にて9つのS評価を獲得</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    日本看護協会のキャリア評価を受審し、定められた認定基準に達していることが認定されました。
                  </p>
                  <i className="ri-arrow-right-line text-emerald-600"></i>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow border border-teal-100">
              <div className="flex">
                <img
                  src="https://readdy.ai/api/search-image?query=Comfortable%20consultation%20lounge%20for%20healthcare%20professionals%2C%20relaxing%20medical%20facility%20waiting%20area%2C%20modern%20healthcare%20interior%20design%2C%20peaceful%20consultation%20space%2C%20welcoming%20medical%20environment&width=200&height=200&seq=consultation-lounge&orientation=squarish"
                  alt="相談ラウンジ"
                  className="w-32 h-32 object-cover flex-shrink-0"
                />
                <div className="p-6 flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">相談ラウンジ</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    リラックスできる空間で、気軽に相談できる環境を提供しています。
                  </p>
                  <i className="ri-arrow-right-line text-teal-600"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-4">
            <img
              src="https://readdy.ai/api/search-image?query=Nurse%20support%20program%20banner%2C%20healthcare%20professional%20development%20initiative%2C%20medical%20support%20services%2C%20nursing%20career%20assistance%20program&width=300&height=150&seq=support-program&orientation=landscape"
              alt="看護師サポートプログラム"
              className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
            />
            <img
              src="https://readdy.ai/api/search-image?query=New%20nurse%20support%20and%20training%20program%2C%20fresh%20graduate%20nursing%20support%2C%20medical%20orientation%20program%2C%20healthcare%20professional%20development&width=300&height=150&seq=new-nurse-support&orientation=landscape"
              alt="新人看護師支援"
              className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
            />
            <img
              src="https://readdy.ai/api/search-image?query=Healthcare%20consultation%20room%20newsletter%20and%20publications%2C%20medical%20facility%20communications%2C%20nursing%20information%20materials%2C%20healthcare%20publication%20design&width=300&height=150&seq=newsletter&orientation=landscape"
              alt="相談室広報誌"
              className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
            />
            <img
              src="https://readdy.ai/api/search-image?query=Healthcare%20recruitment%20and%20career%20opportunities%2C%20medical%20facility%20hiring%2C%20nursing%20job%20opportunities%2C%20healthcare%20employment%20information&width=300&height=150&seq=recruitment&orientation=landscape"
              alt="採用について"
              className="w-full h-24 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* ダウンロード */}
      <section className="py-16 bg-emerald-50/30">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              <span className="text-gray-800">ダウンロード</span>
              <span className="text-lg text-gray-500 ml-4">Download</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow border border-blue-100">
              <img
                src="https://readdy.ai/api/search-image?query=Career%20consultation%20materials%20and%20documents%2C%20professional%20healthcare%20guidance%20resources%2C%20nursing%20career%20development%20materials%2C%20medical%20consultation%20paperwork&width=300&height=200&seq=consultation-materials&orientation=landscape"
                alt="キャリア相談資料"
                className="w-full h-32 object-cover"
              />
              <div className="p-4 text-center">
                <i className="ri-download-line text-2xl text-blue-600"></i>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow border border-cyan-100">
              <img
                src="https://readdy.ai/api/search-image?query=Medical%20consultation%20application%20form%2C%20healthcare%20service%20registration%20documents%2C%20nursing%20consultation%20paperwork%2C%20professional%20medical%20forms&width=300&height=200&seq=application-form&orientation=landscape"
                alt="相談申込書"
                className="w-full h-32 object-cover"
              />
              <div className="p-4 text-center">
                <i className="ri-external-link-line text-2xl text-cyan-600"></i>
              </div>
            </div>

            {/* Placeholder for future download items */}
            {/* Future download item 3 */}
            {/* <div className="bg-white ...">...</div> */}
            {/* Future download item 4 */}
            {/* <div className="bg-white ...">...</div> */}
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

export default HomePage;
