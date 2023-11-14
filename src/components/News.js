import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  articles = [
    {
      source: {
        id: "theverge",
        name: "The Verge",
      },
      author: "Antonio G. Di Benedetto",
      title:
        "PlayStation Portal impressions: handson with Sony’s remote play handheld for PS5  The Verge",
      description:
        "Sony’s $200 DualSense controller and tablet hybrid is solely for streaming games off your PS5 via remote play — something you can already do with other devices.",
      url: "https://www.theverge.com/23958572/sonyplaystationportalps5streamingremoteplayhandheldspecsimpressions",
      urlToImage:
        "https://cdn.voxcdn.com/thumbor/D8sYPNK0pFvpFKJCM8d1Rnxl7Ik=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.voxcdn.com/uploads/chorus_asset/file/25080261/111323_PlayStation_Portal_ADiBenedetto_0001.jpg",
      publishedAt: "20231113T14:00:00Z",
      content:
        "Sonys PlayStation Portal gives a confusing first impression\r\nSonys PlayStation Portal gives a confusing first impression\r\n / The frankencontroller / tablet hybrid is designed to be an it just works … [+4644 chars]",
    },
    {
      source: {
        id: null,
        name: "YouTube",
      },
      author: null,
      title:
        "Nations gather in Nairobi to hammer out treaty on plastic pollution • FRANCE 24 English  FRANCE 24 English",
      description:
        "Efforts to create a landmark treaty to end global plastic pollution advance Monday in Nairobi as most of the world's nations, plus petrochemical companies, e...",
      url: "https://www.youtube.com/watch?v=evqkMCPQOy8",
      urlToImage: "https://i.ytimg.com/vi/evqkMCPQOy8/maxresdefault.jpg",
      publishedAt: "20231113T13:58:06Z",
      content: null,
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author:
        "Hamdi Alkhshali, Jo Shelley, Helen Regan, Abeer Salman, Kareem Khadder",
      title:
        "Newborns taken out of incubators wrapped in foil to keep them alive at Gaza’s largest hospital, director says  CNN",
      description:
        "Premature babies at Gaza’s largest hospital are being wrapped in foil and placed next to hot water in a desperate bid to keep them alive, the hospital director warned, as Israeli firepower continues to pound surrounding streets and dwindling fuel reserves run…",
      url: "https://www.cnn.com/2023/11/13/middleeast/gazababiesincubatorsalshifahospitalisraelintlhnk/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/231113114505prematurebabyshifahospitalgaza.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "20231113T13:39:00Z",
      content:
        "Premature babies at Gazas largest hospital are being wrapped in foil and placed next to hot water in a desperate bid to keep them alive in catastrophic conditions, the hospital director has warned, a… [+7893 chars]",
    },
    {
      source: {
        id: "thewashingtonpost",
        name: "The Washington Post",
      },
      author: "Laura Vozzella",
      title:
        "Virginia Rep. Abigail Spanberger to run for governor in 2025  The Washington Post",
      description:
        "Spanberger, a Democrat who has sought to chart a moderate course in Congress, joins the governor’s race days after her party won the state House and Senate.",
      url: "https://www.washingtonpost.com/dcmdva/2023/11/13/spanbergervirginiagovernor2025/",
      urlToImage:
        "https://www.washingtonpost.com/wpapps/imrs.php?src=https://arcanglerfishwashpostprodwashpost.s3.amazonaws.com/public/DO7SXQ74OZDM5GHS73VFMV5XHY.JPG&w=1440",
      publishedAt: "20231113T13:33:12Z",
      content:
        "Comment on this story\r\nComment\r\nAdd to your saved stories\r\nSave\r\nRICHMOND U.S. Rep. Abigail Spanberger, a former CIA officer and swingdistrict Democrat who has clashed at times with her partys leade… [+6215 chars]",
    },
    {
      source: {
        id: "abcnews",
        name: "ABC News",
      },
      author: "Luke Barr",
      title:
        "Secret Service opens fire on people attempting to break into car outside Naomi Biden's home: Sources  ABC News",
      description: "Naomi Biden, 29, is the president's granddaughter.",
      url: "https://abcnews.go.com/Politics/secretserviceopensfirepeopleattemptingbreakcar/story?id=104843412",
      urlToImage:
        "https://i.abcnewsfe.com/a/9801f0416f4a46c786dab53da76e4b73/naomibiden_hpMain_20231113081125_16x9.jpg?w=992",
      publishedAt: "20231113T13:25:48Z",
      content:
        "The Metropolitan Police Department and Secret Service are investigating an agentinvolved shooting after possibly three individuals attempted to break into a government car outside the Georgetown hom… [+1412 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Hafsa Khalil",
      title: "Astronauts accidentally drop tool bag during ISS spacewalk  CNN",
      description:
        "NASA astronauts Jasmin Moghbeli and Loral O’Hara marked their first spacewalk this month with a tool bag floating through space.",
      url: "https://www.cnn.com/2023/11/13/world/astronautsdroptoolbagissspacewalkintlscnscli/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/23111312312301isstoolbagdrop.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "20231113T13:20:00Z",
      content:
        "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nNASA astronauts Jasmin Moghbeli and Loral OHara marked… [+2015 chars]",
    },
    {
      source: {
        id: null,
        name: "CBS Sports",
      },
      author: "",
      title:
        "NFL Week 10 grades: Raiders earn 'B+' for Sunday night win over Jets, Browns get an 'A' for stunning Ravens  CBS Sports",
      description: "Here are the grades for every team that played in Week 10",
      url: "https://www.cbssports.com/nfl/news/nflweek10gradesraidersearnbforsundaynightwinoverjetsbrownsgetanaforstunningravens/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2023/11/13/322c1ad4dbd9468ba099bc48be285d23/thumbnail/1200x675/405050b463523e6f6d3ec776dd2810bd/gettyimages1790015620.jpg",
      publishedAt: "20231113T13:14:00Z",
      content:
        "Welcome to the Week 10 grades!\r\nIf you love drama, then Week 10 might go down as your favorite week in NFL history. There were a total of gamewinning field goals kicked as time expired on Sunday, wh… [+2382 chars]",
    },
    {
      source: {
        id: null,
        name: "Page Six",
      },
      author: "Francesca Bacardi",
      title:
        "'The Hills' star Audrina Patridge's 15yearold niece's cause of death revealed  Page Six",
      description:
        "TMZ reported early Monday that police are investigating because Sadie allegedly obtained fentanyllaced Percocet through Snapchat.",
      url: "https://pagesix.com/2023/11/13/entertainment/thehillsstaraudrinapatridges15yearoldniecescauseofdeathrevealed/",
      urlToImage:
        "https://pagesix.com/wpcontent/uploads/sites/3/2023/11/NYPICHPDPICT000072259783.jpg?quality=75&strip=all&w=1024",
      publishedAt: "20231113T12:58:00Z",
      content:
        "Audrina Patridge’s late niece Sadie’s cause of death has been determined to be a drug overdose, police sources told TMZ. \r\nShe was 15 when she died in February.\r\nThe outlet noted that a manner of dea… [+2219 chars]",
    },
    {
      source: {
        id: null,
        name: "Eonline.com",
      },
      author: "Kisha Forde",
      title: "Euphoria Producer Kevin Turen Dead at 44  E! NEWS",
      description:
        "Kevin Turen, a producer who worked in projects in television and film including HBO's Euphoria and The Idol, has died at the age of 44.",
      url: "https://www.eonline.com/news/1389738/euphoriaproducerkevinturendeadat44",
      urlToImage:
        "https://aknsimages.eonline.com/eol_images/Entire_Site/20231013/cr_1200x1200231113042505GettyImages506777404.jpg?fit=around%7C1080:1080&outputquality=90&crop=1080:1080;center,top",
      publishedAt: "20231113T12:54:00Z",
      content:
        "The entertainment industry is mourning the loss of one of their own.\r\nKevin Turen, a producer who worked on films including Malcolm and Marie and Waves and whose work in television included HBO's Eup… [+795 chars]",
    },
    {
      source: {
        id: "arstechnica",
        name: "Ars Technica",
      },
      author: "Dan Goodin",
      title:
        "In a first, cryptographic keys protecting SSH connections stolen in new attack  Ars Technica",
      description:
        "An error as small as a single flipped memory bit is all it takes to expose a private key.",
      url: "https://arstechnica.com/security/2023/11/hackerscanstealsshcryptographickeysinnewcuttingedgeattack/",
      urlToImage:
        "https://cdn.arstechnica.net/wpcontent/uploads/2023/11/encryptionkeyrecoveryattack760x380.jpg",
      publishedAt: "20231113T12:30:15Z",
      content:
        "30 with \r\nFor the first time, researchers have demonstrated that a large portion of cryptographic keys used to protect data in computertoserver SSH traffic are vulnerable to complete compromise whe… [+3699 chars]",
    },
    {
      source: {
        id: "cbsnews",
        name: "CBS News",
      },
      author: "Sara Moniuszko",
      title:
        "High blood pressure? Reducing salt in your diet may be as effective as a common drug, study finds  CBS News",
      description:
        "According to new research, for many people a lowsodium diet may be as effective as taking a common blood pressure medication.",
      url: "https://www.cbsnews.com/news/highbloodpressuresaltdietstudy/",
      urlToImage:
        "https://assets3.cbsnewsstatic.com/hub/i/r/2023/11/06/432c6768ecfc4766ab31f20a6f183804/thumbnail/1200x630/a7c795c87b1734c0d9d6443bc94ea995/gettyimages11827183701.jpg?v=8afad5e29ac9a704fff9d98ba34d3649",
      publishedAt: "20231113T12:28:00Z",
      content:
        "Want to lower your blood pressure? Cutting back on salt in your diet could help do just that — and according to new research, for many people it may be as effective as taking a common blood pressure … [+2235 chars]",
    },
    {
      source: {
        id: null,
        name: "Entertainment Tonight",
      },
      author: null,
      title:
        "See Travis Kelce React to Taylor Swift's Sweet 'Karma' Lyric Change  Entertainment Tonight",
      description: null,
      url: "https://www.etonline.com/seetraviskelcereacttotaylorswiftssweetkarmalyricchange214724",
      urlToImage: null,
      publishedAt: "20231113T12:17:00Z",
      content: "",
    },
    {
      source: {
        id: null,
        name: "[Removed]",
      },
      author: null,
      title: "[Removed]",
      description: "[Removed]",
      url: "https://removed.com",
      urlToImage: null,
      publishedAt: "19700101T00:00:00Z",
      content: "[Removed]",
    },
    {
      source: {
        id: null,
        name: "WDIV ClickOnDetroit",
      },
      author: "Derick Hutchinson",
      title:
        "If signstealing leaks were meant to push Harbaugh out of Michigan, that plan might have backfired  WDIV ClickOnDetroit",
      description:
        "Don’t look now, but if the signstealing leaks were supposed to push Jim Harbaugh out of Michigan, that plan might have backfired.",
      url: "https://www.clickondetroit.com/allaboutannarbor/2023/11/13/ifsignstealingleaksweremeanttopushharbaughoutofmichiganthatplanmighthavebackfired/",
      urlToImage:
        "https://res.cloudinary.com/grahammediagroup/image/upload/f_auto/q_auto/c_thumb,w_700/v1/media/gmg/XTWDDIPDUFA7DHAP5O3ZJU2XJ4.jpg?_a=ATAPphC0",
      publishedAt: "20231113T12:06:53Z",
      content:
        "ANN ARBOR, Mich. Dont look now, but if the signstealing leaks were supposed to push Jim Harbaugh out of Michigan, that plan might have backfired.\r\nWe still dont know, officially, where the informati… [+8340 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Rob Picheta",
      title:
        "Suella Braverman, Britain’s hardline home secretary, fired as exPM David Cameron makes surprise return to government  CNN",
      description:
        "Britain’s beleaguered Prime Minister Rishi Sunak carried out a dramatic reshuffle to his Cabinet on Monday, firing his divisive home secretary and bringing back former premier David Cameron to the heart of government after a sevenyear absence from politics.",
      url: "https://www.cnn.com/2023/11/13/uk/suellabravermanleavesgovernmentrishisunakgbrintl/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/231113101752cameronsunakbravermansplit.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "20231113T12:01:00Z",
      content:
        "Britains beleaguered Prime Minister Rishi Sunak carried out a dramatic Cabinet reshuffle on Monday, firing his divisive home secretary and bringing back former premier David Cameron to the heart of g… [+8793 chars]",
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Natasha Turak",
      title:
        "Emirates announces $52 billion order for 95 Boeing aircraft  CNBC",
      description:
        "Both Boeing and Airbus have highlighted the Middle East region as a major source of demand for widebody aircraft.",
      url: "https://www.cnbc.com/2023/11/13/emiratesannounces52billionorderfor95boeingaircraft.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/1071177641663087218628emirates.jpg?v=1699872858&w=1920&h=1080",
      publishedAt: "20231113T11:54:33Z",
      content:
        "DUBAI, United Arab Emirates Emirates Airline on Monday announced an order for 95 Boeing aircraft at a value of $52 billion, kicking off the first major deal of the 2023 Dubai Airshow.\r\nThe stateowne… [+1943 chars]",
    },
    {
      source: {
        id: null,
        name: "MarketWatch",
      },
      author: "Steve Goldstein",
      title:
        "Here's where Morgan Stanley sees the real investment opportunities in 2024  MarketWatch",
      description: "Critical information for the U.S. trading day",
      url: "https://www.marketwatch.com/story/morganstanleyhasboosteditssp500targetbuthereswhereitseestherealopportunities52c5a920",
      urlToImage: "https://images.mktw.net/im886003/social",
      publishedAt: "20231113T11:51:00Z",
      content:
        "The big news over the weekend for financial markets was, of course, MarketWatch 50 member and onewoman economic tailwind Taylor Swift leaping into the arms of Travis Kelce, the Kansas City Chiefs ti… [+5962 chars]",
    },
    {
      source: {
        id: null,
        name: "cleveland.com",
      },
      author: "Tim Bielik, cleveland.com",
      title:
        "Can Deshaun Watson and the Browns win the AFC North after stunning the Ravens? NFL Week 10 fact or fiction  cleveland.com",
      description:
        "Check out the top storylines from Week 10 around the NFL as we decide whether the narratives from Sunday's games are fact or fiction.",
      url: "https://www.cleveland.com/browns/2023/11/candeshaunwatsonwinthebrownstheafcnorthafterhissecondhalfperformancenflweek10factorfiction.html",
      urlToImage:
        "https://www.cleveland.com/resizer/IGCL_4dv5AEGNPBu0JdDfKgeeY=/1280x0/smart/cloudfrontuseast1.images.arcpublishing.com/advancelocal/BT2QDDKIFRDWVDNI55IEVK6UDE.JPG",
      publishedAt: "20231113T11:42:00Z",
      content:
        "CLEVELAND, Ohio The Browns came back from a 15point deficit to stun the Ravens in Baltimore on Sunday, 3331. But there was more going on around the NFL than just what was happening in this AFC Nort… [+9197 chars]",
    },
    {
      source: {
        id: "arstechnica",
        name: "Ars Technica",
      },
      author: "Eric Berger",
      title:
        "Daily Telescope: An amazing, colorful view of the Universe  Ars Technica",
      description:
        "Take a look at two clusters of galaxies that are colliding.",
      url: "https://arstechnica.com/space/2023/11/dailytelescopeanamazingcolorfulviewoftheuniverse/",
      urlToImage:
        "https://cdn.arstechnica.net/wpcontent/uploads/2023/11/weic2327a760x380.jpeg",
      publishedAt: "20231113T11:30:33Z",
      content:
        "Enlarge/ This panchromatic view of galaxy cluster MACS0416 was created by combining infrared observations from the NASA/ESA/CSA James Webb Space Telescope with visiblelight data from the NASA/ESA Hu… [+1992 chars]",
    },
    {
      source: {
        id: null,
        name: "GovExec.com",
      },
      author: "Eric Katz",
      title:
        "House GOP floats telework restrictions, drastic spending cuts as Congress weighs options to avert shutdown  Government Executive",
      description:
        "House and Senate have diverging plans to temporarily keep agencies afloat as Republicans propose budget rescissions and civilian job reductions.",
      url: "https://www.govexec.com/management/2023/11/housegopfloatsteleworkrestrictionsdrasticspendingcutscongressweighsoptionsavertshutdown/391920/",
      urlToImage:
        "https://cdn.govexec.com/media/img/cd/2023/11/09/11092023HouseGOP/opengraph.jpg",
      publishedAt: "20231113T11:00:00Z",
      content:
        "House Republicans on Thursday hit another snag toward passing fiscal 2024 funding bills, pulling a measure that would have funded the Internal Revenue Service, Office of Personnel Management and othe… [+7635 chars]",
    },
  ];
  constructor() {
    super();
    console.log("from constructor");
    this.state = {
      artcicle: this.articles,
      loading: false
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="title 1" description="description 1" />
          </div>
          <div className="col-md-4">
            <NewsItem title="title 1" description="description 1" />
          </div>
          <div className="col-md-4">
            <NewsItem title="title 1" description="description 1" />
          </div>
        </div>
      </div>
    );
  }
}

export default News
