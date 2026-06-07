// ── Clean emails ──────────────────────────────────────────────
export const initialEmails = [
  {
    id: 1,
    unread: false,
    from: 'Māris Bērziņš',
    fromEmail: 'm.berzins@balticventures.lv',
    initials: 'MB',
    avatarBg: '#0f6cbd',
    subject: 'Partnerības līgums — Gatavi virzīties uz priekšu',
    preview: 'Sveiki, vēlējos sekot līdzi mūsu pagājušās nedēļas sarunām. Mūsu juridiskā komanda ir izskatījusi noteikumus un esam gatavi turpināt sadarbību.',
    time: '5. jūn.',
    date: 'Ce 05.06.2026 14:14',
    to: 'man',
    scamCheck: {
      verdict: 'clean',
      checks: [
        { id: 'sender',      label: 'Sūtītājs verificēts',     pass: true, detail: 'm.berzins@balticventures.lv atbilst zināmajam kontaktam. Domēns ir likumīgs.' },
        { id: 'urgency',     label: 'Nav spiediena taktikas',   pass: true, detail: 'Nav atklāta steidzamības vai spiediena valoda.' },
        { id: 'attachments', label: 'Nav aizdomīgu failu',      pass: true, detail: 'Šajā e-pastā nav pielikumu.' },
        { id: 'language',    label: 'Dabiska valoda',           pass: true, detail: 'Rakstīšanas stils atbilst iepriekšējai sarakstei.' },
      ],
    },
    body: `
      <p>Sveiki,</p>
      <p>Vēlējos sekot līdzi mūsu pagājušās nedēļas sarunām. Mūsu juridiskā komanda ir izskatījusi piedāvātos noteikumus un esam gatavi virzīties uz priekšu ar partnerību.</p>
      <p>Mēs esam ļoti sajūsmināti par iespējām šeit. Esmu lūdzis mūsu līgumu komandai sagatavot formālo partnerības līguma dokumentu. Kad tas būs gatavs, nosūtīšu to jums apskatīšanai — tas neaizņems vairāk par pāris dienām.</p>
      <p>Pa to laiku, dariet man zināmu, ja ir kaut kas, ko vēlaties precizēt pirms parakstīšanas posma.</p>
      <p class="sig">
        Māris Bērziņš<br/>
        Biznesa attīstības vadītājs · Baltic Ventures SIA<br/>
        m.berzins@balticventures.lv · +371 2611 4820
      </p>
    `,
  },
  {
    id: 2,
    unread: false,
    from: 'Māris Bērziņš',
    fromEmail: 'm.berzins@balticventures.lv',
    initials: 'MB',
    avatarBg: '#0f6cbd',
    subject: 'RE: Partnerības līgums — Dokuments gatavs',
    preview: 'Lieliskas ziņas — mūsu juridiskā komanda šorīt pabeidza līgumu. Drīzumā nosūtīšu PDF jums apskatīšanai un parakstīšanai. Termiņš abām pusēm ir nākamās nedēļas beigas.',
    time: 'Vakar',
    date: 'Sv 07.06.2026 11:08',
    to: 'man',
    scamCheck: {
      verdict: 'clean',
      checks: [
        { id: 'sender',      label: 'Sūtītājs verificēts',     pass: true, detail: 'm.berzins@balticventures.lv — atbilst sarakstes vēsturei.' },
        { id: 'urgency',     label: 'Nav spiediena taktikas',   pass: true, detail: 'Termiņš minēts kontekstā, nevis kā spiediena taktika.' },
        { id: 'attachments', label: 'Nav aizdomīgu failu',      pass: true, detail: 'Nav pielikumu — PDF tiks nosūtīts atsevišķi.' },
        { id: 'language',    label: 'Dabiska valoda',           pass: true, detail: 'Tonis un frāzes atbilst iepriekšējiem šī sūtītāja e-pastiem.' },
      ],
    },
    body: `
      <p>Sveiki,</p>
      <p>Lieliskas ziņas — mūsu juridiskā komanda šorīt pabeidza līgumu. Drīzumā nosūtīšu PDF jums apskatīšanai.</p>
      <p>Kad būsiet izskatījuši, ja viss izskatās labi, mums vienkārši vajadzīgs jūsu paraksts un varam virzīties uz priekšu. Mūsu iekšējais termiņš abām pusēm parakstīšanai ir <strong>nākamās nedēļas beigas</strong>, tāpēc nav steigas — pietiek laika, lai rūpīgi izlasītu.</p>
      <p>Ceru pabeigsim šo darbu. Dāstiet man zināmu, ja jums ir kādi jautājumi pirms dokumenta saņemšanas.</p>
      <p class="sig">
        Māris Bērziņš<br/>
        Biznesa attīstības vadītājs · Baltic Ventures SIA<br/>
        m.berzins@balticventures.lv · +371 2611 4820
      </p>
    `,
  },
  {
    id: 3,
    unread: true,
    from: 'Santa Jansone',
    fromEmail: 's.jansone@meridians-group.lv',
    initials: 'SJ',
    avatarBg: '#ca5010',
    subject: 'Q3 Stratēģijas pārskats — Ceturtdien plkst. 14:00',
    preview: 'Sveiki, komanda! Vēlos apstiprināt mūsu gaidāmo Q3 stratēģijas pārskata sesiju. Jūsu dalība ir svarīga, jo mēs noteikšam prioritātes nākamajam ceturksnim.',
    time: '9:41',
    date: 'P 08.06.2026 9:41',
    to: 'Produktu komanda',
    scamCheck: {
      verdict: 'clean',
      checks: [
        { id: 'sender',      label: 'Sūtītājs verificēts',     pass: true, detail: 's.jansone@meridians-group.lv ir iekšēja adrese.' },
        { id: 'urgency',     label: 'Nav spiediena taktikas',   pass: true, detail: 'Sanāksmes uzaicinājums ar saprātīgu paziņošanas laiku.' },
        { id: 'attachments', label: 'Nav aizdomīgu failu',      pass: true, detail: 'Nav pielikumu.' },
        { id: 'language',    label: 'Dabiska valoda',           pass: true, detail: 'Atbilst iekšējai saziņai.' },
      ],
    },
    body: `
      <p>Sveiki, komanda!</p>
      <p>Vēlos apstiprināt mūsu gaidāmo <strong>Q3 Stratēģijas pārskata</strong> sesiju. Jūsu dalība ir svarīga — mēs vienojamies par prioritātēm un resursu sadali nākamajam ceturksnim.</p>
      <div class="callout">
        <strong>📅 Sanāksmes informācija</strong><br/>
        Datums: <strong>Ceturtdiena, 2026. gada 11. jūnijs</strong><br/>
        Laiks: 14:00 – 15:30<br/>
        Vieta: Konferenču zāle B · Teams saite kalendāra ielūgumā
      </div>
      <h3>Darba kārtība</h3>
      <ul>
        <li>Q2 darbības pārskats un KPI analīze <em>(20 min)</em></li>
        <li>Q3 ceļvedis un resursu sadale <em>(30 min)</em></li>
        <li>Budžeta apstiprināšana <em>(20 min)</em></li>
        <li>Brīvā diskusija <em>(20 min)</em></li>
      </ul>
      <p>Ja nevarat piedalīties, lūdzu paziņojiet līdz <strong>trešdienas beigām</strong>.</p>
      <p class="sig">
        Santa Jansone<br/>
        Produktu stratēģijas vadītāja · Meridiāns Group<br/>
        s.jansone@meridians-group.lv
      </p>
    `,
  },
  {
    id: 4,
    unread: false,
    from: 'Grāmatvedība',
    fromEmail: 'gramatvediba@meridians-group.lv',
    initials: 'GR',
    avatarBg: '#881798',
    subject: 'Rēķins #REK-2026-0847 gaida jūsu apstiprinājumu',
    preview: 'Rēķins ir iesniegts un prasa jūsu apstiprinājumu pirms maksājuma termiņa. Kopējā summa: €12 400,00.',
    time: '2. jūn.',
    date: 'P 02.06.2026 11:23',
    to: 'Finanšu apstiprinātāji',
    scamCheck: {
      verdict: 'clean',
      checks: [
        { id: 'sender',      label: 'Sūtītājs verificēts',     pass: true, detail: 'gramatvediba@meridians-group.lv ir iekšēja grāmatvedības adrese.' },
        { id: 'urgency',     label: 'Nav spiediena taktikas',   pass: true, detail: 'Standarta rēķins ar saprātīgu termiņu.' },
        { id: 'attachments', label: 'Nav aizdomīgu failu',      pass: true, detail: 'Šajā paziņojumā nav failu pielikumu.' },
        { id: 'language',    label: 'Dabiska valoda',           pass: true, detail: 'Formāls rēķina teksts, atbilst finanšu veidnēm.' },
      ],
    },
    body: `
      <p>Labdien,</p>
      <p>Sistēmā ir iesniegts rēķins, kas prasa jūsu apstiprinājumu pirms maksājuma termiņa.</p>
      <div class="callout">
        <strong>Rēķins #REK-2026-0847</strong><br/>
        Piegādātājs: CloudStack Solutions SIA<br/>
        Summa: <strong>€12 400,00</strong><br/>
        Termiņš: 2026. gada 20. jūnijs
      </div>
      <h3>Rindas vienumi</h3>
      <table>
        <thead><tr><th>Apraksts</th><th>Daudzums</th><th>Kopā</th></tr></thead>
        <tbody>
          <tr><td>Kubernetes klasteris (Q2)</td><td>1</td><td>€7 800,00</td></tr>
          <tr><td>Objektu glabātuve — 5 TB</td><td>5</td><td>€1 300,00</td></tr>
          <tr><td>Enterprise atbalsta plāns</td><td>1</td><td>€3 300,00</td></tr>
          <tr><td colspan="2"><strong>Kopā</strong></td><td><strong>€12 400,00</strong></td></tr>
        </tbody>
      </table>
      <p class="sig">
        Meridiāns Group · Grāmatvedība<br/>
        gramatvediba@meridians-group.lv · Tālr. 4400
      </p>
    `,
  },
  {
    id: 5,
    unread: true,
    from: 'IT Atbalsts',
    fromEmail: 'it.atbalsts@meridians-group.lv',
    initials: 'IT',
    avatarBg: '#c43e1c',
    subject: '[Pieteikums #84721] VPN piekļuves pieprasījums — apstiprināts',
    preview: 'Jūsu VPN piekļuves pieprasījums ir saņemts un piešķirts tīkla drošības komandai. Paredzamais izpildes laiks: 24 darba stundu laikā.',
    time: '4. jūn.',
    date: 'Ce 04.06.2026 14:57',
    to: 'man',
    scamCheck: {
      verdict: 'clean',
      checks: [
        { id: 'sender',      label: 'Sūtītājs verificēts',     pass: true, detail: 'it.atbalsts@meridians-group.lv ir zināma iekšēja IT adrese.' },
        { id: 'urgency',     label: 'Nav spiediena taktikas',   pass: true, detail: 'Standarta pieteikuma apstiprinājums bez piespiešanas valodas.' },
        { id: 'attachments', label: 'Nav aizdomīgu failu',      pass: true, detail: 'Nav pielikumu.' },
        { id: 'language',    label: 'Dabiska valoda',           pass: true, detail: 'Automātisks helpdesk tonis, atbilst iekšējai IT saziņai.' },
      ],
    },
    body: `
      <p>Labdien,</p>
      <p>Šis e-pasts apstiprina, ka esam saņēmuši jūsu VPN piekļuves pieprasījumu. Pieteikums ir reģistrēts un piešķirts tīkla drošības komandai.</p>
      <div class="callout">
        <strong>Pieteikums #84721 — VPN piekļuves pieprasījums</strong><br/>
        Statuss: <strong>Tiek apstrādāts</strong><br/>
        Prioritāte: Normāla<br/>
        Paredzamā izpilde: 24 darba stundu laikā
      </div>
      <h3>Turpmākā rīcība</h3>
      <ol>
        <li>Tīkla komanda izskatīs jūsu piekļuves apjomu</li>
        <li>Jūsu vadītājs saņems apstiprinājuma pieprasījumu</li>
        <li>Pēc apstiprināšanas saņemsiet VPN akreditācijas datus un uzstādīšanas instrukcijas</li>
      </ol>
      <p class="sig">
        IT Atbalsts · Meridiāns Group<br/>
        it.atbalsts@meridians-group.lv · Tālr. 9000
      </p>
    `,
  },
]

