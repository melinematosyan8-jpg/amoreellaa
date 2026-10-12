const examples = [
  { number: "01", title: "Հարսանեկան հրավիրատոմս", category: "ՀԱՐՍԱՆԻՔ", note: "Նուրբ, ռոմանտիկ և անհատական", style: "wedding" },
  { number: "02", title: "Նշանադրության հրավիրատոմս", category: "ՆՇԱՆԱԴՐՈՒԹՅՈՒՆ", note: "Ձեր սիրո պատմության առաջին էջը", style: "engagement" },
  { number: "03", title: "Ծննդյան հրավիրատոմս", category: "ԾՆՆԴՅԱՆ ՏԱՐԵԴԱՐՁ", note: "Հատուկ օր՝ գեղեցիկ հրավիրատոմսով", style: "birthday" },
  { number: "04", title: "Մկրտության հրավիրատոմս", category: "ՄԿՐՏՈՒԹՅՈՒՆ", note: "Նուրբ ու ջերմ ձևավորում՝ կարևոր օրվա համար", style: "baptism" },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Amoreellaa գլխավոր էջ">amoreellaa<span>.</span></a>
        <nav><a href="#home">Գլխավոր</a><a href="#examples">Հրավիրատոմսեր</a><a href="#about">Մեր մասին</a><a href="#contact">Կապ</a></nav>
        <a className="top-cta" href="https://www.instagram.com/amoreellaa/" target="_blank" rel="noreferrer">Պատվիրել <span>↗</span></a>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line"></span> Հատուկ պահերի համար՝ սիրով</p>
          <h1>Ձեր օրը։<br/><em>Ձեր պատմությունը։</em></h1>
          <p className="intro">Վեբ հրավիրատոմսեր՝ ձեր կյանքի ամենակարևոր պահերը գեղեցիկ ներկայացնելու համար։</p>
          <a className="button" href="#examples">Դիտել հրավիրատոմսերը <span>↗</span></a>
          <div className="hero-foot"><span>ՆՈՒՐԲ ԴԻԶԱՅՆ</span><span>ԱՆՀԱՏԱԿԱՆ ՄՈՏԵՑՈՒՄ</span><span>ՄԵԿ ՀՂՈՒՄՈՎ</span></div>
        </div>
        <div className="hero-art" aria-label="Հարսանեկան հրավիրատոմսի դեկորատիվ պատկեր">
          <div className="art-back"></div><div className="art-card">
            <div className="tiny-flower">✳</div><p className="script">the beginning<br/>of forever</p><div className="thin-rule"></div>
            <p className="card-small">ՄԻԱՍԻՆ՝ ՄԵԿ ՊԱՏՄՈՒԹՅՈՒՆ</p><p className="card-names">Անահիտ <span>&</span> Դավիթ</p><p className="card-date">27 · 04 · 2027</p><div className="card-bottom">ՀՐԱՎԻՐԱՏՈՄՍ</div>
          </div>
          <div className="round-stamp">MADE<br/>WITH<br/>LOVE <span>♡</span></div>
          <div className="art-caption">A LITTLE PIECE OF YOUR STORY <span>— 01 / 04</span></div>
        </div>
      </section>

      <section className="intro-strip" id="about">
        <span className="strip-star">✳</span>
        <p><strong>Վեբ հրավիրատոմսեր</strong><br/>Պատվիրեք օնլայն հրավիրատոմս ցանկացած միջոցառման համար՝ հարսանիք, նշանադրություն, ծննդյան տարեդարձ, մկրտություն և այլ առիթներ։</p>
        <a href="#examples" className="text-link">Դիտել օրինակները <span>↘</span></a>
      </section>

      <section className="catalog" id="examples">
        <div className="section-heading"><div><p className="eyebrow">ՄԵՐ ԱՇԽԱՏԱՆՔՆԵՐԸ</p><h2>Ձեր առիթին՝ <em>հատուկ ձևավորում</em></h2></div><p className="section-note">Յուրաքանչյուր պատմություն արժանի է իր յուրահատուկ հրավիրատոմսին։</p></div>
        <div className="cards">
          {examples.map((item) => <article className="example" key={item.number}>
            <div className={`preview ${item.style}`}>
              <div className="preview-frame"><span className="preview-flower">✳</span><span className="preview-category">{item.category}</span><span className="preview-script">{item.style === "birthday" ? "let's celebrate" : item.style === "baptism" ? "a blessed day" : "the beginning of forever"}</span><span className="preview-names">{item.style === "birthday" ? "Արի՛ տոնենք" : item.style === "baptism" ? "Մեր փոքրիկ հրաշքը" : item.style === "engagement" ? "Մարիամ & Արամ" : "Անահիտ & Դավիթ"}</span><span className="preview-date">27 · 04 · 2027</span></div>
              <span className="preview-index">{item.number}</span>
            </div>
            <div className="example-info"><div><h3>{item.title}</h3><p>{item.note}</p></div><a href="https://www.instagram.com/amoreellaa/" target="_blank" rel="noreferrer" aria-label={`${item.title} պատվիրել`}>↗</a></div>
          </article>)}
        </div>
      </section>

      <section className="order-band">
        <p className="eyebrow">ՁԵՐ ԱՌԻԹԸ՝ ՄԵՐ ՈԳԵՇՆՉՈՒՄԸ</p><h2>Ստեղծե՞նք ձեր <em>հատուկ հրավիրատոմսը։</em></h2><a className="button button-light" href="https://www.instagram.com/amoreellaa/" target="_blank" rel="noreferrer">Գրել Instagram-ում <span>↗</span></a>
      </section>

      <footer id="contact"><a className="brand footer-brand" href="#home">amoreellaa<span>.</span></a><p>Վեբ հրավիրատոմսեր՝ սիրով ստեղծված։</p><a className="instagram" href="https://www.instagram.com/amoreellaa/" target="_blank" rel="noreferrer">Instagram / @amoreellaa ↗</a><small>© 2026 Amoreellaa. Բոլոր իրավունքները պաշտպանված են։</small></footer>
    </main>
  );
}
