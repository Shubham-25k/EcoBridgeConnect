import { createFileRoute } from '@tanstack/react-router'
import {
  Activity,
  ArrowLeft,
  Banknote,
  BatteryCharging,
  Camera,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Download,
  History,
  Languages,
  Leaf,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  Mic,
  Navigation,
  PackageCheck,
  Pause,
  Play,
  ReceiptText,
  Route as RouteIcon,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingDown,
  TrendingUp,
  Truck,
  Upload,
  UserRound,
  UsersRound,
  Volume2,
  VolumeX,
  WalletCards,
  X,
  Zap,
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export const Route = createFileRoute('/')({ component: Home })

type Language = 'en' | 'hi' | 'mr'
type Role = 'kabadiwala' | 'recycler'
type View = 'home' | 'estimator' | 'history' | 'payment' | 'receipt'

const copy = {
  en: {
    title: 'EcoBridge Connect', subtitle: 'India’s trusted circular commerce network', welcome: 'One platform. Zero waste.',
    intro: 'Connect local scrap partners with verified recyclers, AI-assisted valuation and transparent UPI payouts.',
    kabadiwala: 'Kabadiwala', recycler: 'Recycler', signIn: 'Enter portal', create: 'Create demo account',
    email: 'Mobile number or email', password: 'Password', name: 'Business or owner name', switchLogin: 'Already registered? Sign in',
    switchCreate: 'New to EcoBridge? Create account', market: 'Live indicative rates', sell: 'Value my e-waste',
    sellSub: 'Use a photo, voice or description for an instant AI estimate.', ai: 'Eco-Connect AI', aiSub: 'Ask about safe handling, prices and recycling.',
    how: 'From scrap to settlement', howSub: 'A clear four-step path with no hidden middlemen.', history: 'Receipt history', logout: 'Sign out',
    describe: 'Describe your material', placeholder: 'Example: 3 old laptops, copper wire and two damaged batteries…',
    speak: 'Speak instead', listening: 'Listening…', camera: 'Open camera', upload: 'Upload photo', analyze: 'Analyze material',
    processing: 'Inspecting materials and matching market rates…', ready: 'AI valuation ready', schedule: 'Schedule pickup', rescan: 'Start again',
    pending: 'Pending settlements', routes: 'Active pickup routes', pay: 'Pay via UPI', receipt: 'Digital receipt', close: 'Close',
  },
  hi: {
    title: 'इकोब्रिज कनेक्ट', subtitle: 'भारत का भरोसेमंद सर्कुलर कॉमर्स नेटवर्क', welcome: 'एक प्लेटफ़ॉर्म। शून्य कचरा।',
    intro: 'स्थानीय कबाड़ी भागीदारों को सत्यापित रीसाइकलर, AI मूल्यांकन और पारदर्शी UPI भुगतान से जोड़ें।',
    kabadiwala: 'कबाड़ीवाला', recycler: 'रीसाइकलर', signIn: 'पोर्टल में जाएँ', create: 'डेमो खाता बनाएँ',
    email: 'मोबाइल नंबर या ईमेल', password: 'पासवर्ड', name: 'व्यवसाय या मालिक का नाम', switchLogin: 'पहले से पंजीकृत? साइन इन करें',
    switchCreate: 'इकोब्रिज पर नए हैं? खाता बनाएँ', market: 'लाइव सांकेतिक भाव', sell: 'ई-कचरे का मूल्य जानें',
    sellSub: 'फोटो, आवाज़ या विवरण से तुरंत AI अनुमान पाएँ।', ai: 'इको-कनेक्ट AI', aiSub: 'सुरक्षा, कीमत और रीसाइक्लिंग के बारे में पूछें।',
    how: 'कबाड़ से भुगतान तक', howSub: 'बिना छिपे बिचौलियों के चार आसान चरण।', history: 'रसीद इतिहास', logout: 'साइन आउट',
    describe: 'सामग्री का विवरण दें', placeholder: 'उदाहरण: 3 पुराने लैपटॉप, तांबे की तार और दो खराब बैटरी…',
    speak: 'बोलकर बताएँ', listening: 'सुन रहा है…', camera: 'कैमरा खोलें', upload: 'फोटो अपलोड करें', analyze: 'सामग्री का विश्लेषण करें',
    processing: 'सामग्री पहचानकर बाज़ार भाव मिलाए जा रहे हैं…', ready: 'AI मूल्यांकन तैयार', schedule: 'पिकअप तय करें', rescan: 'फिर से शुरू करें',
    pending: 'लंबित भुगतान', routes: 'सक्रिय पिकअप रूट', pay: 'UPI से भुगतान', receipt: 'डिजिटल रसीद', close: 'बंद करें',
  },
  mr: {
    title: 'इकोब्रिज कनेक्ट', subtitle: 'भारताचे विश्वासार्ह सर्क्युलर कॉमर्स नेटवर्क', welcome: 'एक प्लॅटफॉर्म. शून्य कचरा.',
    intro: 'स्थानिक भंगार भागीदारांना प्रमाणित रिसायकलर, AI मूल्यांकन आणि पारदर्शक UPI पेमेंटशी जोडा.',
    kabadiwala: 'कबाडीवाला', recycler: 'रिसायकलर', signIn: 'पोर्टलमध्ये जा', create: 'डेमो खाते तयार करा',
    email: 'मोबाइल नंबर किंवा ईमेल', password: 'पासवर्ड', name: 'व्यवसाय किंवा मालकाचे नाव', switchLogin: 'आधीच नोंदणी केली? साइन इन करा',
    switchCreate: 'इकोब्रिजवर नवीन आहात? खाते तयार करा', market: 'थेट सूचक भाव', sell: 'ई-कचऱ्याचे मूल्य जाणून घ्या',
    sellSub: 'फोटो, आवाज किंवा वर्णनातून त्वरित AI अंदाज मिळवा.', ai: 'इको-कनेक्ट AI', aiSub: 'सुरक्षा, किंमत आणि रिसायकलिंगबद्दल विचारा.',
    how: 'भंगारापासून पेमेंटपर्यंत', howSub: 'लपलेल्या मध्यस्थांशिवाय चार स्पष्ट टप्पे.', history: 'पावती इतिहास', logout: 'साइन आउट',
    describe: 'सामग्रीचे वर्णन करा', placeholder: 'उदाहरण: 3 जुने लॅपटॉप, तांब्याची तार आणि दोन खराब बॅटऱ्या…',
    speak: 'बोलून सांगा', listening: 'ऐकत आहे…', camera: 'कॅमेरा उघडा', upload: 'फोटो अपलोड करा', analyze: 'सामग्रीचे विश्लेषण करा',
    processing: 'सामग्री तपासून बाजारभाव जुळवले जात आहेत…', ready: 'AI मूल्यांकन तयार', schedule: 'पिकअप ठरवा', rescan: 'पुन्हा सुरू करा',
    pending: 'प्रलंबित पेमेंट', routes: 'सक्रिय पिकअप मार्ग', pay: 'UPI ने पैसे द्या', receipt: 'डिजिटल पावती', close: 'बंद करा',
  },
}

const rates = [
  { name: 'Copper wire', price: 426, delta: '+2.4%', up: true },
  { name: 'PCB boards', price: 648, delta: '+1.1%', up: true },
  { name: 'Li-ion cells', price: 153, delta: '-0.8%', up: false },
  { name: 'Mixed e-waste', price: 78, delta: '+0.3%', up: true },
]

const receipts = [
  { id: 'TXN-982341', date: '05 Aug 2026', items: 'Copper wire, PCB boards', weight: '45 kg', amount: '18,500', seller: 'Raju Kabaadiwala' },
  { id: 'TXN-981120', date: '02 Aug 2026', items: 'Mixed e-waste', weight: '120 kg', amount: '9,200', seller: 'Raju Kabaadiwala' },
  { id: 'TXN-979001', date: '28 Jul 2026', items: 'Lithium batteries', weight: '15 kg', amount: '2,100', seller: 'Raju Kabaadiwala' },
]

const payments = [
  { id: 'INV-4401', seller: 'Raju Kabaadiwala', items: 'Copper wire, PCB boards', weight: '45 kg', amount: '18,500', upi: 'raju.scrap@ybl', date: '06 Aug 2026' },
  { id: 'INV-4402', seller: 'Sharma Scrap', items: 'CRT monitors', weight: '200 kg', amount: '4,500', upi: 'sharma@okicici', date: '06 Aug 2026' },
]

type Transaction = (typeof payments)[number] | (typeof receipts)[number]
type Estimate = { materials: string[]; estimatedWeightKg: number; estimatedValueINR: string; confidenceScore: number; safetyNote?: string }

function speak(text: string, language: Language) {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return
  window.speechSynthesis.cancel()
  const utterance = new SpeechSynthesisUtterance(text)
  utterance.lang = language === 'hi' ? 'hi-IN' : language === 'mr' ? 'mr-IN' : 'en-IN'
  utterance.rate = 0.92
  window.speechSynthesis.speak(utterance)
}

function LanguagePicker({ language, setLanguage, dark = false }: { language: Language; setLanguage: (value: Language) => void; dark?: boolean }) {
  return (
    <div className={`language-picker ${dark ? 'language-picker-dark' : ''}`} aria-label="Language selection">
      <Languages size={15} />
      {(['en', 'hi', 'mr'] as Language[]).map((item) => (
        <button key={item} onClick={() => setLanguage(item)} className={language === item ? 'active' : ''}>{item}</button>
      ))}
    </div>
  )
}

function Login({ language, setLanguage, onLogin }: { language: Language; setLanguage: (value: Language) => void; onLogin: (role: Role) => void }) {
  const [role, setRole] = useState<Role>('kabadiwala')
  const [signup, setSignup] = useState(false)
  const text = copy[language]
  return (
    <main className="login-shell">
      <div className="login-orb login-orb-one" /><div className="login-orb login-orb-two" />
      <section className="login-story">
        <div className="brand-mark"><Leaf /><span>{text.title}</span></div>
        <div className="story-copy">
          <span className="eyebrow"><span className="live-dot" /> भारत का सर्कुलर नेटवर्क</span>
          <h1>{text.welcome}</h1>
          <p>{text.intro}</p>
          <div className="impact-strip">
            <div><strong>2,840+</strong><span>verified partners</span></div>
            <div><strong>1.8M kg</strong><span>diverted from landfill</span></div>
            <div><strong>₹4.2Cr</strong><span>paid transparently</span></div>
          </div>
        </div>
        <div className="material-ticker"><span>copper</span><span>circuit boards</span><span>batteries</span><span>responsibly recycled</span></div>
      </section>
      <section className="login-panel">
        <div className="login-top"><LanguagePicker language={language} setLanguage={setLanguage} dark /></div>
        <div className="login-card">
          <div className="mobile-brand"><Leaf /> {text.title}</div>
          <span className="section-label">Choose your workspace</span>
          <h2>{text.subtitle}</h2>
          <div className="role-tabs">
            <button className={role === 'kabadiwala' ? 'active' : ''} onClick={() => setRole('kabadiwala')}><UsersRound />{text.kabadiwala}<small>Sell & schedule</small></button>
            <button className={role === 'recycler' ? 'active blue' : ''} onClick={() => setRole('recycler')}><RouteIcon />{text.recycler}<small>Collect & settle</small></button>
          </div>
          <form onSubmit={(event) => { event.preventDefault(); onLogin(role) }}>
            {signup && <label><UserRound /><input required placeholder={text.name} /></label>}
            <label><Mail /><input required placeholder={text.email} type="text" /></label>
            <label><LockKeyhole /><input required placeholder={text.password} type="password" minLength={4} /></label>
            <button className={`primary-button ${role === 'recycler' ? 'blue-button' : ''}`} type="submit">{signup ? text.create : text.signIn}<ChevronRight /></button>
          </form>
          <button className="switch-auth" onClick={() => setSignup(!signup)}>{signup ? text.switchLogin : text.switchCreate}</button>
          <p className="trust-line"><ShieldCheck /> Demo portal · no real credentials or payments</p>
        </div>
      </section>
    </main>
  )
}

function MarketRates({ text }: { text: (typeof copy)[Language] }) {
  const [pulse, setPulse] = useState(false)
  useEffect(() => { const timer = window.setInterval(() => setPulse((value) => !value), 3200); return () => window.clearInterval(timer) }, [])
  return (
    <article className="rate-card dark-card">
      <div className="card-heading"><div><span className="section-label mint">MARKET PULSE</span><h3>{text.market}</h3></div><Activity className={pulse ? 'pulse' : ''} /></div>
      <div className="rates-list">{rates.map((rate, index) => (
        <div key={rate.name} style={{ '--delay': `${index * 70}ms` } as React.CSSProperties}>
          <span>{rate.name}</span><strong>₹{rate.price}<small>/kg</small></strong><em className={rate.up ? 'positive' : 'negative'}>{rate.up ? <TrendingUp /> : <TrendingDown />}{rate.delta}</em>
        </div>
      ))}</div>
      <p className="fine-print"><span className="live-dot" /> Indicative rates · refreshed 3 min ago</p>
    </article>
  )
}

function Tutorial({ text }: { text: (typeof copy)[Language] }) {
  const [playing, setPlaying] = useState(false)
  const [step, setStep] = useState(0)
  const steps = [
    { icon: Camera, title: 'Capture or describe', sub: 'Show us the material you have.' },
    { icon: Sparkles, title: 'AI-assisted valuation', sub: 'Get weight, material and value guidance.' },
    { icon: Truck, title: 'Verified direct pickup', sub: 'Match with a trusted collection route.' },
    { icon: Banknote, title: 'Transparent settlement', sub: 'Track UPI payment and digital receipt.' },
  ]
  useEffect(() => { if (!playing) return; const timer = window.setInterval(() => setStep((value) => (value + 1) % steps.length), 2600); return () => window.clearInterval(timer) }, [playing, steps.length])
  const ActiveIcon = steps[step].icon
  return (
    <article className="tutorial-card">
      <div className="tutorial-visual">
        <div className="route-line" /><div className="tutorial-glow" />
        <button className="play-button" onClick={() => setPlaying(!playing)} aria-label={playing ? 'Pause guide' : 'Play guide'}>{playing ? <Pause /> : <Play />}</button>
        <div className="active-tutorial"><span>0{step + 1}</span><ActiveIcon /><strong>{steps[step].title}</strong></div>
      </div>
      <div className="tutorial-copy"><span className="section-label">HOW IT WORKS</span><h3>{text.how}</h3><p>{text.howSub}</p>
        <div className="step-list">{steps.map((item, index) => { const Icon = item.icon; return <button key={item.title} onClick={() => setStep(index)} className={step === index ? 'active' : ''}><i><Icon /></i><span><strong>{item.title}</strong><small>{item.sub}</small></span></button> })}</div>
      </div>
    </article>
  )
}

function Header({ language, setLanguage, role, onHome, onLogout }: { language: Language; setLanguage: (value: Language) => void; role: Role; onHome: () => void; onLogout: () => void }) {
  const text = copy[language]
  return <header className="app-header"><button className="app-brand" onClick={onHome}><span><Leaf /></span><div><strong>{text.title}</strong><small>{role === 'kabadiwala' ? text.kabadiwala : text.recycler} workspace</small></div></button><div className="header-actions"><LanguagePicker language={language} setLanguage={setLanguage} /><button className="profile-pill"><span>RS</span><span className="profile-name">{role === 'kabadiwala' ? 'Raju Scrap' : 'ReNew Hub'}</span></button><button className="icon-button" onClick={onLogout} title={text.logout}><LockKeyhole /></button></div></header>
}

function KabadiwalaDashboard({ text, setView }: { text: (typeof copy)[Language]; setView: (view: View) => void }) {
  return <div className="dashboard-grid page-enter">
    <section className="dashboard-main">
      <div className="welcome-row"><div><span className="section-label">SUNDAY · 06 SEPTEMBER</span><h1>Namaste, Raju.</h1><p>Your materials are worth more when the chain is transparent.</p></div><div className="verified-chip"><ShieldCheck /><span><strong>Verified dealer</strong><small>EcoBridge ID EB-2048</small></span></div></div>
      <div className="action-grid">
        <button className="action-card action-dark" onClick={() => setView('estimator')}><span className="action-icon"><Camera /></span><div><span className="section-label mint">AI VALUATION</span><h2>{text.sell}</h2><p>{text.sellSub}</p></div><ChevronRight /></button>
        <button className="action-card action-green" onClick={() => setView('estimator')}><span className="action-icon"><Sparkles /></span><div><span className="section-label">VOICE + VISION</span><h2>{text.ai}</h2><p>{text.aiSub}</p></div><ChevronRight /></button>
      </div>
      <div className="stats-row"><div><PackageCheck /><span><small>Waste sold</small><strong>1,284 kg</strong></span></div><div><CircleDollarSign /><span><small>Total earnings</small><strong>₹2,47,860</strong></span></div><div><Clock3 /><span><small>Next pickup</small><strong>Today, 2 PM</strong></span></div></div>
      <Tutorial text={text} />
    </section>
    <aside className="dashboard-side"><MarketRates text={text} /><article className="pickup-card"><div className="card-heading"><div><span className="section-label">NEXT PICKUP</span><h3>Route RT-01</h3></div><span className="status-tag">Confirmed</span></div><div className="pickup-map"><div className="map-grid"/><div className="map-route"/><MapPin className="pin-one"/><Truck className="truck-pin"/></div><div className="driver-row"><span className="driver-avatar">AS</span><div><strong>Arjun Singh</strong><small><Star /> 4.9 · Verified driver</small></div><button><Navigation /></button></div></article><button className="history-link" onClick={() => setView('history')}><span><History /></span><div><strong>{text.history}</strong><small>3 verified transactions</small></div><ChevronRight /></button></aside>
  </div>
}

function RecyclerDashboard({ text, selectPayment }: { text: (typeof copy)[Language]; selectPayment: (transaction: Transaction) => void }) {
  return <div className="recycler-layout page-enter"><div className="welcome-row"><div><span className="section-label">OPERATIONS · LIVE</span><h1>Recycler command center.</h1><p>Move cleaner material through shorter, verified routes.</p></div><div className="verified-chip blue-verified"><ShieldCheck /><span><strong>CPCB verified</strong><small>Facility MH-RC-118</small></span></div></div>
    <div className="recycler-stats"><div><PackageCheck/><span><small>Collected this month</small><strong>18.4 tonnes</strong></span><em>+12%</em></div><div><BatteryCharging/><span><small>Storage capacity</small><strong>68% occupied</strong></span><em className="neutral">Safe</em></div><div><WalletCards/><span><small>{text.pending}</small><strong>₹23,000</strong></span><em className="warning">2 due</em></div></div>
    <div className="recycler-columns"><article className="routes-card"><div className="card-heading"><div><span className="section-label">LOGISTICS</span><h3>{text.routes}</h3></div><button className="mini-button"><Navigation/> Optimize</button></div><div className="large-map"><div className="map-grid"/><div className="route-a"/><div className="route-b"/><span className="zone-label zone-north">NORTH ZONE</span><span className="zone-label zone-south">SOUTH ZONE</span><MapPin className="route-pin a"/><MapPin className="route-pin b"/><Truck className="route-truck"/></div><div className="route-list"><div><span className="route-number">01</span><p><strong>North Zone · 3 stops</strong><small>Ramesh Singh · Today, 2:00 PM</small></p><span className="status-tag">En route</span></div><div><span className="route-number">02</span><p><strong>South Zone · 3 stops</strong><small>Abdul Khan · Tomorrow, 10:00 AM</small></p><span className="status-tag pale">Scheduled</span></div></div></article>
      <article className="settlements-card"><div className="card-heading"><div><span className="section-label">SETTLEMENTS</span><h3>{text.pending}</h3></div><ReceiptText /></div>{payments.map((payment) => <div className="payment-item" key={payment.id}><div className="payment-top"><span><strong>{payment.seller}</strong><small>{payment.id} · {payment.weight}</small></span><strong>₹{payment.amount}</strong></div><div className="material-label">{payment.items}</div><button onClick={() => selectPayment(payment)}>{text.pay}<ChevronRight/></button></div>)}</article></div>
  </div>
}

function Estimator({ language, text, onBack }: { language: Language; text: (typeof copy)[Language]; onBack: () => void }) {
  const [description, setDescription] = useState('')
  const [image, setImage] = useState<string | null>(null)
  const [mimeType, setMimeType] = useState('image/jpeg')
  const [stage, setStage] = useState<'input' | 'camera' | 'processing' | 'result'>('input')
  const [estimate, setEstimate] = useState<Estimate | null>(null)
  const [error, setError] = useState('')
  const [recording, setRecording] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const stopCamera = () => { streamRef.current?.getTracks().forEach((track) => track.stop()); streamRef.current = null; setStage('input') }
  useEffect(() => () => streamRef.current?.getTracks().forEach((track) => track.stop()), [])
  const openCamera = async () => { try { const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } }); streamRef.current = stream; setStage('camera'); window.setTimeout(() => { if (videoRef.current) videoRef.current.srcObject = stream }, 0) } catch { setError('Camera access is unavailable. Upload a photo instead.') } }
  const capture = () => { const video = videoRef.current; if (!video) return; const canvas = document.createElement('canvas'); canvas.width = video.videoWidth || 900; canvas.height = video.videoHeight || 650; canvas.getContext('2d')?.drawImage(video, 0, 0, canvas.width, canvas.height); setImage(canvas.toDataURL('image/jpeg', 0.72)); setMimeType('image/jpeg'); stopCamera() }
  const upload = (file?: File) => { if (!file) return; if (file.size > 5_000_000) { setError('Choose an image smaller than 5 MB.'); return } const reader = new FileReader(); reader.onload = () => { setImage(String(reader.result)); setMimeType(file.type || 'image/jpeg'); setError('') }; reader.readAsDataURL(file) }
  const analyze = async () => { if (!description.trim() && !image) return; setStage('processing'); setError(''); try { const response = await fetch('/api/estimate', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ description, image: image?.split(',')[1], mimeType, language }) }); if (!response.ok) throw new Error('Valuation service unavailable'); const data = await response.json() as Estimate; setEstimate(data); setStage('result'); speak(`${text.ready}. ${data.estimatedWeightKg} kilograms. ${data.estimatedValueINR}`, language) } catch { setError('The live AI service is temporarily unavailable. Please try again.'); setStage('input') } }
  const record = () => { const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; if (!SpeechRecognition) { setError('Voice input is not supported in this browser.'); return } const recognition = new SpeechRecognition(); recognition.lang = language === 'hi' ? 'hi-IN' : language === 'mr' ? 'mr-IN' : 'en-IN'; recognition.interimResults = false; setRecording(true); recognition.start(); recognition.onresult = (event) => setDescription((value) => `${value} ${event.results[0][0].transcript}`.trim()); recognition.onend = () => setRecording(false); recognition.onerror = () => setRecording(false) }
  return <section className="estimator page-enter"><div className="subpage-heading"><button onClick={onBack}><ArrowLeft /></button><div><span className="section-label">ECO-CONNECT VISION</span><h1>{text.sell}</h1></div></div>
    {stage === 'camera' && <div className="camera-view"><video ref={videoRef} autoPlay playsInline/><div className="scan-frame"><span>Align material inside the frame</span></div><div className="camera-actions"><button onClick={stopCamera}><X/> Cancel</button><button className="capture-button" onClick={capture}><Camera/> Capture</button></div></div>}
    {stage === 'input' && <div className="estimator-grid"><div className="estimator-input"><div className="drop-actions"><button onClick={openCamera}><Camera/><strong>{text.camera}</strong><small>Use rear camera</small></button><button onClick={() => inputRef.current?.click()}><Upload/><strong>{text.upload}</strong><small>JPG, PNG · max 5 MB</small></button><input ref={inputRef} type="file" accept="image/*" hidden onChange={(event) => upload(event.target.files?.[0])}/></div>{image && <div className="image-preview"><img src={image} alt="Uploaded scrap material"/><button onClick={() => setImage(null)}><X/></button><span><Check/> Ready to scan</span></div>}<div className="description-box"><label>{text.describe}<button onClick={record} className={recording ? 'recording' : ''}><Mic/>{recording ? text.listening : text.speak}</button></label><textarea value={description} onChange={(event) => setDescription(event.target.value)} placeholder={text.placeholder}/></div>{error && <p className="inline-error">{error}</p>}<button className="analyze-button" disabled={!description.trim() && !image} onClick={analyze}><Zap/>{text.analyze}<ChevronRight/></button></div><aside className="estimator-note"><Sparkles/><span className="section-label mint">WHAT AI CHECKS</span><h3>Material, weight and current value range.</h3><p>The estimate supports your conversation with a verified recycler. Final settlement follows physical weighing and quality checks.</p><div><ShieldCheck/><span><strong>Responsible handling</strong><small>Safety notes included for batteries and hazardous parts.</small></span></div></aside></div>}
    {stage === 'processing' && <div className="processing-state"><div className="scan-object">{image ? <img src={image} alt="Material being analyzed"/> : <PackageCheck/>}<span className="scan-beam"/></div><Sparkles/><h2>{text.processing}</h2><p>Eco-Connect is preparing a structured estimate.</p><div className="skeleton-lines"><span/><span/><span/></div></div>}
    {stage === 'result' && estimate && <div className="result-card"><div className="result-top"><span><CheckCircle2/></span><div><small>VALUATION ID · EC-{Date.now().toString().slice(-6)}</small><h2>{text.ready}</h2></div><button onClick={() => speak(`${text.ready}. ${estimate.estimatedWeightKg} kilograms. ${estimate.estimatedValueINR}`, language)}><Volume2/></button></div><div className="result-grid"><div><small>Materials identified</small><strong>{estimate.materials.join(', ')}</strong></div><div><small>Estimated weight</small><strong>{estimate.estimatedWeightKg} kg</strong></div><div className="value-result"><small>Indicative value</small><strong>{estimate.estimatedValueINR}</strong></div><div><small>AI confidence</small><strong>{estimate.confidenceScore}%</strong></div></div>{estimate.safetyNote && <div className="safety-note"><ShieldCheck/><span><strong>Handling note</strong>{estimate.safetyNote}</span></div>}<p className="result-disclaimer">Final value is confirmed after physical weighing and recycler quality inspection.</p><div className="result-actions"><button onClick={() => { setEstimate(null); setImage(null); setDescription(''); setStage('input') }}>{text.rescan}</button><button onClick={onBack}><Truck/>{text.schedule}</button></div></div>}
  </section>
}

