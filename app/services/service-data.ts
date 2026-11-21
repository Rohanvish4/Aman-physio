export type ServiceFaq = {
  question: string;
  answer: string;
};

export type PhysiotherapyService = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  metaDescription: string;
  intro: string;
  conditions: string[];
  benefits: string[];
  process: string[];
  faqs: ServiceFaq[];
};

export const physiotherapyServices: PhysiotherapyService[] = [
  {
    slug: "back-spine-pain",
    name: "Back & Spine Pain",
    shortName: "Back & Spine",
    title: "Back & Spine Pain Physiotherapy at Home in Gorakhpur",
    metaDescription: "Home physiotherapy for back pain, sciatica and spine problems in Gorakhpur. Dr. Aman Mishra provides assessment-led treatment and exercises at your doorstep.",
    intro: "Physiotherapy can help assess and manage back and spine pain through postural correction, mobility work, manual therapy and a safe, progressive exercise plan.",
    conditions: ["Lower back pain", "Sciatica", "Slipped disc symptoms", "Muscle strain", "Postural pain", "Upper and middle back pain"],
    benefits: ["Reduce pain and stiffness", "Improve posture and movement", "Build core strength", "Learn safer daily activities"],
    process: ["Discuss the cause, duration and severity of pain.", "Complete a home-based movement and posture assessment.", "Begin appropriate manual therapy and guided exercises.", "Review progress and adjust the plan during follow-up visits."],
    faqs: [
      { question: "Can physiotherapy help back pain at home?", answer: "In many cases, yes. A physiotherapist can assess movement, identify aggravating activities and provide exercises and hands-on treatment at home." },
      { question: "How many home sessions may be needed?", answer: "The number varies by the individual, diagnosis and response to treatment. Acute pain may improve over fewer visits, while chronic pain may need a longer plan." },
    ],
  },
  {
    slug: "neck-shoulder-pain",
    name: "Neck & Shoulder Pain",
    shortName: "Neck & Shoulder",
    title: "Neck & Shoulder Pain Physiotherapy at Home in Gorakhpur",
    metaDescription: "Book home physiotherapy in Gorakhpur for neck pain, cervical spondylosis, frozen shoulder and shoulder stiffness with Dr. Aman Mishra.",
    intro: "Home physiotherapy helps address neck and shoulder pain with careful assessment, mobility exercises, strengthening and hands-on treatment where appropriate.",
    conditions: ["Cervical spondylosis", "Frozen shoulder", "Neck stiffness", "Shoulder impingement", "Tension headaches", "Repetitive strain injury"],
    benefits: ["Improve neck and shoulder mobility", "Reduce stiffness", "Correct poor movement patterns", "Support safe return to daily activities"],
    process: ["Assess pain, posture and joint movement.", "Identify movements that provoke or relieve symptoms.", "Use suitable manual techniques and exercises.", "Provide a personalised home exercise plan."],
    faqs: [
      { question: "Can frozen shoulder be treated at home?", answer: "Many frozen shoulder exercises and mobility activities can be performed at home. Progress should be guided and monitored by a qualified physiotherapist." },
      { question: "When should neck pain be medically reviewed?", answer: "Seek prompt medical review if neck pain follows major injury or occurs with weakness, numbness, fever, severe headache or problems with balance or bladder control." },
    ],
  },
  {
    slug: "stroke-rehabilitation",
    name: "Stroke Rehabilitation",
    shortName: "Stroke Rehab",
    title: "Stroke Rehabilitation at Home in Gorakhpur",
    metaDescription: "Home neuro-rehabilitation for stroke patients in Gorakhpur. Dr. Aman Mishra supports balance, mobility, motor recovery and daily activities.",
    intro: "Stroke rehabilitation at home focuses on safe mobility, movement retraining, balance, coordination and gradual independence in everyday activities.",
    conditions: ["Stroke recovery", "Weakness on one side", "Balance difficulty", "Walking difficulty", "Coordination problems", "Limited upper-limb function"],
    benefits: ["Improve movement practice", "Support safer transfers", "Build balance confidence", "Encourage independence in daily tasks"],
    process: ["Complete a neuro-rehabilitation assessment.", "Plan activities around the patient's current abilities.", "Practise transfers, walking and functional movements.", "Review progress with the patient and family."],
    faqs: [
      { question: "Does physiotherapy help after a stroke?", answer: "Stroke rehabilitation can support movement, balance and independence. The plan depends on the location and severity of stroke, overall health and time since onset." },
      { question: "What should a stroke patient do first?", answer: "Medical safety and urgent care come first. Once medically appropriate, physiotherapy can begin under professional guidance with an individualised rehabilitation plan." },
    ],
  },
  {
    slug: "manual-therapy",
    name: "Manual Therapy",
    shortName: "Manual Therapy",
    title: "Manual Therapy at Home in Gorakhpur",
    metaDescription: "Home manual therapy in Gorakhpur for joint stiffness and muscular pain, including mobilization and soft-tissue treatment by Dr. Aman Mishra.",
    intro: "Manual therapy uses skilled hands-on techniques to assess and support joint movement and soft-tissue function alongside therapeutic exercise.",
    conditions: ["Joint stiffness", "Muscle tightness", "Restricted movement", "Myofascial pain", "Back and neck pain", "Postural discomfort"],
    benefits: ["Support joint mobility", "Reduce muscle tension", "Improve movement comfort", "Complement an exercise programme"],
    process: ["Identify painful or restricted movement.", "Use suitable joint or soft-tissue techniques.", "Add active movement and strengthening exercises.", "Monitor comfort and response at later visits."],
    faqs: [
      { question: "What is included in manual therapy?", answer: "Depending on the assessment, it may include joint mobilization, soft-tissue massage, stretching or myofascial techniques." },
      { question: "Is manual therapy painful?", answer: "It should remain within a tolerable level. Treatment intensity is adapted and the patient can stop or report discomfort at any time." },
    ],
  },
  {
    slug: "electrotherapy",
    name: "Electrotherapy",
    shortName: "Electrotherapy",
    title: "Electrotherapy at Home in Gorakhpur",
    metaDescription: "Home electrotherapy in Gorakhpur using appropriate TENS, ultrasound or IFT treatment as part of a physiotherapy plan.",
    intro: "Electrotherapy may be used as one component of physiotherapy when clinically appropriate, together with assessment, movement work and exercise.",
    conditions: ["Musculoskeletal pain", "Post-injury soreness", "Joint pain", "Muscle spasm", "Local swelling", "Activity-related pain"],
    benefits: ["Temporary symptom relief", "Support comfort during movement", "Assist an exercise-based plan", "Offer a tailored modality where appropriate"],
    process: ["Determine whether the modality is suitable.", "Check contraindications and skin sensitivity.", "Apply the selected treatment with an appropriate dose.", "Reassess symptoms and continue active rehabilitation."],
    faqs: [
      { question: "Which electrotherapy modality is used?", answer: "The physiotherapist chooses an appropriate modality such as TENS, ultrasound or IFT based on the assessment and individual needs." },
      { question: "Is electrotherapy a complete treatment?", answer: "No. Electrotherapy is generally used as a supporting part of a broader plan that includes education, movement and progressive exercise." },
    ],
  },
  {
    slug: "home-visit-physiotherapy",
    name: "Home Visit Physiotherapy",
    shortName: "Home Visit",
    title: "Physiotherapy at Home in Gorakhpur",
    metaDescription: "Book physiotherapy at home across Gorakhpur with a personalised assessment, exercise plan and follow-up by Dr. Aman Mishra.",
    intro: "Home visit physiotherapy brings a structured assessment and suitable treatment to your home, avoiding unnecessary travel during recovery.",
    conditions: ["Back and neck pain", "Post-surgical recovery", "Joint pain", "Stroke rehabilitation", "Balance difficulty", "Sports and muscle injury"],
    benefits: ["Treatment in a familiar environment", "No travel or waiting-room visits", "Individual attention", "Family participation in the plan"],
    process: ["Share the condition and preferred location.", "Attend an initial home assessment.", "Receive a personalised treatment plan.", "Schedule follow-ups based on progress and need."],
    faqs: [
      { question: "Which areas are covered?", answer: "Home visits are available across Gorakhpur and nearby areas. Availability should be confirmed while booking." },
      { question: "What happens during the first visit?", answer: "The physiotherapist discusses medical history, assesses relevant movement and function, and explains a suitable treatment and follow-up plan." },
    ],
  },
  {
    slug: "cupping-therapy",
    name: "Cupping Therapy",
    shortName: "Cupping",
    title: "Cupping Therapy at Home in Gorakhpur",
    metaDescription: "Cupping therapy at home in Gorakhpur for suitable muscular pain and tension concerns, delivered by Dr. Aman Mishra.",
    intro: "Cupping is a complementary physiotherapy technique that may be considered for suitable muscle tension or pain when used by a trained professional.",
    conditions: ["Muscle tightness", "Local muscular discomfort", "Sports recovery", "Restricted soft tissue", "Back or shoulder tension"],
    benefits: ["May help reduce temporary muscle tension", "Can support relaxation", "May complement exercise therapy", "Uses a clearly monitored technique"],
    process: ["Discuss symptoms and relevant medical history.", "Check for skin, medication and circulation concerns.", "Apply suitable cup placement and duration.", "Reassess comfort and combine with active treatment."],
    faqs: [
      { question: "What are common temporary effects?", answer: "Temporary circular skin marks or mild soreness can occur. Severe or persistent discomfort should be discussed with the physiotherapist." },
      { question: "Who should avoid cupping?", answer: "Suitability depends on medical history, skin condition and medications. The physiotherapist will screen for relevant precautions before treatment." },
    ],
  },
  {
    slug: "dry-needle-therapy",
    name: "Advanced Dry Needle Therapy",
    shortName: "Dry Needling",
    title: "Dry Needling Therapy at Home in Gorakhpur",
    metaDescription: "Advanced dry needle therapy at home in Gorakhpur for suitable musculoskeletal pain and muscle dysfunction.",
    intro: "Dry needling may be used for selected musculoskeletal conditions to target trigger points or muscle dysfunction as part of an overall rehabilitation plan.",
    conditions: ["Trigger point pain", "Myofascial pain", "Muscle spasm", "Restricted movement", "Sports-related muscle pain"],
    benefits: ["May reduce trigger-point sensitivity", "Can support muscle relaxation", "May improve exercise tolerance", "Targets suitable musculoskeletal dysfunction"],
    process: ["Review symptoms and determine whether it is appropriate.", "Explain possible sensations and precautions.", "Apply sterile, single-use needles where indicated.", "Follow with movement or exercise and reassess response."],
    faqs: [
      { question: "Is dry needling the same as acupuncture?", answer: "Dry needling and acupuncture differ in theory and application. Physiotherapy dry needling is targeted toward musculoskeletal assessment findings." },
      { question: "Are needles single-use?", answer: "Sterile, single-use needles should be used and disposed of according to professional safety procedures." },
    ],
  },
  {
    slug: "pediatric-physiotherapy",
    name: "Pediatric Physiotherapy",
    shortName: "Pediatric",
    title: "Pediatric Physiotherapy at Home in Gorakhpur",
    metaDescription: "Home pediatric physiotherapy in Gorakhpur for children needing help with movement, strength, developmental skills or mobility.",
    intro: "Pediatric physiotherapy supports children through age-appropriate assessment and play-based activities developed around the child's needs and caregiver guidance.",
    conditions: ["Delayed motor milestones", "Low muscle tone", "Balance difficulty", "Coordination problems", "Post-injury rehabilitation", "Movement and mobility limitations"],
    benefits: ["Support age-appropriate movement", "Build strength and coordination", "Encourage functional play", "Guide caregivers with a home plan"],
    process: ["Discuss developmental history and concerns.", "Observe the child during suitable activities.", "Create an engaging and age-appropriate plan.", "Coach caregivers and review progress."],
    faqs: [
      { question: "Can therapy be delivered at home?", answer: "Yes, many pediatric assessments and activities can be adapted to the home environment, with parent or caregiver participation." },
      { question: "What should caregivers prepare?", answer: "Prepare a safe, quiet area and relevant medical reports. Let the child know that the physiotherapist will play and practise movement with them." },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return physiotherapyServices.find((service) => service.slug === slug);
}
