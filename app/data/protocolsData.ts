export const protocolsData = {
  infected: {
    id: 'infected',
    title: 'What to do when infected?',
    items: [
      {
        title: 'Seek Medical Attention',
        description: 'Contact a healthcare provider to confirm the infection and receive guidance on managing symptoms.'
      },
      {
        title: 'Isolate Yourself',
        description: 'Stay at home and avoid physical contact with others, especially vulnerable individuals like children, pregnant women, and those with weakened immune systems.'
      },
      {
        title: 'Practice Good Hygiene',
        description: 'Wash your hands frequently with soap and water, use hand sanitizer, and disinfect commonly touched surfaces regularly.'
      },
      {
        title: 'Avoid Sharing Personal Items',
        description: 'Do not share towels, bedding, utensils, or other personal items with others.'
      },
      {
        title: 'Monitor Your Symptoms',
        description: 'Keep track of how you are feeling and watch for any worsening symptoms. Manage fever, aches, and rash discomfort with over-the-counter treatments.'
      },
      {
        title: 'Stay Hydrated and Rest',
        description: 'Drink plenty of fluids and get enough rest to help your body recover.'
      },
      {
        title: 'Follow Healthcare Advice',
        description: 'If prescribed, take antiviral medications or vaccines, and continue to follow the instructions given by your healthcare provider.'
      },
      {
        title: 'Notify Close Contacts',
        description: 'Inform anyone you may have come into contact with recently so they can take precautions and seek medical advice if necessary.'
      }
    ]
  },
  signs: {
    id: 'signs',
    title: 'Signs that you are infected',
    items: [
      {
        title: 'Fever',
        description: 'A sudden increase in body temperature can be an early sign of infection. It often accompanies other symptoms and indicates the body’s immune response.'
      },
      {
        title: 'Fatigue',
        description: 'Feeling unusually tired or weak without exertion may signal an infection. Fatigue can make it harder to perform daily activities and should be monitored.'
      },
      {
        title: 'Swollen Lymph Nodes',
        description: 'Lymph nodes may become enlarged as the body fights off infection. This is often seen in areas such as the neck, armpits, and groin.'
      },
      {
        title: 'Rashes or Skin Lesions',
        description: 'Unexplained skin lesions or rashes, especially those that resemble blisters, can be a sign of Monkeypox or other viral infections. These lesions may spread across the body.'
      },
      {
        title: 'Headaches',
        description: 'Frequent or persistent headaches, especially when combined with other symptoms like fever, can indicate an infection and should not be ignored.'
      },
      {
        title: 'Chills or Sweats',
        description: 'Episodes of chills or night sweats may accompany fever, signaling that your body is trying to fight off an infection.'
      },
      {
        title: 'General Discomfort',
        description: 'Unexplained discomfort, body aches, or pain can often precede the more visible signs of infection. If this feeling persists, it’s important to seek medical attention.'
      }
    ]
  },
  symptoms: {
    id: 'symptoms',
    title: 'Common Symptoms',
    items: [
      {
        title: 'Rash Development',
        description: 'A characteristic rash typically begins on the face before spreading to other parts of the body. The rash progresses from flat marks to raised bumps and blisters that eventually scab over.'
      },
      {
        title: 'Fever',
        description: 'Body temperature elevates above 38.5°C (101.3°F), usually appearing 1-3 days before the rash develops. The fever often comes with chills and night sweats.'
      },
      {
        title: 'Muscle Aches',
        description: 'Severe pain and soreness occurs in muscles and back (myalgia), often intense enough to limit daily activities. The pain is commonly felt in the lower back region.'
      },
      {
        title: 'Headache',
        description: 'Persistent and severe headaches typically last for several days. These headaches often come with fatigue and difficulty concentrating.'
      },
      {
        title: 'Swollen Lymph Nodes',
        description: 'Noticeable enlargement of lymph nodes occurs in the neck, armpits, or groin areas. These swollen nodes may be tender to touch and can remain enlarged for weeks.'
      },
      {
        title: 'Sore Throat',
        description: 'Significant pain or discomfort occurs when swallowing, with visible throat inflammation. This can make eating and drinking difficult.'
      },
      {
        title: 'Respiratory Symptoms',
        description: 'Upper respiratory symptoms include persistent cough, nasal congestion, and throat irritation. These may be accompanied by chest discomfort or breathing difficulties.'
      }
    ]
  },
  isolation: {
    id: 'isolation',
    title: 'Self Isolation 101',
    items: [
      {
        title: 'Choose a Room',
        description: 'Select a well-ventilated room that is separate from other household members, ideally with its own private bathroom. The room should have windows that can be opened regularly to allow fresh air circulation.'
      },
      {
        title: 'Limit Contact',
        description: 'Maintain strict physical distance from all household members and pets throughout the isolation period. Use phone calls, video chats, or texting for communication with others in the house.'
      },
      {
        title: 'Wear Mask',
        description: 'Always wear a high-quality medical mask (such as N95, KN95, or surgical mask) when around others or when entering shared spaces. Ensure the mask fits snugly and covers both nose and mouth completely.'
      },
      {
        title: 'Personal Items',
        description: 'Maintain a completely separate set of personal items including dishes, drinking glasses, cups, eating utensils, towels, and bedding. Wash these items thoroughly with soap and hot water after each use.'
      },
      {
        title: 'Clean Regularly',
        description: 'Thoroughly disinfect all frequently touched surfaces at least once daily, including doorknobs, light switches, countertops, phones, keyboards, toilets, and faucets. Use EPA-registered household disinfectants and wear disposable gloves while cleaning.'
      },
      {
        title: 'Monitor Health',
        description: 'Check and record your temperature at least twice daily, ideally at the same times each day. Keep a detailed log of all symptoms including any new developments or changes in existing symptoms.'
      },
      {
        title: 'Duration',
        description: 'Maintain strict isolation until all skin lesions have completely healed and all scabs have fallen off naturally, which typically takes 2-4 weeks. Do not end isolation without consulting your healthcare provider first.'
      }
    ]
  }
};

export type ProtocolKey = keyof typeof protocolsData; 