function HistoryView({ text, openReceipt, onBack }: { text: (typeof copy)[Language]; openReceipt: (transaction: Transaction) => void; onBack: () => void }) {
  return <section className="history-page page-enter"><div className="subpage-heading"><button onClick={onBack}><ArrowLeft/></button><div><span className="section-label">VERIFIED LEDGER</span><h1>{text.history}</h1></div></div><div className="history-table">{receipts.map((receipt) => <button key={receipt.id} onClick={() => openReceipt(receipt)}><span className="receipt-icon"><ReceiptText/></span><span><strong>{receipt.items}</strong><small>{receipt.id} · {receipt.date} · {receipt.weight}</small></span><strong>₹{receipt.amount}</strong><ChevronRight/></button>)}</div></section>
}

function PaymentView({ transaction, text, onPaid, onBack }: { transaction: Transaction; text: (typeof copy)[Language]; onPaid: () => void; onBack: () => void }) {
  const [processing, setProcessing] = useState(false)
  return <section className="payment-page page-enter"><div className="subpage-heading"><button onClick={onBack}><ArrowLeft/></button><div><span className="section-label">SECURE SETTLEMENT</span><h1>{text.pay}</h1></div></div><div className="payment-card"><span className="upi-mark">UPI</span><p>Paying verified partner</p><h2>{'seller' in transaction ? transaction.seller : ''}</h2><strong className="payment-amount">₹{transaction.amount}</strong><label>Verified UPI ID<input value={'upi' in transaction ? transaction.upi : ''} readOnly/></label><div className="pay-summary"><span>{transaction.items}</span><span>{transaction.weight}</span></div><button disabled={processing} onClick={() => { setProcessing(true); window.setTimeout(onPaid, 1600) }}>{processing ? <><span className="button-spinner"/>Processing secure demo…</> : <><LockKeyhole/>Confirm demo payment</>}</button><p><ShieldCheck/> This prototype does not initiate a real payment.</p></div></section>
}

