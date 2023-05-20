import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import NewsItem from './Newsitem'
import Spinnig from './Spinning';

const News = (props) => {

    const [articles, setarcticles] = useState([])
    const [loading, setloading] = useState(false)



    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }



    const updateNews = () => {
        props.setProgress(0)
        setloading(true)
        setarcticles([
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "The Feed",
                "title": "Powassan virus: Maime reports first death case this year, know more about the virus - Economic Times",
                "description": "Powassan virus is transmitted by ticks and its symptoms include fever, vomiting, weakness, and seizure among others. Maine has recorded the first fatal case due to the virus.",
                "url": "https://economictimes.indiatimes.com/news/international/us/powassan-virus-maime-reports-first-death-case-this-year-know-more-about-the-virus/articleshow/100362152.cms",
                "urlToImage": "https://img.etimg.com/thumb/msid-100362185,width-1070,height-580,imgsize-52946,overlay-economictimes/photo.jpg",
                "publishedAt": "2023-05-19T15:18:00Z",
                "content": "QSR, Lifestyle Cos See Slower Sales in March Qtr, AprSales of large quick-service restaurants, lifestyle, apparel and discretionary products have slowed in the March quarter as well as in April, with… [+205 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "NDTV News"
                },
                "author": null,
                "title": "Skincare Tips: Follow These Tips To Manage Psoriasis During Summer - NDTV",
                "description": "NDTV.com: India, Business, Bollywood, Cricket, Video and Breaking News",
                "url": "https://www.ndtv.com/news",
                "urlToImage": "https://cdn.ndtv.com/common/images/ogndtv.png",
                "publishedAt": "2023-05-19T15:01:05Z",
                "content": "If you are a climate change warrior or know someone who is doing incredible work in this space, send us your entries and we'll bring the most innovative stories to the world."
            },
            {
                "source": {
                    "id": null,
                    "name": "Real Simple"
                },
                "author": "https://www.facebook.com/realsimple/",
                "title": "Study: Mental Health Is the Top Motivation for Exercise - Real Simple",
                "description": "The 2023 Wellness Index from Mindbody found that weight loss is no longer the top reason for exercisers to workout. Instead, consumers are exercising primarily for their mental health. Here's what that means for the future of the fitness and wellness industry.",
                "url": "https://www.realsimple.com/exercise-for-mental-health-longevity-survey-7500153",
                "urlToImage": "https://www.realsimple.com/thmb/WyMs2VVcBh3Ri_qFcpTY45gWD70=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/real-motivation-behind-workouts-realsimple-GettyImages-1171088559-71b52f84a40c442ba20477b3c58a971f.jpg",
                "publishedAt": "2023-05-19T14:31:59Z",
                "content": "Working out has long been used singularly for physical, superficial results. But a new (and arguably healthier) fitness rationale is starting to take over the minds of exercisers, bringing unpreceden… [+7400 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Healio"
                },
                "author": null,
                "title": "Perceived cognitive deficits in first 4 weeks of COVID-19 could predict long COVID - Healio",
                "description": "Patients who reported cognitive deficits in the first month of a COVID-19 diagnosis were more likely to develop long COVID than those without perceived deficits, according to study results published in JAMA Network Open.Those who are in the acute phase of SAR…",
                "url": "https://www.healio.com/news/primary-care/20230519/perceived-cognitive-deficits-in-first-4-weeks-of-covid19-could-predict-long-covid",
                "urlToImage": "https://www.healio.com/~/media/slack-news/fm_im/misc/infographics/2023/05-may/pc0523liu_graphic_01_web.jpg",
                "publishedAt": "2023-05-19T14:29:50Z",
                "content": "Key takeaways:\r\n<ul><li>Of the 766 patients with COVID-19, 36.1% perceived a cognitive deficit.</li><li>Those who reported perceived cognitive deficits in the first 4 weeks of infection were more lik… [+3754 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "WION"
                },
                "author": "WION Web Team",
                "title": "US scientists, led by Indian, make big discovery that`ll help brain cancer patients - WION",
                "description": "US scientists, led by Indian, make big discovery thatll help brain cancer patients",
                "url": "https://www.wionews.com/science/us-scientists-led-by-indian-make-big-discovery-thatll-help-brain-cancer-patients-594185",
                "urlToImage": "http://cdn.wionews.com/sites/default/files/2022/06/11/270004-untitled-design-11.png",
                "publishedAt": "2023-05-19T14:20:35Z",
                "content": "In a finding that can change the way how cancerous brain tumours are treated, a team of scientists led by an Indian, has found that cancerous cells link with healthy brain cells to become hyperactive… [+3053 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "ANI News"
                },
                "author": null,
                "title": "Brain's primary auditory cortex is more responsive to human vocalizations - ANI News",
                "description": "The subjective experience of sound involves various psychological and cognitive factors that give sounds additional meaning and significance.\nThe frequency and loudness of sounds that we hear around us literally describe those sounds. But for humans, sounds c…",
                "url": "https://www.aninews.in/news/health/brains-primary-auditory-cortex-is-more-responsive-to-human-vocalizations20230519191336",
                "urlToImage": "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230519134328.jpg",
                "publishedAt": "2023-05-19T13:43:00Z",
                "content": "Washington [US], May 19 (ANI): As per a study, the subjective experience of sound involves various psychological and cognitive factors that give sounds additional meaning and significance.Published i… [+5019 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "The Indian Express"
                },
                "author": "The Indian Express",
                "title": "Understanding the role of vitamins in skincare: From preventing wrinkles to moisturising - The Indian Express",
                "description": null,
                "url": "https://indianexpress.com/article/lifestyle/health/vitamins-role-skin-care-vitamin-a-vitamin-c-vitamin-b3-vitamin-b5-vitamin-e-8614677/",
                "urlToImage": null,
                "publishedAt": "2023-05-19T13:30:25Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "ANI News"
                },
                "author": null,
                "title": "Researchers reveal how watching clock while trying to sleep impacts insomnia - ANI News",
                "description": "According to study by an Indiana University researcher, keeping an eye on the time as you try to fall asleep increases insomnia and the need for sleep medications; but, a slight adjustment could improve your quality of sleep.",
                "url": "https://www.aninews.in/news/science/researchers-reveal-how-watching-clock-while-trying-to-sleep-impacts-insomnia20230519190021",
                "urlToImage": "https://d3lzcn6mbbadaf.cloudfront.net/media/details/ANI-20230519133011.jpg",
                "publishedAt": "2023-05-19T13:30:00Z",
                "content": "Indiana [US], May 19 (ANI): According to study by an Indiana University researcher, keeping an eye on the time as you try to fall asleep increases insomnia and the need for sleep medications; but, a … [+2322 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "TIMESOFINDIA.COM",
                "title": "Okra for diabetes: How to eat bhindi for maximum benefit - Indiatimes.com",
                "description": "​Elevated blood sugar levels are a symptom of diabetes. It is currently one of the metabolic illnesses that is most common worldwide. Diabetes patients must be particularly careful about what they put on their plates. Recently, researchers have shown that sev…",
                "url": "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/okra-for-diabetes-how-to-eat-bhindi-for-maximum-benefit/photostory/100351440.cms",
                "urlToImage": "https://static.toiimg.com/photo/100351457.cms",
                "publishedAt": "2023-05-19T12:30:00Z",
                "content": "100 gms of okra has 35 calories, 1.3 grams of protein and 0.2 grams of fat.\r\nOkra/Bhindi is a great source of fibre, along with essential vitamins like vitamin B6, and folate. \"Besides being rich in … [+764 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "WION"
                },
                "author": "Kirtika Katira",
                "title": "Doctor explains why it`s unhealthy for women to have washboard abs; answers internet`s most asked questions - WION",
                "description": "Doctor explains why its unhealthy for women to have washboard abs; answers internets most asked questions",
                "url": "https://www.wionews.com/entertainment/lifestyle/news-doctor-explains-why-its-unhealthy-for-women-to-have-washboard-abs-answers-internets-most-asked-questions-594113",
                "urlToImage": "http://cdn.wionews.com/sites/default/files/2023/05/19/352913-pexels-cottonbro-studio-7674488.jpg",
                "publishedAt": "2023-05-19T12:24:01Z",
                "content": "While many consider washboard abs a sign of peak fitness, medical experts believe that ultra-low body fat per cent can be extremely harmful, especially for women. It can lead to a compromised immune … [+3264 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Hindustan Times"
                },
                "author": "Parmita Uniyal",
                "title": "Autoimmune Arthritis Day: 8 deadly diseases caused by rheumatoid arthritis - Hindustan Times",
                "description": "Rheumatoid arthritis not just affects your joints, but puts one at risk of heart issues, hypertension, fatty liver, lung disease and even cancer. | Health",
                "url": "https://www.hindustantimes.com/lifestyle/health/world-autoimmune-arthritis-day-8-deadly-diseases-people-with-rheumatoid-arthritis-are-at-risk-of-101684496421716.html",
                "urlToImage": "https://www.hindustantimes.com/ht-img/img/2023/05/19/1600x900/autoimmune_arthritis_1684496602655_1684496602855.jfif",
                "publishedAt": "2023-05-19T11:51:32Z",
                "content": "World Autoimmune Arthritis Day is observed on May 20 every year to raise awareness about different types of autoimmune arthritis and spread awareness about them. Rheumatoid arthritis (RA) is a type o… [+8623 chars]"
            },
            {
                "source": {
                    "id": "the-hindu",
                    "name": "The Hindu"
                },
                "author": "The Hindu",
                "title": "Even limited arsenic exposure mars cognitive function - The Hindu",
                "description": null,
                "url": "https://www.thehindu.com/sci-tech/health/even-limited-arsenic-exposure-mars-cognitive-function/article66869761.ece",
                "urlToImage": null,
                "publishedAt": "2023-05-19T11:28:00Z",
                "content": null
            },
            {
                "source": {
                    "id": null,
                    "name": "India Education Diary"
                },
                "author": "iednewsdesk",
                "title": "Study finds Air Pollution May Increase Risk of Dementia, Complicated by Genetics - India Education Diary",
                "description": "Three years ago, an international study commissioned by the journal Lancet listed 12 modifiable factors that increased the risk of dementia, including three new ones: excessive alcohol, head injury and air pollution.Writing in the May 2, 2023 issue o",
                "url": "https://indiaeducationdiary.in/study-finds-air-pollution-may-increase-risk-of-dementia-complicated-by-genetics/",
                "urlToImage": "https://indiaeducationdiary.in/wp-content/uploads/2023/05/air-pollution-brain-graphic-teaser-1200x628-20230501-1024x536.jpg",
                "publishedAt": "2023-05-19T11:19:57Z",
                "content": "Three years ago, an international study commissioned by the journal Lancet listed 12 modifiable factors that increased the risk of dementia, including three new ones: excessive alcohol, head injury a… [+3134 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "ET HealthWorld",
                "title": "Genes expressed in brain before birth can affect risk of childhood mental disease - ETHealthWorld",
                "description": "The group first assessed whether genetic patterns that have been associated with psychiatric illnesses in adults also tracked with psychiatric symptoms in children.",
                "url": "https://health.economictimes.indiatimes.com/news/industry/genes-expressed-in-brain-before-birth-can-affect-risk-of-childhood-mental-disease/100356811",
                "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-100356811,imgsize-6966,width-1200,height=765,overlay-ethealth/industry/genes-expressed-in-brain-before-birth-can-affect-risk-of-childhood-mental-disease.jpg",
                "publishedAt": "2023-05-19T11:10:47Z",
                "content": "Washington: Researchers have discovered a number of genes whose expression in the brain before birth may influence the risk of developing a variety of mental diseases during childhood. The team, led … [+3374 chars]"
            },
            {
                "source": {
                    "id": "the-times-of-india",
                    "name": "The Times of India"
                },
                "author": "ET HealthWorld",
                "title": "Air pollution particles trigger cellular defense mechanisms: Study - ETHealthWorld",
                "description": "Exposure to ambient nanoparticles, or very small pollutants in the air, limits the ability of cells to defend themselves against other potential harms. The findings were published in the journal Autophagy Reports.",
                "url": "https://health.economictimes.indiatimes.com/news/industry/air-pollution-particles-trigger-cellular-defense-mechanisms-study/100356340",
                "urlToImage": "https://etimg.etb2bimg.com/thumb/msid-100356340,imgsize-13234,width-1200,height=765,overlay-ethealth/industry/air-pollution-particles-trigger-cellular-defense-mechanisms-study.jpg",
                "publishedAt": "2023-05-19T10:56:55Z",
                "content": "Washington: Lung disease and air pollution have long been associated with one another. A recent study has identified one biological mechanism that may be responsible for that connection; this finding… [+3398 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "India Today"
                },
                "author": "INDIATODAY",
                "title": "7 Foods To Help Your Thyroid - India Today",
                "description": "Here are 7 foods that can help improve your thyroid condition.",
                "url": "https://www.indiatoday.in/visualstories/wellness/best-foods-to-help-your-thyroid-37310-19-05-2023",
                "urlToImage": "https://akm-img-a-in.tosshub.com/sites/visualstory/wp/2023/05/Thyroid-gland.png",
                "publishedAt": "2023-05-19T10:37:39Z",
                "content": "Pumpkin seeds are a rich source of zinc that are essential to convert T4 to T3. They also contain tryptophan, an amino acid that promotes sleep."
            },
            {
                "source": {
                    "id": null,
                    "name": "India.com"
                },
                "author": "https://www.india.com/author/video-desk/",
                "title": "Diabetes Diet: Best Wholegrains That Will Help Control Blood Sugar Levels - Watch Video - India.com",
                "description": "One of the most essential things for a diabetic patient to keep in mind is to eat certain foods in moderation as excess of such foods can lead to spike in blood sugar levels. Just like that there are certain whole grains that can be healthy if consumed in mod…",
                "url": "https://www.india.com/video-gallery/diabetes-diet-best-wholegrains-that-will-help-control-blood-sugar-levels-watch-video-6058604/",
                "urlToImage": "https://static.india.com/wp-content/uploads/2023/05/WHOLEGRAINS.jpg",
                "publishedAt": "2023-05-19T10:37:18Z",
                "content": "One of the most essential things for a diabetic patient to keep in mind is to eat certain foods in moderation as excess of such foods can lead to spike in blood sugar levels. Just like that there are… [+942 chars]"
            },
            {
                "source": {
                    "id": null,
                    "name": "Telangana Today"
                },
                "author": "Mitu David",
                "title": "World IBD Day: Yashoda Hospitals' organise walkathon - Telangana Today",
                "description": "The walkathon was organized to spread awareness among people about IBD, which is also known as Ulcerative Colitis and Crohns disease.",
                "url": "https://telanganatoday.com/world-ibd-day-yashoda-hospitals-organise-walkathon",
                "urlToImage": "https://cdn.telanganatoday.com/wp-content/uploads/2023/05/PHOTO-2023-05-19-15-28-45.jpg",
                "publishedAt": "2023-05-19T10:36:55Z",
                "content": null
            }
        ])
        setloading(false)
        props.setProgress(100)

    }

    useEffect(() => {
        updateNews();
    }, ([]))


    return (
        <>

            <h1 className='text-center' style={{ marginTop: '110px' }} >Today's Top {capitalizeFirstLetter("Health")} Headlines </h1>
            {loading && <Spinnig />}

            <div className='container my-2'>
                <div className="row ">
                    {articles && articles.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem title={element.title} desc={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "unkwon"} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
            </div>

        </>
    )
}


News.defaultProps = {
    pagesize: 8,
    country: "in",
    category: "Health"
}

News.PropsTypes = {
    pagesize: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string
}

export default News