// ── Scam email — injected after 1 s ──────────────────────────
export const scamEmail = {
  id: 6,
  unread: true,
  isNew: true,
  from: 'Māris Bērziņš',
  fromEmail: 'mb.beerzins@balticventures.lv',   // ← typo: "beerzins" not "berzins"
  initials: 'MB',
  avatarBg: '#0f6cbd',
  subject: 'RE: Partnerības līgums — Lūdzu parakstiet PDF līdz rītdienai',
  preview: 'Lūdzu, atrodiet pievienoto galīgo līguma PDF. Mums vajadzīgs jūsu paraksts līdz rītdienas darba dienas beigām — termiņu nevar pārcelt. Tas ir steidzami.',
  time: 'Tikko',
  date: 'P 08.06.2026 10:03',
  to: 'man',
  attachments: [
    { name: 'Partneriba_Ligums_Galigs_v3.pdf', malicious: true },
  ],
  scamCheck: {
    verdict: 'scam',
    checks: [
      {
        id: 'sender',
        label: 'Aizdomīga sūtītāja adrese',
        pass: false,
        detail: '"mb.beerzins@balticventures.lv" — dubultots "e" vārdā "beerzins". Iespējams, tiek atdarināts m.berzins@balticventures.lv.',
      },
      {
        id: 'urgency',
        label: 'Augsts spiediena līmenis',
        pass: false,
        detail: 'Atklātas frāzes: "līdz rītdienas darba dienas beigām", "termiņu nevar pārcelt", "tas ir steidzami" — klasiskas pikšķerēšanas taktikas.',
      },
      {
        id: 'attachments',
        label: 'Ļaunprātīgs pielikums',
        pass: false,
        detail: 'Partneriba_Ligums_Galigs_v3.pdf satur iegultu JavaScript kodu un neskaidru izpildāmu kodu. Neatveriet.',
      },
      {
        id: 'language',
        label: 'Dabiska valoda',
        pass: true,
        detail: 'Rakstīšanas stils daļēji atdarina likumīgo kontaktu, bet ir steidzīgāks un spiedienu radošāks nekā iepriekšējie ziņojumi.',
      },
    ],
  },
  // sus-mark spans are rendered by ReadingPane when highlights are active
  body: `
    <p>Sveiki,</p>
    <p>Lūdzu, atrodiet pievienoto galīgo partnerības līguma PDF šajā e-pastā.</p>
    <p>Mums vajadzīgs jūsu paraksts līdz <span class="sus-mark sus-urgency">rītdienas darba dienas beigām</span> — mūsu juridiskā komanda ir apstiprinājusi, ka <span class="sus-mark sus-urgency">termiņu nevar pārcelt</span>. <span class="sus-mark sus-urgency">Tas ir steidzami.</span></p>
    <p>Vienkārši parakstiet 7. lappusi un nosūtiet dokumentu atpakaļ, vai izmantojiet DocuSign saiti pēdējā lappusē.</p>
    <p>Lūdzu, uztveriet to kā prioritāti — <span class="sus-mark sus-urgency">darījums nevar turpināties bez jūsu parakstītās kopijas.</span></p>
    <p class="sig">
      Māris Bērziņš<br/>
      Biznesa attīstības vadītājs · Baltic Ventures SIA<br/>
      mb.beerzins@balticventures.lv
    </p>
  `,
}