function ReceiptView({ transaction, text, onBack }: { transaction: Transaction; text: (typeof copy)[Language]; onBack: () => void }) {
  const seller = transaction.seller
  return <section className="receipt-page page-enter"><div className="receipt-paper"><div className="receipt-brand"><span><Leaf/></span><div><strong>EcoBridge Connect</strong><small>{text.receipt}</small></div></div><div className="paid-stamp"><Check/> PAID</div><div className="receipt-number"><small>TRANSACTION</small><strong>{transaction.id}</strong><span>{transaction.date}</span></div><div className="receipt-lines"><div><span>Verified partner</span><strong>{seller}</strong></div><div><span>Materials</span><strong>{transaction.items}</strong></div><div><span>Net weight</span><strong>{transaction.weight}</strong></div><div className="receipt-total"><span>UPI settlement</span><strong>₹{transaction.amount}</strong></div></div><div className="receipt-foot"><ShieldCheck/><span>Recorded on the EcoBridge demo ledger</span></div><div className="receipt-actions"><button onClick={onBack}>{text.close}</button><button onClick={() => window.print()}><Download/> Print / PDF</button></div></div></section>
}

function AIAssistant({ language }: { language: Language }) {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; text: string }[]>([{ role: 'model', text: language === 'en' ? 'Namaste! Ask me about safe e-waste handling or recycling prices.' : language === 'hi' ? 'नमस्ते! ई-कचरे की सुरक्षा या कीमत के बारे में पूछें।' : 'नमस्कार! ई-कचरा सुरक्षा किंवा किंमतींबद्दल विचारा.' }])
  const endRef = useRef<HTMLDivElement>(null)
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages, open])
  const send = async () => { const prompt = input.trim(); if (!prompt || loading) return; const next = [...messages, { role: 'user' as const, text: prompt }]; setMessages(next); setInput(''); setLoading(true); try { const response = await fetch('/api/chat', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ messages: next.slice(-8), language }) }); if (!response.ok) throw new Error(); const data = await response.json() as { response: string }; setMessages((items) => [...items, { role: 'model', text: data.response }]); speak(data.response, language) } catch { setMessages((items) => [...items, { role: 'model', text: 'The assistant is temporarily unavailable. Please try again.' }]) } finally { setLoading(false) } }
  return <div className="assistant-wrap">{open && <div className="assistant-panel"><div className="assistant-head"><span><Sparkles/></span><div><strong>Eco-Connect AI</strong><small><span className="live-dot"/> Circular commerce guide</small></div><button onClick={() => window.speechSynthesis?.cancel()}><VolumeX/></button><button onClick={() => setOpen(false)}><X/></button></div><div className="messages">{messages.map((message, index) => <div key={`${message.role}-${index}`} className={message.role}>{message.role === 'model' && <span><Sparkles/></span>}<p>{message.text}</p></div>)}{loading && <div className="model"><span><Sparkles/></span><p className="typing"><i/><i/><i/></p></div>}<div ref={endRef}/></div><div className="assistant-input"><input value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => { if (event.key === 'Enter') void send() }} placeholder="Ask Eco-Connect…"/><button disabled={!input.trim() || loading} onClick={() => void send()}><Navigation/></button></div></div>}<button className="assistant-toggle" onClick={() => setOpen(!open)}>{open ? <X/> : <><MessageCircle/><span/></>}</button></div>
}

