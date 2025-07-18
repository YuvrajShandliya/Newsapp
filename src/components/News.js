import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
      country: 'us',
      pageSize: 8,
      category: 'general'
    }
    static propTypes = {
      country: PropTypes.string,
      pageSize: PropTypes.number,
      category: PropTypes.string
    }




  articles = [
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "AJ Dellinger",
      title: "MicroStrategy Says Drop the Micro, It’s Cleaner",
      description:
        "The tech company turned Bitcoin repository is changing its name.",
      url: "https://gizmodo.com/microstrategy-says-drop-the-micro-its-cleaner-2000559905",
      urlToImage:
        "https://gizmodo.com/app/uploads/2025/02/GettyImages-2039371693.jpg",
      publishedAt: "2025-02-06T13:45:12Z",
      content:
        "Michael Saylor is apparently done thinking small. The founder and CEO of MicroStrategy announced Wednesday that his company would be dropping the “Micro” from its name, instead operating as Strategy.… [+2833 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Matthew Gault",
      title: "Musk and Trump’s Fort Knox Trip Is About Bitcoin",
      description:
        "More than a stunt, the Fort Knox visit might be a chance for the President to change the price of gold and dump the price hike into cryptocurrency.",
      url: "https://gizmodo.com/musk-and-trumps-fort-knox-trip-is-about-bitcoin-2000569420",
      urlToImage:
        "https://gizmodo.com/app/uploads/2024/10/sec-bitcoin-hack-arrest.jpg",
      publishedAt: "2025-02-27T19:05:24Z",
      content:
        "Can a President make money out of thin air? On paper, yes.\r\nDonald Trump and Elon Musk have been talking a lot about Fort Knox lately, the place where America keeps its official gold reserves. Both h… [+3792 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Vox Creative",
      title: "Five predictions for where crypto is headed in 2025",
      description:
        "Crypto is, once again, exploding. Momentum born of a potentially friendlier regulatory atmosphere has met rising coin values, with Bitcoin more than doubling in value last year. Meanwhile, powered by advances to the underlying infrastructure, crypto is evolvi…",
      url: "https://www.theverge.com/ad/612525/five-predictions-for-crypto-2025-saga",
      urlToImage:
        "https://platform.theverge.com/wp-content/uploads/sites/2/2025/02/VG24_Saga_1660442_Lede_V1.png?quality=90&strip=all&crop=0%2C29.057591623037%2C100%2C41.884816753927&w=1200",
      publishedAt: "2025-02-26T18:34:53Z",
      content:
        "Crypto is, once again, exploding. Momentum born of a potentially friendlier regulatory atmosphere has met rising coin values, with Bitcoin more than doubling in value last year. Meanwhile, powered by… [+6145 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title: "Man wants to buy tip where he lost Bitcoin fortune",
      description:
        "James Howells wants to search a landfill site where he lost for 8,000 bitcoins now worth about £620m.",
      url: "https://www.bbc.com/news/articles/cj3eg3n11gvo",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/4308/live/91110310-e717-11ef-a319-fb4e7360c4ec.jpg",
      publishedAt: "2025-02-09T21:58:13Z",
      content:
        "James Howells tried to sue Newport council to gain access to the landfill site\r\nThe authority is planning to close the tip in the 2025-26 financial year.\r\nIt has planning permission for a solar farm … [+1458 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title:
        "'This battle is my 9 to 5 - I won't stop until I have my £620m of Bitcoin back'",
      description:
        "James Howells claimed his ex-girlfriend threw out the hard drive, today worth £620m, in 2013.",
      url: "https://www.bbc.com/news/articles/czdl6er0369o",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/bc34/live/df2953e0-eae6-11ef-bd1b-d536627785f2.jpg",
      publishedAt: "2025-02-15T21:57:29Z",
      content:
        "James Howells tried to sue Newport council to gain access to the tip where his hard drive ended up\r\nIt has been more than a decade since James Howells' hard drive - containing Bitcoin now worth hundr… [+6747 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "AJ Dellinger",
      title:
        "Man in Search of Lost Bitcoin Fortune Wants to Buy the Landfill Where He Swears Its Buried",
      description:
        "James Howells has been chasing his lost hard drive for more than a decade now.",
      url: "https://gizmodo.com/man-in-search-of-lost-bitcoin-fortune-wants-to-buy-the-landfill-where-he-swears-its-buried-2000561920",
      urlToImage:
        "https://gizmodo.com/app/uploads/2024/09/An-image-of-Bitcoin-cryptocurrency.jpg",
      publishedAt: "2025-02-11T14:15:04Z",
      content:
        "If you believed that you knew where a hard drive containing more than $700 million in Bitcoin was located, how far would you go to get your hands on it? James Howells, a British IT worker who mined h… [+3319 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title: "Cryptocurrency theft of £1.1bn could be biggest ever",
      description:
        "Dubai-based Bybit said it could afford to reimburse customers and that it was working to find the hackers.",
      url: "https://www.bbc.com/news/articles/cx2844nvwx8o",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/6955/live/3b7f8060-f0a0-11ef-aa8c-a70a49189dd9.jpg",
      publishedAt: "2025-02-22T01:49:14Z",
      content:
        "Faarea Masud\r\nCryptocurrency firm Bybit said hackers stole $1.5bn (£1.1bn) worth of digital currency in what could be the biggest crypto theft in history.\r\nThe Dubai-based company's founder told user… [+2300 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: null,
      title: "Bullish Overseas Bitcoin Buyers Overtake U.S.",
      description: null,
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_8b679e9b-aac1-4741-a642-7efd51aaf250",
      urlToImage: null,
      publishedAt: "2025-02-12T19:41:25Z",
      content:
        "If you click 'Accept all', we and our partners, including 239 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+702 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: null,
      title: "MicroStrategy deepens bitcoin focus with rebrand",
      description: null,
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_123d2ddd-f99d-45f0-a9a5-6f7c4df384f5",
      urlToImage: null,
      publishedAt: "2025-02-05T18:35:33Z",
      content:
        "If you click 'Accept all', we and our partners, including 239 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+702 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "AJ Dellinger",
      title: "US Soldier Accused of Verizon and AT&T Hacks Pleads Guilty",
      description: "He faces up to $500,000 in fines and 20 years in prison.",
      url: "https://gizmodo.com/us-soldier-accused-of-verizon-and-att-hacks-pleads-guilty-2000565667",
      urlToImage:
        "https://gizmodo.com/app/uploads/2024/04/5dbff8ac39ab28ed7fbb47f4eac09c76.jpg",
      publishedAt: "2025-02-19T20:40:30Z",
      content:
        "Cameron John Wagenius, a former US Army soldier, pleaded guilty to his role in a hack that affected AT&amp;T and Verizon and resulted in the theft of data from well over 100 million customers of the … [+2409 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: null,
      title: "Strategy buys additional $2 billion worth of bitcoin",
      description: null,
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_05de709f-94ea-44cd-9dab-ebd360bfd2d6",
      urlToImage: null,
      publishedAt: "2025-02-24T16:06:02Z",
      content:
        "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+702 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Ayesha Aziz",
      title:
        "Bitcoin's Acquisition Cost Hits Record $40.9K in 2024 as Analysts Predict $40K Floor Price",
      description:
        "Bitcoin’s average acquisition cost reached an all-time high of $40,980 per BTC at the end of 2024, according to ARK Invest’s Big Ideas 2025 report.",
      url: "https://finance.yahoo.com/news/bitcoins-acquisition-cost-hits-record-074618301.html",
      urlToImage:
        "https://media.zenfs.com/en/coinmarketcap_783/d3a0a5bad34a5f140d2405e0e0d5f562",
      publishedAt: "2025-02-13T07:46:18Z",
      content:
        "Bitcoins average acquisition cost reached an all-time high of $40,980 per BTC at the end of 2024, according to ARK Invests Big Ideas 2025 report. This marks an 86% increase over the previous year, br… [+2258 chars]",
    },
    {
      source: {
        id: null,
        name: "Digital Trends",
      },
      author: "Trevor Mogg",
      title:
        "Computer engineer has a new idea to recover his $765M of buried Bitcoin",
      description:
        "Twelve years on and he's still looking for ways to recover his lost Bitcoin.",
      url: "https://www.digitaltrends.com/computing/computer-engineer-new-idea-to-recover-buried-bitcoin/",
      urlToImage:
        "https://www.digitaltrends.com/wp-content/uploads/2025/02/bitcoin.jpg?resize=1200%2C630&p=1",
      publishedAt: "2025-02-11T06:45:36Z",
      content:
        "Buried in a garbage dump in Wales, U.K., is a hard drive containing Bitcoin worth a colossal $765 million, according to computer engineer James Howells.\r\nHowells accidentally discarded the smartphone… [+1917 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: null,
      title:
        "Bitcoin Price Faces Volatility as Market Braces for Potential $85K Breakdown Following August 2023 Pattern",
      description: null,
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_855f1010-7003-4d30-97f8-2ef15cb85b3b",
      urlToImage: null,
      publishedAt: "2025-02-19T07:57:24Z",
      content:
        "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+702 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: null,
      title:
        "Trump goes all-in on crypto: Bitcoin soars as new policies shake up the industry",
      description: null,
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_cb43f119-80e0-44a0-a0bf-cc141440b438",
      urlToImage: null,
      publishedAt: "2025-02-08T13:48:00Z",
      content:
        "If you click 'Accept all', we and our partners, including 239 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+702 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: null,
      title:
        "Strategy reports fourth straight quarterly loss, deepens bitcoin focus with rebranding",
      description: null,
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_009c4bd9-7757-48f7-8762-1c92829d2d32",
      urlToImage: null,
      publishedAt: "2025-02-05T18:35:33Z",
      content:
        "If you click 'Accept all', we and our partners, including 239 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+702 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: null,
      title:
        "Bitcoin Soared 120% in 2024. Could It Repeat That Performance in 2025?",
      description: null,
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_586cc2df-0368-4e1e-817b-0834b3987307",
      urlToImage: null,
      publishedAt: "2025-02-11T10:30:00Z",
      content:
        "If you click 'Accept all', we and our partners, including 239 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+702 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Matthew Gault",
      title: "El Salvador Backs Away From Its Bitcoin Experiment",
      description:
        "In order to accept a $1.4 billion loan from the IMF, El Salvador had to change some of its cryptocurrency laws.",
      url: "https://gizmodo.com/el-salvador-backs-away-from-its-bitcoin-experiment-2000559077",
      urlToImage:
        "https://gizmodo.com/app/uploads/2025/02/BitcoinElSalvador.jpg",
      publishedAt: "2025-02-04T18:15:32Z",
      content:
        "Bitcoin is out of power in El Salvador after lawmakers in the country rushed to change laws around the cryptocurrency following a deal with the International Monetary Fund.\r\nSan Salvador and Presiden… [+3088 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Mark Mantel",
      title:
        "Rekord: Über 830 Trillionen Hashes pro Sekunde fürs Bitcoin-Mining",
      description:
        "Hohe Bitcoin-Kurse erquicken Mining-Farmen. Sie verwenden so viel Hardware zum Schürfen wie noch nie.",
      url: "https://www.heise.de/news/Rekord-Ueber-830-Trillionen-Hashes-pro-Sekunde-fuers-Bitcoin-Mining-10269522.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/7/9/4/5/8/7/shutterstock_1841762269-1efce39393fb55d5.jpg",
      publishedAt: "2025-02-04T15:54:00Z",
      content:
        "Bitcoin-Miner bauen ihre Rechenfarmen weiter aus: Die Rechenkapazität im Netzwerk steigt abseits von kleinen Dellen kontinuierlich an. Zuletzt erreicht sie einen neuen Rekord von 833 Trillionen Hashe… [+2083 chars]",
    },
    {
      source: {
        id: null,
        name: "Slashdot.org",
      },
      author: "EditorDavid",
      title: "Will Cryptomining Facilities Change Into AI Data Centers?",
      description:
        'To capitalize on the AI boom, many crypto miners "have begun to repurpose parts of their operations into data centers," reports Reuters, "given they already have most of the infrastructure" (including landing and "significant" power resources...)\n\n\nToronto-ba…',
      url: "https://hardware.slashdot.org/story/25/02/03/0452259/will-cryptomining-facilities-change-into-ai-data-centers",
      urlToImage: "https://a.fsdn.com/sd/topics/power_64.png",
      publishedAt: "2025-02-03T06:19:00Z",
      content:
        "The Fine Print: The following comments are owned by whoever posted them. We are not responsible for them in any way.",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Thomas Maxwell",
      title:
        "Man Who Hijacked SEC’s X Account to Pump Bitcoin Faces Up to Five Years in Prison",
      description:
        "The Alabama man took over the SEC's X account to falsely post that the agency had approved Bitcoin ETFs, sending the cryptocurrency's price soaring.",
      url: "https://gizmodo.com/man-who-hijacked-secs-x-account-to-pump-bitcoin-faces-up-to-five-years-in-prison-2000562426",
      urlToImage:
        "https://gizmodo.com/app/uploads/2024/02/5cf152d4aa3e03d74ce08b74ea03e1a3.jpg",
      publishedAt: "2025-02-11T20:35:44Z",
      content:
        "An Alabama man who hijacked the X account of the US Securities and Exchange Commission (SEC) to pump Bitcoin has pleaded guilty to identity theft and access device fraud. Eric Council Jr., along with… [+3384 chars]",
    },
    {
      source: {
        id: null,
        name: "MarketWatch",
      },
      author: "Mark Hulbert",
      title:
        "North Korea’s $1.5 billion crypto hack is chump change — given what’s lurking",
      description:
        "Crypto’s vulnerability to theft will keep bitcoin from widespread use",
      url: "https://www.marketwatch.com/story/north-koreas-1-5-billion-crypto-hack-is-chump-change-given-whats-lurking-a03f29c3",
      urlToImage: "https://images.mktw.net/im-47117379/social",
      publishedAt: "2025-02-26T12:45:00Z",
      content:
        "Cryptocurrency buyers should be prepared for more and bigger threats after North Koreas recent robbery of close to\r\n $1.5 billion of cryptocurrency from crypto exchange Bybit.Thats just one of the im… [+306 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Andreas Knobloch",
      title: "El Salvador schafft Bitcoin als Währung wieder ab",
      description:
        "Als erstes Land der Welt ließ El Salvador den Bitcoin als offizielles Zahlungsmittel zu. Der IWF forderte die Rücknahme der Regelung – und setzt sich nun durch.",
      url: "https://www.heise.de/news/El-Salvador-schafft-Bitcoin-als-Waehrung-wieder-ab-10268264.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/7/9/3/9/3/1/shutterstock_1976944238-5e18b8fbf881e81c.jpg",
      publishedAt: "2025-02-03T20:31:00Z",
      content:
        "Mit viel Tamtam vor vier Jahren gestartet, nun recht still und leise beerdigt: Auf Druck des Internationalen Währungsfonds (IWF) hat El Salvador die Pflicht für Händler, Bitcoin als Zahlungsmittel zu… [+3130 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: null,
      title:
        "Bill Barhydt Predicts $700K Bitcoin and $16K Ethereum in 2025, While Arthur Hayes Foresees Market Drop to $70K",
      description: null,
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_736d9a43-ebd4-49fa-95cd-df67eb288138",
      urlToImage: null,
      publishedAt: "2025-02-10T07:48:57Z",
      content:
        "If you click 'Accept all', we and our partners, including 239 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+702 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Juli Clover",
      title: "Apple Removed Apps Infested With Screen Reading Malware",
      description:
        'Information on new "SparkCat" malware infesting a small number of iOS apps was shared yesterday by Kaspersky, and shortly after the report came out, Apple pulled the apps from the App Store.\n\n\n\n\n\nSome of the apps that had hidden malware included ComeCome, WeT…',
      url: "https://www.macrumors.com/2025/02/06/apple-removed-screen-reading-malware-apps/",
      urlToImage:
        "https://images.macrumors.com/t/Z4nU2dRocDnr4NPvf-sGNedmPGA=/2250x/article-new/2022/01/iOS-App-Store-General-Feature-JoeBlue.jpg",
      publishedAt: "2025-02-06T23:19:58Z",
      content:
        'Information on new "SparkCat" malware infesting a small number of iOS apps was shared yesterday by Kaspersky, and shortly after the report came out, Apple pulled the apps from the App Store.\r\nSome of… [+1711 chars]',
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Martin Holland",
      title:
        "Minus 20 Prozent in einer Woche: Kurse von Bitcoin & Co. regelrecht abgestürzt",
      description:
        "Noch vor etwas über einem Monat kostete ein Bitcoin etwa 110.000 US-Dollar. Nach einer dramatischen Woche sind es am Freitag jetzt nur noch gut 80.000.",
      url: "https://www.heise.de/news/Wie-im-Krypto-Winter-Bitcoin-faellt-auf-80-000-US-Dollar-10299714.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/8/1/0/3/7/9/shutterstock_1977744146-382fbeb9a3469ab6.jpg",
      publishedAt: "2025-02-28T09:49:00Z",
      content:
        "Der Preis für einen Bitcoin ist vorübergehend unter die Marke von 80.000 US-Dollar gefallen, seit dem Höchststand vor nur gut einem Monat ist der Kurs um mehr als 25 Prozent abgesackt. Allein in den … [+1997 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Andreas Knobloch",
      title:
        "Dienstag: Beitragsnachlass gegen Daten, El Salvador streicht Bitcoin als Währung",
      description:
        "Gesundheitsdaten begehrt + Bitcoin nicht mehr Währung El Salvadors + X klagt wegen Werbeboykott + Nvidia-Hardware bei DeepSeek + Porno-App auf dem iPhone",
      url: "https://www.heise.de/news/Dienstag-Beitragsnachlass-gegen-Daten-El-Salvador-streicht-Bitcoin-als-Waehrung-10268330.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/7/9/3/9/6/5/Wochentage-source-sans-30d428d8d4315fdf.png",
      publishedAt: "2025-02-04T05:15:00Z",
      content:
        'Die "E-Patientenakte für alle" sorgt für Begehrlichkeiten. Ginge es nach CDU-Chef Friedrich Merz, kostete Privatsphäre die Patienten bald extra. Wer seine Daten schützen möchte, müsste tiefer in die … [+4272 chars]',
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Andreas Knobloch",
      title: "Zentralafrikanische Republik führt Meme-Coin ein",
      description:
        'Der Bitcoin wurde in dem afrikanischen Land als offizielles Zahlungsmittel wieder abgeschafft. Nun soll ein Meme-Coin "die nationale Entwicklung unterstützen".',
      url: "https://www.heise.de/news/Zentralafrikanische-Republik-fuehrt-Meme-Coin-ein-10277356.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/7/9/8/7/4/1/shutterstock_1466689460-4008cad4c8e19c0e.jpg",
      publishedAt: "2025-02-11T03:35:00Z",
      content:
        "Die Zentralafrikanische Republik hat einen Meme-Coin eingeführt, um die nationale Entwicklung zu unterstützen und ihr internationales Profil zu schärfen. Der Präsident des Landes, Faustin-Archange To… [+2499 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Wolf Hosbach",
      title:
        "Bösartiger Code in 200 GitHub-Repositories stiehlt knapp 500.000 Euro",
      description:
        "Eine Malware-Kampagne in GitHub-Repositories hat es auf Bankdaten und Bitcoin-Wallets abgesehen. Der Schadcode wird oft erst zur Build-Zeit ausgeführt.",
      url: "https://www.heise.de/news/Boesartiger-Code-in-200-GitHub-Repositories-stiehlt-knapp-500-000-Euro-10296516.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/8/0/8/7/2/2/2024-11-21-Bing_Creator-File_Spreads_Malware-2-47f5d0fccb708742.jpg",
      publishedAt: "2025-02-26T11:37:00Z",
      content:
        "Die Sicherheitsfirma Kaspersky warnt von einer neuen Attacke auf GitHub-Repositories, in der die Angreifer harmlose Fake-Software anbieten, die Bankdaten und Bitcoin-Wallets stiehlt. Seit circa zwei … [+2358 chars]",
    },
    {
      source: {
        id: null,
        name: "Genbeta.com",
      },
      author: "Marcos Merino",
      title:
        "La valoración de Bitcoin y otras 'criptos' ha caído en picado: las primeras consecuencias de la 'guerra comercial' de Trump",
      description:
        "El miedo cunde en el mercado de las criptomonedas: Bitcoin, Ethereum y Dogecoin acaban de sufrir desplomes históricos. Bitcoin ha caído un 7%, alcanzando los 92.681 dólares (antes de recuperarse ligeramente hasta los 93.831 dólares), mientras que Ethereum suf…",
      url: "https://www.genbeta.com/actualidad/valoracion-bitcoin-otras-criptos-ha-caido-picado-primeras-consecuencias-guerra-comercial-trump",
      urlToImage: "https://i.blogs.es/107f4f/caida_bitcoin/840_560.jpeg",
      publishedAt: "2025-02-03T11:01:57Z",
      content:
        "El miedo cunde en el mercado de las criptomonedas: Bitcoin, Ethereum y Dogecoin acaban de sufrir desplomes históricos. Bitcoin ha caído un 7%, alcanzando los 92.681 dólares (antes de recuperarse lige… [+3622 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Marie-Claire Koch",
      title: "Bitcoin-Schatzsuche: Mann erwägt Kauf einer Mülldeponie in Wales",
      description:
        "James Howells versucht seit Jahren, eine Wallet mit 8.000 Bitcoins wiederzufinden. Dazu will er die Mülldeponie, auf der er die Festplatte vermutet, kaufen.",
      url: "https://www.heise.de/news/Bitcoin-Schatzsuche-Mann-erwaegt-Kauf-einer-Muelldeponie-in-Wales-10279686.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/7/9/9/9/5/1/shutterstock_794022565-3654dfc7b9260d48.jpg",
      publishedAt: "2025-02-12T13:12:00Z",
      content:
        "James Howells versucht seit mehr als zehn Jahren, eine Wallet mit 8.000 Bitcoins im Wert von aktuell mehr als 740 Millionen Euro wiederzufinden. Er vermutet, dass sie sich auf einer Festplatte in ein… [+1475 chars]",
    },
    {
      source: {
        id: null,
        name: "Golem.de",
      },
      author: "Marc Stöckel",
      title:
        "Solarpark geplant: Mülldeponie mit 8.000 Bitcoin wird geschlossen",
      description:
        "James Howells 8.000-Bitcoin-Festplatte bekommt ein schattiges Plätzchen. Auf dem Gelände soll ein Solarpark entstehen, um Müllfahrzeuge zu laden. (Bitcoin, Speichermedien)",
      url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fsolarpark-geplant-muelldeponie-mit-8-000-bitcoin-wird-geschlossen-2502-193177.html&referer=https%3A%2F%2Ft.co%2Fbb623ab3c1",
      urlToImage: null,
      publishedAt: "2025-02-10T08:09:01Z",
      content:
        "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Ayesha Aziz",
      title:
        "Bitcoin Faces $1.3B Liquidation Risk If Price Slides Below $93K Support Amid Trade War Worries",
      description:
        "Bitcoin's price dropped below $100,000 on Feb. 4, as concerns over the global trade war between the United States and China affected market sentiment.",
      url: "https://finance.yahoo.com/news/bitcoin-faces-1-3b-liquidation-074635073.html",
      urlToImage:
        "https://media.zenfs.com/en/coinmarketcap_783/4e02a3f68a4eee4bb8c282fe8ddbcc89",
      publishedAt: "2025-02-10T07:46:35Z",
      content:
        "Bitcoin Faces $1.3B Liquidation Risk If Price Slides Below $93K Support Amid Trade War Worries\r\nBitcoin's price dropped below $100,000 on Feb. 4, as concerns over the global trade war between the Uni… [+2592 chars]",
    },
    {
      source: {
        id: null,
        name: "Golem.de",
      },
      author: "Ingo Pakalski",
      title: "Kryptowährung: Bitcoin sackt immer weiter ab",
      description:
        "Seitdem Donald Trump wieder US-Präsident ist, kennt der Bitcoin-Kurs nur die Richtung nach unten. Der jetzige Kurseinbruch hat mehrere Gründe. (Bitcoin, Wirtschaft)",
      url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fkryptowaehrung-bitcoin-sackt-immer-weiter-ab-2502-193818.html&referer=https%3A%2F%2Ft.co%2F641f1ccafc",
      urlToImage: null,
      publishedAt: "2025-02-28T10:39:02Z",
      content:
        "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]",
    },
    {
      source: {
        id: null,
        name: "Golem.de",
      },
      author: "Marc Stöckel",
      title:
        "Wegen 8.000 Bitcoin: Mann will ganze Mülldeponie kaufen, um Festplatte zu suchen",
      description:
        "Dass Newport die Mülldeponie schließen will, auf der James Howells seit Jahren seine 8.000-Bitcoin-Festplatte suchen will, kommt für den Briten überraschend. (Bitcoin, Speichermedien)",
      url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fwegen-8-000-bitcoin-mann-will-ganze-muelldeponie-kaufen-um-festplatte-zu-suchen-2502-193215.html&referer=https%3A%2F%2Ft.co%2F03864a1de8",
      urlToImage: null,
      publishedAt: "2025-02-11T07:52:02Z",
      content:
        "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]",
    },
    {
      source: {
        id: null,
        name: "CoinDesk",
      },
      author: "CoinDesk",
      title:
        "XRP & DOGE Blast After SEC Acknowledges Grayscale ETF Applications",
      description:
        "XRP and Dogecoin surge after the U.S. SEC acknowledged Graycale's applications for XRP and DOGE spot ETFs. Plus, GameStop considers buying bitcoin and South ...",
      url: "https://videos.coindesk.com/previews/BIrOY5ao",
      urlToImage:
        "https://media.zenfs.com/en/coindesk_75/324149addf68cb0f0bbb2de860cc2c74",
      publishedAt: "2025-02-14T16:22:11Z",
      content:
        "XRP and Dogecoin surge after the U.S. SEC acknowledged Graycale's applications for XRP and DOGE spot ETFs. Plus, GameStop considers buying bitcoin and South Korea lifts a ban on crypto trading in a s… [+97 chars]",
    },
    {
      source: {
        id: null,
        name: "Golem.de",
      },
      author: "Tobias Költzsch",
      title: "Krypto: El Salvador schafft Bitcoin als Landeswährung ab",
      description:
        "El Salvador ist das erste Land gewesen, das Bitcoin als zusätzliche Landeswährung eingestuft hat - jetzt rudert Präsident Bukele zurück. (Bitcoin, Wirtschaft)",
      url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fkrypto-el-salvador-schafft-bitcoin-als-landeswaehrung-ab-2502-193010.html&referer=https%3A%2F%2Ft.co%2F4436f8634b",
      urlToImage: null,
      publishedAt: "2025-02-04T08:54:01Z",
      content:
        "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: null,
      title: "GameStop stock surges 8% because it might get into Bitcoin",
      description: null,
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_d6ae4938-50e9-43ce-9dd0-736629ee64b8",
      urlToImage: null,
      publishedAt: "2025-02-10T18:53:00Z",
      content:
        "If you click 'Accept all', we and our partners, including 239 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+702 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "fdemott@businessinsider.com (Filip De Mott)",
      title:
        "Crypto party: The SEC dropping a major lawsuit could open the floodgates for more deregulation",
      description:
        '"This is not about how the litigation was going, this is about the Trump administration not wanting to go after crypto," a source told BI.',
      url: "https://www.businessinsider.com/sec-coinbase-lawsuit-crypto-regulation-trump-ripple-xrp-coin-stock-2025-2",
      urlToImage:
        "https://i.insider.com/67b8ad2aeb4be2fff9a54002?width=1200&format=jpeg",
      publishedAt: "2025-02-21T17:56:35Z",
      content:
        "The Securities and Exchange Commission is ending a nearly two-year case against Coinbase, a development that's likely a harbinger of the coming era of lighter regulation of digital assets under the T… [+4865 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.com",
      },
      author: "Lucas Ropek",
      title:
        "Neo-Nazis Seek Bitcoin Donations as They Prepare to Return to Trump’s America",
      description:
        "The rightwing group seeks the creation of a white ethnostate.",
      url: "https://gizmodo.com/neo-nazis-seek-bitcoin-donations-as-they-prepare-to-return-to-trumps-america-2000567705",
      urlToImage:
        "https://gizmodo.com/app/uploads/2021/07/63942279fef61556bc46015f2c79c3e8.jpg",
      publishedAt: "2025-02-24T21:50:46Z",
      content:
        "A notorious neo-Nazi group appears to be building up its membership in the U.S., and it’s using cryptocurrency as a way to crowdfund its growth, The Guardian has reported.\r\n“The Base,” which was foun… [+3312 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: null,
      title:
        "Elon Musk Wonders If US Gold Reserves Are Regularly Audited—Cynthia Lummis Tells DOGE Lead It's Time To Add Bitcoin For Transparency",
      description: null,
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_7959224a-fb92-4a88-be43-1e4d76c89e4e",
      urlToImage: null,
      publishedAt: "2025-02-17T19:30:14Z",
      content:
        "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+702 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: null,
      title:
        "Michael Saylor once told people to mortgage their home to buy Bitcoin—now the cryptocurrency is down so much he’s wants them to harvest a kidney",
      description: null,
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_e3d782be-5929-49f8-be06-0f3cdbab32c4",
      urlToImage: null,
      publishedAt: "2025-02-28T18:56:17Z",
      content:
        "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+702 chars]",
    },
    {
      source: {
        id: "abc-news",
        name: "ABC News",
      },
      author: "Lucien Bruggeman, Mike Levine, Soo Rin Kim",
      title:
        "Kash Patel, Trump's pick for FBI director, made at least $2.6M in 2024",
      description:
        "Kash Patel, President Trump's pick for FBI director, made at least $2.6 million in the past year from consulting and media deals, his latest financial disclosure shows.",
      url: "https://abcnews.go.com/US/kash-patel-trumps-pick-fbi-director-made-26m/story?id=118447126",
      urlToImage:
        "https://i.abcnewsfe.com/a/31b34b6e-6aeb-4e02-912c-05148d1f5bbf/kash-patel-26-ap-gmh-250130_1738263595893_hpMain_16x9.jpg?w=1600",
      publishedAt: "2025-02-04T22:16:11Z",
      content:
        "Kash Patel, President Donald Trump's pick for FBI director, made at least $2.6 million in the past year from consulting, media appearances, speaking fees and book deals, his latest financial disclosu… [+2387 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Daniel AJ Sokolov",
      title:
        "WTF: ICANN Opfer von Phishing: Online-Konto für Kryptowährungs-Reklame missbraucht",
      description:
        '"Die ICANN gibt dem Internet seine eigene Währung", schallte es von einem offiziellen ICANN-Konto eines Sozialen Netzes. Hinter "$DNS" stecken aber Kriminelle.',
      url: "https://www.heise.de/news/ICANN-Opfer-von-Phishing-Online-Konto-fuer-Kryptowaehrungs-Reklame-missbraucht-10280537.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/8/0/0/3/8/4/shutterstock_1924985480-0595137c304ec176.jpg",
      publishedAt: "2025-02-12T21:24:00Z",
      content:
        "Die Netz-Selbstverwaltung ICANN ist Phishing zum Opfer gefallen. Trotz Multi-Faktor-Authentifizierung ist es einem Angreifer am Dienstag gelungen, das offizielle ICANN-Konto im Sozialen Netz X zu übe… [+3086 chars]",
    },
    {
      source: {
        id: null,
        name: "Flowingdata.com",
      },
      author: "Nathan Yau",
      title: "Rise and fall and rise again for bitcoin",
      description:
        "There was a moment a few years ago when cryptocurrency was mentioned everywhere you went. Then it faded for a while. But now it’s kind of back. With the new administration, Financial Times (p…",
      url: "https://flowingdata.com/2025/02/14/rise-and-fall-and-rise-again-for-bitcoin/",
      urlToImage:
        "https://flowingdata.com/wp-content/uploads/2025/02/bitcoin-trump.png",
      publishedAt: "2025-02-14T18:59:37Z",
      content:
        "There was a moment a few years ago when cryptocurrency was mentioned everywhere you went. Then it faded for a while. But now it’s kind of back. With the new administration, Financial Times (paywalled… [+172 chars]",
    },
    {
      source: {
        id: null,
        name: "Faz.net",
      },
      author: "Olaf Wittrock",
      title: "Paraguays Traum vom grünen Bitcoin",
      description:
        "In dem lateinamerikanischen Land gibt es billigen Strom aus Wasserkraft im Überfluss. Darauf setzen Investoren, die Bitcoins schürfen wollen, ohne dem Klima zu schaden. Doch das muss nicht so bleiben.",
      url: "https://www.faz.net/pro/weltwirtschaft/finanzwelt/paraguays-traum-vom-gruenen-bitcoin-newsletter-f-a-z-pro-weltwirtschaft-110319864.html",
      urlToImage:
        "https://media1.faz.net/ppmedia/pro/weltwirtschaft/802127809/1.10320267/facebook_teaser_fplus/das-itaipu-wasserkraftwerk-an.jpg",
      publishedAt: "2025-02-26T16:01:57Z",
      content:
        "Die Organisation Bitcoin Paraguay weiß genau, womit sie in der Szene überzeugen kann: Auf dem Netzwerk X strahlt einem im Profilbild der Staudamm des Wasserkraftwerk Itaipú unweit der Iguazú-Wasserfä… [+317 chars]",
    },
    {
      source: {
        id: null,
        name: "Gizmodo.jp",
      },
      author: "岡本玄介",
      title: "ビットコイン入りHDDを捨てられた男、ゴミ埋立地ごと購入に乗り出す",
      description:
        "Image:Shutterstock過去の間違いを正すための執念だそうな。2013年のこと、当時貯めていた7,500ビットコインにアクセスする鍵を保存したハードディスクが、恋人の手違いで捨てられてしまった英国人男性ジェームズ・ハウエルズさん。ジェームズ・ハウエルズさんImage:BBC当時も世界的な話題になりましたが、2025年になって新たな動きが出てきました。探したいのに探せないHDDはゴミの埋",
      url: "https://www.gizmodo.jp/2025/02/buying-landfill-to-salvage-bitcoin.html",
      urlToImage:
        "https://media.loom-app.com/gizmodo/dist/images/2025/02/18/shutterstock_1496059370.jpg?w=1280&h=630&f=jpg",
      publishedAt: "2025-02-18T02:00:00Z",
      content:
        "20137,500\r\nImage: BBC\r\nVideo: BBC News / YouTube\r\n2025\r\nHDD10\r\n102024952\r\n20252026\r\nAI\r\nHeres the plan: Im buying the landfill.\r\nThats right. If the government wont let me search for my hard drive wi… [+716 chars]",
    },
    {
      source: {
        id: null,
        name: "Golem.de",
      },
      author: "Achim Sawall",
      title:
        "DIW-Chef: Kryptowährungen könnten Auslöser neuer Finanzkrise werden",
      description:
        "Der Präsident des Deutschen Instituts für Wirtschaftsforschung (DIW) sieht den Einfluss der Krypto-Branche auch in Europa wachsen. (Bitcoin, Wirtschaft)",
      url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2Fdiw-chef-kryptowaehrungen-koennten-ausloeser-neuer-finanzkrise-werden-2502-193525.html&referer=https%3A%2F%2Ft.co%2Fbc0829e891",
      urlToImage: null,
      publishedAt: "2025-02-20T06:41:01Z",
      content:
        "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: null,
      title:
        "Better Cryptocurrency to Buy and Hold for 10 Years: Bitcoin vs. Cardano",
      description: null,
      url: "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_7c0ad1b8-4891-4f50-ada6-c3cb7cca3dd9",
      urlToImage: null,
      publishedAt: "2025-02-25T10:45:00Z",
      content:
        "If you click 'Accept all', we and our partners, including 238 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+702 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "mfox@businessinsider.com (Matthew Fox)",
      title:
        "Trump's trade spats are already sending markets on a wild roller coaster ride",
      description:
        "Traders were relieved to hear tariffs against Mexico would be delayed. Markets hope a similar resolution can be reached before tariffs on Canada kick in.",
      url: "https://markets.businessinsider.com/news/stocks/stock-market-today-trump-tariffs-sell-off-crypto-mexico-canada-2025-2",
      urlToImage:
        "https://i.insider.com/67a1323feb4be2fff9a35796?width=1000&format=jpeg",
      publishedAt: "2025-02-03T21:22:20Z",
      content:
        "US stocks were sent on a wild ride on Monday as investors reacted to President Donald Trump's tariff threats against Mexico, Canada, and China.\r\nThe day opened up with steep losses for major stock in… [+3358 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "mfox@businessinsider.com (Matthew Fox)",
      title: "The Trump trade isn't going as planned this year",
      description:
        "Stocks, Treasury yields, and the dollar are down for the year, bucking expectations that they'd all rally.",
      url: "https://www.businessinsider.com/stock-market-trump-trade-scorecard-bonds-dollar-inflation-tariffs-2025-2",
      urlToImage:
        "https://i.insider.com/67ab8f396630eb10385c3f76?width=1200&format=jpeg",
      publishedAt: "2025-02-12T09:30:01Z",
      content:
        "The so-called Trump trade the boosted markets at the end of last year has floundered so far in 2025.\r\nInvestor bets for a second Trump presidency were rooted in assumptions that stocks would soar on … [+3591 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Kenneth Niemeyer",
      title:
        "What you need to know about the 'Ghost' cyberattacks and why the FBI is concerned",
      description:
        'The FBI is warning about a Chinese ransomware group called "Ghost."',
      url: "https://www.businessinsider.com/ghost-cyberattacks-ransomware-what-you-need-to-know-2025-2",
      urlToImage:
        "https://i.insider.com/67bbac30c040bd1b4ca2e7ff?width=1200&format=jpeg",
      publishedAt: "2025-02-24T00:04:27Z",
      content:
        'The FBI is warning about a Chinese ransomware group called "Ghost."Witthaya Prasongsin/Getty Images\r\n\u003Cul\u003E\u003Cli\u003EThe FBI has issued a warning about a Chinese ransomware group called Ghost.\u003C/li\u003E\u003Cli\u003EGhost … [+3118 chars]',
    },
    {
      source: {
        id: null,
        name: "Theregister.com",
      },
      author: "Brandon Vigliarolo",
      title:
        "Man who binned 7,500 Bitcoin drive now wants to buy entire landfill to dig it up",
      description:
        "More than a decade on, waste experts say the odds of finding those coins are next to nil\nDenied permission to excavate a landfill in search of his missing Bitcoin, Newport, Wales resident James Howells has a new plan: buy the soon-to-be-capped dumping site ou…",
      url: "https://www.theregister.com/2025/02/11/bitcoin_drive_landfill/",
      urlToImage:
        "https://regmedia.co.uk/2017/11/13/shutterstock_landfill_computers.jpg",
      publishedAt: "2025-02-11T17:02:07Z",
      content:
        "Denied permission to excavate a landfill in search of his missing Bitcoin, Newport, Wales resident James Howells has a new plan: buy the soon-to-be-capped dumping site outright from the city council.… [+3623 chars]",
    },
    {
      source: {
        id: null,
        name: "Yahoo Entertainment",
      },
      author: "Vinamrata Chaturvedi",
      title: "The rise of stablecoins: 5 trends to watch",
      description:
        "If you’re familiar with cryptocurrencies, you’ve likely heard of stablecoins. These are a type of cryptocurrencies whose value is pegged to another asset...",
      url: "https://finance.yahoo.com/news/rise-stablecoins-5-trends-watch-100000305.html",
      urlToImage:
        "https://media.zenfs.com/en/quartz.com/3786a9670feacd01c78a9daac7161737",
      publishedAt: "2025-02-03T10:00:00Z",
      content:
        "Illustration: picture alliance (Getty Images)\r\nIf youre familiar with cryptocurrencies, youve likely heard of stablecoins. These are a type of cryptocurrencies whose value is pegged to another asset,… [+3910 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Vinamrata Chaturvedi",
      title: "16 states betting on a U.S. Bitcoin Reserve",
      description:
        "During his election campaign in 2024, President Donald Trump pledged to establish a Bitcoin Reserve, sparking ongoing speculation about if and when the U.S. government might formally add Bitcoin to its asset holdings. Since then, the conversation around a fed…",
      url: "https://qz.com/us-bitcoin-reserve-trump-texas-utah-arizona-crypto-1851757143",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/77e5bf1b20abde3dc9373c1a582c1d63.jpg",
      publishedAt: "2025-02-10T10:00:00Z",
      content:
        "Pennsylvania was the first state to introduce a Bitcoin reserve bill in November 2024. Several other states have either proposed or passed similar legislation, including Florida, Alabama, Massachuset… [+267 chars]",
    },
    {
      source: {
        id: null,
        name: "Faz.net",
      },
      author: "Jan Hauser, Inken Schönauer, Martin Hock",
      title: "Wie wir reich werden – Jubiläumsfolge mit Überraschungen",
      description:
        "Von Aktien bis Zinsen: In der 200. Folge geht es um den richtigen Anlagemix, vermietete Immobilien und Bitcoin. Was ist alles für die Kapitalanlage zu beachten?",
      url: "https://www.faz.net/podcasts/f-a-z-finanzen-immobilien/alles-was-sie-ueber-geldanlage-wissen-muessen-110303911.html",
      urlToImage:
        "https://media1.faz.net/ppmedia/aktuell/feuilleton/1910949986/1.10304339/facebook_teaser_fplus/konfetti-zum-jubilaeum-wie.jpg",
      publishedAt: "2025-02-25T06:33:57Z",
      content:
        "Zugang zu allen FAZ+ Beiträgen12,80 \r\n jetzt nur 0,99 \r\nZugang zu allen FAZ+ Beiträgen12,80 \r\n jetzt nur 0,99 \r\n\u003Cul\u003E\u003Cli\u003EMit einem Klick online kündbar\u003C/li\u003E\u003C/ul\u003E",
    },
    {
      source: {
        id: null,
        name: "tagesschau.de",
      },
      author: null,
      title: "Kryptowährung Bitcoin sackt immer weiter ab",
      description:
        "Erstmals seit November ist der Wert des Bitcoin wieder unter die Marke von 80.000 Dollar gefallen. Auch die Kryptowährung wird belastet durch Trumps Zollpläne. Dazu kommt Enttäuschung über bislang ausgebliebene Maßnahmen.",
      url: "https://www.tagesschau.de/wirtschaft/finanzen/bitcoin-kryptowaehrung-verluste-100.html",
      urlToImage:
        "https://images.tagesschau.de/image/937d2e70-6416-4a09-b5f8-785376bb1a9d/AAABlUwHAaI/AAABkZLhkrw/16x9-1280/nyse-388.jpg",
      publishedAt: "2025-02-28T11:01:12Z",
      content:
        "Stand: 28.02.2025 12:01 Uhr\r\nErstmals seit November ist der Wert des Bitcoin wieder unter die Marke von 80.000 Dollar gefallen. Auch die Kryptowährung wird belastet durch Trumps Zollpläne. Dazu kommt… [+3688 chars]",
    },
    {
      source: {
        id: null,
        name: "Obscura.net",
      },
      author: null,
      title: "Obscura VPN – Privacy that's more than a promise",
      description: "Available for Mac. Download today.",
      url: "https://obscura.net/",
      urlToImage: "https://obscura.net/og.png",
      publishedAt: "2025-02-20T01:06:56Z",
      content:
        "Thanks for reaching the bottom not everyone makes it.\r\nIm incredibly lucky to have the help of a crack(ed) team of privacy optimists to build Obscura.\r\nAmong us, weve served on the Nix RFC Steering C… [+822 chars]",
    },
    {
      source: {
        id: null,
        name: "Faz.net",
      },
      author: "Christiane von Hardenberg",
      title: "Bitcoin kaufen, Nvidia verkaufen? Was uns der Januar sagt",
      description:
        "Der Jahresanfang gilt als Orientierung für das Börsenjahr. Doch der Markt lässt sich nicht so einfach vorhersagen. Umso wichtiger ist eine ausgewogene Gesamtstrategie.",
      url: "https://www.faz.net/aktuell/finanzen/bitcoin-kaufen-nvidia-verkaufen-so-planen-sie-ihr-aktienjahr-2025-110273382.html",
      urlToImage:
        "https://media0.faz.net/ppmedia/aktuell/2670484021/1.10273380/facebook_teaser_fplus/der-bitcoin-hat-einen-starken.jpg",
      publishedAt: "2025-02-04T04:43:33Z",
      content:
        "As January goes, so goes the year. Das sogenannte Januar-Barometer gibt Aufschluss darüber, wie sich das Börsenjahr entwickeln wird. Angeblich. Wenn die Börsenweisheit zutrifft, sollten wir uns schne… [+316 chars]",
    },
    {
      source: {
        id: "business-insider",
        name: "Business Insider",
      },
      author: "Dan DeFrancesco",
      title:
        "People are pumping the brakes on their expectations of economic growth",
      description:
        "The US economy is starting to look sluggish, and DOGE's government cuts could be speeding up its slowdown.",
      url: "https://www.businessinsider.com/us-economy-slowing-signs-slowing-doge-sluggish-growth-2025-2",
      urlToImage:
        "https://i.insider.com/67c04fdab1834fe311659f69?width=1200&format=jpeg",
      publishedAt: "2025-02-27T13:46:54Z",
      content:
        "United States Treasury DepartmentGetty Images\r\n\u003Cul\u003E\u003Cli\u003EThis excerpt originally appeared in the Business Insider Today newsletter.\u003C/li\u003E\u003Cli\u003EYou can sign up for Business Insider's daily newsletter here.… [+9815 chars]",
    },
    {
      source: {
        id: null,
        name: "Caschys Blog",
      },
      author: "André Westphal",
      title: "Proton Wallet ist ab jetzt für alle verfügbar",
      description:
        "Das Proton Wallet startet nach seiner Early-Access Phase die nur für eine begrenzte Anzahl an Nutzern verfügbar gewesen ist, jetzt für alle. Man bewirbt es als den „sichersten und einfachsten Weg, Bitcoin zu verwalten“. Zuvor hatten über 100.000 Teilnehmer de…",
      url: "https://stadt-bremerhaven.de/proton-wallet-ist-ab-jetzt-fuer-alle-verfuegbar/",
      urlToImage:
        "https://stadt-bremerhaven.de/wp-content/uploads/2025/02/Proton-Wallet-1.jpg",
      publishedAt: "2025-02-10T11:00:01Z",
      content:
        "Das Proton Wallet startet nach seiner Early-Access Phase die nur für eine begrenzte Anzahl an Nutzern verfügbar gewesen ist, jetzt für alle. Man bewirbt es als den „sichersten und einfachsten Weg, Bi… [+2267 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Vinamrata Chaturvedi",
      title: "MicroStrategy rebrands as Strategy with a Bitcoin-inspired logo",
      description:
        "Bitcoin-maximalist and business intelligence firm MicroStrategy (MSTR) has rebranded as Strategy, unveiling a new identity centered around Bitcoin.The rebrand features a stylized “B” logo and adopts orange as its primary brand color, which the company says sy…",
      url: "https://qz.com/microstrategy-rebrands-strategy-bitcoin-michael-saylor-1851756216",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/ff09319f81455d979872110c69ca3915.jpg",
      publishedAt: "2025-02-05T19:15:00Z",
      content:
        "In This Story\r\nBitcoin-maximalist and business intelligence firm MicroStrategy (MSTR-2.85%\r\n) has rebranded as Strategy, unveiling a new identity centered around Bitcoin. The rebrand features a styli… [+1469 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Vinamrata Chaturvedi and Andy Mills",
      title:
        "Bitcoin price plunges below $85,000. Here's what might be causing it",
      description:
        "Bitcoin ETFs experienced a record outflow of over $1 billion in a single day",
      url: "https://qz.com/bitcoin-price-plunges-below-85-000-solara-ether-down-1851766672",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/89757afb441b2066ffd77310806c9db6.jpg",
      publishedAt: "2025-02-26T21:09:00Z",
      content:
        "Our free, fast, and fun briefing on the global economy, delivered every weekday morning.",
    },
    {
      source: {
        id: null,
        name: "Golem.de",
      },
      author: "Johannes Hiltscher",
      title:
        "8.000 Bitcoin im Müll: Der Schatz auf der Deponie ist fast sicher verloren",
      description:
        "Ein Brite will eine Festplatte suchen, die den Schlüssel zu Bitcoins im Millionenwert enthält. Ein Experte sagt: Seine Chancen sind minimal. Eine Recherche von Johannes Hiltscher (Datenrettung, Speichermedien)",
      url: "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https%3A%2F%2Fwww.golem.de%2Fnews%2F8-000-bitcoin-im-muell-der-schatz-auf-der-deponie-ist-fast-sicher-verloren-2502-193464.html&referer=https%3A%2F%2Ft.co%2F8869316db6",
      urlToImage: null,
      publishedAt: "2025-02-20T09:45:02Z",
      content:
        "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking,\r\n indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie im Privacy Center.\r\nSkript wurde nicht geladen. Informat… [+607 chars]",
    },
    {
      source: {
        id: null,
        name: "Genbeta.com",
      },
      author: "Bárbara Bécares",
      title:
        "El hombre que tiró a la basura más de 700 millones de euros en bitcoin en un disco duro quiere comprar el vertedero entero",
      description:
        "Probablemente ya te suene el nombre de James Howells  porque se ha hecho muy famoso por sus constantes empeños para poder recuperar un disco duro con bitcoins que antaño tiró a la basura y que ahora valen una fortuna. Hace menos de un mes publicábamos que, de…",
      url: "https://www.genbeta.com/actualidad/hombre-que-tiro-a-basura-700-millones-euros-bitcoin-disco-duro-quiere-comprar-vertedero-entero",
      urlToImage:
        "https://i.blogs.es/24016a/katie-rodriguez-qsvwegnnirm-unsplash/840_560.jpeg",
      publishedAt: "2025-02-10T16:15:42Z",
      content:
        "Probablemente ya te suene el nombre de James Howells  porque se ha hecho muy famoso por sus constantes empeños para poder recuperar un disco duro con bitcoins que antaño tiró a la basura y que ahora … [+3291 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Niklas Jan Engelking",
      title:
        "Coinbase erklärt SEC-Verfahren für beendet – die Behörde allerdings nicht",
      description:
        "Der Coinbase-Chef sagt, das Verfahren der US-Börsenaufsicht SEC gegen seine Firma sei beendet. Die Behörde bestätigt das derweil nicht.",
      url: "https://www.heise.de/news/Coinbase-erklaert-SEC-Verfahren-fuer-beendet-die-Behoerde-allerdings-nicht-10292289.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/8/0/6/4/8/6/shutterstock_1235106964-633f52bc7a1b7e35.jpg",
      publishedAt: "2025-02-23T13:31:00Z",
      content:
        "Inhaltsverzeichnis\r\nLange schwebte es wie ein Damoklesschwert über dem amerikanischen Markt für Kryprowährungen, jetzt ist es angeblich eingestellt: Das Verfahren, welches die US-Börsenaufsicht Secur… [+3749 chars]",
    },
    {
      source: {
        id: null,
        name: "Faz.net",
      },
      author: "dpa",
      title: "Umfrage: Kryptoanleger nicht zu bremsen",
      description:
        "Als Bitcoin 2009 auf den Markt kam, war das digitale Geld zunächst quasi wertlos. Mittlerweile hat der Kurs schwindelerregende Höhen erreicht. Kleinanleger rund um den Globus hoffen auf mehr.",
      url: "https://www.faz.net/aktuell/wirtschaft/umfrage-kryptoanleger-nicht-zu-bremsen-110314496.html",
      urlToImage:
        "https://media0.faz.net/ppmedia/aktuell/wirtschaft/2186921166/1.10314544/facebook_teaser/kryptowaehrung-auf-einer.jpg",
      publishedAt: "2025-02-23T10:25:52Z",
      content:
        "Die stetigen Kurssteigerungen von Bitcoin und anderem digitalen Geld befeuern den Boom bei privaten Kryptoanlegern. Eine große Mehrheit von ihnen plant in diesem Jahr, mehr Geld in Kryptowährungen zu… [+2228 chars]",
    },
    {
      source: {
        id: "espn",
        name: "ESPN",
      },
      author: "Anthony Olivieri",
      title:
        "Jonathan Martin wants you to forget the only thing you remember about him",
      description:
        "A target of bullying in the 2013 Miami Dolphins locker room, he is now making his way in business and finance.",
      url: "https://www.espn.com/nfl/story/_/id/43707519/jonathan-martin-miami-dolphins-nfl-bullying-wells-report-bullygate",
      urlToImage:
        "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2025%2F0113%2Fr1437892_1296x729_16%2D9.jpg",
      publishedAt: "2025-02-12T13:14:39Z",
      content:
        "JONATHAN MARTIN WAITS in the wings off stage in a half-full theater in Wilmington, Delaware. He's here to give a TEDx talk, \"The Fiat Debt Spiral.\" It's about Bitcoin, and he's ready to be introduced… [+39442 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Vinamrata Chaturvedi",
      title: "5 ways cryptocurrency could change how we shop online",
      description:
        "Bitcoin and other cryptocurrencies can be used to purchase a wide range of items, from luxury cars like Lamborghini (VWAGY) to fast food at McDonald’s (MCD)—though the latter is currently limited to El Salvador.Read more...",
      url: "https://qz.com/cryptocurrency-bitcoin-could-change-how-we-shop-online-1851761802",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/72e29bffd8f3fc00de66f289818f21ae.jpg",
      publishedAt: "2025-02-17T10:00:00Z",
      content:
        "AMC Theaters (AMC) has a unique relationship with cryptocurrencies. After the GameStop saga in 2021, when other meme stocks, such as AMC, skyrocketed, memecoins like Dogecoin also saw meteoric rises.… [+194 chars]",
    },
    {
      source: {
        id: null,
        name: "Journal du geek",
      },
      author: "Olivier",
      title:
        "Il jette ses bitcoins à la poubelle… et veut maintenant racheter toute la décharge",
      description:
        "James Howells, un informaticien britannique, a perdu l’équivalent de 700 millions de dollars en Bitcoin en jetant son disque dur à la décharge. Et depuis plus de dix ans, il tente désespérément de le récupérer ! Après avoir proposé de partager une partie du b…",
      url: "https://www.journaldugeek.com/2025/02/15/il-jette-ses-bitcoins-a-la-poubelle-et-veut-maintenant-racheter-toute-la-decharge/",
      urlToImage:
        "https://www.journaldugeek.com/app/uploads/2024/01/bitcoin.jpg",
      publishedAt: "2025-02-15T17:09:10Z",
      content:
        "En 2013, James Howells a réalisé quil avait commis lerreur de sa vie : jeter un disque dur contenant les clés daccès à 7.500 bitcoins quil avait minés en 2009, à une époque où la cryptomonnaie ne val… [+2506 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Vinamrata Chaturvedi",
      title:
        "Bitcoin has bled 25% in a month despite Trump. How low can it go?",
      description:
        "Bitcoin continued its downward slide, falling below $80,000 on Thursday night. The leading crypto is 25% down from its all-time high that was reached just a month ago during Donald Trump’s inauguration.Read more...",
      url: "https://qz.com/bitcoin-bleeding-despite-trump-bitcoin-etf-sec-coinbase-1851767007",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/bc323f6dd95224f1ce6d3274335b0e3e.jpg",
      publishedAt: "2025-02-28T16:01:00Z",
      content:
        "In This Story\r\nBitcoin continued its downward slide, falling below $80,000 on Thursday night. The leading crypto is 25% down from its all-time high that was reached just a month ago during Donald Tru… [+3547 chars]",
    },
    {
      source: {
        id: "die-zeit",
        name: "Die Zeit",
      },
      author: "ZEIT ONLINE: News -",
      title: "Digitales Geld: Umfrage: Kryptoanleger nicht zu bremsen",
      description:
        "Hier finden Sie Informationen zu dem Thema „Digitales Geld“. Lesen Sie jetzt „Umfrage: Kryptoanleger nicht zu bremsen“.",
      url: "https://www.zeit.de/news/2025-02/23/umfrage-kryptoanleger-nicht-zu-bremsen",
      urlToImage:
        "https://img.zeit.de/news/2025-02/23/umfrage-kryptoanleger-nicht-zu-bremsen-image-group/wide__1300x731",
      publishedAt: "2025-02-23T08:49:54Z",
      content:
        "Die stetigen Kurssteigerungen beim Bitcoin und anderem digitalen Geld befeuern den Boom bei privaten Kryptoanlegern. Eine große Mehrheit von ihnen plant in diesem Jahr, mehr Geld in die sogenannten K… [+2289 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Vinamrata Chaturvedi",
      title:
        "There's a hot new theory about Bitcoin creator Satoshi Nakamoto's true identity",
      description:
        "Who created Bitcoin? The million-dollar question is back in the spotlight — and this time with a surprising new suspect: Jack Dorsey, the bearded tech sage behind Twitter. Read more...",
      url: "https://qz.com/jack-dorsey-bitcoin-creator-satoshi-nakamoto-matt-sigel-1851765281",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/ae285a714df6b042261acf72f017c51b.jpg",
      publishedAt: "2025-02-18T19:21:00Z",
      content:
        "In This Story\r\nWho created Bitcoin? The million-dollar question is back in the spotlight and this time with a surprising new suspect: Jack Dorsey, the bearded tech sage behind Twitter. \r\nThe new theo… [+3016 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Martin Holland",
      title:
        "Gefangenenaustausch mit Russland: USA lassen Ex-Chef von Btc-e frei",
      description:
        "Der Chef von Btc-e hat die Kryptobörse zum zentralen Anlaufpunkt für Cyberkriminelle gemacht, 2017 wurde er festgenommen. Weitere Haft bleibt ihm wohl erspart.",
      url: "https://www.heise.de/news/Gefangenenaustausch-mit-Russland-USA-lassen-Ex-Chef-von-Btc-e-frei-10281026.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/8/0/0/6/4/0/shutterstock_1841762269-1efce39393fb55d5.jpg",
      publishedAt: "2025-02-13T11:44:00Z",
      content:
        "Im Rahmen eines Gefangenenaustauschs wollen die USA den ehemaligen Chef der Bitcoin-Börse Btc-e entlassen. Das berichtet die New York Times unter Berufung auf drei anonyme Quellen. Der 44-jährige Ale… [+1807 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Vinamrata Chaturvedi",
      title:
        "Bitcoin falls below $90,000 as the Trump-fueled crypto boom fades",
      description:
        "Bitcoin fell below $90,000 on Tuesday, sinking nearly 20% from its all-time high that was reached just a month ago during Donald Trump’s inauguration. The leading cryptocurrency, which had been rallying since Trump’s re-election in November, now appears to be…",
      url: "https://qz.com/bitcoin-drops-90k-trump-crypto-rally-over-bybit-hack-1851766323",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a83f43cee00038b8d22e102b57257b7b.jpg",
      publishedAt: "2025-02-25T15:20:00Z",
      content:
        "Bitcoin fell below $90,000 on Tuesday, sinking nearly 20% from its all-time high that was reached just a month ago during Donald Trumps inauguration. The leading cryptocurrency, which had been rallyi… [+2287 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Vinamrata Chaturvedi",
      title:
        "Bitcoin's downward spiral continues as the Trump-led crypto party is over",
      description:
        "Bitcoin continued its downward trend on Wednesday, signaling that the Trump-driven crypto surge may have run its course. The leading crypto is 20% down from its all-time high that was reached just a month ago during Donald Trump’s inauguration. Currently, it …",
      url: "https://qz.com/bitcoin-trump-rally-fades-bybit-hack-memecoin-scandal-1851766598",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/a83f43cee00038b8d22e102b57257b7b.jpg",
      publishedAt: "2025-02-26T17:51:00Z",
      content:
        "Bitcoin continued its downward trend on Wednesday, signaling that the Trump-driven crypto surge may have run its course. The leading crypto is 20% down from its all-time high that was reached just a … [+2141 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Vinamrata Chaturvedi",
      title: "GameStop stock surges 8% because it might get into Bitcoin",
      description:
        "Shares of GameStop (GME) jumped over 8% Monday afternoon on speculation that the brick-and-mortar company may invest in Bitcoin. Read more...",
      url: "https://qz.com/gamestop-ryan-cohen-bitcoin-strategy-michael-saylor-1851759675",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/55b599c82d6ab1d58efc102450001a1e.png",
      publishedAt: "2025-02-10T18:53:00Z",
      content:
        "In This Story\r\nShares of GameStop (GME+8.33%\r\n) jumped over 8% Monday afternoon on speculation that the brick-and-mortar company may invest in Bitcoin. \r\nOver the weekend, the video game retailers CE… [+1774 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "William Gavin",
      title:
        "Bitcoin plummets back to $95,000 as Trump's trade war rattles markets",
      description:
        "The price of Bitcoin has taken a dive as President Donald Trump’s new trade war with Canada, Mexico, and likely China has cryptocurrencies slumping. Read more...",
      url: "https://qz.com/bitcoin-crypto-price-trump-tariffs-trade-war-1851753725",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/6f9baddc835152cbe0e1120737c9086c.jpg",
      publishedAt: "2025-02-03T13:27:00Z",
      content:
        "In This Story\r\nThe price of Bitcoin has taken a dive as President Donald Trumps new trade war with Canada, Mexico, and likely China has cryptocurrencies slumping. \r\nOver the weekend, Trump announced … [+2449 chars]",
    },
    {
      source: {
        id: "the-verge",
        name: "The Verge",
      },
      author: "Gaby Del Valle",
      title: "Elon enters the circus",
      description:
        "The shadow president paced around the stage after his speech, sunglasses on, mouth frozen in a grin, raising a chainsaw overhead to the delight of an adoring crowd as a large rectangular canvas made its way from the back of the audience toward him. He grabbed…",
      url: "https://www.theverge.com/policy/620892/cpac-elon-musk-chainsaw-trump-steve-bannon",
      urlToImage:
        "https://platform.theverge.com/wp-content/uploads/sites/2/2025/02/257580_CPAC_scene_report_2_CVirginia_B.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200",
      publishedAt: "2025-02-28T14:41:51Z",
      content:
        "The GOP big tent gets even bigger, but not everyone at CPAC loves the tech oligarchs hold over Trump.\r\nThe shadow president paced around the stage after his speech, sunglasses on, mouth frozen in a g… [+31382 chars]",
    },
    {
      source: {
        id: null,
        name: "Internet",
      },
      author: "info@thehackernews.com (The Hacker News)",
      title:
        "GitVenom Malware Steals $456K in Bitcoin Using Fake GitHub Projects to Hijack Wallets",
      description:
        "Cybersecurity researchers are calling attention to an ongoing campaign that's targeting gamers and cryptocurrency investors under the guise of open-source projects hosted on GitHub.\nThe campaign, which spans hundreds of repositories, has been dubbed GitVenom …",
      url: "https://thehackernews.com/2025/02/gitvenom-malware-steals-456k-in-bitcoin.html",
      urlToImage:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEho6-bzxtgrfR3XODsX6JbS-Nc5nAFjL9vHFfwY_7mmGTOo4R3FrApXI0zJnJZ1LDa5T-yqemNvVwv8E8KNpGctmNSzmFaeogEc1DWW3pTMxife02o7oMkKA6xP9EtTC77_5ABwsk1fKzqMwloGqqlWFsIaRxPt6OkrT1z0aZ1GfVPJ90qLyCJbN2HWJP__/s728-rw-e365/bitcoin.png",
      publishedAt: "2025-02-25T10:13:00Z",
      content:
        "Cybersecurity researchers are calling attention to an ongoing campaign that's targeting gamers and cryptocurrency investors under the guise of open-source projects hosted on GitHub.\r\nThe campaign, wh… [+2888 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Quartz Intelligence Newsroom",
      title:
        "Tesla's stock wipeout, Intel's stock rally, and GameStop's Bitcoin play: Markets news roundup",
      description:
        "After reaching more than $486 billion, Elon Musk’s net worth has dropped by almost $90 billion due to Tesla’s poor stock performance so far this year.Read more...",
      url: "https://qz.com/tesla-stock-elon-musk-net-worth-intel-gamestop-bitcoin-1851763736",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/9bcc8ecc48952d8aad2750ff5b20b956.jpg",
      publishedAt: "2025-02-15T14:00:00Z",
      content:
        "Shares of GameStop (GME) jumped over 8% Monday afternoon on speculation that the brick-and-mortar company may invest in Bitcoin. \r\nOver the weekend, the video game retailers CEO, Ryan Cohen, shared a… [+198 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Vinamrata Chaturvedi",
      title:
        "Bitcoin, Dogecoin, Mantra, and more cryptocurrencies to watch this week",
      description:
        "Over the weekend, President Trump announced new tariffs on imports from the U.S.’s top trading partners—Canada, Mexico, and potentially China—triggering a decline in the cryptocurrency market. Read more...",
      url: "https://qz.com/bitcoin-ether-solana-dogecoin-crypto-to-watch-this-week-1851753776",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/3f51b45963befb903186bb733f4d4c9a.jpg",
      publishedAt: "2025-02-03T14:51:28Z",
      content:
        "Mantra is a specialized blockchain network dedicated to the issuance, trading, and secure management of tokenized real-world assets (RWAs). By enabling the tokenization of these tangible assets, Mant… [+605 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Vinamrata Chaturvedi",
      title: "Trump's crypto czar remains quiet on Bitcoin reserve",
      description:
        "The Trump administration is actively pursuing initiatives related to cryptocurrency, but there has not been any official announcement regarding the highly anticipated Bitcoin reserve. David Sacks, the White House’s cryptocurrency director and President Donald…",
      url: "https://qz.com/trump-crypto-czar-david-sacks-bitcoin-reserve-1851755207",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/57130af3086749f75ef4607a27ad7f35.jpg",
      publishedAt: "2025-02-04T20:53:05Z",
      content:
        "The Trump administration is actively pursuing initiatives related to cryptocurrency, but there has not been any official announcement regarding the highly anticipated Bitcoin reserve. David Sacks, th… [+1615 chars]",
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
      title:
        "Goldman Sachs Is Quietly Betting Billions On Bitcoin And Ethereum Amid Price Swings",
      description:
        "Bitcoin and ethereum have diverged in recent months, with the bitcoin price soaring as ethereum struggles...",
      url: "https://www.forbes.com/sites/digital-assets/2025/02/13/goldman-sachs-is-quietly-betting-billions-on-bitcoin-and-ethereum-amid-price-swings/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/665864416a983770fd0082ee/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      publishedAt: "2025-02-13T12:55:21Z",
      content:
        "Bitcoin and ethereum have diverged in recent months, with the bitcoin price soaring as ethereum struggleshelped by U.S. president Donald Trumps predicted plans for bitcoin.\r\nUnlock over $3,000 in NFT… [+3141 chars]",
    },
    {
      source: {
        id: null,
        name: "Ritholtz.com",
      },
      author: "Barry Ritholtz",
      title: "10 Sunday Reads",
      description:
        "Avert your eyes! My Sunday morning look at incompetency, corruption, and policy failures: • Déjà bubble: Can bubbles repeat? Bubbles might be especially likely to repeat today thanks to social media, which creates a hothouse environment for ideas to spread ac…",
      url: "https://ritholtz.com/2025/02/sunday-reads-407/",
      urlToImage:
        "https://ritholtz.com/wp-content/uploads/2026/12/medianage.png",
      publishedAt: "2025-02-23T11:30:21Z",
      content:
        "Déjà bubble: Can bubbles repeat? Bubbles might be especially likely to repeat today thanks to social media, which creates a hothouse environment for ideas to spread across the investor population. If… [+4497 chars]",
    },
    {
      source: {
        id: null,
        name: "BBC News",
      },
      author: null,
      title: "19 things Trump and his team did this week",
      description:
        "In his fifth week in office, Trump called Zelensky a dictator, sought more federal civil service cuts and dropped in on Nascar.",
      url: "https://www.bbc.com/news/articles/c93np4y0343o",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/121d/live/ffc97550-f0e3-11ef-bd63-c3616e5e42aa.jpg",
      publishedAt: "2025-02-22T03:36:13Z",
      content:
        "Donald Trump has been back in the White House for a month.\r\nHis fifth week in office saw more dramatic moves as the president continued on his plan to remake the federal government, implement sweepin… [+13265 chars]",
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "Korok Ray, Contributor, \n Korok Ray, Contributor\n https://www.forbes.com/sites/korokray/",
      title: "Is It Better To Invest In Bitcoin Or Bitcoin Miners?",
      description:
        "To examine this, let’s consider the risk and return from a 2024 investment into Bitcoin against Bitcoin miners.",
      url: "https://www.forbes.com/sites/digital-assets/2025/02/17/is-it-better-to-invest-in-bitcoin-or-bitcoin-miners/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/67af538f9e5dccbaa4eec4cf/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      publishedAt: "2025-02-17T13:00:00Z",
      content:
        "2024 Returns and Volatility\r\nKorok Ray\r\nOn the one hand, bitcoin itself is the superior asset because it is the purest exposure to the Bitcoin network. On the other hand, Bitcoin miners are publicly … [+4992 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Vinamrata Chaturvedi",
      title:
        "Dogecoin, XRP, Sonic and more cryptocurrencies to watch this week",
      description:
        "Bitcoin has remained stagnant for some time, seemingly awaiting a catalyst to drive its price movement. Meanwhile, the broader crypto market is in the red over the past week. Read more...",
      url: "https://qz.com/dogecoin-xrp-solana-litecoin-bitcoin-watch-this-week-1851765075",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/73cd716c78790f1e66668749fa50905a.jpg",
      publishedAt: "2025-02-18T14:11:00Z",
      content:
        "Solana is one of the fastest-growing major cryptocurrencies. It competes with Ethereum in terms of speed and has emerged as a strong platform for hosting hundreds of decentralized applications (dApps… [+413 chars]",
    },
    {
      source: {
        id: null,
        name: "Techmeme.com",
      },
      author: null,
      title:
        "An Alabama man pleads guilty in connection with the Jan. 2024 SIM-swap hack of the SEC's X account, then used to falsely claim the SEC had approved bitcoin ETFs (Dan Mangan/CNBC)",
      description:
        "Dan Mangan / CNBC:\nAn Alabama man pleads guilty in connection with the Jan. 2024 SIM-swap hack of the SEC's X account, then used to falsely claim the SEC had approved bitcoin ETFs  —  An Alabama man pleaded guilty Monday in federal court in Washington, D.C., …",
      url: "https://www.techmeme.com/250210/p26",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107361145-1705593278041-gettyimages-1934336529-omarques_17012024_phone_tech-4.jpeg?v=1705593327&w=1920&h=1080",
      publishedAt: "2025-02-10T22:15:01Z",
      content:
        "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 5:15 PM ET, February 10, 2025.\r\nThe most current version of the site as always is available at our home page.\r\nTo … [+173 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Quartz Intelligence Newsroom",
      title:
        "Bitcoin's creator, Intel and TSMC, cruise stocks sink, and Dogecoin mania: Markets news roundup",
      description:
        "Who created Bitcoin? The million-dollar question is back in the spotlight — and this time with a surprising new suspect: Jack Dorsey, the bearded tech sage behind Twitter. Read more...",
      url: "https://qz.com/bitcoin-creator-intel-tsmc-dogecoin-palantir-stocks-1851765873",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/fe5222fea48ab0b4aa2c8f685ac3c583.jpg",
      publishedAt: "2025-02-22T14:00:00Z",
      content:
        "Cruise operator stocks are sinking Thursday after a top U.S. official pledged to force them to pay taxes. \r\nWhile speaking with Fox News on Wednesday evening, newly-confirmed Commerce Secretary Howar… [+112 chars]",
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
      title:
        "‘Bitcoin Fixes This’—Elon Musk Pitched Gold ‘Upgrade’ As Price Predictions Soar",
      description:
        "Bitcoin-backing U.S. senator Cynthia Lummis has pitched Musk a bitcoin “fix” to questions over the U.S. gold reserves...",
      url: "https://www.forbes.com/sites/digital-assets/2025/02/17/bitcoin-fixes-this-elon-musk-pitched-gold-upgrade-as-price-predictions-soar/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/64ad49a68d1670952aedfb03/0x0.jpg?format=jpg&crop=2352,1518,x498,y215,safe&height=900&width=1600&fit=bounds",
      publishedAt: "2025-02-17T12:15:26Z",
      content:
        "Bitcoin, sometimes called digital gold, has rocketed higher over the last year as a combination of Wall Street adoption, regulatory tailwinds and macro economic forces convergesparking dangerous bubb… [+4636 chars]",
    },
    {
      source: {
        id: null,
        name: "Faz.net",
      },
      author: "Christian Siedenbiedel",
      title: "Wie Privatanleger von der Goldrally profitieren können",
      description:
        "Einen Rücksetzer für den Einstieg nutzen? Wer als Privatanleger in Gold investieren will, sollte ein paar Dinge wissen. Auch hinsichtlich des Finanzamtes gibt es Tricks.",
      url: "https://www.faz.net/aktuell/finanzen/in-gold-investieren-wie-privatanleger-von-der-goldrally-profitieren-koennen-110291781.html",
      urlToImage:
        "https://media0.faz.net/ppmedia/aktuell/finanzen/1911332502/1.10292188/facebook_teaser_fplus/gold.jpg",
      publishedAt: "2025-02-12T18:51:07Z",
      content:
        "Wie ist das mit dem Gold und dem Zeitgeist? Eine Zeit lang konnte man den Eindruck haben, Goldbarren und Goldmünzen lagern vor allem wohlhabende Männer im sehr fortgeschrittenen Alter in ihren Heimtr… [+523 chars]",
    },
    {
      source: {
        id: null,
        name: "heise online",
      },
      author: "Martin Holland",
      title:
        "Größter Diebstahl der Geschichte: FBI beschuldigt Nordkorea des Bybit-Coups",
      description:
        "Vorige Woche wurden Bybit Kryptogüter im Wert von 1,5 Milliarden US-Dollar gestohlen. Nun hat auch das FBI eine berüchtigte Gruppe aus Nordkorea beschuldigt.",
      url: "https://www.heise.de/news/Groesster-Diebstahl-der-Geschichte-FBI-beschuldigt-Nordkorea-des-Bybit-Coups-10297877.html",
      urlToImage:
        "https://heise.cloudimg.io/bound/1200x1200/q85.png-lossy-85.webp-lossy-85.foil1/_www-heise-de_/imgs/18/4/8/0/9/4/1/8/shutterstock_39552700-257518ad766e16b5.jpg",
      publishedAt: "2025-02-27T10:16:00Z",
      content:
        "Mit dem FBI beschuldigt nun auch eine US-Regierungsbehörde offiziell Nordkorea, für den größten Krypto-Diebstahl aller Zeiten verantwortlich zu sein. Das abgeschottete Regime sei verantwortlich für d… [+2607 chars]",
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "Javier Bastardo, Contributor, \n Javier Bastardo, Contributor\n https://www.forbes.com/sites/javierbastardo/",
      title:
        "Physical Attacks Against Bitcoin Holders Surge As BTC Price Rises",
      description:
        "With bitcoin and crypto prices experiencing a strong bullish run in recent months physical attacks against bitcoin investors have risen.",
      url: "https://www.forbes.com/sites/digital-assets/2025/02/28/physical-attacks-against-bitcoin-holders-surge-as-btc-price-rises/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/67c25414bbdcc7df59b306a3/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      publishedAt: "2025-03-01T00:38:36Z",
      content:
        "LONDON, ENGLAND - JUNE 04: Counter terrorism officers march near the scene of last night's London ... [+] Bridge terrorist attack on June 4, 2017 in London, England. Police continue to cordon off an … [+4098 chars]",
    },
    {
      source: {
        id: "die-zeit",
        name: "Die Zeit",
      },
      author: "ZEIT ONLINE: News -",
      title:
        "Gefangenenaustausch: Russischer Cyberkrimineller aus US-Haft zurück in Moskau",
      description:
        "Hier finden Sie Informationen zu dem Thema „Gefangenenaustausch“. Lesen Sie jetzt „Russischer Cyberkrimineller aus US-Haft zurück in Moskau“.",
      url: "https://www.zeit.de/news/2025-02/14/russischer-cyberkrimineller-aus-us-haft-zurueck-in-moskau",
      urlToImage:
        "https://img.zeit.de/news/2025-02/14/russischer-cyberkrimineller-aus-us-haft-zurueck-in-moskau-image-group/wide__1300x731",
      publishedAt: "2025-02-13T23:06:11Z",
      content:
        "Der in einem Gefangenenaustausch zwischen den USA und Russland freigelassene russische Cyberkriminelle Alexander Winnik ist nach Moskau zurückgekehrt. Der russische Außenpolitiker Leonid Sluzki sprac… [+721 chars]",
    },
    {
      source: {
        id: null,
        name: "Quartz India",
      },
      author: "Vinamrata Chaturvedi",
      title:
        "This man wants to buy the entire landfill because he lost his $775 million worth of Bitcoin",
      description:
        "Losing a crypto wallet could be nerve-wracking—painful and almost impossible to recover. Just ask this guy from the U.K. who’s on a 12-year mission to dig through a landfill for his lost hardware wallet. His new plan? Buy the entire dump.Read more...",
      url: "https://qz.com/u-k-man-buy-a-dump-775-million-of-bitcoin-lost-1851761595",
      urlToImage:
        "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/88bbe8a02ba9968cd9a7da6d93361e2c.jpg",
      publishedAt: "2025-02-12T18:10:00Z",
      content:
        "Losing a crypto wallet could be nerve-wrackingpainful and almost impossible to recover. Just ask this guy from the U.K. whos on a 12-year mission to dig through a landfill for his lost hardware walle… [+2280 chars]",
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "Clem Chambers, Senior Contributor, \n Clem Chambers, Senior Contributor\n https://www.forbes.com/sites/investor/people/clem/",
      title: "Bitcoin Versus Gold: Flight Versus War",
      description:
        "When it comes to bitcoin versus gold, gold is the senior market. Bitcoin is not digital gold, it has different use cases.",
      url: "https://www.forbes.com/sites/digital-assets/2025/02/17/bitcoin-versus-gold-flight-versus-war/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/67b31af60bad3ebe641820b3/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
      publishedAt: "2025-02-17T11:23:17Z",
      content:
        "Kiev, Ukraine - December 03, 2017 : Bitcoin coin and mound of gold nuggets bitcoin cryptocurrency\r\ngetty\r\nWhen it comes to bitcoin versus gold, gold is the senior market. Bitcoin is not digital gold,… [+3515 chars]",
    },
    {
      source: {
        id: null,
        name: "Forbes",
      },
      author:
        "Billy Bambrough, Senior Contributor, \n Billy Bambrough, Senior Contributor\n https://www.forbes.com/sites/billybambrough/",
      title:
        "Bitcoin At A ‘Critical Juncture’ As Crypto Braces For a ‘Major’ Price ‘Catalyst’",
      description:
        'Bitcoin and cryptocurrency prices have found a temporary floor following a steep sell-off though analysts have said bitcoin remains at a "critical juncture"...',
      url: "https://www.forbes.com/sites/digital-assets/2025/02/26/bitcoin-at-a-critical-juncture-as-crypto-braces-for-a-major-price-shock/",
      urlToImage:
        "https://imageio.forbes.com/specials-images/imageserve/626e4deb9cb7a8fb2aab7720/0x0.jpg?format=jpg&crop=1444,953,x413,y98,safe&height=900&width=1600&fit=bounds",
      publishedAt: "2025-02-26T13:15:03Z",
      content:
        'Bitcoin and cryptocurrency prices have found a temporary floor following a steep sell-offthough one analyst has warned traders not to buy the dip."\r\nUnlock over $3,000 in NFT, web3 and crypto perks A… [+3976 chars]',
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=us&category=business&category=${this.props.category}&apiKey=8f866684987d46319ff16b3a2d52b762&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles,totalResults: parsedData.totalResults,
      loading: false
    });
  }
  handlePrevClick = async() =>{

    let url =
      `https://newsapi.org/v2/top-headlines?country=us&category=business&category=${this.props.category}&apiKey=8f866684987d46319ff16b3a2d52b762&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      {this.setState({loading: true})};
      let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page-1,
      articles: parsedData.articles,
      loading: false
    })  
    
  }
  handleNextClick = async() =>{
    if(!(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
          let url =
          `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=business&category=${this.props.category}&apiKey=8f866684987d46319ff16b3a2d52b762&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
          {this.setState({loading: true})};
        let data = await fetch(url);
        let parsedData = await data.json();
        // {this.setState({loading: false})};
        this.setState({
          page: this.state.page+1,
          articles: parsedData.articles,
          loading: false
        })
    }
  }
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsDaily - Top headlines</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <Newsitem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>
            {" "}
            &larr; Previous
          </button>
          <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
