import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    const { serviceId } = useParams();


    const services = [
        {
            name: "Eye care",
            id: 1,
            img: "https://i.ibb.co/LCPsVHf/Portrait-of-a-happy-mature-male-patient-undergoing-vision-check-with-special-ophthalmic-glasses.jpg",
            shortDescription: "Your eyes are an important part of your health. Most people rely on their eyes to see and make sense of the world around them. But some eye diseases can lead to vision loss, so it is important to identify and treat eye diseases as early as possible",
            longDescription: "Your eyes are an important part of your health. Most people rely on their eyes to see and make sense of the world around them. But some eye diseases can lead to vision loss, so it is important to identify and treat eye diseases as early as possible. You should get your eyes checked as often as your health care provider recommends it, or if you have any new vision problems. And just as it is important to keep your body healthy, you also need to keep your eyes healthy.",
            tips: "Everyone needs to have their eyesight tested to check for vision and eye problems. Children usually have vision screening in school or at their health care providers office during a checkup. Adults may also get vision screenings during their checkups. But many adults need more than a vision screening. They need a comprehensive dilated eye exam."
        },
        {
            name: "Medical Checkup",
            id: 2,
            img: "https://i.ibb.co/0G4BTzV/Medical-Checkup.jpg",
            "shortDescription": "Definitions of medical checkup. a thorough physical examination; includes a variety of tests depending on the age and sex and health of the person. synonyms: checkup, exam, examination, health check, medical, medical exam, medical examination. type of: examination, scrutiny.",
            longDescription: "In a physical examination, medical examination, or clinical examination, a medical practitioner examines a patient for any possible medical signs or symptoms of a medical condition. It generally consists of a series of questions about the patients medical history followed by an examination based on the reported symptoms. Together, the medical history and the physical examination help to determine a diagnosis and devise the treatment plan. These data then become part of the medical record.",
            tips: "Regular health exams and tests can help find problems before they start. They also can help find problems early, when your chances for treatment and cure are better. Which exams and screenings you need depends on your age, health and family history, and lifestyle choices such as what you eat, how active you are, and whether you smoke."
        },
        {
            name: "Dental Care",
            id: 3,
            img: "https://i.ibb.co/WcSgcXT/Close-up-of-a-little-girl-having-a-dentist-appointment.jpg",
            shortDescription: "Dental or oral health is concerned with your teeth, gums and mouth. The goal is to prevent complications such as tooth decay (cavities) and gum disease and to maintain the overall health of your mouth.",
            longDescription: "Dental or oral health is concerned with your teeth, gums and mouth. The goal is to prevent complications such as tooth decay (cavities) and gum disease and to maintain the overall health of your mouth.",
            tips: "Proper care of your teeth, mouth and gums is a life-long commitment. Good habits formed in younger years will make brushing, flossing and regular visits to your dentist a natural part of your schedule"
        },
        {
            name: "Cardiology",
            id: 4,
            img: "https://i.ibb.co/X5vvG1h/Medicine-doctor-and-stethoscope-touching-icon-heart-and-diagnostics-analysis-medical-on-modern-virtu.jpg",
            "shortDescription": "Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist. Cardiology is a branch of internal medicine. ... A cardiologist specializes in diagnosing and treating diseases of the cardiovascular system",
            longDescription: "Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist. Cardiology is a branch of internal medicine. ... A cardiologist specializes in diagnosing and treating diseases of the cardiovascular system",
            tips: "Cardiology is a branch of medicine that deals with the disorders of the heart as well as some parts of the circulatory system. The field includes medical diagnosis and treatment of congenital heart defects, coronary artery disease, heart failure, valvular heart disease and electrophysiology."
        },
        {
            name: "Laboratory Services",
            id: 5,
            img: "https://i.ibb.co/kKJVNvd/laboratory-sevice.jpg",
            shortDescription: "Even though the role of pathogenic bacteria and viruses in human health was defined in the nineteenth century, the first public health laboratories in the United States were called chemical laboratories and only performed elementary analyses of milk, water, and other substances. ",
            longDescription: "Even though the role of pathogenic bacteria and viruses in human health was defined in the nineteenth century, the first public health laboratories in the United States were called chemical laboratories and only performed elementary analyses of milk, water, and other substances. ",
            tips: "N/A"
        },
        {
            name: "Vaccination",
            id: 6,
            img: "https://i.ibb.co/HGwb1VH/Cute-boy-wearing-face-mask-taking-vaccine-at-home-Kid-with-mother-receiving-covid-vaccine-from-a-hea.jpg",
            shortDescription: "A vaccine is a biological preparation that provides active acquired immunity to a particular infectious disease. A vaccine typically contains an agent that resembles a disease-causing microorganism and is often made from weakened or killed forms of the microbe, its toxins, or one of its surface proteins.",
            longDescription: "A vaccine is a biological preparation that provides active acquired immunity to a particular infectious disease. A vaccine typically contains an agent that resembles a disease-causing microorganism and is often made from weakened or killed forms of the microbe, its toxins, or one of its surface proteins.",
            tips: "The world is in the midst of a COVID-19 pandemic. As WHO and partners work together on the response -- tracking the pandemic, advising on critical interventions, distributing vital medical supplies to those in need--- they are racing to develop and deploy safe and effective vaccines."
        }
    ];
    const singleService = services.find(service => service.id == serviceId);
    console.log(singleService);

    return (
        <div className='mt-5 pt-3'>
            <h3>Details -Id : {serviceId}</h3>
            <Col>
                <Card>
                    <Card.Img variant="top" src={singleService.img} />
                    <Card.Body>
                        <Card.Title>{singleService.name}</Card.Title>
                        <Card.Text>
                            <h3>{singleService.longDescription}</h3>
                            <h1>Tips</h1>
                            <h4>{singleService.tips}</h4>

                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default ServiceDetail;