function Home() {
  const [language, setLanguage] = useState<Language>('hi')
  const [role, setRole] = useState<Role | null>(null)
  const [view, setView] = useState<View>('home')
  const [selected, setSelected] = useState<Transaction>(payments[0])
  const text = copy[language]
  useEffect(() => { document.documentElement.lang = language }, [language])
  if (!role) return <Login language={language} setLanguage={setLanguage} onLogin={(nextRole) => { setRole(nextRole); setView('home'); speak(nextRole === 'kabadiwala' ? 'EcoBridge Connect में आपका स्वागत है' : 'Welcome to the recycler command center', language) }} />
  const openReceipt = (transaction: Transaction) => { setSelected(transaction); setView('receipt') }
  return <div className="app-shell"><Header language={language} setLanguage={setLanguage} role={role} onHome={() => setView('home')} onLogout={() => { setRole(null); setView('home'); window.speechSynthesis?.cancel() }}/><main className="app-main">{view === 'home' && (role === 'kabadiwala' ? <KabadiwalaDashboard text={text} setView={setView}/> : <RecyclerDashboard text={text} selectPayment={(transaction) => { setSelected(transaction); setView('payment') }}/>) }{view === 'estimator' && <Estimator language={language} text={text} onBack={() => setView('home')}/>} {view === 'history' && <HistoryView text={text} onBack={() => setView('home')} openReceipt={openReceipt}/>} {view === 'payment' && <PaymentView transaction={selected} text={text} onBack={() => setView('home')} onPaid={() => setView('receipt')}/>} {view === 'receipt' && <ReceiptView transaction={selected} text={text} onBack={() => setView(role === 'kabadiwala' ? 'history' : 'home')}/>}</main><AIAssistant language={language}/></div>
}

declare global {
  interface Window {
    SpeechRecognition?: new () => SpeechRecognition
    webkitSpeechRecognition?: new () => SpeechRecognition
  }
  interface SpeechRecognition {
    lang: string
    interimResults: boolean
    start: () => void
    onresult: (event: { results: { [index: number]: { [index: number]: { transcript: string } } } }) => void
    onend: () => void
    onerror: () => void
  }
}
